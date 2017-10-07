import { IngItem, IngParser, TransactionType } from "./ing-parser";
import { GroupedItems } from "./contents/real-expenses-list.component";
import { MonthDate, CategoryItem, Data } from "./data";

import * as _ from 'lodash';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

import { Subject } from "rxjs/Subject";
import { ExpensesDataService } from "./endpoints/expenses-data.service";

@Injectable()
export class RealExpensesCalculatorService {

    constructor(private _expensesDataSvc: ExpensesDataService) {

    }

    public onDataLoaded = new Subject();

    public get dataSabrina() {
        return this.getDataByPersonId(1);
    }

    public get dataVaclav() {
        return this.getDataByPersonId(2);
    }

    private getDataByPersonId(pid: number) {
        let items = _.filter(this.allExpenses, { personId: pid });
        return items;
    }

    public allExpenses: IngItem[];

    public async loadDataAsync() {
        this.allExpenses = await this._expensesDataSvc.getAllAsync();
        this.onDataLoaded.next();
    }

    public majorSplit(items: IngItem[]) {
        let expenses: IngItem[] = [];
        let incomes: IngItem[] = [];
        let inner: IngItem[] = [];
        let other: IngItem[] = [];

        items.forEach((i) => {
            let isExpense = [TransactionType.ExpenseAccount, TransactionType.ExpenseCard].includes(i.transactionType);
            let isIncome = i.transactionType === TransactionType.Income;


            let isInner = false;
            if (["Sabrina Goersch", "Vaclav Mikeska", "Sabrina Mikeska"].includes(i.account)) {
                let changeInner = true;

                if (i.usage === "Teilzahlung Darlehen") {
                    isExpense = true;
                    changeInner = false;
                }

                if (i.usage != null && (i.usage.indexOf("Darl.-Leistung 6700386060") != -1)) {
                    isExpense = true;
                    changeInner = false;
                }

                if (changeInner) {
                    isInner = true
                }
            }

            if (isInner) {
                inner.push(i);
            } else if (isExpense) {
                expenses.push(i);
            } else if (isIncome) {
                incomes.push(i);
            } else {
                other.push(i);
            }
        })

        return { expenses, incomes, inner, other };
    }

    private getPersonsData(includeSabrina: boolean, includeVaclav: boolean) {
        let f: IngItem[] = [];
        if (includeSabrina) {
            f = f.concat(this.dataSabrina);
        }
        if (includeVaclav) {
            f = f.concat(this.dataVaclav);
        }
        return f;
    }

    public aggregate(from: MonthDate, to: MonthDate, includeSabrina: boolean, includeVaclav: boolean) {
        let monthGroups = [];
        
        let allItems = this.getPersonsData(includeSabrina, includeVaclav);

        let majorCategories = this.majorSplit(allItems);
        
        console.log("other items");
        console.log(majorCategories.other);

        console.log("inner items");
        console.log(majorCategories.inner);
        majorCategories.inner.forEach((i) => {
            console.log(`${i.account} - ${i.amount} - ${i.usage}`);
        })


        let vgs = IngParser.getMonthsResults(majorCategories.expenses, from, to);
        vgs.forEach((vg) => {

            let totalAmount = Math.round(Math.abs(_.sumBy(vg.items, "amount")));

            let g: GroupedItems = {
                date: vg.date,                
                items: vg.items,
                totalAmount: totalAmount
            };

            monthGroups.push(g);
        });

        let spentTotal = _.sumBy(monthGroups, "totalAmount");

        let res = {
            spentTotal: spentTotal,
            spentAvg: Math.round(spentTotal / vgs.length),            
            monthGroups: monthGroups
        };

        return res;
    }

    // private filter(item: IngItem) {

    //     if (item.account === "hcc fuer fa offenbach am main") {
    //         return false;
    //     }

    //     if (item.account === "Techniker Krankenkasse") {
    //         return false;
    //     }

    //     if (item.account === "Oliver Melzer") {
    //         return false;
    //     }

    //     if (item.account === "Christopher Albrecht") {
    //         return false;
    //     }

    //     if (item.account === "PIERLUIGI NICOLELLA") {
    //         return false;
    //     }

    //     if (item.account === "Jessica Carraro") {
    //         return false;
    //     }

    //     if (item.account === "Finanzamt Offenbach am Main II") {
    //         return false;
    //     }

    //     return true;
    // }
}

export class ExpensesGrouper {
    public items: IngItem[];
    public cats: CategoryGroupedItems[] = [];

    public uncategoriezed: IngItem[] = [];

    constructor(items: IngItem[]) {
        this.items = items;
    }

    public group() {
        this.items.forEach((i) => {

            let catRes = FilterMatch.findCategory(i);

            if (catRes === 0) {
                //discared item
            } else {
                if (catRes === null) {
                    this.uncategoriezed.push(i);
                } else {
                    let cat = this.getOrCreateCat(catRes);
                    cat.items.push(i);
                }
            }

        })
    }

    private getOrCreateCat(categoryId: number) {
        let c = _.find(this.cats, (ca) => { return ca.categoryId === categoryId });
        if (!c) {

            let cat = _.find(Data.cats, { idInt: categoryId });

            let caa = new CategoryGroupedItems(); {
                caa.catName = cat.name,
                    caa.categoryId = categoryId;
                caa.items = [];
            };
            this.cats.push(caa);
            return caa;
        } else {
            return c;
        }
    }



}

export class FilterMatch {

    private static contains(txt: string, content: string) {
        if (!txt) {
            return false;
        }

        return txt.toLowerCase().indexOf(content.toLowerCase()) > -1;
    }

    public static findCategory(item: IngItem) {
        let found = this.oneTimeId(item);

        if (found === 0) {
            return 0;
        }

        if (found === null) {

            //todo: reactivate
            // this.categoryRules.forEach((catRule) => {

            //     _.forEach(catRule.rules, (rule) => {

            //         if (rule.contains) {
            //             let str = item[rule.propName];
            //             if (this.contains(str, rule.contains)) {
            //                 found = catRule.categoryId;
            //                 return false;
            //             }
            //         }

            //     })

            // });
        }

        return found;
    }

    private static oneTimeUsages = [
        ["NR7153322028 LONDON GB KURS 0,9193965 KAUFUMSATZ 26.08 18,00 224453", 20],
        ["NR7153322028 LONDON W1B GB KURS 0,9193965 KAUFUMSATZ 27.08 10,70 020346", 20],
        ["NR7153322028 LONDON GB KURS 0,9193965 KAUFUMSATZ 26.08 10,61 003101", 20],
        ["NR7153322028 WIMBLEDON GB KURS 0,9193965 KAUFUMSATZ 25.08 10,40 001242", 20],
        ["NR7153322028 PRAHA 6 CZ KURS 26,1455700 KAUFUMSATZ 12.08 230,00 214926", 18],
        ["PP.3981.PP . BIKE BOX, Ihr Einkauf bei BIKE BOX", 15],
        ["NR7153322028 EINDHOVEN NL KAUFUMSATZ 19.07 205205", 20],
        ["NR7153322028 DUESSELDORF KAUFUMSATZ 17.07 172738", 18],
        ["NR7153322028 ANTWERPEN BE KAUFUMSATZ 22.07 140511", 18],
        ["Wie besprochen", 0],
        ["NR7153322028 FRANKFURT KAUFUMSATZ 25.08 093447", 21],
      
    ];

    public static oneTimeId(item: IngItem) {
        let catId = null;

        _.forEach(this.oneTimeUsages, (usage) => {
            let usageTxt = usage[0];
            if (usageTxt === item.usage) {

                catId = usage[1];
                return false;
            }
        });

        return catId;
    }


   

}


export class CategoryGroupedItems {
    public catName: string;
    public categoryId: number;
    public items: IngItem[];

    public get total() {
        return _.sumBy(this.items, "amount");
    }
}