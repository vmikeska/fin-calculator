
export class Data {

    public static persons: Person[] = [
        { id: 1, name: "Sabrina" },
        { id: 2, name: "Vaclav" },
        { id: 3, name: "Zoey" },
    ];

    public static cats: CategoryItem[] = [
        { id: 1, name: "Flat OF" },
        { id: 2, name: "Car" },
        { id: 3, name: "Work" },
        { id: 4, name: "Flat Bieber" },
        { id: 5, name: "Insurance" },
        { id: 6, name: "Dog" },
        { id: 7, name: "Other" },
        { id: 8, name: "Multimedia" },
        { id: 9, name: "Debts" },
        { id: 10, name: "Elementary needs" },
        { id: 11, name: "Fun" },
        { id: 12, name: "Sports" },
        { id: 13, name: "Health" },
    ]

    public static expenses: ExpenseItem[] = [
        { id: 1, name: "Rent", amount: 1148, categoryId: 1, important: true },
        { id: 2, name: "Parking", amount: 60, categoryId: 2, important: true },
        { id: 3, name: "Electricity", amount: 76, categoryId: 1, important: true },
        { id: 4, name: "Internet", amount: 30, categoryId: 3, important: true },
        { id: 5, name: "WEG", amount: 368, categoryId: 4, important: true },
        { id: 6, name: "Bieber flat tax", amount: 8, categoryId: 4, important: true },
        { id: 7, name: "BUZ", amount: 64, categoryId: 5, important: true, personId: 1 },
        { id: 8, name: "Pension rent", amount: 40, categoryId: 5, important: true, personId: 1 },
        { id: 9, name: "Private Haftpflicht", amount: 9, categoryId: 5, important: true },
        { id: 10, name: "ADAC Auslandskrankenschutz + Mitgliedschaft", amount: 6, categoryId: 5, important: true },
        { id: 11, name: "Hundehaftpflicht", amount: 6, categoryId: 6, important: true },
        { id: 12, name: "Dog food", amount: 20, categoryId: 6, important: true },
        { id: 13, name: "Dog doctor", amount: 13, categoryId: 6, important: true },
        { id: 14, name: "Dog tax", amount: 8, categoryId: 6, important: true },
        { id: 15, name: "TV Tax", amount: 18, categoryId: 7, important: true },
        { id: 16, name: "Netflix", amount: 8, categoryId: 8, important: false },
        { id: 17, name: "Sky", amount: 44, categoryId: 8, important: false, end: { month: 3, year: 2018 } },
        { id: 18, name: "Amazon prime1", amount: 5, categoryId: 8, important: true },
        { id: 18, name: "Amazon music VM", amount: 8, categoryId: 8, important: false },
        { id: 19, name: "Onedrive SM", amount: 2, categoryId: 8, important: true },
        { id: 20, name: "Office 365", amount: 8, categoryId: 3, important: true },
        { id: 21, name: "Phone VM", amount: 20, categoryId: 8, important: true },
        { id: 22, name: "Phone SM", amount: 12, categoryId: 8, important: true },
        { id: 23, name: "Domains", amount: 3, categoryId: 3, important: true },
        { id: 24, name: "Email hosting", amount: 11, categoryId: 8, important: true },
        { id: 25, name: "Santander kredit", amount: 64, categoryId: 9, important: true, end: { month: 10, year: 2018 } },
        { id: 26, name: "VM debt", amount: 297, categoryId: 9, important: true, end: { month: 11, year: 2018 } },
        { id: 27, name: "Zinsbescheinigung", amount: 2, categoryId: 9, important: true },
        { id: 28, name: "MLAB", amount: 17, categoryId: 3, important: true },
        { id: 29, name: "Crash insurance", amount: 66, categoryId: 2, important: true },
        { id: 30, name: "Repairs", amount: 34, categoryId: 2, important: true },
        { id: 31, name: "Petrol", amount: 100, categoryId: 2, important: true },
        { id: 32, name: "Tires", amount: 30, categoryId: 2, important: true },
        { id: 33, name: "Car others", amount: 10, categoryId: 2, important: true },
        { id: 34, name: "Food", amount: 560, categoryId: 10, important: true },
        { id: 35, name: "Drogerie", amount: 30, categoryId: 10, important: true },
        { id: 36, name: "Hairs", amount: 35, categoryId: 10, important: true },
        { id: 37, name: "Party", amount: 200, categoryId: 11, important: false, personId: 2 },
        { id: 38, name: "Smoking", amount: 100, categoryId: 11, important: false, personId: 2 },
        { id: 39, name: "Eating out", amount: 160, categoryId: 11, important: false, personId: 2 },
        { id: 40, name: "Presents", amount: 20, categoryId: 7, important: true },
        { id: 41, name: "Pharmacy", amount: 30, categoryId: 13, important: true },
        { id: 42, name: "Contact lenses", amount: 30, categoryId: 10, important: true },
        { id: 43, name: "Swimming", amount: 25, categoryId: 12, important: true },
        { id: 45, name: "Dog sitting", amount: 25, categoryId: 6, important: true },
        { id: 46, name: "KITA", amount: 240, categoryId: 10, important: true, personId: 3, start: { month: 11, year: 2017 } },
        { id: 47, name: "Post", amount: 10, categoryId: 10, important: true },
        { id: 48, name: "Tooth cleaning", amount: 10, categoryId: 13, important: true, personId: 1 },
        { id: 49, name: "Mortgage", amount: 300, categoryId: 4, important: true },
    ]

}



export class CategoryGroup {
    items: ExpenseItem[];
    category: CategoryItem;
    total: number;
 }
 
 export class MonthlyGroupedExpenses {
   date: MonthDate;
   items: ExpenseItem[];
 }
 
 
 export class CategoryItem {
   id: number;
   name: string;
   mainCategoryId?: number;
 }
 
 export class Person {
   id: number;
   name: string;
 }
 
 export class ExpenseItem {
   excluded?: boolean;
 
   id: number;
   name: string;
 
   categoryId: number;
   personId?: number;
 
   start?: MonthDate;
   end?: MonthDate;
 
   amount: number;
 
   important: boolean;
   canSavePercent?: number;
 }
 
 export class MonthDate {
   month: number;
   year: number;
 }