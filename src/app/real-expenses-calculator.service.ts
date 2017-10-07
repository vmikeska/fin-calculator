import { IngItem, IngParser, TransactionType } from "./ing-parser";
import { GroupedItems } from "./contents/real-expenses-list.component";
import { MonthDate, CategoryItem, Data } from "./data";

import * as _ from 'lodash';
import * as moment from 'moment';
import { Injectable } from "@angular/core";
import { ExpensesDataService } from "./expenses-data.service";
import { Subject } from "rxjs/Subject";

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

    private filter(item: IngItem) {

        if (item.account === "hcc fuer fa offenbach am main") {
            return false;
        }

        if (item.account === "Techniker Krankenkasse") {
            return false;
        }

        if (item.account === "Oliver Melzer") {
            return false;
        }

        if (item.account === "Christopher Albrecht") {
            return false;
        }

        if (item.account === "PIERLUIGI NICOLELLA") {
            return false;
        }

        if (item.account === "Jessica Carraro") {
            return false;
        }

        if (item.account === "Finanzamt Offenbach am Main II") {
            return false;
        }

        return true;
    }
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

            let cat = _.find(Data.cats, { id: categoryId });

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

            this.categoryRules.forEach((catRule) => {

                _.forEach(catRule.rules, (rule) => {

                    if (rule.contains) {
                        let str = item[rule.propName];
                        if (this.contains(str, rule.contains)) {
                            found = catRule.categoryId;
                            return false;
                        }
                    }

                })

            });
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
        // ["", 20],
        // ["", 20],
        // ["", 20],
        // ["", 20],
    ];

    // { id: 20, name: "Party" },
    // { id: 18, name: "Holidays" },
    // { id: 17, name: "Restaurants" },
    // { id: 15, name: "Zoey" },

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


    public static categoryRules: FilterRule[] = [
        //Flat OF
        {
            categoryId: 1,
            rules: [
                {
                    propName: "account",
                    contains: "ABG FRANKFURT HOLDING"
                },
                {
                    propName: "account",
                    contains: "PROENGENO GmbH + Co. KG"
                }
            ]

        },
        //Car
        {
            categoryId: 2,
            rules: [
                {
                    propName: "account",
                    contains: "tanken"
                },
                {
                    propName: "account",
                    contains: "shell"
                },
                {
                    propName: "account",
                    contains: "CS PHM"
                },
                {
                    propName: "account",
                    contains: "SB-TANK"
                },
                {
                    propName: "account",
                    contains: "MR. WASH AUTOSERVICE AG"
                },
                {
                    propName: "account",
                    contains: "aral"
                },
                {
                    propName: "account",
                    contains: "esso"
                },
                {
                    propName: "account",
                    contains: "TANKSTELLEN"
                },
                {
                    propName: "account",
                    contains: "TOTAL DEUTSCHLAND"
                },
                {
                    propName: "account",
                    contains: "agip"
                },
                {
                    propName: "account",
                    contains: "RP AUTO"
                },
                {
                    propName: "account",
                    contains: "PAP OIL"
                },
                {
                    propName: "account",
                    contains: "ADAC"
                },


            ]


        },
        //Work
        {
            categoryId: 3,
            rules: [
                {
                    propName: "account",
                    contains: "MICROSOFT"
                },
                {
                    propName: "account",
                    contains: "JETBRAIN"
                },
                {
                    propName: "account",
                    contains: "mlab"
                },
                {
                    propName: "account",
                    contains: "Kabelfernsehen Muenchen"
                },
            ]

        },
        //Flat Bieber
        {
            categoryId: 4,
            rules: [
                {
                    propName: "account",
                    contains: "VR Bank Main-Kinzig-Buedingen eG"
                },
                {
                    propName: "account",
                    contains: "Gemeinde Biebergemund Gemeindekasse"
                },
                {
                    propName: "account",
                    contains: "WEG Fried.Krupp.Str"
                },
                {
                    propName: "account",
                    contains: "Detlef Niesser"
                },


            ]

        },
        //Insurance
        {
            categoryId: 5,
            rules: [
                {
                    propName: "account",
                    contains: "VOLKSWOHL BUND Lebensversicherung a.G"
                },
                {
                    propName: "account",
                    contains: "ALTE LEIPZIGER LEBEN"
                },
            ]

        },
        //Dog
        {
            categoryId: 6,
            rules: [
                {
                    propName: "usage",
                    contains: "HUNDESTEUER"
                }
            ]

        },
        //Other
        {
            categoryId: 7,
            rules: [
                {
                    propName: "xxxx",
                    contains: "xxxx"
                }
            ]
        },
        //Multimedia
        {
            categoryId: 8,
            rules: [
                {
                    propName: "usage",
                    contains: "netflix"
                },
                {
                    propName: "account",
                    contains: "audible"
                },
                {
                    propName: "account",
                    contains: "SKY DEUTSCHLAND"
                },
                {
                    propName: "usage",
                    contains: "PP.3981.PP . MICROSOFT, Ihr Einkauf bei MICROSOFT"
                },
                {
                    propName: "account",
                    contains: "Rundfunk ARD, ZDF, DRadio"
                },




            ]

        },
        //Debts
        {
            categoryId: 9,
            rules: [
                {
                    propName: "account",
                    contains: "Santander Consumer Bank"
                }


            ]
        },
        //Elementary needs
        {
            categoryId: 10,
            rules: [
                {
                    propName: "account",
                    contains: "321LINSEN"
                },
                {
                    propName: "account",
                    contains: "KADERNICTVI"
                },
                {
                    propName: "account",
                    contains: "haar"
                },
                {
                    propName: "usage",
                    contains: "DP AG"
                },
                {
                    propName: "account",
                    contains: "ikea"
                },
                {
                    propName: "account",
                    contains: "AMAZON"
                },


            ]

        },
        //Fun
        {
            categoryId: 11,
            rules: [
                {
                    propName: "account",
                    contains: "ERLEBNISPARK"
                }

            ]

        },
        //Sports
        {
            categoryId: 12,
            rules: [
                {
                    propName: "account",
                    contains: "purfitness Obertshausen GmbH"
                },
                {
                    propName: "account",
                    contains: "FITNESS FIRST GERMANY GMBH"
                },
                {
                    propName: "account",
                    contains: "Sportgemeinschaft Wiking 1903 e.V."
                },
            ]

        },
        //Health
        {
            categoryId: 13,
            rules: [
                {
                    propName: "account",
                    contains: "LEKARNA"
                },
                {
                    propName: "account",
                    contains: "APOTHEKE"
                },
                {
                    propName: "account",
                    contains: "Dr. med. dent. B. Graml"
                },



            ]

        },
        //Commnunication
        {
            categoryId: 14,
            rules: [
                {
                    propName: "account",
                    contains: "Klarmobil GmbH"
                }
            ]

        },
        //Zoey
        {
            categoryId: 15,
            rules: [
                {
                    propName: "usage",
                    contains: "baby"
                },
                {
                    propName: "usage",
                    contains: "Mamikreisel"
                },
                {
                    propName: "account",
                    contains: "baby"
                },
                {
                    propName: "account",
                    contains: "MONTE MARE SAGT DANKE"
                },



            ]
        },
        //Groceries
        {
            categoryId: 16,
            rules: [
                {
                    propName: "account",
                    contains: "ALBERT"
                },
                {
                    propName: "account",
                    contains: "TEGUT"
                },
                {
                    propName: "account",
                    contains: "REWE"
                },
                {
                    propName: "account",
                    contains: "ALDI"
                },
                {
                    propName: "account",
                    contains: "LIDL"
                },
                {
                    propName: "account",
                    contains: "DROGERIE"
                },
                {
                    propName: "account",
                    contains: "DROGERIE"
                },
                {
                    propName: "usage",
                    contains: "CROWDBUTCHI"
                },




            ]
        },
        //restaurants
        {
            categoryId: 17,
            rules: [
                {
                    propName: "account",
                    contains: "vapiano"
                },
                {
                    propName: "account",
                    contains: "LOSTERIA"
                },
                {
                    propName: "account",
                    contains: "BAGETERIE"
                },
                {
                    propName: "account",
                    contains: "restaurant"
                },
                {
                    propName: "account",
                    contains: "RASTHAUS"
                },
                {
                    propName: "account",
                    contains: "KFC"
                },
                {
                    propName: "account",
                    contains: "STAROBRNO"
                },
                {
                    propName: "account",
                    contains: "RESTAURACE"
                },
                {
                    propName: "account",
                    contains: "BURGER"
                },
                {
                    propName: "account",
                    contains: "RISTORANTE"
                },
                {
                    propName: "account",
                    contains: "BRAUHAUS"
                },
                {
                    propName: "account",
                    contains: "MCDONALD"
                },


            ]
        },
        //Holidays
        {
            categoryId: 18,
            rules: [
                {
                    propName: "account",
                    contains: "HOTEL"
                },
                {
                    propName: "account",
                    contains: "ZOO"
                },
                {
                    propName: "usage",
                    contains: "EXPEDIA"
                },
                {
                    propName: "account",
                    contains: "HOLIDAY INN"
                },
                {
                    propName: "account",
                    contains: "LUFTHANSA"
                },
                {
                    propName: "usage",
                    contains: "RYANAIR"
                },
                {
                    propName: "usage",
                    contains: "BOOKING.COM"
                },
                {
                    propName: "usage",
                    contains: "amoma"
                },
                {
                    propName: "usage",
                    contains: "WECHSELKURSGEBUEHR"
                },
                {
                    propName: "account",
                    contains: "DB Vertrieb GmbH"
                },






            ]


        },
        //Clothes
        {
            categoryId: 16,
            rules: [
                {
                    propName: "usage",
                    contains: "ABOUTYOUGMB"
                },
                {
                    propName: "account",
                    contains: "BIJOU BRIGITTE"
                },
                {
                    propName: "account",
                    contains: "DEICHMANN"
                },
                {
                    propName: "account",
                    contains: "PEEK CLOPPENBURG"
                },
                {
                    propName: "account",
                    contains: "Zalando"
                },
                {
                    propName: "account",
                    contains: "otto"
                },
                {
                    propName: "account",
                    contains: "VISA RESERVED"
                },
                {
                    propName: "account",
                    contains: "PANE E VINO"
                },


            ]

        },
        //Party
        {
            categoryId: 20,
            rules: [
                {
                    propName: "account",
                    contains: "MYTAXI"
                },
                {
                    propName: "account",
                    contains: "UBER"
                },
                {
                    propName: "account",
                    contains: "DB RENT GMBH"
                },
                {
                    propName: "account",
                    contains: "IQOS"
                }
            ]

        },
        //Cash
        {
            categoryId: 21,
            rules: [
                {
                    propName: "usage",
                    contains: "BARGELDAUSZAHLUNG"
                },


            ]

        },



    ]

}

export class FilterRule {
    public categoryId: number;
    public rules: PropertyRule[];
}



export class PropertyRule {
    public propName: string;
    public contains: string;
}

export class CategoryGroupedItems {
    public catName: string;
    public categoryId: number;
    public items: IngItem[];

    public get total() {
        return _.sumBy(this.items, "amount");
    }
}