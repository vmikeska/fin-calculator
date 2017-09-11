
import * as _ from 'lodash';

import { ExpenseItem, CategoryGroup, MonthDate, MonthlyGroupedExpenses, Data } from "./data";

export class Operations {
    public static groupByCategories(items: ExpenseItem[]) {
        let groups = _.groupBy(items, "categoryId");
    
        let outGroups: CategoryGroup[] = [];
    
        _.forOwn(groups, (items, catId) => {
          let catIdInt = parseInt(catId);
          let cat = _.find(Data.cats, {id: catIdInt});
          let outGroup: CategoryGroup = {
            category: cat,
            items: items,
            total: _.sumBy(items, "amount")
          };
    
          outGroups.push(outGroup);
        })
    
        return outGroups
      }
    
    
      public static getPriceFromItems(items: ExpenseItem[]) {
        let price = 0;
    
        items.forEach((item) => {
          price += item.amount;
        })
    
        return price;
      }
    
      public static getMonthsResults(firstDate: MonthDate, lastDate: MonthDate) {
    
        let currentDate: MonthDate = { month: firstDate.month, year: firstDate.year };
    
        let results = [];
    
        while (this.isDateEarlierOrEqual(currentDate, lastDate)) {
    
          let items = this.getMonthItems(currentDate);
    
          let monthlyResult: MonthlyGroupedExpenses = {
            date: currentDate,
            items: items
          };
    
          results.push(monthlyResult);
    
          let newMonth = (currentDate.month === 12) ? 1 : currentDate.month + 1;
          let newYear = (currentDate.month === 12) ? currentDate.year + 1 : currentDate.year;
          currentDate = { month: newMonth, year: newYear };
        }
    
        return results;
      }
    
    
      public static getMonthItems(date: MonthDate) {
    
        let outItems = [];
    
        Data.expenses.forEach((expense) => {
    
          let permanentPayment = !expense.start && !expense.end;
          if (permanentPayment) {
            outItems.push(expense);
          } else {
    
            let hasStarted = !expense.start || this.isDateLaterOrEqual(date, expense.start);
            let hasNotFinished = !expense.end || this.isDateEarlierOrEqual(date, expense.end);
    
            if (hasStarted && hasNotFinished) {
              outItems.push(expense);
            }
    
          }
    
        })
    
        return outItems;
      }
    
      public static isDateLaterOrEqual(baseDate: MonthDate, secondDate) {
        if (baseDate.year > secondDate.year) {
          return true;
        }
    
        if (baseDate.year === secondDate.year) {
    
          if (baseDate.month >= secondDate.month) {
            return true;
          }
    
        }
    
        return false;
      }
    
      public static isDateEarlierOrEqual(baseDate: MonthDate, secondDate) {
        if (baseDate.year < secondDate.year) {
          return true;
        }
    
        if (baseDate.year === secondDate.year) {
    
          if (baseDate.month <= secondDate.month) {
            return true;
          }
    
        }
    
        return false;
      }
    
}