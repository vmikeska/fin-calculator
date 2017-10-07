import * as _ from 'lodash';
import * as moment from 'moment';
import { MonthDate } from "./data";
import { Operations } from "./operations";

export class IngParser {

    public static parseText(text: string) {
        text = this.replaceText(text, '"', '');


        let lines = text.split(/\r?\n/);

        let objs = _.map(lines, (line) => {
            let prms = line.split(";");

            let obj: IngItemOrig = {
                paidDate:  prms[0],
                accountedDate: prms[1],
                account: prms[2],
                transactionText: prms[3],
                usage: prms[4],
                amount: prms[5],
                currency: prms[6],
                balance: prms[7],
                balanceCurrency: prms[8],
            };

            return obj;
        });

        // console.log(objs);
        return objs;
    }

    private static replaceText(text, search, replacement) {        
        let prms = text.split(search);
        let joined = prms.join(replacement);
        return joined;
    };

    public static parseItems(items: IngItemOrig[], personId: number) {

        let validItems = _.reject(items, (i) => {
            if (!i.amount) {
                return true;
            }

            return false;
        })

        let ois = _.map(validItems, (i) => {

            let paidDate = moment(i.paidDate, "DD.MM.YYYY");
            let monthDate: MonthDate = { month: paidDate.month() + 1, year: paidDate.year() }
            let transType = this.parseTransactionType(i.transactionText);

            let oi: IngItem = {
                paidDate: paidDate,
                accountedDate: moment(i.accountedDate, "DD.MM.YYYY"),
                personId: personId,
                date: monthDate,

                account: this.trim(i.account),
                usage: this.trim(i.usage),
                balanceCurrency: this.trim(i.balanceCurrency),
                currency: this.trim(i.currency),

                transactionType: transType,
                
                amount: this.parseFloat(i.amount),
                balance: this.parseFloat(i.balance)
            };
            return oi;
        });

        return ois;
    }

    private static parseFloat(txt) {
        if (!txt) {
            return 0;
        }

        let t = this.replaceText(txt, "-", "");
        t = this.replaceText(t, ".", "");
        t = this.replaceText(t, ",", ".");

        let float = parseFloat(t);
        return float;
    }

    private static trim(txt) {
        if (!txt) {
            return null;
        }

        return txt.trim();
    }

    private static parseTransactionType(text) {
        if (["Gutschrift", "Gutschrift aus Dauerauftrag", "Bezüge"].includes(text)) {
            return TransactionType.Income;
        }
        if (["Lastschrifteinzug"].includes(text)) {
            return TransactionType.ExpenseCard;
        }
        if (["Abschluss", "Überweisung", "Dauerauftrag/Terminueberweisung", "Abbuchung"].includes(text)) {
            return TransactionType.ExpenseAccount;
        }

        return null;
    }

    public static monthGrouper(items: IngItem[]) {

        let years = _.groupBy(items, (item) => {
            return item.date.year;
        });

        let groups: GroupedIngItems[] = [];

        _.forOwn(years, (items, year) => {

            for (let actMonth = 1; actMonth <= 12; actMonth++) {
                let monthItems = _.filter(items, (i) => { return i.date.month === actMonth });

                if (monthItems) {
                    let group: GroupedIngItems = { date: { month: actMonth, year: parseInt(year) }, items: monthItems };
                    groups.push(group);
                }
            }

        })

        return groups;

    }

    public static getMonthsResults(items: IngItem[], firstDate: MonthDate, lastDate: MonthDate) {

        let currentDate: MonthDate = { month: firstDate.month, year: firstDate.year };

        let results: GroupedIngItems[] = [];

        while (Operations.isDateEarlierOrEqual(currentDate, lastDate)) {

            let mItems = _.filter(items, (i) => {return Operations.isDateEqual(i.date, currentDate)});

            let monthlyResult: GroupedIngItems = {
                date: currentDate,
                items: mItems
            };

            results.push(monthlyResult);

            let newMonth = (currentDate.month === 12) ? 1 : currentDate.month + 1;
            let newYear = (currentDate.month === 12) ? currentDate.year + 1 : currentDate.year;
            currentDate = { month: newMonth, year: newYear };
        }

        return results;
    }

}

export enum TransactionType {
    Income, //"Gutschrift", "Gutschrift aus Dauerauftrag", "Bezüge"
    ExpenseCard, //"Lastschrifteinzug"
    ExpenseAccount, //"Überweisung", "Dauerauftrag/Terminueberweisung", "Abbuchung"
}

// 
// undefined

export class GroupedIngItems {
    date: MonthDate;
    items: IngItem[]; 
}

export class IngItem {
    personId: number;
    paidDate: moment.Moment;
    accountedDate: moment.Moment;
    date: MonthDate;

    account: string;

    transactionType?: TransactionType;

    usage: string;
    amount: number;
    currency: string;
    balance: number;
    balanceCurrency: string;

}

export class IngItemOrig {
    paidDate: string;
    accountedDate: string;
    account: string;
    transactionText: string;
    usage: string;
    amount: string;
    currency: string;
    balance: string;
    balanceCurrency: string;
}


