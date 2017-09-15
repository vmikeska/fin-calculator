import { IngItem, IngParser, TransactionType } from "./ing-parser";
import { GroupedItems } from "./contents/real-expenses-list.component";
import { MonthDate } from "./data";
import { DataS } from "./dataSabrina";
import { DataV } from "./dataVaclav";

import * as _ from 'lodash';
import * as moment from 'moment';

export class RealExpensesCalculator {

    public static itemsToCategories(items: IngItem[]) {
        
        items.forEach((i) => {

        })
    }

    public static aggregate(from: MonthDate, to: MonthDate, includeSabrina: boolean, includeVaclav: boolean) {
        let monthGroups = [];
        let included = [];
        let excluded = [];

        let f = [];
        if (includeSabrina) {
            f = f.concat(DataS.data);
        }
        if (includeVaclav) {
            f = f.concat(DataV.data);
        }

        let vts = <IngItem[]>f;

        let vgs = IngParser.getMonthsResults(vts, from, to);
        vgs.forEach((vg) => {

            let expenses = _.filter(vg.items, (i) => {
                let transTypeOk = [TransactionType.ExpenseAccount, TransactionType.ExpenseCard].includes(i.transactionType);
                return transTypeOk;
            });

            let included: IngItem[] = [];
            let excluded: IngItem[] = [];

            expenses.forEach((expense) => {
                let isGood = true;

                let innerTransaction = ["Sabrina Goersch", "Vaclav Mikeska", "Sabrina Mikeska"].includes(expense.account);
                if (innerTransaction) {
                    isGood = false;
                }

                let filterRes = this.filter(expense);
                if (!filterRes) {
                    isGood = false;
                }

                if (isGood) {
                    included.push(expense);
                } else {
                    excluded.push(expense);
                }
            });

            let totalAmount = Math.round(Math.abs(_.sumBy(included, "amount")));

            let g: GroupedItems = {
                date: vg.date,
                excluded: excluded,
                included: included,
                totalAmount: totalAmount
            };

            monthGroups.push(g);

        });

        let spentTotal = _.sumBy(monthGroups, "totalAmount");

        let res = {
            spentTotal: spentTotal,
            spentAvg: Math.round(spentTotal / vgs.length),
            included: included,
            excluded: excluded,
            monthGroups: monthGroups
        };

        return res;
    }

    private static filter(item: IngItem) {

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

    constructor(items: IngItem[]){
        this.items = items;
    }

    public group() {
        this.items.forEach((i) => {

            let catRes = this.filter(i);
            if (catRes === null) {
                this.uncategoriezed.push(i);
            } else {
                let cat = this.getOrCreateCat(catRes);
                cat.items.push(i);
            }

        })
    }

    private getOrCreateCat(cat: ExpenseCategory) {
        let c = _.find(this.cats, (ca) => {return ca.cat === cat});
        if (!c) {            
            let caa = new CategoryGroupedItems(); {
                caa.catName = ExpenseCategory[cat];
                caa.cat = cat;
                caa.items = [];
            };
            this.cats.push(caa);
            return caa;
        } else {
            return c;
        }
    }

    private contains(txt: string, content: string) {
        return txt.toLowerCase().indexOf(content.toLowerCase()) > -1;
    }

    private filter(item: IngItem) {

        if (this.contains(item.account, "ABG FRANKFURT HOLDING")) {
            return ExpenseCategory.Rent;
        }

        if (this.contains(item.account, "REWE")) {
            return ExpenseCategory.Groceries;
        }

        if (this.contains(item.account, "ALDI")) {
            return ExpenseCategory.Groceries;
        }

        if (this.contains(item.account, "DROGERIE")) {
            return ExpenseCategory.DM;
        }

        if (this.contains(item.account, "Klarmobil GmbH")) {
            return ExpenseCategory.Mobil;
        }

        if (this.contains(item.account, "Kabelfernsehen Muenchen")) {
            return ExpenseCategory.WorkVaclav;
        }

        if (this.contains(item.account, "SKY DEUTSCHLAND")) {
            return ExpenseCategory.Media;
        }

        if (this.contains(item.account, "purfitness Obertshausen GmbH")) {
            return ExpenseCategory.Fitness;
        }

        if (this.contains(item.account, "FITNESS FIRST GERMANY GMBH")) {
            return ExpenseCategory.Fitness;
        }

        if (this.contains(item.account, "Sportgemeinschaft Wiking 1903 e.V.")) {
            return ExpenseCategory.Fitness;
        }

        

        if (this.contains(item.account, "AMAZON")) {
            return ExpenseCategory.OnlineShopping;
        }

        if (this.contains(item.account, "Zalando")) {
            return ExpenseCategory.OnlineShopping;
        }

        if (this.contains(item.account, "otto")) {
            return ExpenseCategory.OnlineShopping;
        }

        if (this.contains(item.account, "ikea")) {
            return ExpenseCategory.Ikea;
        }

        if (this.contains(item.account, "APOTHEKE")) {
            return ExpenseCategory.Apotheke;
        }

        if (this.contains(item.account, "vapiano")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "LOSTERIA")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "BAGETERIE")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "mlab")) {
            return ExpenseCategory.WorkVaclav;
        }

        if (this.contains(item.account, "MICROSOFT")) {
            return ExpenseCategory.WorkVaclav;
        }

        if (this.contains(item.account, "MICROSOFT")) {
            return ExpenseCategory.WorkVaclav;
        }

        if (this.contains(item.account, "Santander Consumer Bank")) {
            return ExpenseCategory.Debts;
        }

        if (this.contains(item.account, "WEG Fried.Krupp.Str")) {
            return ExpenseCategory.Bieber;
        }

        if (this.contains(item.account, "ALTE LEIPZIGER LEBEN")) {
            return ExpenseCategory.Insurance;
        }

        if (this.contains(item.account, "tanken")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "shell")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "CS PHM")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "SB-TANK")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "MR. WASH AUTOSERVICE AG")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "aral")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "esso")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "TANKSTELLEN")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "TOTAL DEUTSCHLAND")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "agip")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "restaurant")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "RASTHAUS")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "MYTAXI")) {
            return ExpenseCategory.Taxi;
        }


        if (this.contains(item.account, "UBER")) {
            return ExpenseCategory.Taxi;
        }

        

        if (this.contains(item.account, "RP AUTO")) {
            return ExpenseCategory.CarService;
        }

        if (this.contains(item.account, "IQOS")) {
            return ExpenseCategory.Ciggaretes;
        }

        if (this.contains(item.account, "HOTEL")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.account, "flug")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.usage, "RYANAIR")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.usage, "BOOKING.COM")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.usage, "amoma")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.account, "KFC")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "audible")) {
            return ExpenseCategory.Media;
        }

        if (this.contains(item.usage, "BARGELDAUSZAHLUNG")) {
            return ExpenseCategory.Cash;
        }

        if (this.contains(item.account, "STAROBRNO")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "Gemeinde Biebergemund Gemeindekasse")) {
            return ExpenseCategory.Bieber;
        }

        if (this.contains(item.account, "PROENGENO GmbH + Co. KG")) {
            return ExpenseCategory.Rent;
        }

        if (this.contains(item.account, "PEEK CLOPPENBURG")) {
            return ExpenseCategory.Clothes;
        }

        if (this.contains(item.account, "DEICHMANN")) {
            return ExpenseCategory.Clothes;
        }

        if (this.contains(item.account, "VOLKSWOHL BUND Lebensversicherung a.G")) {
            return ExpenseCategory.Insurance;
        }


        if (this.contains(item.usage, "netflix")) {
            return ExpenseCategory.Media;
        }

        if (this.contains(item.usage, "DP AG")) {
            return ExpenseCategory.Post;
        }

        if (this.contains(item.account, "TEGUT")) {
            return ExpenseCategory.Groceries;
        }

        
        if (this.contains(item.account, "haar")) {
            return ExpenseCategory.Hairs;
        }

        if (this.contains(item.account, "KADERNICTVI")) {
            return ExpenseCategory.Hairs;
        }

        if (this.contains(item.account, "RESTAURACE")) {
            return ExpenseCategory.Restaurant;
        }
        
        if (this.contains(item.account, "LEKARNA")) {
            return ExpenseCategory.Apotheke;
        }

        if (this.contains(item.account, "BIJOU BRIGITTE")) {
            return ExpenseCategory.Clothes;
        }

        if (this.contains(item.account, "ALBERT")) {
            return ExpenseCategory.Groceries;
        }

        if (this.contains(item.account, "PAP OIL")) {
            return ExpenseCategory.Petrol;
        }

        if (this.contains(item.account, "BURGER KING")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "EXPEDIA")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.account, "ZOO")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.usage, "HUNDESTEUER")) {
            return ExpenseCategory.Stinky;
        }

        if (this.contains(item.account, "ADAC")) {
            return ExpenseCategory.Insurance;
        }

        if (this.contains(item.usage, "Mamikreisel")) {
            return ExpenseCategory.Zoey;
        }

        if (this.contains(item.account, "BABY")) {
            return ExpenseCategory.Zoey;
        }

        if (this.contains(item.usage, "BABY")) {
            return ExpenseCategory.Zoey;
        }

        if (this.contains(item.account, "BURGER")) {
            return ExpenseCategory.Restaurant;
        }

        if (this.contains(item.account, "LIDL")) {
            return ExpenseCategory.Groceries;
        }

        if (this.contains(item.account, "DB RENT GMBH")) {
            return ExpenseCategory.Taxi;
        }

        if (this.contains(item.account, "HOLIDAY INN")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.account, "LUFTHANSA")) {
            return ExpenseCategory.Vacations;
        }

        if (this.contains(item.account, "321LINSEN")) {
            return ExpenseCategory.ContactLenses;
        }

        if (this.contains(item.account, "VR Bank Main-Kinzig-Buedingen eG")) {
            return ExpenseCategory.Bieber;
        }


        if (this.contains(item.usage, "ABOUTYOUGMB")) {
            return ExpenseCategory.Clothes;
        }

        if (this.contains(item.account, "JETBRAIN")) {
            return ExpenseCategory.WorkVaclav;
        }

        if (this.contains(item.account, "RISTORANTE")) {
            return ExpenseCategory.Restaurant;
        }


        if (this.contains(item.usage, "DOMAINFACTO")) {
            return ExpenseCategory.Media;
        }
        
        if (this.contains(item.usage, "MICROSOFT")) {
            return ExpenseCategory.Media;
        }
         
        
        
        
         
                

        


        return null;
    }


}

export enum ExpenseCategory {
    Little, Zoey, Petrol, Rent, Groceries, DM, Mobil, Media, Fitness, OnlineShopping, Ikea,
     Apotheke, Restaurant, WorkVaclav, Debts, Bieber, Insurance, Taxi, CarService, Ciggaretes, Vacations, Cash, Clothes, Post, Hairs, Stinky,
     ContactLenses, 
}

export class CategoryGroupedItems {
    public catName: string;
    public cat: ExpenseCategory;
    public items: IngItem[];

    public get total() {
        return _.sumBy(this.items, "amount");
    }
}