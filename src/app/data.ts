
import { IngItem } from "./ing-parser";

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
        { id: 14, name: "Commnunication" },
        { id: 15, name: "Zoey" },
    ]

    public static expenses: ExpenseItem[] = [
        { id: 1, name: "Rent", amount: 1148, categoryId: 1, important: true },
        { id: 2, name: "Parking", amount: 60, categoryId: 2, important: false },
        { id: 3, name: "Electricity", amount: 76, categoryId: 1, important: true },
        { id: 4, name: "Internet", amount: 30, categoryId: 3, important: true },
        { id: 5, name: "WEG", amount: 368, categoryId: 4, important: true },
        { id: 6, name: "Bieber flat tax", amount: 8, categoryId: 4, important: true },
        { id: 7, name: "BUZ - life insurance", amount: 64, categoryId: 5, important: true, personId: 1 },
        { id: 8, name: "Pension saving", amount: 40, categoryId: 5, important: true, personId: 1 },
        { id: 9, name: "Private Haftpflicht", amount: 9, categoryId: 5, important: true },
        { id: 10, name: "ADAC Auslandskrankenschutz + Mitgliedschaft", amount: 6, categoryId: 5, important: false },
        { id: 11, name: "Hundehaftpflicht", amount: 6, categoryId: 6, important: false },
        { id: 12, name: "Dog food", amount: 20, categoryId: 6, important: false },
        { id: 13, name: "Dog doctor", amount: 13, categoryId: 6, important: false },
        { id: 14, name: "Dog tax", amount: 8, categoryId: 6, important: false },
        { id: 15, name: "TV Tax", amount: 18, categoryId: 8, important: true },
        { id: 16, name: "Netflix", amount: 8, categoryId: 8, important: false },
        { id: 17, name: "Sky", amount: 44, categoryId: 8, important: false, end: { month: 3, year: 2018 } },
        { id: 18, name: "Amazon prime1", amount: 5, categoryId: 8, important: true },
        { id: 18, name: "Amazon music VM", amount: 8, categoryId: 8, important: false },
        { id: 19, name: "Onedrive SM", amount: 2, categoryId: 8, important: false },
        { id: 20, name: "Office 365", amount: 8, categoryId: 3, important: false },
        { id: 21, name: "Phone VM", amount: 20, categoryId: 14, important: true },
        { id: 22, name: "Phone SM", amount: 12, categoryId: 14, important: true },
        { id: 23, name: "Domains", amount: 3, categoryId: 3, important: false },
        { id: 24, name: "Email hosting", amount: 11, categoryId: 8, important: false },
        { id: 25, name: "Santander kredit", amount: 64, categoryId: 9, important: true, end: { month: 10, year: 2018 } },
        { id: 26, name: "VM debt", amount: 297, categoryId: 9, important: true, end: { month: 11, year: 2018 } },
        { id: 27, name: "Zinsbescheinigung", amount: 2, categoryId: 9, important: true },
        { id: 28, name: "MLAB", amount: 17, categoryId: 3, important: false },
        { id: 29, name: "Crash insurance", amount: 66, categoryId: 2, important: false },
        { id: 30, name: "Repairs", amount: 34, categoryId: 2, important: false },
        { id: 31, name: "Petrol", amount: 100, categoryId: 2, important: false },
        { id: 32, name: "Tires", amount: 30, categoryId: 2, important: false },
        { id: 33, name: "Car others", amount: 10, categoryId: 2, important: false },
        { id: 34, name: "Food", amount: 560, categoryId: 10, important: true },
        { id: 35, name: "Drogerie", amount: 30, categoryId: 10, important: true },
        { id: 36, name: "Hairs", amount: 35, categoryId: 10, important: true },
        { id: 37, name: "Party", amount: 250, categoryId: 11, important: false, personId: 2 },
        { id: 38, name: "Smoking", amount: 100, categoryId: 11, important: false, personId: 2 },
        { id: 39, name: "Eating out", amount: 160, categoryId: 11, important: false, personId: 2 },
        { id: 40, name: "Presents", amount: 20, categoryId: 7, important: true },
        { id: 41, name: "Pharmacy", amount: 30, categoryId: 13, important: true, canSavePercent: 50 },
        { id: 42, name: "Contact lenses", amount: 30, categoryId: 10, important: true },
        { id: 43, name: "Swimming", amount: 25, categoryId: 12, important: false },
        { id: 45, name: "Dog sitting", amount: 25, categoryId: 6, important: false },
        { id: 46, name: "KITA", amount: 240, categoryId: 15, important: true, personId: 3, start: { month: 11, year: 2017 } },
        { id: 47, name: "Post", amount: 10, categoryId: 10, important: true },
        { id: 48, name: "Tooth cleaning", amount: 10, categoryId: 13, important: false, personId: 1 },
        { id: 49, name: "Mortgage", amount: 300, categoryId: 4, important: true },
        { id: 50, name: "VM Father", amount: 40, categoryId: 9, important: false },
        { id: 51, name: "Audible", amount: 10, categoryId: 8, important: false },
    ]

    public static incomes: IncomeItem[] = [
        { name: "Vaclav's wage", amount: 2800, end: {month: 10, year: 2017} },
        { name: "Vaclav's wage", amount: 3200, start: {month: 11, year: 2017} },

        { name: "Eltern geld", amount: 1070, end: {month: 11, year: 2017} },
        { name: "Kinder geld", amount: 190, end: {month: 11, year: 2017}},

        { name: "Sabrina's wage", amount: 1000, start: {month: 12, year: 2017} }
    ];

    public static sabrinaTransactions = [
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-09-12T19:26:49 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -110.76,
          "currency": "EUR",
          "balance": -116.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-09-12T18:57:18 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -38.47,
          "currency": "EUR",
          "balance": -5.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "WALDSCHWIMMBAD",
          "transactionType": 1,
          "usage": "WALDSCHWIMMBAD//Neu-Isenb/DE 2017-0  9-12T11:01:25 Folgenr.000 Verfalld.  2018-12  ",
          "amount": -7,
          "currency": "EUR",
          "balance": 33.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-09-12T19:31:02 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -12.45,
          "currency": "EUR",
          "balance": 40.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -9.38,
          "currency": "EUR",
          "balance": 52.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17011204250 10,48 EUR  ",
          "amount": -10.48,
          "currency": "EUR",
          "balance": 62.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-1983463-3508308 Amazon .Mktplce  EU-DE 0634862169667511  ",
          "amount": -4.89,
          "currency": "EUR",
          "balance": 72.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-11T22:00:00.000Z",
          "accountedDate": "2017-09-11T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "303-5639362-9301142 Amazon .Mktplce  EU-DE 1205199677622253  ",
          "amount": -22.99,
          "currency": "EUR",
          "balance": 77.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-07T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-1898438-7542714 Amazon .Mktplce  EU-DE 0004445922306592  ",
          "amount": -3.73,
          "currency": "EUR",
          "balance": 100.41,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-07T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-1898438-7542714 Amazon .Mktplce  EU-DE 0004441687885398  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 104.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-06T22:00:00.000Z",
          "accountedDate": "2017-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 118.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-06T22:00:00.000Z",
          "accountedDate": "2017-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 128.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-09-05T14:34:28 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -33.25,
          "currency": "EUR",
          "balance": 136.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-09-04T12:25:58 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -64.54,
          "currency": "EUR",
          "balance": 169.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-09-04T13:21:08 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -99.13,
          "currency": "EUR",
          "balance": 233.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-09-04T13:00:32 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -36,
          "currency": "EUR",
          "balance": 333.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SANDRAHEIDE, Ihr Einka  uf bei SANDRAHEIDE  ",
          "amount": -1.4,
          "currency": "EUR",
          "balance": 369.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 09/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -44.24,
          "currency": "EUR",
          "balance": 370.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-0417990-7185135 Amazon.de 27214  83349491680  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": 414.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 432.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0917 98027799434/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 434.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-09-02T08:40:24 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -25.34,
          "currency": "EUR",
          "balance": 242.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "CALPAM MINERALOEL-GESELLSCHAFT MIT",
          "transactionType": 1,
          "usage": "TANKSTATION OFFENBACH//Offenbach/DE  2017-09-02T18:20:10 Folgenr.000 Ve  rfalld.2018-12  ",
          "amount": -67.57,
          "currency": "EUR",
          "balance": 268,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-9485294-7474702 Amazon.de 19468  01123778449  ",
          "amount": -16.77,
          "currency": "EUR",
          "balance": 335.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Stadtverwaltung Offenbach Amt 32.1",
          "transactionType": 2,
          "usage": "Gewerbeabmeldung Vaclav Mikeska /  Personen-Konto-Nr. 11365188  ",
          "amount": -33,
          "currency": "EUR",
          "balance": 352.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Rundfunk ARD, ZDF, DRadio",
          "transactionType": 2,
          "usage": "RF24X630562441  ",
          "amount": -52.5,
          "currency": "EUR",
          "balance": 385.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Patrick Wenzel",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 437.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  9  ",
          "amount": -76,
          "currency": "EUR",
          "balance": -172.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 29  .08.17 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": -96.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": -95.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:09.  17  ",
          "amount": -67.04,
          "currency": "EUR",
          "balance": -55.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -300,
          "currency": "EUR",
          "balance": 11.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH270 j?EHPL2017-08-30  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 311.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.09.2017-30.09.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 374.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete September 2017/ 1.147,42 EURO  /  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": 434.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Other  ",
          "amount": 200,
          "currency": "EUR",
          "balance": 1.581,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Miete und Umlagen  ",
          "amount": 1.2,
          "currency": "EUR",
          "balance": 1.381,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 181.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-08-28T18:46:46 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -47.42,
          "currency": "EUR",
          "balance": 549.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-28T17:59:02 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -76.98,
          "currency": "EUR",
          "balance": 597.18,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-27T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-25T10:13:07 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -10.74,
          "currency": "EUR",
          "balance": 674.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-24T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "London  ",
          "amount": -400,
          "currency": "EUR",
          "balance": 684.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-24T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 1.084,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HOTEL IRIDA                                      ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  22.08  ",
          "amount": -1.21,
          "currency": "EUR",
          "balance": 84.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HOTEL IRIDA                                      ",
          "transactionType": 1,
          "usage": "NR6830245032 PLZEN       CZ  KURS      26,0233000  KAUFUMSATZ  20.08               1802,00  013425  ",
          "amount": -69.25,
          "currency": "EUR",
          "balance": 86.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-08-22T12:55:03 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -31.78,
          "currency": "EUR",
          "balance": 155.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BIKE BOX, Ihr Einkauf  bei BIKE BOX  ",
          "amount": -105.28,
          "currency": "EUR",
          "balance": 187.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "305-4621321-5188323 Amazon .Mktplce  EU-DE 2885678705803246  ",
          "amount": -76,
          "currency": "EUR",
          "balance": 292.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-8929922-2616664 Amazon Digital  Video 0879178215949939  ",
          "amount": -16.49,
          "currency": "EUR",
          "balance": 368.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DEICHMANN-OBUV S.R.O.                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.47,
          "currency": "EUR",
          "balance": 384.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BIJOU BRIGITTE                                   ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.27,
          "currency": "EUR",
          "balance": 385.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PAP OIL VEL.PAVLOVICE                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.21,
          "currency": "EUR",
          "balance": 385.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESERVED                                         ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.13,
          "currency": "EUR",
          "balance": 385.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESERVED                                         ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.09,
          "currency": "EUR",
          "balance": 385.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DM DROGERIE MARKT 239                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.08,
          "currency": "EUR",
          "balance": 386.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PAP OIL VEL.PAVLOVICE                            ",
          "transactionType": 1,
          "usage": "NR6830245032 VELKE PAVLO CZ  KURS      26,0368500  KAUFUMSATZ  19.08                306,00  161119  ",
          "amount": -11.75,
          "currency": "EUR",
          "balance": 386.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESERVED                                         ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                129,00  170114  ",
          "amount": -4.95,
          "currency": "EUR",
          "balance": 397.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESERVED                                         ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                199,00  162330  ",
          "amount": -7.64,
          "currency": "EUR",
          "balance": 402.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BIJOU BRIGITTE                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                399,00  165501  ",
          "amount": -15.32,
          "currency": "EUR",
          "balance": 410.5,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DM DROGERIE MARKT 239                            ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                119,80  164511  ",
          "amount": -4.6,
          "currency": "EUR",
          "balance": 425.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DEICHMANN-OBUV S.R.O.                            ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO-TRNITA CZ  KURS      26,0368500  KAUFUMSATZ  18.08                699,00  164140  ",
          "amount": -26.85,
          "currency": "EUR",
          "balance": 430.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-21T09:40:41 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -108.15,
          "currency": "EUR",
          "balance": 457.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "KFC 674",
          "transactionType": 1,
          "usage": "KENTUCKY FRIED CHICKEN 674//GEISELW  IND/DE 2017-08-20T17:40:18 Folgenr.  000 Verfalld.2018-12  ",
          "amount": -10.57,
          "currency": "EUR",
          "balance": 565.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "305-4621321-5188323 Amazon .Mktplce  EU-DE 2885688021721307  ",
          "amount": -15.99,
          "currency": "EUR",
          "balance": 575.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "305-8629164-4688347 Amazon.de 24376  95147409145  ",
          "amount": -39.99,
          "currency": "EUR",
          "balance": 591.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HOTEL VISTA RECEPCE                              ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ    KAUFUMSATZ  16.08  152029  ",
          "amount": -160.38,
          "currency": "EUR",
          "balance": 631.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-17T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 08 ZV91571083 A0012351  7016810231408003823  ",
          "amount": 1.07,
          "currency": "EUR",
          "balance": 792.35,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 OFFENBACH    BARGELDAUSZAHLUNG  11.08  110406  ",
          "amount": -190,
          "currency": "EUR",
          "balance": -277.92,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ALBERT HM 0819                                   ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -0.24,
          "currency": "EUR",
          "balance": -87.92,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ALBERT HM 0819                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 BRNO        CZ  KURS      26,1455700  KAUFUMSATZ  12.08                357,40  190738  ",
          "amount": -13.67,
          "currency": "EUR",
          "balance": -87.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-14T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Gemeinde Biebergemund Gemeindekasse",
          "transactionType": 1,
          "usage": "108496-200-1 GRUNDBESITZABGABEN FRI  EDRICH-KRUPP-STRASSE 19  ",
          "amount": -24.3,
          "currency": "EUR",
          "balance": -74.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-10T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "MR. WASH AUTOSERVICE AG",
          "transactionType": 1,
          "usage": "090814560177536181239602420 ELV7931  5657 09.08 14.56 ME0  ",
          "amount": -82.18,
          "currency": "EUR",
          "balance": -49.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-10T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BOOKING.COM, Ihr Einka  uf bei BOOKING.COM  ",
          "amount": -393,
          "currency": "EUR",
          "balance": 32.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-10T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . RYANAIR, Ihr Einkauf b  ei RYANAIR  ",
          "amount": -693.56,
          "currency": "EUR",
          "balance": 425.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-09T22:00:00.000Z",
          "accountedDate": "2017-08-09T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17009796584 11,75 EUR  ",
          "amount": -11.75,
          "currency": "EUR",
          "balance": 1.119,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-09T22:00:00.000Z",
          "accountedDate": "2017-08-09T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -8.05,
          "currency": "EUR",
          "balance": 1.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-08T22:00:00.000Z",
          "accountedDate": "2017-08-08T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Urlaub  ",
          "amount": 1.5,
          "currency": "EUR",
          "balance": 1.138,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-08T22:00:00.000Z",
          "accountedDate": "2017-08-08T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-08T19:59:11 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -57.42,
          "currency": "EUR",
          "balance": -361.17,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-08T22:00:00.000Z",
          "accountedDate": "2017-08-08T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-0825586-4641124 Amazon.de 06625  07323474704  ",
          "amount": -26.97,
          "currency": "EUR",
          "balance": -303.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-07T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-08-07T18:54:39 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -40.93,
          "currency": "EUR",
          "balance": -276.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-07T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": -235.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-07T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-0825586-4641124 Amazon.de 06625  74659755788  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": -233.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-07T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": -215.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-04T19:03:43 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -49.77,
          "currency": "EUR",
          "balance": -207.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ERLEBNISPARK STEINA STEINAU",
          "transactionType": 1,
          "usage": "ERLEBNISPARK STEINA STEINAU//STEINA  U/DE 2017-08-04T14:11:15 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -14,
          "currency": "EUR",
          "balance": -158.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 0,
          "usage": "302-6514753-4906710 AMZ.TaiYuanShi  ZhuQue Trading Co.,Ltd. 04455828970  19846  ",
          "amount": 32,
          "currency": "EUR",
          "balance": -144.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 08/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -44.24,
          "currency": "EUR",
          "balance": -176.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . EUBERLINDAV, Ihr Einka  uf bei EUBERLINDAV  ",
          "amount": -50.77,
          "currency": "EUR",
          "balance": -131.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . KLEINERKNAL, Ihr Einka  uf bei KLEINERKNAL  ",
          "amount": -30,
          "currency": "EUR",
          "balance": -81.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-03T22:00:00.000Z",
          "accountedDate": "2017-08-03T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-08-03T13:26:45 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -40.16,
          "currency": "EUR",
          "balance": -51.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-03T22:00:00.000Z",
          "accountedDate": "2017-08-03T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0817 64028898051/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": -10.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-01T22:00:00.000Z",
          "accountedDate": "2017-08-01T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:08.  17  ",
          "amount": -67.04,
          "currency": "EUR",
          "balance": -202.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-01T22:00:00.000Z",
          "accountedDate": "2017-08-01T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DANIELAMUEN, Ihr Einka  uf bei DANIELAMUEN  ",
          "amount": -26.5,
          "currency": "EUR",
          "balance": -135.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Patrick Wenzel",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": -109.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-31T18:28:38 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -65.11,
          "currency": "EUR",
          "balance": -719.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-07-31T17:41:12 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -70.17,
          "currency": "EUR",
          "balance": -654.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  8  ",
          "amount": -76,
          "currency": "EUR",
          "balance": -584.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, RN: 17-000064251  ",
          "amount": -108.68,
          "currency": "EUR",
          "balance": -508.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MARTINASTOE, Ihr Einka  uf bei MARTINASTOE  ",
          "amount": -19.35,
          "currency": "EUR",
          "balance": -399.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.08.2017-31.08.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -380.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete August 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -320.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NLIR, Ihr Einkauf bei  NLIR  ",
          "amount": -29.7,
          "currency": "EUR",
          "balance": 827.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ISINFORMATI, Ihr Einka  uf bei ISINFORMATI  ",
          "amount": -67.16,
          "currency": "EUR",
          "balance": 857.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABYONLINES, Ihr Einka  uf bei BABYONLINES  ",
          "amount": -341.99,
          "currency": "EUR",
          "balance": 924.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . CROWDBUTCHI, Ihr Einka  uf bei CROWDBUTCHI  ",
          "amount": -65.9,
          "currency": "EUR",
          "balance": 1.266,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . CROWDBUTCHI, Ihr Einka  uf bei CROWDBUTCHI  ",
          "amount": -55.41,
          "currency": "EUR",
          "balance": 1.332,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 27  .07.17 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 1.387,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-0493565-1349937 Amazon .Mktplce  EU-DE 2092185489650074  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 1.388,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 1.402,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -344.53,
          "currency": "EUR",
          "balance": 1.442,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH282 ?aEHPL2017-07-28  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 1.787,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "ANNIKA KASTEN",
          "transactionType": 0,
          "usage": "mai kreisel flaschen und kleidung  ",
          "amount": 13.39,
          "currency": "EUR",
          "balance": 1.849,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-30T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-29T19:58:56 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -22.4,
          "currency": "EUR",
          "balance": 1.836,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-30T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 1.858,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-30T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Miete und Umlagen  ",
          "amount": 1.2,
          "currency": "EUR",
          "balance": 2.226,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-26T22:00:00.000Z",
          "accountedDate": "2017-07-26T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "MANGOPAY SA",
          "transactionType": 0,
          "usage": "KLEIDERKREISE BY MANGOPAY  ",
          "amount": 84.5,
          "currency": "EUR",
          "balance": 1.026,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-25T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Michelle Loew",
          "transactionType": 2,
          "usage": "Mamikreisel Paket  ",
          "amount": -13.6,
          "currency": "EUR",
          "balance": 941.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-25T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA HOLIDAY INN EXPRESS AN                           ",
          "transactionType": 1,
          "usage": "NR6830245032 ANTWERPEN   BE    KAUFUMSATZ  24.07  095815  ",
          "amount": -9.56,
          "currency": "EUR",
          "balance": 955.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-25T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-25T18:24:36 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -140.48,
          "currency": "EUR",
          "balance": 965.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-25T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal (Europe) S.a.r.l.et C",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 178,
          "currency": "EUR",
          "balance": 1.105,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-24T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Krumme, Carina",
          "transactionType": 0,
          "usage": "Mamikreisel  ",
          "amount": 4,
          "currency": "EUR",
          "balance": 927.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 OFFENBACH    BARGELDAUSZAHLUNG  22.07  095518  ",
          "amount": -95,
          "currency": "EUR",
          "balance": 923.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-24T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//OFFENBACH/DE 20  17-07-24T18:50:46 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -29.71,
          "currency": "EUR",
          "balance": 1.018,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-24T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . INTERFOCUS, Ihr Einkau  f bei INTERFOCUS  ",
          "amount": -48.71,
          "currency": "EUR",
          "balance": 1.048,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-24T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6918002-8024319 Amazon .Mktplce  EU-DE 0542362759183422  ",
          "amount": -30.47,
          "currency": "EUR",
          "balance": 1.097,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-24T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6918002-8024319 Amazon .Mktplce  EU-DE 0542390825305474  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 1.127,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ESSO DEUTSCHLAND GMBH",
          "transactionType": 1,
          "usage": "ESSO DEUTSCHLAND GMBH//Obertshausen  /DE 2017-07-22T10:16:39 Folgenr.000  Verfalld.2018-12  ",
          "amount": -33.62,
          "currency": "EUR",
          "balance": 1.135,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 1.169,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Yvonne El Gamal",
          "transactionType": 2,
          "usage": "Mamikreisel, Jacke, Oberteil und  Micky Maus  ",
          "amount": -11.15,
          "currency": "EUR",
          "balance": 1.179,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Steffi Lemcke",
          "transactionType": 2,
          "usage": "Mamikreisel Paket Groesse 74  ",
          "amount": -16.5,
          "currency": "EUR",
          "balance": 1.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-20T18:15:25 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -7.71,
          "currency": "EUR",
          "balance": 1.206,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . EUBERLINDAV, Ihr Einka  uf bei EUBERLINDAV  ",
          "amount": -52.54,
          "currency": "EUR",
          "balance": 1.214,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SANDRALUETZ, Ihr Einka  uf bei SANDRALUETZ  ",
          "amount": -48.9,
          "currency": "EUR",
          "balance": 1.267,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 07 ZV91571083 A0012351  7016810231707004241  ",
          "amount": 1.07,
          "currency": "EUR",
          "balance": 1.315,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65347//OFFENBACH/DE 2  017-07-19T16:58:11 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -9.55,
          "currency": "EUR",
          "balance": 245.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-1010240-4241927 Amazon .Mktplce  EU-DE 0390809887668554  ",
          "amount": -38.2,
          "currency": "EUR",
          "balance": 255.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-2370770-0891516 Amazon.de 06220  87025702666  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": 293.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . CHICABONITA, Ihr Einka  uf bei CHICABONITA  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 311.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . EXPEDIA.COM, Ihr Einka  uf bei EXPEDIA.COM  ",
          "amount": -268,
          "currency": "EUR",
          "balance": 351.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-19T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . AMOMA.COM, Ihr Einkauf  bei AMOMA.COM  ",
          "amount": -178,
          "currency": "EUR",
          "balance": 619.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-18T22:00:00.000Z",
          "accountedDate": "2017-07-18T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "JET TANKSTELLEN DEUTSCHLAND",
          "transactionType": 1,
          "usage": "050712390115556181200001400 OLV8554  3089 05.07 12.39 ME0  ",
          "amount": -58.94,
          "currency": "EUR",
          "balance": 797.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-18T22:00:00.000Z",
          "accountedDate": "2017-07-18T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6514753-4906710 Amazon .Mktplce  EU-DE 0445511091926641  ",
          "amount": -32,
          "currency": "EUR",
          "balance": 856.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 888.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA SPARKASSE MAINZ                                  ",
          "transactionType": 1,
          "usage": "NR6830245032 BUDEN140    BARGELDAUSZAHLUNG  16.07  143906  ",
          "amount": -90,
          "currency": "EUR",
          "balance": -111.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//OFFENBACH/DE 20  17-07-17T18:38:26 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -26.38,
          "currency": "EUR",
          "balance": -21.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-17T19:17:04 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -54.86,
          "currency": "EUR",
          "balance": 4.7,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-7490964-2373464 Amazon Digital  Video 0216174421632760  ",
          "amount": -29.99,
          "currency": "EUR",
          "balance": 59.56,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . FOTOLIA, Ihr Einkauf b  ei FOTOLIA  ",
          "amount": -28.71,
          "currency": "EUR",
          "balance": 89.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-14T18:12:47 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -18.17,
          "currency": "EUR",
          "balance": 118.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "BLUMEN LIEBIG",
          "transactionType": 1,
          "usage": "BLUMEN BECKER - INH.KARIN//OFFENBAC  H/DE 2017-07-05T09:21:53 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -12.5,
          "currency": "EUR",
          "balance": 136.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "GALERIA KAUFHOF GMBH OFB",
          "transactionType": 1,
          "usage": "Galeria Kaufhof Offenbach//Offenbac  h/DE 2017-07-14T19:08:33 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -17.96,
          "currency": "EUR",
          "balance": 148.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "GALERIA KAUFHOF GMBH OFB",
          "transactionType": 1,
          "usage": "Galeria Kaufhof Offenbach//Offenbac  h/DE 2017-07-14T18:51:18 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -5.95,
          "currency": "EUR",
          "balance": 166.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "GALERIA KAUFHOF GMBH OFB",
          "transactionType": 1,
          "usage": "Galeria Kaufhof Offenbach//Offenbac  h/DE 2017-07-14T18:49:15 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -14.98,
          "currency": "EUR",
          "balance": 172.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-07-14T17:59:52 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -9.45,
          "currency": "EUR",
          "balance": 187.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-12T22:00:00.000Z",
          "accountedDate": "2017-07-12T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal (Europe) S.a.r.l.et C",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 160,
          "currency": "EUR",
          "balance": 197.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-12T22:00:00.000Z",
          "accountedDate": "2017-07-12T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Johanna Redmann",
          "transactionType": 2,
          "usage": "Avent Flaschenwaermer, Mamikreisel  ",
          "amount": -10.2,
          "currency": "EUR",
          "balance": 37.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-11T22:00:00.000Z",
          "accountedDate": "2017-07-11T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17008412389 11,30 EUR  ",
          "amount": -11.3,
          "currency": "EUR",
          "balance": 47.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-10T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-07-10T17:53:30 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -38.83,
          "currency": "EUR",
          "balance": 58.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-10T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-10T18:45:55 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -59.47,
          "currency": "EUR",
          "balance": 97.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-10T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-07-10T18:19:18 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -27.5,
          "currency": "EUR",
          "balance": 157.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Wieder zurueck  ",
          "amount": -7,
          "currency": "EUR",
          "balance": 184.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 6.5,
          "currency": "EUR",
          "balance": 7.184,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "",
          "amount": -6,
          "currency": "EUR",
          "balance": 684.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 7,
          "currency": "EUR",
          "balance": 6.684,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "LOSTERIA OFFENBACH",
          "transactionType": 1,
          "usage": "LOsteria Offenbach//Offenbach/DE 20  17-07-07T13:43:36 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -14,
          "currency": "EUR",
          "balance": -315.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-07T17:04:28 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -63.66,
          "currency": "EUR",
          "balance": -301.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal (Europe) S.a.r.l.et C",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 42,
          "currency": "EUR",
          "balance": -237.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ART + CREATIV BIEBER",
          "transactionType": 1,
          "usage": "ART + CREATIV BIEBER//OFFENBACH/DE  2017-07-04T18:22:10 Folgenr.000 Ver  falld.2018-12  ",
          "amount": -27.64,
          "currency": "EUR",
          "balance": -279.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-07-07T16:44:58 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -9.8,
          "currency": "EUR",
          "balance": -252.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Miete und Umlagen  ",
          "amount": 100,
          "currency": "EUR",
          "balance": -242.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Artur Plumbaum",
          "transactionType": 2,
          "usage": "Wie besprochen  ",
          "amount": -819.08,
          "currency": "EUR",
          "balance": -342.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 1,
          "currency": "EUR",
          "balance": 476.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-06T22:00:00.000Z",
          "accountedDate": "2017-07-06T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-06T17:46:48 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -87.71,
          "currency": "EUR",
          "balance": -523.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-05T22:00:00.000Z",
          "accountedDate": "2017-07-05T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": -435.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Christopher Albrecht",
          "transactionType": 2,
          "usage": "Reservierung des Grundstuecks  Beethovenstr. 6  ",
          "amount": -300,
          "currency": "EUR",
          "balance": -433.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PUSTELUME BABY + KIDS STORE",
          "transactionType": 1,
          "usage": "MARTINA KRATKY, PUSTEBLUME//OFFENBA  CH/DE 2017-07-04T16:53:06 Folgenr.0  00 Verfalld.2018-12  ",
          "amount": -39.88,
          "currency": "EUR",
          "balance": -133.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 07/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -44.24,
          "currency": "EUR",
          "balance": -93.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0717 82028076070/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": -49.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-03T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-07-03T12:49:23 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -52.93,
          "currency": "EUR",
          "balance": -241.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-03T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Goersch",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": -188.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 OBERTSHSN.    BARGELDAUSZAHLUNG  29.06  104104  ",
          "amount": -110,
          "currency": "EUR",
          "balance": 492.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-30T12:07:37 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -24.92,
          "currency": "EUR",
          "balance": 602.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Patrick Wenzel",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 626.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Allg.Deutscher Automobil-Club ADAC e.V.",
          "transactionType": 1,
          "usage": "KRANKENSCHUTZ-BEITRAG FALLIG: 01.07  .17 GORSCH, SABRINA ADAC-SCHUTZBRIE  F VERS.-AG  ",
          "amount": -21.8,
          "currency": "EUR",
          "balance": 16.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 28  .06.17 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 38.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Stadt Offenbach",
          "transactionType": 1,
          "usage": "167576 HUNDESTEUER ERSTHUND  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 39.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.07.2017-31.07.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 129.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Juli 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": 189.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH270 iBEHPL2017-06-29  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 1.337,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Haftpflichtkasse Darmstadt - Haftpfl.vers.d.Dt.Hotel- u.",
          "transactionType": 1,
          "usage": "29620929 / Haftpflicht Beitrag 03.0  7.17  ",
          "amount": -116.62,
          "currency": "EUR",
          "balance": 1.399,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  7  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 1.516,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:07.  17  ",
          "amount": -67.04,
          "currency": "EUR",
          "balance": 1.584,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 1.651,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "",
          "transactionType": null,
          "usage": "",
          "amount": -0.12,
          "currency": "EUR",
          "balance": 1.691,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA BRAUHAUS BARBAROSSA                              ",
          "transactionType": 1,
          "usage": "NR6830245032 SCHOELLKRIP    KAUFUMSATZ  11.06  ",
          "amount": -30,
          "currency": "EUR",
          "balance": 1.691,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -29.99,
          "currency": "EUR",
          "balance": 1.721,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-4217425-0491806 Amazon Digital  Video 0944769117493847  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 1.751,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 1.765,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Miete und Umlagen  ",
          "amount": 1.2,
          "currency": "EUR",
          "balance": 2.133,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-28T22:00:00.000Z",
          "accountedDate": "2017-06-28T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal (Europe) S.a.r.l.et C",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 168.81,
          "currency": "EUR",
          "balance": 933.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-28T22:00:00.000Z",
          "accountedDate": "2017-06-28T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-06-28T17:29:40 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -59.96,
          "currency": "EUR",
          "balance": 764.56,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-27T22:00:00.000Z",
          "accountedDate": "2017-06-27T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Markt GmbH",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-27T18:57:58 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -90.77,
          "currency": "EUR",
          "balance": 824.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-26T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal (Europe) S.a.r.l.et C",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 349.45,
          "currency": "EUR",
          "balance": 915.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "KRAEMER MEGA STORE FLORSTAD",
          "transactionType": 1,
          "usage": "KRAEMER MEGA STORE FLORSTAD//Florst  a/DE 2017-06-23T14:44:23 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -186.75,
          "currency": "EUR",
          "balance": 565.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "TOTAL DEUTSCHLAND GM",
          "transactionType": 1,
          "usage": "TOTAL-SB-STATION//KARLSRUHE/DE 2017  -06-25T16:37:54 Folgenr.000 Verfall  d.2018-12  ",
          "amount": -61.62,
          "currency": "EUR",
          "balance": 752.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-23T18:29:24 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -46.39,
          "currency": "EUR",
          "balance": 814.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2501580239 BARAUSSCHUETT  UNG 22.06.2017 WKN 980701  ",
          "amount": 30.18,
          "currency": "EUR",
          "balance": 860.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2501580240 BARAUSSCHUETT  UNG 22.06.2017 WKN 980701  ",
          "amount": 0.44,
          "currency": "EUR",
          "balance": 830.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -202.68,
          "currency": "EUR",
          "balance": 829.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-22T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 06 ZV91571083 A0012351  7016810231906004348  ",
          "amount": 1.07,
          "currency": "EUR",
          "balance": 1.032,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-21T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2501552711 VERKAUF 20.06  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": -37.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-21T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . , Ihr Einkauf bei , Ar  tikel-162560555385  ",
          "amount": -9.9,
          "currency": "EUR",
          "balance": -337.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-21T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-8062986-4572316 Amazon.de 18005  21334345952  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": -327.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-20T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-06-20T18:30:25 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -46.99,
          "currency": "EUR",
          "balance": -318.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-20T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-20T17:52:46 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -8.14,
          "currency": "EUR",
          "balance": -271.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-20T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-8062986-4572316 Amazon.de 18005  58834867931  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": -263.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-20T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -594.91,
          "currency": "EUR",
          "balance": -245.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-19T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-19T19:24:19 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -72.79,
          "currency": "EUR",
          "balance": 349.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-19T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-06-19T19:33:03 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -7.4,
          "currency": "EUR",
          "balance": 422.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-19T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-7983842-6835560 Amazon.de 26158  04993031087  ",
          "amount": -25.89,
          "currency": "EUR",
          "balance": 429.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VAPIANO",
          "transactionType": 1,
          "usage": "VAPIANO//Frankfurt/DE 2017-06-18T13  :22:38 Folgenr.000 Verfalld.2018-12  ",
          "amount": -22.15,
          "currency": "EUR",
          "balance": 455.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Shell Deutschland Oil GmbH",
          "transactionType": 1,
          "usage": "SHELL 5577// Maintal /DE 2017-06-17  T14:42:43 Folgenr.000 Verfalld.2018  -12  ",
          "amount": -3.33,
          "currency": "EUR",
          "balance": 477.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2017-06-16T18:21:56 Folgenr.000  Verfalld.2018-12  ",
          "amount": -21.43,
          "currency": "EUR",
          "balance": 480.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-06-16T18:16:16 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -21.7,
          "currency": "EUR",
          "balance": 502.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 0,
          "usage": "302-6406863-6985143 AMZ.Rasendiscou  nt 0367467367544826  ",
          "amount": 16.15,
          "currency": "EUR",
          "balance": 523.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-3640929-6005407 Amazon Digital  Video 1664359610651485  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 507.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-18T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Re-In Retail International",
          "transactionType": 2,
          "usage": "idealo QHFRMPWH  ",
          "amount": -33.7,
          "currency": "EUR",
          "balance": 510.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-15T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 819.08,
          "currency": "EUR",
          "balance": 544.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-15T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -89.98,
          "currency": "EUR",
          "balance": -275.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-15T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-8854742-7211818 Amazon Digital  Video 2299999655308512  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": -185.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-15T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "305-8441857-3287551 Amazon .Mktplce  EU-DE 2968561032134876  ",
          "amount": -80.85,
          "currency": "EUR",
          "balance": -182.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-13T18:27:13 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -15.36,
          "currency": "EUR",
          "balance": -101.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABYWALZGMB, Ihr Einka  uf bei BABYWALZGMB  ",
          "amount": -50,
          "currency": "EUR",
          "balance": -86.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABYWALZGMB, Ihr Einka  uf bei BABYWALZGMB  ",
          "amount": -19.94,
          "currency": "EUR",
          "balance": -36.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": -16.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17007048056 10,13 EUR  ",
          "amount": -10.13,
          "currency": "EUR",
          "balance": -7.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-12T22:00:00.000Z",
          "accountedDate": "2017-06-12T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-06-12T17:18:10 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -30.05,
          "currency": "EUR",
          "balance": 2.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-12T22:00:00.000Z",
          "accountedDate": "2017-06-12T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-12T16:31:48 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -119.95,
          "currency": "EUR",
          "balance": 32.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-08T22:00:00.000Z",
          "accountedDate": "2017-06-08T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "JET TANKSTELLEN DEUTSCHLAND",
          "transactionType": 1,
          "usage": "070613300104926181200001400 OLV8554  3089 07.06 13.30 ME0  ",
          "amount": -62.82,
          "currency": "EUR",
          "balance": 152.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 BIEBER    BARGELDAUSZAHLUNG  02.06  174430  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 215.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-06-06T15:52:22 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -44.32,
          "currency": "EUR",
          "balance": 305.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-06-06T16:59:41 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -18.55,
          "currency": "EUR",
          "balance": 349.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-06T16:38:35 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -141.22,
          "currency": "EUR",
          "balance": 368.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Ticketmaster GmbH",
          "transactionType": 1,
          "usage": "Ticketmaster GmbH//BERLIN/DE 2017-0  6-05T12:10:22 Folgenr.000 Verfalld.  2018-12  ",
          "amount": -25,
          "currency": "EUR",
          "balance": 509.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 06/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -44.24,
          "currency": "EUR",
          "balance": 534.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 578.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 580.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DB Vertrieb GmbH",
          "transactionType": 1,
          "usage": "DB AUTOMAT//OFFENBACH(M)LEDERMU/DE  2017-06-05T10:29:45 Folgenr.000 Ver  falld.2018-12  ",
          "amount": -23.3,
          "currency": "EUR",
          "balance": 588.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0617 22026837666/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 612.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-06-03T18:16:38 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -22.17,
          "currency": "EUR",
          "balance": 420.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6406863-6985143 Amazon .Mktplce  EU-DE 0367439493236332  ",
          "amount": -16.15,
          "currency": "EUR",
          "balance": 442.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-4148546-4197154 Amazon.de 22380  03995790531  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 458.45,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2017-06-01T18:26:42 Folgenr.000  Verfalld.2018-12  ",
          "amount": -9.98,
          "currency": "EUR",
          "balance": 467.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-06-01T16:02:43 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -20.01,
          "currency": "EUR",
          "balance": 477.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PaySquare SE",
          "transactionType": 1,
          "usage": "Semra Demir//Offenbach am Main/DE 2  017-06-01T18:32:15 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -46,
          "currency": "EUR",
          "balance": 497.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-06-01T18:40:42 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 543.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-2329246-2861938 Amazon.de 28071  27542329119  ",
          "amount": -11.44,
          "currency": "EUR",
          "balance": 549.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:06.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 560.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Ausgleich  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 624.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": -1.375,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "DANKE, IHR LIDL",
          "transactionType": 1,
          "usage": "DANKE, IHR LIDL//Hanau/DE 2017-05-3  1T15:35:14 Folgenr.000 Verfalld.201  8-12  ",
          "amount": -15.87,
          "currency": "EUR",
          "balance": -1.985,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH308 f?EHPL2017-05-30  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": -1.969,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "ANNUITAET DARLEHEN  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": -1.906,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Juni 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -1.226,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.06.2017-30.06.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -79.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  6  ",
          "amount": -68,
          "currency": "EUR",
          "balance": -19.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 48.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-29T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Mikeska",
          "transactionType": 1,
          "usage": "Rahmenkredit  Monatliche Zinsen  05/2017  ",
          "amount": -2.92,
          "currency": "EUR",
          "balance": 88.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Janina Kophal",
          "transactionType": 2,
          "usage": "Mamikreisel - Paket 5 Artikel -  dabina0812  ",
          "amount": -30.99,
          "currency": "EUR",
          "balance": 91.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 06 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 122.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-2971641-9744333 Amazon .Mktplce  EU-DE 2925833924791127  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": 159.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 165.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-29T22:00:00.000Z",
          "accountedDate": "2017-05-29T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-05-29T11:39:39 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -49.03,
          "currency": "EUR",
          "balance": 533.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-29T22:00:00.000Z",
          "accountedDate": "2017-05-29T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-29T10:58:34 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -45.83,
          "currency": "EUR",
          "balance": 582.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-29T22:00:00.000Z",
          "accountedDate": "2017-05-29T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "RRX38ESEAJRG607WQA8 Amazon Prime Ge  buehr 1335762904803592  ",
          "amount": -49,
          "currency": "EUR",
          "balance": 628.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-28T22:00:00.000Z",
          "accountedDate": "2017-05-28T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-26T19:07:25 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -141.43,
          "currency": "EUR",
          "balance": 677.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-25T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "bft TS Wiesbaden",
          "transactionType": 1,
          "usage": "bft TS Wiesbaden//Wiesbaden/DE 2017  -05-25T17:38:06 Folgenr.000 Verfall  d.2018-12  ",
          "amount": -56.75,
          "currency": "EUR",
          "balance": 818.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-25T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6352122-4030711 Amazon .Mktplce  EU-DE 1046531219368348  ",
          "amount": -6.98,
          "currency": "EUR",
          "balance": 875.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-25T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-6352122-4030711 Amazon .Mktplce  EU-DE 1046536990472055  ",
          "amount": -6.9,
          "currency": "EUR",
          "balance": 882.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-25T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "BAUHAUS FRANKFURT - DANKE",
          "transactionType": 1,
          "usage": "230510300026221181201058970 ELV6511  2133 23.05 10.30 ME0  ",
          "amount": -74.65,
          "currency": "EUR",
          "balance": 889.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-24T22:00:00.000Z",
          "accountedDate": "2017-05-24T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 964.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-23T22:00:00.000Z",
          "accountedDate": "2017-05-23T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2500948259 VERKAUF 22.05  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 2.014,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-23T22:00:00.000Z",
          "accountedDate": "2017-05-23T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-0125181-3322753 Amazon.de 21053  18964304368  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 1.714,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-23T22:00:00.000Z",
          "accountedDate": "2017-05-23T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "302-4303668-1569143 Amazon .Mktplce  EU-DE 2354950037418701  ",
          "amount": -12.89,
          "currency": "EUR",
          "balance": 1.724,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-23T22:00:00.000Z",
          "accountedDate": "2017-05-23T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-7132405-2003532 Amazon.de 30019  84158701709  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 1.737,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Detlef Niesser",
          "transactionType": 2,
          "usage": "Belegnummer A-1208 / Kundennummer  1071  ",
          "amount": -1.8,
          "currency": "EUR",
          "balance": 1.746,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-05-22T14:20:03 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -36.38,
          "currency": "EUR",
          "balance": 3.546,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-22T15:11:24 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -77.56,
          "currency": "EUR",
          "balance": 3.582,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . , Ihr Einkauf bei , Ar  tikel-292121376009  ",
          "amount": -10.5,
          "currency": "EUR",
          "balance": 3.659,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-9910157-3527502 Amazon .Mktplce  EU-DE 0396850680305229  ",
          "amount": -12.16,
          "currency": "EUR",
          "balance": 3.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BEI24 UG, Ihr Einkauf  bei BEI24 UG, Artikel-282019100192  ",
          "amount": -3.96,
          "currency": "EUR",
          "balance": 3.682,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . TAMAKAIBOOK, Ihr Einka  uf bei TAMAKAIBOOK  ",
          "amount": -21,
          "currency": "EUR",
          "balance": 3.686,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-21T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Jessika Hirschmann",
          "transactionType": 2,
          "usage": "Mamikreisel Kauf - Sabrina Mikeska  ",
          "amount": -8.4,
          "currency": "EUR",
          "balance": 3.707,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-21T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "FOERSTER S CAFE RESTAURANT",
          "transactionType": 1,
          "usage": "FOERSTER S CAFE RESTAURANT GIR 6912  9760//OFFENBACH/DE 2017-05-19T13:22  :14 Folgenr.000 Verfalld.2018-12  ",
          "amount": -24.7,
          "currency": "EUR",
          "balance": 3.716,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-21T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-20T18:08:45 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -82.92,
          "currency": "EUR",
          "balance": 3.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-21T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . LOOP-NOIR, Ihr Einkauf  bei LOOP-NOIR  ",
          "amount": -7.98,
          "currency": "EUR",
          "balance": 3.823,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-21T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Wirecard Bank AG",
          "transactionType": 2,
          "usage": "700125334919 Blackgrafx publishing  ",
          "amount": -11,
          "currency": "EUR",
          "balance": 3.831,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Nasrin Boeller",
          "transactionType": 2,
          "usage": "Mamikreisel Paket, Sabrina Mikeska  ",
          "amount": -27.02,
          "currency": "EUR",
          "balance": 3.842,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-0639904-3718765 Amazon.de 15824  27161646904  ",
          "amount": -6.71,
          "currency": "EUR",
          "balance": 3.869,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-1076434-8528325 Amazon.de 23763  45547181246  ",
          "amount": -65.99,
          "currency": "EUR",
          "balance": 3.876,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-0740327-5932353 Amazon .Mktplce  EU-DE 2239614489367153  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 3.942,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-8469971-3111542 Amazon .Mktplce  EU-DE 2444703930817972  ",
          "amount": -31.98,
          "currency": "EUR",
          "balance": 3.956,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-1076434-8528325 Amazon.de 23763  80066331981  ",
          "amount": -14.9,
          "currency": "EUR",
          "balance": 3.988,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 05 ZV91571083 A0012351  7016810231505004805  ",
          "amount": 1.07,
          "currency": "EUR",
          "balance": 4.003,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-17T22:00:00.000Z",
          "accountedDate": "2017-05-17T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Familientreffpunkt Wonneproppen",
          "transactionType": 2,
          "usage": "Gutschein Schwangerschaftsmassage  45 Minuten / RE-Nr. 2017-561  ",
          "amount": -35,
          "currency": "EUR",
          "balance": 2.932,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-16T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 FRANKF.STR    BARGELDAUSZAHLUNG  15.05  171849  ",
          "amount": -110,
          "currency": "EUR",
          "balance": 2.967,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 MESSE    BARGELDAUSZAHLUNG  13.05  090230  ",
          "amount": -115,
          "currency": "EUR",
          "balance": 3.077,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-05-15T13:15:48 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -77.14,
          "currency": "EUR",
          "balance": 3.192,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "GALERIA KAUFHOF GMBH OFB",
          "transactionType": 1,
          "usage": "Galeria Kaufhof Offenbach//Offenbac  h/DE 2017-05-15T17:09:46 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -12.94,
          "currency": "EUR",
          "balance": 3.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-15T13:57:46 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -83.83,
          "currency": "EUR",
          "balance": 3.283,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "302-9184620-6835542 Amazon.de 13077  54162901446  ",
          "amount": -30.99,
          "currency": "EUR",
          "balance": 3.366,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-9829611-8763815 Amazon Digital  Video 1775164699370083  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 3.397,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-6554434-7517933 Amazon.de 23781  66868894902  ",
          "amount": -17.99,
          "currency": "EUR",
          "balance": 3.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-9922462-6917434 Amazon Digital  Video 1863366887440581  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 3.418,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-7702654-5727050 Amazon Digital  Video 1423353015621822  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 3.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-15T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-6421553-8232657 Amazon Digital  Video 1849951581151310  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 3.423,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04445342972 EST-VERANL. 16  ",
          "amount": 1.065,
          "currency": "EUR",
          "balance": 3.425,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "YOURS SPORTS BAR",
          "transactionType": 1,
          "usage": "YOURS SPORTS BAR//FRANKFURT/DE 2017  -05-13T17:34:12 Folgenr.000 Verfall  d.2018-12  ",
          "amount": -31.7,
          "currency": "EUR",
          "balance": 2.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Anna Schlecht",
          "transactionType": 0,
          "usage": "Mamikreiselpaket fur avocadomunchki  n. Vielen Dank. :)  ",
          "amount": 99.5,
          "currency": "EUR",
          "balance": 2.391,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Gemeinde Biebergemund Gemeindekasse",
          "transactionType": 1,
          "usage": "108496-200-1 GRUNDBESITZABGABEN FRI  EDRICH-KRUPP-STRASSE 19  ",
          "amount": -24.3,
          "currency": "EUR",
          "balance": 2.292,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "JET TANKSTELLEN DEUTSCHLAND",
          "transactionType": 1,
          "usage": "110510580094925181200001400 OLV8554  3089 11.05 10.58 ME0  ",
          "amount": -45.61,
          "currency": "EUR",
          "balance": 2.316,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Mathias Uhlig",
          "transactionType": 2,
          "usage": "Bestellnummer: 424848  ",
          "amount": -17.46,
          "currency": "EUR",
          "balance": 2.362,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 2.379,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-11T22:00:00.000Z",
          "accountedDate": "2017-05-11T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-6433286-1957432 Amazon Digital  Video 0775664819235812  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 2.579,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-10T22:00:00.000Z",
          "accountedDate": "2017-05-10T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-10T18:06:55 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -12.65,
          "currency": "EUR",
          "balance": 2.582,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-10T22:00:00.000Z",
          "accountedDate": "2017-05-10T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17005716179 12,23 EUR  ",
          "amount": -12.23,
          "currency": "EUR",
          "balance": 2.594,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-10T22:00:00.000Z",
          "accountedDate": "2017-05-10T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-3339488-9131864 Amazon Digital  Video 0555043573985473  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 2.606,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-10T22:00:00.000Z",
          "accountedDate": "2017-05-10T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-7242118-6187858 Amazon Digital  Video 0312084542005625  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 2.609,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-09T22:00:00.000Z",
          "accountedDate": "2017-05-09T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ESSO DEUTSCHLAND GMBH",
          "transactionType": 1,
          "usage": "ESSO DEUTSCHLAND GMBH//Gelnhausen/D  E 2017-05-09T11:47:20 Folgenr.000 V  erfalld.2018-12  ",
          "amount": -20.37,
          "currency": "EUR",
          "balance": 2.611,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-09T22:00:00.000Z",
          "accountedDate": "2017-05-09T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-1861712-6002236 Amazon Digital  Video 2154301836779078  ",
          "amount": -2.49,
          "currency": "EUR",
          "balance": 2.632,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Rundfunk ARD, ZDF, DRadio",
          "transactionType": 2,
          "usage": "RF24X630562441  ",
          "amount": -52.5,
          "currency": "EUR",
          "balance": 2.634,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Sparen  ",
          "amount": -8,
          "currency": "EUR",
          "balance": 2.687,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Ausgleich  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 10.687,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2017-05-08T10:58:26 Folgenr.000  Verfalld.2018-12  ",
          "amount": -9.5,
          "currency": "EUR",
          "balance": 12.687,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-05-08T10:19:35 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -72.12,
          "currency": "EUR",
          "balance": 12.696,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-05-08T10:54:23 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -2.85,
          "currency": "EUR",
          "balance": 12.768,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-08T10:51:13 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -30.9,
          "currency": "EUR",
          "balance": 12.771,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-1185096-8893914 Amazon.de 14728  35217889910  ",
          "amount": -4.95,
          "currency": "EUR",
          "balance": 12.802,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-07T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-06T12:33:04 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -27.52,
          "currency": "EUR",
          "balance": 12.807,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-07T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-9521368-6896339 Amazon .Mktplce  EU-DE 2792422015453554  ",
          "amount": -9.99,
          "currency": "EUR",
          "balance": 12.835,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-07T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-9962291-5781910 Amazon .Mktplce  EU-DE 0687235815212285  ",
          "amount": -12.99,
          "currency": "EUR",
          "balance": 12.845,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-04T22:00:00.000Z",
          "accountedDate": "2017-05-04T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 05/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -44.24,
          "currency": "EUR",
          "balance": 12.858,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-04T22:00:00.000Z",
          "accountedDate": "2017-05-04T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0517 78027422517/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 12.902,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-02T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA LE PAIN QUOTIDIEN CC 3                           ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  03.05  ",
          "amount": -0.14,
          "currency": "EUR",
          "balance": 12.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-02T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA MCDONALDS-DXB AIRPORT                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  03.05  ",
          "amount": -0.06,
          "currency": "EUR",
          "balance": 12.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA LE PAIN QUOTIDIEN CC 3                           ",
          "transactionType": 1,
          "usage": "NR6830245032 DUBAI       AE  KURS       3,9983910  KAUFUMSATZ  02.05                 33,00  040603  ",
          "amount": -8.25,
          "currency": "EUR",
          "balance": 12.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA MCDONALDS-DXB AIRPORT                            ",
          "transactionType": 1,
          "usage": "NR6830245032 DUBAI       AE  KURS       3,9983910  KAUFUMSATZ  02.05                 14,00  044027  ",
          "amount": -3.5,
          "currency": "EUR",
          "balance": 12.718,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA FRAPORT GEPAECKWAGEN-P                           ",
          "transactionType": 1,
          "usage": "NR6830245032 FRANKFURT    KAUFUMSATZ  02.05  132143  ",
          "amount": -1,
          "currency": "EUR",
          "balance": 12.722,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-03T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "MONTE MARE SAGT DANKE",
          "transactionType": 1,
          "usage": "MONTE MARE OBERTSHA//OBERTSHAUSEN/D  E 2017-05-03T13:39:13 Folgenr.000 V  erfalld.2018-12  ",
          "amount": -103,
          "currency": "EUR",
          "balance": 12.723,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-03T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-05-03T12:08:31 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -37.64,
          "currency": "EUR",
          "balance": 12.826,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA LOVE BYRON BAY                                   ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  02.05  ",
          "amount": -0.6,
          "currency": "EUR",
          "balance": 12.863,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA POST   BYRON BAY-RET                             ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  02.05  ",
          "amount": -0.21,
          "currency": "EUR",
          "balance": 12.864,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA CHEMCOAST PHARMACY BY                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  02.05  ",
          "amount": -0.21,
          "currency": "EUR",
          "balance": 12.864,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA ALDI STORES                                      ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  02.05  ",
          "amount": -0.14,
          "currency": "EUR",
          "balance": 12.864,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA CHEMCOAST PHARMACY BY                            ",
          "transactionType": 1,
          "usage": "NR6830245032 BYRON BAY   AU  KURS       1,4469710  KAUFUMSATZ  29.04                 17,29  024954  ",
          "amount": -11.95,
          "currency": "EUR",
          "balance": 12.865,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA ALDI STORES                                      ",
          "transactionType": 1,
          "usage": "NR6830245032 BYRON BAY   AU  KURS       1,4469710  KAUFUMSATZ  29.04                 11,59  030615  ",
          "amount": -8.01,
          "currency": "EUR",
          "balance": 12.877,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA POST   BYRON BAY-RET                             ",
          "transactionType": 1,
          "usage": "NR6830245032 BYRON BAY   AU  KURS       1,4469710  KAUFUMSATZ  29.04                 17,70  031426  ",
          "amount": -12.23,
          "currency": "EUR",
          "balance": 12.885,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA LOVE BYRON BAY                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 BYRON BAY   AU  KURS       1,4469710  KAUFUMSATZ  29.04                 50,00  022313  ",
          "amount": -34.55,
          "currency": "EUR",
          "balance": 12.897,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 12.931,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.05.2017-31.05.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 12.321,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Mai 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": 12.381,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 13.529,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 26  .04.17 67229400990051247380  ",
          "amount": -1,
          "currency": "EUR",
          "balance": 14.209,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH264 b?EHPL2017-04-27  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 14.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 04/2017 Sabrina Mikeska  ",
          "amount": -1.81,
          "currency": "EUR",
          "balance": 14.273,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:05.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 14.275,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 14.338,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  5  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 14.378,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-27T22:00:00.000Z",
          "accountedDate": "2017-04-29T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Mikeska",
          "transactionType": 1,
          "usage": "Rahmenkredit  Monatliche Zinsen  04/2017  ",
          "amount": -6.48,
          "currency": "EUR",
          "balance": 14.446,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-27T22:00:00.000Z",
          "accountedDate": "2017-04-27T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 05 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 14.453,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-27T22:00:00.000Z",
          "accountedDate": "2017-04-27T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 14.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-26T22:00:00.000Z",
          "accountedDate": "2017-04-25T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA BYRON BAY BYRON BAY -                            ",
          "transactionType": 1,
          "usage": "NR6830245032 JONSON ST   AU  KURS       1,4349880  BARGELDAUSZAHLUNG  26.04                150,00  030302  ",
          "amount": -104.53,
          "currency": "EUR",
          "balance": 14.858,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-26T22:00:00.000Z",
          "accountedDate": "2017-04-25T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA BYRON BAY BYRON BAY -                            ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  26.04  ",
          "amount": -1.83,
          "currency": "EUR",
          "balance": 14.962,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-24T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA ZAZA KEBAB BYRON                                 ",
          "transactionType": 1,
          "usage": "NR6830245032 BYRON BAY   AU  KURS       1,4167160  BARGELDAUSZAHLUNG  20.04                152,90  012332  ",
          "amount": -107.93,
          "currency": "EUR",
          "balance": 14.964,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-24T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA ZAZA KEBAB BYRON                                 ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  24.04  ",
          "amount": -1.89,
          "currency": "EUR",
          "balance": 15.072,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-24T22:00:00.000Z",
          "accountedDate": "2017-04-24T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 15.074,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-23T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2500398522 VERKAUF 20.04  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 16.124,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-20T22:00:00.000Z",
          "accountedDate": "2017-04-20T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 04 ZV91571083 A0012351  7016810231804004913  ",
          "amount": 1.07,
          "currency": "EUR",
          "balance": 15.824,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA TELSTRA                                          ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  18.04  ",
          "amount": -0.5,
          "currency": "EUR",
          "balance": 14.754,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA TELSTRA                                          ",
          "transactionType": 1,
          "usage": "NR6830245032 MELBOURNE   AU  KURS       1,3983430  KAUFUMSATZ  16.04                 40,00  080328  ",
          "amount": -28.61,
          "currency": "EUR",
          "balance": 14.754,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-18T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2500184195 VERKAUF 12.04  .2017 WKN 214466  ",
          "amount": 8.999,
          "currency": "EUR",
          "balance": 14.783,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-12T22:00:00.000Z",
          "accountedDate": "2017-04-11T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA STARBUCKS CC D329                                ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  12.04  ",
          "amount": -0.04,
          "currency": "EUR",
          "balance": 5.783,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-12T22:00:00.000Z",
          "accountedDate": "2017-04-19T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA STARBUCKS CC D329                                ",
          "transactionType": 1,
          "usage": "NR6830245032 DUBAI       AE  KURS       3,8851220  KAUFUMSATZ  11.04                 10,00  074709  ",
          "amount": -2.57,
          "currency": "EUR",
          "balance": 5.783,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-10T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA DUBAI DUTY FREE- CA LI                           ",
          "transactionType": 1,
          "usage": "NR6830245032    1,75% WECHSELKURSGEBUEHR  11.04  ",
          "amount": -0.03,
          "currency": "EUR",
          "balance": 5.785,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-18T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA DUBAI DUTY FREE- CA LI                           ",
          "transactionType": 1,
          "usage": "NR6830245032 DUBAI       AE  KURS       3,8816030  KAUFUMSATZ  11.04                  7,00  060934  ",
          "amount": -1.8,
          "currency": "EUR",
          "balance": 5.786,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-11T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2500184196 VERKAUF 07.04  .2017 WKN 977020  ",
          "amount": 3.02,
          "currency": "EUR",
          "balance": 5.787,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-11T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Hanauer Parkhaus GmbH",
          "transactionType": 1,
          "usage": "PARKEN 04.04.2017  ",
          "amount": -14.4,
          "currency": "EUR",
          "balance": 2.767,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-11T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17004353389 11,57 EUR  ",
          "amount": -11.57,
          "currency": "EUR",
          "balance": 2.782,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-10T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 RINGCENTER    BARGELDAUSZAHLUNG  08.04  165401  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 2.793,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-10T22:00:00.000Z",
          "accountedDate": "2017-04-10T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-7171697-6929137 Amazon.de 19810  23581441488  ",
          "amount": -3.99,
          "currency": "EUR",
          "balance": 2.883,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-10T22:00:00.000Z",
          "accountedDate": "2017-04-10T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "REWE Offenbach (T40)",
          "transactionType": 1,
          "usage": "080416521033010181256024155 REWE SA  GT DANKE. 44401040  ",
          "amount": -3.18,
          "currency": "EUR",
          "balance": 2.887,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "KS Dachdeckermeisterbetrieb Klaus Schuchmann",
          "transactionType": 2,
          "usage": "Rechnung 00024/17 / Kundennummer  10294 / 07.04.2017  ",
          "amount": -232.05,
          "currency": "EUR",
          "balance": 2.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Kay Geuder",
          "transactionType": 2,
          "usage": "Re.Nr. K17358 / Behandlung  13.03.2017 / Zoey Mikeska  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 3.122,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Australien Sicherheit  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 3.182,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1.024,
          "currency": "EUR",
          "balance": 1.182,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "FRESSNAPF 1410 OFFENBACH",
          "transactionType": 1,
          "usage": "Fressnapf Offenbach//Offenbach/DE 2  017-04-08T16:18:04 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -27.47,
          "currency": "EUR",
          "balance": 158.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.1683 H:65424//OFFENBACH/DE 2  017-04-08T16:36:20 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -12.6,
          "currency": "EUR",
          "balance": 185.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 MESSE    BARGELDAUSZAHLUNG  05.04  093712  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 198.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-04-06T13:40:58 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -61.47,
          "currency": "EUR",
          "balance": 288.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-0949793-6345147 Amazon.de 28168  58768608661  ",
          "amount": -15.02,
          "currency": "EUR",
          "balance": 349.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-1824590-7185968 Amazon.de 12266  42154698247  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": 364.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "ARAL AG",
          "transactionType": 1,
          "usage": "Aral Heidelbe Bergheimer St 7101180  5 05.04 17:51  ",
          "amount": -45.31,
          "currency": "EUR",
          "balance": 382.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-0949793-6345147 Amazon .Mktplce  EU-DE 2816801518893423  ",
          "amount": -22.3,
          "currency": "EUR",
          "balance": 428.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 450.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 460.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -2.99,
          "currency": "EUR",
          "balance": 468.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 04/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -50.76,
          "currency": "EUR",
          "balance": 471.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "S.OLIVER SAGT DANKE",
          "transactionType": 1,
          "usage": "040414560018135181242040190 ELV6536  6026 04.04 14.56 ME0  ",
          "amount": -100.73,
          "currency": "EUR",
          "balance": 522.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "H+M 056 SAGT VIELEN DANK",
          "transactionType": 1,
          "usage": "ELV66031010 04.04 14.25 ME01  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": 622.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-04T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "BIJOUBRIGITTE1946",
          "transactionType": 1,
          "usage": "BIJOU BRIGITTE//HAMBURG/DE 2017-04-  04T13:22:09 Folgenr.000 Verfalld.20  18-12  ",
          "amount": -12.95,
          "currency": "EUR",
          "balance": 628.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-04T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "INTERRISK VERSICHERUNGS-AG",
          "transactionType": 1,
          "usage": "VTR-Nr. 00831345N-M01, ERH.ZEIT 05.  04.17-05.04.18, TIERHALTERHAFTPFLIC  HTVERS., Info www.interrisk.de/sepa  ",
          "amount": -74.97,
          "currency": "EUR",
          "balance": 641.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-04T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 716.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-04T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0417 68028631972/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 718.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "BAUHAUS FRANKFURT - DANKE",
          "transactionType": 1,
          "usage": "BAUHAUS FRANKFURT M//FRANKFURT/DE 2  017-03-31T12:33:52 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -103.21,
          "currency": "EUR",
          "balance": 526.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-04-03T18:36:37 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -10.85,
          "currency": "EUR",
          "balance": 629.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -124.83,
          "currency": "EUR",
          "balance": 640.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-1572902-1802705 Amazon.de 05724  06368008395  ",
          "amount": -4.99,
          "currency": "EUR",
          "balance": 765.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "BAUHAUS FRANKFURT - DANKE",
          "transactionType": 1,
          "usage": "BAUHAUS FRANKFURT M//FRANKFURT/DE 2  017-03-30T12:06:14 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -36.25,
          "currency": "EUR",
          "balance": 770.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 806.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Allg.Deutscher Automobil-Club ADAC e.V.",
          "transactionType": 1,
          "usage": "ADAC E.V. GORSCH SABRINA BEITRAG: 0  1.04.17-01.04.18  ",
          "amount": -49,
          "currency": "EUR",
          "balance": 196.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 29  .03.17 67229400990051247380  ",
          "amount": -1,
          "currency": "EUR",
          "balance": 245.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.04.2017-30.04.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 246.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete April 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": 306.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 1.454,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  4  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 1.494,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH275 :xEHPL2017-03-30  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 1.562,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:04.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 1.624,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-02T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 03/2017 Sabrina Mikeska  ",
          "amount": -52.25,
          "currency": "EUR",
          "balance": 1.688,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "",
          "transactionType": null,
          "usage": "",
          "amount": -1.73,
          "currency": "EUR",
          "balance": 1.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-03-30T12:45:51 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -33.87,
          "currency": "EUR",
          "balance": 1.742,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . OUTLET46 DE, Ihr Einka  uf bei OUTLET46 DE  ",
          "amount": -45.98,
          "currency": "EUR",
          "balance": 1.776,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BONPRIX, Ihr Einkauf b  ei BONPRIX  ",
          "amount": -128.92,
          "currency": "EUR",
          "balance": 1.822,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . STYLEBOOMTE, Ihr Einka  uf bei STYLEBOOMTE  ",
          "amount": -83.94,
          "currency": "EUR",
          "balance": 1.951,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 2.035,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 04 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 2.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 2.752,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-29T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-03-29T19:28:18 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -16.85,
          "currency": "EUR",
          "balance": 3.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-29T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "280318490250180181256030410 REWE SA  GT DANKE. 44400041  ",
          "amount": -5.01,
          "currency": "EUR",
          "balance": 3.137,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-29T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SHOPAPOTHEK, Ihr Einka  uf bei SHOPAPOTHEK  ",
          "amount": -31.79,
          "currency": "EUR",
          "balance": 3.142,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-29T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -38.21,
          "currency": "EUR",
          "balance": 3.174,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-28T18:44:05 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -11.3,
          "currency": "EUR",
          "balance": 3.212,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SHOPAPOTHEK, Ihr Einka  uf bei SHOPAPOTHEK  ",
          "amount": -23.07,
          "currency": "EUR",
          "balance": 3.223,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-7456372-6642715 Amazon.de 06587  37118253131  ",
          "amount": -9.99,
          "currency": "EUR",
          "balance": 3.246,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "028-2773570-9985127 Amazon.de 01309  74797880081  ",
          "amount": -12.58,
          "currency": "EUR",
          "balance": 3.256,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-8758801-1673165 Amazon .Mktplce  EU-DE 0798942025287817  ",
          "amount": -9.1,
          "currency": "EUR",
          "balance": 3.269,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-7456372-6642715 Amazon .Mktplce  EU-DE 0658720120264311  ",
          "amount": -12.9,
          "currency": "EUR",
          "balance": 3.278,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-28T22:00:00.000Z",
          "accountedDate": "2017-03-28T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 3.291,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-27T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Rundfunk ARD, ZDF, DRadio",
          "transactionType": 2,
          "usage": "RF24X630562441  ",
          "amount": -52.5,
          "currency": "EUR",
          "balance": 3.293,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-27T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ALDI SUED SAGT DANKE",
          "transactionType": 1,
          "usage": "ALDI GMBH + CO. KG//FRANKFURT/DE 20  17-03-27T14:55:17 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -36.97,
          "currency": "EUR",
          "balance": 3.345,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-27T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ARAL AG",
          "transactionType": 1,
          "usage": "Aral Gelnhaus Gelnhaeuser S 7101083  5 25.03 19:00  ",
          "amount": -61.69,
          "currency": "EUR",
          "balance": 3.382,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-27T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-5775144-7302743 Amazon .Mktplce  EU-DE 2118034938991345  ",
          "amount": -6.99,
          "currency": "EUR",
          "balance": 3.444,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-26T22:00:00.000Z",
          "accountedDate": "2017-03-26T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -60.41,
          "currency": "EUR",
          "balance": 3.451,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-26T22:00:00.000Z",
          "accountedDate": "2017-03-26T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 3.511,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-22T23:00:00.000Z",
          "accountedDate": "2017-03-22T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ING-DiBa AG.",
          "transactionType": 0,
          "usage": "Unser Dankeschön für  Ihre Bargeldabhebung  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 4.561,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-22T23:00:00.000Z",
          "accountedDate": "2017-03-22T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2017-03-22T09:09:12 Folgenr.000  Verfalld.2018-12  ",
          "amount": -24.57,
          "currency": "EUR",
          "balance": 4.56,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-22T23:00:00.000Z",
          "accountedDate": "2017-03-22T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-2404709-6250745 Amazon .Mktplce  EU-DE 0469464778870749  ",
          "amount": -43.3,
          "currency": "EUR",
          "balance": 4.585,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-22T23:00:00.000Z",
          "accountedDate": "2017-03-22T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AUDIBLE GMBH",
          "transactionType": 1,
          "usage": "Q2E3R9Q0T5RAT29WNJC Audible GmbH 15  52680963726109  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 4.628,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-22T23:00:00.000Z",
          "accountedDate": "2017-03-22T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -16.68,
          "currency": "EUR",
          "balance": 4.638,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-21T23:00:00.000Z",
          "accountedDate": "2017-03-21T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2499784647 VERKAUF 20.03  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 4.655,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-21T23:00:00.000Z",
          "accountedDate": "2017-03-21T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-2404709-6250745 Amazon .Mktplce  EU-DE 0469422188294404  ",
          "amount": -6.99,
          "currency": "EUR",
          "balance": 4.355,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-21T23:00:00.000Z",
          "accountedDate": "2017-03-21T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . TREATWELLDA, Ihr Einka  uf bei TREATWELLDA  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 4.362,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-21T23:00:00.000Z",
          "accountedDate": "2017-03-21T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -108.2,
          "currency": "EUR",
          "balance": 4.402,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-20T23:00:00.000Z",
          "accountedDate": "2017-03-20T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-20T12:49:39 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -15.66,
          "currency": "EUR",
          "balance": 4.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-20T23:00:00.000Z",
          "accountedDate": "2017-03-20T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "11523114 AMT 31",
          "transactionType": 1,
          "usage": "STADT OFFENBACH BUERGERBUERO//OFFEN  BACH/DE 2017-03-20T11:56:35 Folgenr  .000 Verfalld.2018-12  ",
          "amount": -13,
          "currency": "EUR",
          "balance": 4.526,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-20T23:00:00.000Z",
          "accountedDate": "2017-03-20T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-8385839-7495520 Amazon .Mktplce  EU-DE 0733513404034394  ",
          "amount": -2.34,
          "currency": "EUR",
          "balance": 4.539,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-20T23:00:00.000Z",
          "accountedDate": "2017-03-20T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-0245389-5837153 Amazon .Mktplce  EU-DE 1315474053252782  ",
          "amount": -34.95,
          "currency": "EUR",
          "balance": 4.541,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-18T15:12:40 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -15.68,
          "currency": "EUR",
          "balance": 4.576,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-03-17T13:05:49 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -12.75,
          "currency": "EUR",
          "balance": 4.592,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-17T14:42:43 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -97.77,
          "currency": "EUR",
          "balance": 4.604,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . PATTEVUGEL, Ihr Einkau  f bei PATTEVUGEL  ",
          "amount": -16.95,
          "currency": "EUR",
          "balance": 4.702,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-16T23:00:00.000Z",
          "accountedDate": "2017-03-16T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405592 03 ZV91571083 A0012351  7016810231303005281  ",
          "amount": 600,
          "currency": "EUR",
          "balance": 4.719,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-16T23:00:00.000Z",
          "accountedDate": "2017-03-16T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Bundeskasse Trier",
          "transactionType": 0,
          "usage": "EL 213405591 03 ZV91571083 A0012351  7016810231303005280  ",
          "amount": 3.348,
          "currency": "EUR",
          "balance": 4.119,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-15T23:00:00.000Z",
          "accountedDate": "2017-03-15T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 770.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-15T23:00:00.000Z",
          "accountedDate": "2017-03-15T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -111.27,
          "currency": "EUR",
          "balance": 779.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-13T23:00:00.000Z",
          "accountedDate": "2017-03-13T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-03-13T12:31:26 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -32.05,
          "currency": "EUR",
          "balance": 891.06,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-11T19:23:41 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -30.99,
          "currency": "EUR",
          "balance": 923.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17002937939 11,12 EUR  ",
          "amount": -11.12,
          "currency": "EUR",
          "balance": 954.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-09T23:00:00.000Z",
          "accountedDate": "2017-03-09T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "5468 ECENTER OFFENBACH",
          "transactionType": 1,
          "usage": "5468 ECENTER OFFENBACH//OFFENBACH/D  E 2017-03-09T13:35:19 Folgenr.000 V  erfalld.2018-12  ",
          "amount": -38.43,
          "currency": "EUR",
          "balance": 965.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-08T23:00:00.000Z",
          "accountedDate": "2017-03-08T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 1.003,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-07T23:00:00.000Z",
          "accountedDate": "2017-03-07T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -115.41,
          "currency": "EUR",
          "balance": 1.013,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-03-06T16:09:49 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -31.86,
          "currency": "EUR",
          "balance": 1.129,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 03/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -37.49,
          "currency": "EUR",
          "balance": 1.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 1.198,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 1.206,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 1.208,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245032 OFFENBACH    BARGELDAUSZAHLUNG  02.03  104112  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-05T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Claudia Jentsch Treuhandkonten",
          "transactionType": 0,
          "usage": "Friedrich-Krupp 19 Guthaben aus Abr  g. 2016  ",
          "amount": 1.022,
          "currency": "EUR",
          "balance": 1.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-05T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -5.26,
          "currency": "EUR",
          "balance": 277.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-05T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0317 96026247981/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 283.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-02T23:00:00.000Z",
          "accountedDate": "2017-03-01T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245032 MESSE    BARGELDAUSZAHLUNG  01.03  145326  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 91.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-02T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -53.18,
          "currency": "EUR",
          "balance": 181.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-02T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . STIFTSAPOTH, Ihr Einka  uf bei STIFTSAPOTH  ",
          "amount": -26.9,
          "currency": "EUR",
          "balance": 234.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-01T23:00:00.000Z",
          "accountedDate": "2017-03-01T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 261.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-01T23:00:00.000Z",
          "accountedDate": "2017-03-01T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": 263.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-01T23:00:00.000Z",
          "accountedDate": "2017-03-01T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "DEUTSCHE REITERL. VEREINIGUNG E.V.",
          "transactionType": 1,
          "usage": "14464293, PM MITGLIEDSBEITRAG ERW.,  2017, GOERSCH, SABRINA  ",
          "amount": -45,
          "currency": "EUR",
          "balance": 269.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Ausgleich  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 314.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": -1.685,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 03 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": -2.295,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.03.2017-31.03.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -2.259,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Maerz 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -2.199,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 24  .02.17 67229400990051247380  ",
          "amount": -1,
          "currency": "EUR",
          "balance": -1.051,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -84.9,
          "currency": "EUR",
          "balance": -1.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": -965.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:03.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": -285.18,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": -221.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH245 ??EHPL2017-02-27  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": -181.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 02/2017 Sabrina Goersch  ",
          "amount": -53.2,
          "currency": "EUR",
          "balance": -118.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-28T23:00:00.000Z",
          "accountedDate": "2017-02-28T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  3  ",
          "amount": -68,
          "currency": "EUR",
          "balance": -65.68,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-27T23:00:00.000Z",
          "accountedDate": "2017-02-27T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-02-27T11:45:28 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -15.2,
          "currency": "EUR",
          "balance": 2.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-27T23:00:00.000Z",
          "accountedDate": "2017-02-27T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 17.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  017-02-24T14:30:37 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -0.5,
          "currency": "EUR",
          "balance": 385.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 386.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AMAZON INSTANT VIDEO GERMANY GMBH",
          "transactionType": 1,
          "usage": "D01-7970660-0939844 Amazon Digital  Video 0971222590377682  ",
          "amount": -28.99,
          "currency": "EUR",
          "balance": 388.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 417,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-23T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertragung  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 1.467,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-22T23:00:00.000Z",
          "accountedDate": "2017-02-22T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AUDIBLE GMBH",
          "transactionType": 1,
          "usage": "06DKNSFMHQ4JACDHRAR Audible GmbH 16  95932767606634  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": -533,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-21T23:00:00.000Z",
          "accountedDate": "2017-02-21T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-02-21T16:01:24 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -38.66,
          "currency": "EUR",
          "balance": -523.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-21T23:00:00.000Z",
          "accountedDate": "2017-02-21T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2499182161 VERKAUF 20.02  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": -484.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-21T23:00:00.000Z",
          "accountedDate": "2017-02-21T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -126.35,
          "currency": "EUR",
          "balance": -784.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-20T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65347//OFFENBACH/DE 2  017-02-20T15:44:54 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -42.55,
          "currency": "EUR",
          "balance": -658.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-19T23:00:00.000Z",
          "accountedDate": "2017-02-19T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Madeline Langosch",
          "transactionType": 2,
          "usage": "Mamikreisel / Sechs Pyjamas Groesse  68  ",
          "amount": -22.5,
          "currency": "EUR",
          "balance": -615.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-15T23:00:00.000Z",
          "accountedDate": "2017-02-15T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -119.48,
          "currency": "EUR",
          "balance": -592.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-14T23:00:00.000Z",
          "accountedDate": "2017-02-14T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Gemeinde Biebergemund Gemeindekasse",
          "transactionType": 1,
          "usage": "108496-200-1 GRUNDBESITZABGABEN FRI  EDRICH-KRUPP-STRASSE 19  ",
          "amount": -24.3,
          "currency": "EUR",
          "balance": -473.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-14T23:00:00.000Z",
          "accountedDate": "2017-02-14T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": -449.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-13T23:00:00.000Z",
          "accountedDate": "2017-02-13T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-2482685-6503535 Amazon.de 21607  32594282955  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": -440.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-13T23:00:00.000Z",
          "accountedDate": "2017-02-13T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . LIBUTE GMBH, Ihr Einka  uf bei LIBUTE GMBH  ",
          "amount": -41.01,
          "currency": "EUR",
          "balance": -434.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-12T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Shell Deutschland Oil GmbH",
          "transactionType": 1,
          "usage": "SHELL 5577// Maintal /DE 2017-02-12  T14:56:17 Folgenr.000 Verfalld.2018  -12  ",
          "amount": -68.78,
          "currency": "EUR",
          "balance": -393.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-12T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17001648310 14,53 EUR  ",
          "amount": -14.53,
          "currency": "EUR",
          "balance": -324.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-08T23:00:00.000Z",
          "accountedDate": "2017-02-08T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-8766983-4587548 Amazon .Mktplce  EU-DE 0660943113445917  ",
          "amount": -4.79,
          "currency": "EUR",
          "balance": -309.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-08T23:00:00.000Z",
          "accountedDate": "2017-02-08T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -134.33,
          "currency": "EUR",
          "balance": -305.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-07T23:00:00.000Z",
          "accountedDate": "2017-02-07T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Franziska Scheidt",
          "transactionType": 2,
          "usage": "Mamikreisel - Hoppediz leichtes  Tragetuch  ",
          "amount": -40.1,
          "currency": "EUR",
          "balance": -170.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-07T23:00:00.000Z",
          "accountedDate": "2017-02-07T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MGP VINTED, Ihr Einkau  f bei MGP VINTED  ",
          "amount": -33.69,
          "currency": "EUR",
          "balance": -130.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-06T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": -97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-06T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": -89.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-06T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "028-5415832-6853955 Amazon .Mktplce  EU-DE 1864326165113606  ",
          "amount": -19.99,
          "currency": "EUR",
          "balance": -87.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-06T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 02/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.53,
          "currency": "EUR",
          "balance": -67.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-05T23:00:00.000Z",
          "accountedDate": "2017-02-05T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "AMAZON PAYMENTS EUROPE S.C.A.",
          "transactionType": 1,
          "usage": "304-0929700-7369900 Amazon .Mktplce  EU-DE 0981679540744680  ",
          "amount": -37.5,
          "currency": "EUR",
          "balance": -49.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-05T23:00:00.000Z",
          "accountedDate": "2017-02-05T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Global Collect BV",
          "transactionType": 2,
          "usage": "400009263349 MSCI8T3RF04F  EB20171811  ",
          "amount": -1.111,
          "currency": "EUR",
          "balance": -11.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-02T23:00:00.000Z",
          "accountedDate": "2017-02-01T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245024 OFFENBACH    BARGELDAUSZAHLUNG  31.01  090624  ",
          "amount": -95,
          "currency": "EUR",
          "balance": 1.099,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-02T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA PASPALAKIS EMMANOUIL                             ",
          "transactionType": 0,
          "usage": "NR6830245024 N.ALIKARNAS GR    GUTSCHRIFT KAUFUMSATZ  24.01 11.23 UHR  ",
          "amount": 49,
          "currency": "EUR",
          "balance": 1.194,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-02T23:00:00.000Z",
          "accountedDate": "2017-02-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-02-02T17:40:30 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -36.52,
          "currency": "EUR",
          "balance": 1.145,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-02T23:00:00.000Z",
          "accountedDate": "2017-02-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -40.69,
          "currency": "EUR",
          "balance": 1.182,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-02T23:00:00.000Z",
          "accountedDate": "2017-02-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 0217 02026443673/3  000128994157  ",
          "amount": 192,
          "currency": "EUR",
          "balance": 1.222,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-01T23:00:00.000Z",
          "accountedDate": "2017-02-01T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -143.37,
          "currency": "EUR",
          "balance": 1.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-01T23:00:00.000Z",
          "accountedDate": "2017-02-01T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 1.174,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SHOPAPOTHEK, Ihr Einka  uf bei SHOPAPOTHEK  ",
          "amount": -24.54,
          "currency": "EUR",
          "balance": 1.184,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-02-05T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  30.01  003208  ",
          "amount": -6.99,
          "currency": "EUR",
          "balance": 1.208,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 1.215,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 3.5,
          "currency": "EUR",
          "balance": 605.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 27  .01.17 67229400990051247380  ",
          "amount": -1,
          "currency": "EUR",
          "balance": -2.894,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:02.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": -2.893,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.02.2017-28.02.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -2.829,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Februar 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -2.769,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 01/2017 Sabrina Goersch  ",
          "amount": -53.74,
          "currency": "EUR",
          "balance": -1.621,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": -1.568,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH262 ?yEHPL2017-01-30  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": -1.528,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  2  ",
          "amount": -68,
          "currency": "EUR",
          "balance": -1.465,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "Geschaeftszeichen V092588243  ",
          "amount": -480.55,
          "currency": "EUR",
          "balance": -1.397,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -109.8,
          "currency": "EUR",
          "balance": -917.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MYPOSTER, Ihr Einkauf  bei MYPOSTER  ",
          "amount": -269.87,
          "currency": "EUR",
          "balance": -807.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 02 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": -537.45,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": -500.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 179.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-29T23:00:00.000Z",
          "accountedDate": "2017-01-29T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Zuschus Mutterschaftsgeld abzuglich  496 EUR aus Okt/Nov noch abgebucht  er Direktversicherung/Altersvorsorg  e etage3 design+digital GmbH  ",
          "amount": 186.35,
          "currency": "EUR",
          "balance": 547.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-25T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA GRANDIOR HOTEL PRAGU                             ",
          "transactionType": 1,
          "usage": "NR6830245024    1,75% WECHSELKURSGEBUEHR  26.01  ",
          "amount": -0.39,
          "currency": "EUR",
          "balance": 361.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA GRANDIOR HOTEL PRAGU                             ",
          "transactionType": 1,
          "usage": "NR6830245024 PRAHA       CZ  KURS      26,9778100  KAUFUMSATZ  24.01                600,00  120105  ",
          "amount": -22.24,
          "currency": "EUR",
          "balance": 361.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABY MARKT, Ihr Einkau  f bei BABY MARKT  ",
          "amount": -30.98,
          "currency": "EUR",
          "balance": 384.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . TCHIBO GMBH, Ihr Einka  uf bei TCHIBO GMBH  ",
          "amount": -37.94,
          "currency": "EUR",
          "balance": 415.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-24T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "FIFTIES DINER",
          "transactionType": 1,
          "usage": "FIFTIES DINER//Gremsdorf/DE 2017-01  -24T16:42:25 Folgenr.000 Verfalld.2  018-12  ",
          "amount": -31.3,
          "currency": "EUR",
          "balance": 453.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-24T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 484.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR6830245024 AUDIBLE.DE/    KAUFUMSATZ  21.01  132844  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 1.534,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PASPALAKIS EMMANOUIL                             ",
          "transactionType": 1,
          "usage": "NR6830245024 N.ALIKARNAS GR    KAUFUMSATZ  19.01  180131  ",
          "amount": -49,
          "currency": "EUR",
          "balance": 1.544,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-23T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2498504734 VERKAUF 20.01  .2017 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 1.593,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-23T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Bundesagentur fur Arbeit - Familienkasse",
          "transactionType": 0,
          "usage": "KG435003FK029541 1116-0117 32025877  768/3000128994157  ",
          "amount": 572,
          "currency": "EUR",
          "balance": 1.293,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-22T23:00:00.000Z",
          "accountedDate": "2017-01-22T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2498496832 BARAUSSCHUETT  UNG 19.01.2017 WKN 980700  ",
          "amount": 64.68,
          "currency": "EUR",
          "balance": 721.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-22T23:00:00.000Z",
          "accountedDate": "2017-01-22T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2498496833 BARAUSSCHUETT  UNG 19.01.2017 WKN 980700  ",
          "amount": 2.09,
          "currency": "EUR",
          "balance": 656.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-17T23:00:00.000Z",
          "accountedDate": "2017-01-17T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -0.99,
          "currency": "EUR",
          "balance": 654.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Shell Deutschland Oil GmbH",
          "transactionType": 1,
          "usage": "SHELL 0214// Offenbach /DE 2017-01-  13T19:44:40 Folgenr.000 Verfalld.20  18-12  ",
          "amount": -61.92,
          "currency": "EUR",
          "balance": 655.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-18T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  11.01  110214  ",
          "amount": -17.98,
          "currency": "EUR",
          "balance": 717.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-01-13T17:19:39 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -174.69,
          "currency": "EUR",
          "balance": 735.41,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 910.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-12T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2017-01-12T16:12:36 Folgenr.000  Verfalld.2018-12  ",
          "amount": -12.95,
          "currency": "EUR",
          "balance": 919.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-12T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2017-01-12T16:27:10 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -15.75,
          "currency": "EUR",
          "balance": 932.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA HILTON PRAGUE                                    ",
          "transactionType": 1,
          "usage": "NR6830245024    1,75% WECHSELKURSGEBUEHR  11.01  ",
          "amount": -1.31,
          "currency": "EUR",
          "balance": 947.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-16T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA HILTON PRAGUE                                    ",
          "transactionType": 1,
          "usage": "NR6830245024 PRAHA 8     CZ  KURS      26,9654400  KAUFUMSATZ  10.01               2013,75  113431  ",
          "amount": -74.68,
          "currency": "EUR",
          "balance": 949.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-16T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  10.01  120459  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 1.023,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-16T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  10.01  182036  ",
          "amount": -13.46,
          "currency": "EUR",
          "balance": 1.038,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-11T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -110.07,
          "currency": "EUR",
          "balance": 1.052,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-11T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . WINDELN.DE, Ihr Einkau  f bei WINDELN.DE  ",
          "amount": -26.02,
          "currency": "EUR",
          "balance": 1.162,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-10T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  09.01  170514  ",
          "amount": -14.93,
          "currency": "EUR",
          "balance": 1.188,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-10T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F17000365107 11,48 EUR  ",
          "amount": -11.48,
          "currency": "EUR",
          "balance": 1.203,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  06.01  120650  ",
          "amount": -9.98,
          "currency": "EUR",
          "balance": 1.214,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  06.01  120646  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": 1.224,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-09T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 1.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-09T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BUECHER DE, Ihr Einkau  f bei BUECHER DE  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 1.238,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-08T23:00:00.000Z",
          "accountedDate": "2017-01-08T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "BARMER GEK",
          "transactionType": 0,
          "usage": "736833810989 ERSTATTUNG  ",
          "amount": 82.46,
          "currency": "EUR",
          "balance": 1.253,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-05T23:00:00.000Z",
          "accountedDate": "2017-01-05T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "BARMER GEK",
          "transactionType": 0,
          "usage": "726333834307 910,00- LEISTUNG VOM 0  7.11.2016 BIS 15. 01.2017 400000027  2285306  ",
          "amount": 910,
          "currency": "EUR",
          "balance": 1.171,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-05T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  03.01  181714  ",
          "amount": -31.8,
          "currency": "EUR",
          "balance": 261.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-09T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  03.01  154247  ",
          "amount": -11.04,
          "currency": "EUR",
          "balance": 293.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 01/17 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.49,
          "currency": "EUR",
          "balance": 304.06,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 321.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . M. MOHR, Ihr Einkauf b  ei M. MOHR  ",
          "amount": -39.99,
          "currency": "EUR",
          "balance": 323.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GRIN VERLAG, Ihr Einka  uf bei GRIN VERLAG  ",
          "amount": -34.99,
          "currency": "EUR",
          "balance": 363.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -113.6,
          "currency": "EUR",
          "balance": 398.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DIGISTORE24, Ihr Einka  uf bei DIGISTORE24  ",
          "amount": -19.95,
          "currency": "EUR",
          "balance": 512.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-03T23:00:00.000Z",
          "accountedDate": "2017-01-08T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  02.01  155751  ",
          "amount": -9.22,
          "currency": "EUR",
          "balance": 532.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-02T23:00:00.000Z",
          "accountedDate": "2017-01-05T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  30.12  211528  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 541.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-02T23:00:00.000Z",
          "accountedDate": "2017-01-02T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -40.69,
          "currency": "EUR",
          "balance": 550.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  29.12  131833  ",
          "amount": -69.85,
          "currency": "EUR",
          "balance": 590.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  29.12  131324  ",
          "amount": -18.9,
          "currency": "EUR",
          "balance": 660.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  016-12-31T11:22:34 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -8.9,
          "currency": "EUR",
          "balance": 679.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-12-31T11:45:47 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -75.33,
          "currency": "EUR",
          "balance": 688.63,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gehalt Dezember 2016 etage3 design+  digital GmbH  ",
          "amount": 1.41,
          "currency": "EUR",
          "balance": 763.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": -646.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": -1.256,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.01.2017-31.01.2017-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -1.216,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Januar 2017/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -1.156,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 28  .12.16 67229400990051247380  ",
          "amount": -1,
          "currency": "EUR",
          "balance": -8.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Entgelt Zinsbescheinigung  ",
          "amount": -25,
          "currency": "EUR",
          "balance": -7.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 17.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018VN:13210, Abschlag Monat: 0  1  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 697.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 12/2016 Sabrina Goersch  ",
          "amount": -53.35,
          "currency": "EUR",
          "balance": 765.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH251 ?hEHPL2016-12-29  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 819.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:01.  17  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 881.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Anika Senne",
          "transactionType": 2,
          "usage": "Mamikreisel, 6 Bodies Gr. 62  ",
          "amount": -6.6,
          "currency": "EUR",
          "balance": 945.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 951.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "ABOUT YOU - RatePAY GmbH",
          "transactionType": 2,
          "usage": "DG3355754L6  ",
          "amount": -50.96,
          "currency": "EUR",
          "balance": 1.319,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Baby Smile Fotografie",
          "transactionType": 2,
          "usage": "Belegnummer 291608319 /  Kundennummer 01625096  ",
          "amount": -57.55,
          "currency": "EUR",
          "balance": 1.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Universitaetsklinikum Frankfurt",
          "transactionType": 2,
          "usage": "Rechnungs-Nr. 21065608 - 109308993  / AZ 6968751  ",
          "amount": -214,
          "currency": "EUR",
          "balance": 1.428,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "",
          "transactionType": null,
          "usage": "",
          "amount": -0.43,
          "currency": "EUR",
          "balance": 1.642,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 01 17 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 1.642,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -139.53,
          "currency": "EUR",
          "balance": 1.679,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 1.819,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . PIZZA.DE, Ihr Einkauf  bei PIZZA.DE  ",
          "amount": -15.4,
          "currency": "EUR",
          "balance": 1.821,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . KP FAMILY, Ihr Einkauf  bei KP FAMILY  ",
          "amount": -149.99,
          "currency": "EUR",
          "balance": 1.836,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  25.12  174131  ",
          "amount": -8.29,
          "currency": "EUR",
          "balance": 1.986,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2016-12-27T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . AMOMA.COM, Ihr Einkauf  bei AMOMA.COM  ",
          "amount": -67.59,
          "currency": "EUR",
          "balance": 1.994,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2016-12-27T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "DEUTSCHE POST AG",
          "transactionType": 1,
          "usage": "ELV54621000 22.12 16.57 ME9  ",
          "amount": -8.7,
          "currency": "EUR",
          "balance": 2.062,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  22.12  160035  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 2.071,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-12-24T13:05:29 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -12.44,
          "currency": "EUR",
          "balance": 2.086,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 2.098,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-22T23:00:00.000Z",
          "accountedDate": "2016-12-28T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR6830245024 AUDIBLE.DE/    KAUFUMSATZ  21.12  140541  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 3.148,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-22T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 3.158,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-22T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . HUGENDUBEL, Ihr Einkau  f bei HUGENDUBEL  ",
          "amount": -3.99,
          "currency": "EUR",
          "balance": 3.168,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-21T23:00:00.000Z",
          "accountedDate": "2016-12-21T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-12-21T12:44:11 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -23.05,
          "currency": "EUR",
          "balance": 3.172,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-21T23:00:00.000Z",
          "accountedDate": "2016-12-21T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2497158588 VERKAUF 20.12  .2016 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 3.195,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-21T23:00:00.000Z",
          "accountedDate": "2016-12-21T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -81.96,
          "currency": "EUR",
          "balance": 2.895,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-20T23:00:00.000Z",
          "accountedDate": "2016-12-20T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Shell Deutschland Oil GmbH",
          "transactionType": 1,
          "usage": "SHELL 5577// Maintal /DE 2016-12-20  T16:48:26 Folgenr.000 Verfalld.2018  -12  ",
          "amount": -64.87,
          "currency": "EUR",
          "balance": 2.977,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-20T23:00:00.000Z",
          "accountedDate": "2016-12-20T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "191212010543810181256030413 REWE SA  GT DANKE. 44400041  ",
          "amount": -9.96,
          "currency": "EUR",
          "balance": 3.042,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-19T23:00:00.000Z",
          "accountedDate": "2016-12-19T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . 321LINSEN, Ihr Einkauf  bei 321LINSEN  ",
          "amount": -39.89,
          "currency": "EUR",
          "balance": 3.052,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-19T23:00:00.000Z",
          "accountedDate": "2016-12-19T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . PLANETCARDS, Ihr Einka  uf bei PLANETCARDS  ",
          "amount": -26,
          "currency": "EUR",
          "balance": 3.092,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-18T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-12-17T16:52:55 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -13.51,
          "currency": "EUR",
          "balance": 3.118,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-18T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . REWEMARKTGM, Ihr Einka  uf bei REWEMARKTGM  ",
          "amount": -92.42,
          "currency": "EUR",
          "balance": 3.131,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-18T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 3.224,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-15T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.03542401005 EST-VERANL. 15  ",
          "amount": 2.071,
          "currency": "EUR",
          "balance": 3.424,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-15T23:00:00.000Z",
          "accountedDate": "2016-12-20T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA STK*SHUTTERSTOCK.COM                             ",
          "transactionType": 1,
          "usage": "NR6830245024 866-663-395 NL    KAUFUMSATZ  14.12  122751  ",
          "amount": -236.81,
          "currency": "EUR",
          "balance": 1.352,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-14T23:00:00.000Z",
          "accountedDate": "2016-12-19T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  12.12  152205  ",
          "amount": -19.99,
          "currency": "EUR",
          "balance": 1.589,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-14T23:00:00.000Z",
          "accountedDate": "2016-12-14T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABYWALZGMB, Ihr Einka  uf bei BABYWALZGMB  ",
          "amount": -51.47,
          "currency": "EUR",
          "balance": 1.609,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-13T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  12.12  161008  ",
          "amount": -12.99,
          "currency": "EUR",
          "balance": 1.661,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-13T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  12.12  102537  ",
          "amount": -11.14,
          "currency": "EUR",
          "balance": 1.674,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VAN KAICK MIA",
          "transactionType": 0,
          "usage": "24 DEZEMBER 2016  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 1.685,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  09.12  103538  ",
          "amount": -8.99,
          "currency": "EUR",
          "balance": 685.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sebastian Goersch",
          "transactionType": 2,
          "usage": "Fuer euch  ",
          "amount": -120,
          "currency": "EUR",
          "balance": 694.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Smartphone  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 814.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F16014158554 14,27 EUR  ",
          "amount": -14.27,
          "currency": "EUR",
          "balance": 1.014,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 1.028,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-14T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  08.12  104845  ",
          "amount": -70.84,
          "currency": "EUR",
          "balance": 1.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Dr. med. dent. B. Graml",
          "transactionType": 2,
          "usage": "Rechnungsnr. 576/2016, 1/480/20  ",
          "amount": -72.96,
          "currency": "EUR",
          "balance": 1.101,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1.5,
          "currency": "EUR",
          "balance": 1.174,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -150,
          "currency": "EUR",
          "balance": -325.56,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Stb Jessica Carraro",
          "transactionType": 2,
          "usage": "Rechnungsnr. 129 / Mandantennr.  10048  ",
          "amount": -178.5,
          "currency": "EUR",
          "balance": -175.56,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "V092588243  ",
          "amount": -288.86,
          "currency": "EUR",
          "balance": 2.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-08T23:00:00.000Z",
          "accountedDate": "2016-12-13T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  07.12  184438  ",
          "amount": -9.99,
          "currency": "EUR",
          "balance": 291.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-07T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  06.12  061501  ",
          "amount": -24.99,
          "currency": "EUR",
          "balance": 301.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-07T23:00:00.000Z",
          "accountedDate": "2016-12-07T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BLANKSGMBHC, Ihr Einka  uf bei BLANKSGMBHC  ",
          "amount": -17.75,
          "currency": "EUR",
          "balance": 326.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-06T23:00:00.000Z",
          "accountedDate": "2016-12-06T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 344.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-08T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  03.12  123113  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 352.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-05T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 12/16 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.49,
          "currency": "EUR",
          "balance": 367.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-05T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 385,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-05T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -36.32,
          "currency": "EUR",
          "balance": 387,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-07T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  01.12  030943  ",
          "amount": -24.99,
          "currency": "EUR",
          "balance": 423.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-04T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-12-03T11:27:37 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -22.76,
          "currency": "EUR",
          "balance": 448.31,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-04T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Tanja Bischoff",
          "transactionType": 2,
          "usage": "Liquidationsnr. 201611003  ",
          "amount": -75,
          "currency": "EUR",
          "balance": 471.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-04T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 546.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-01T23:00:00.000Z",
          "accountedDate": "2016-12-01T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -1.5,
          "currency": "EUR",
          "balance": -453.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": -452.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-12-05T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  28.11  143408  ",
          "amount": -6.95,
          "currency": "EUR",
          "balance": -1.062,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.12.2016-31.12.2016-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": -1.055,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Dezember 2016/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": -995.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 28  .11.16 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 151.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 11/2016 Sabrina Goersch  ",
          "amount": -55.19,
          "currency": "EUR",
          "balance": 152.95,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 208.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833 32932308BH238????EHPL2016-11-2  9  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 888.64,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 951.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018, Abschlag Monat: 12  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 991.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:12.  16  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 1.059,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-29T23:00:00.000Z",
          "accountedDate": "2016-11-29T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Mikeska",
          "transactionType": 1,
          "usage": "Rahmenkredit  Monatliche Zinsen  11/2016  ",
          "amount": -0.73,
          "currency": "EUR",
          "balance": 1.122,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-29T23:00:00.000Z",
          "accountedDate": "2016-12-04T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  28.11  033207  ",
          "amount": -17.97,
          "currency": "EUR",
          "balance": 1.123,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-29T23:00:00.000Z",
          "accountedDate": "2016-11-29T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 12 16 Beitrag 36.79  ",
          "amount": -56.69,
          "currency": "EUR",
          "balance": 1.141,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-29T23:00:00.000Z",
          "accountedDate": "2016-11-29T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 1.198,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-11-26T18:36:58 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -69.73,
          "currency": "EUR",
          "balance": 1.566,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "BABYSMILE FOTOGRAFIE",
          "transactionType": 1,
          "usage": "BABY SMILE FOTOGRAF//CHEMNITZ/DE 20  16-11-25T13:14:00 Folgenr.000 Verfa  lld.2018-12  ",
          "amount": -39.9,
          "currency": "EUR",
          "balance": 1.636,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gehalt November 2016 etage3 design+  digital GmbH  ",
          "amount": 1.364,
          "currency": "EUR",
          "balance": 1.675,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 311.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-24T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": 313.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-22T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR6830245024 AUDIBLE.DE/    KAUFUMSATZ  21.11  134250  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 1.363,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-22T23:00:00.000Z",
          "accountedDate": "2016-11-22T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2496421926 VERKAUF 21.11  .2016 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 1.373,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-17T23:00:00.000Z",
          "accountedDate": "2016-11-16T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245024 BUERGEL    BARGELDAUSZAHLUNG  16.11  130605  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.073,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-16T23:00:00.000Z",
          "accountedDate": "2016-11-16T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "KST 60009",
          "transactionType": 1,
          "usage": "APCOA PARKING DEUTSCHLAND//STUTTGAR  T/DE 2016-11-15T09:15:48 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -3.6,
          "currency": "EUR",
          "balance": 1.163,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-15T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2016-11-15T17:11:06 Folgenr.000  Verfalld.2018-12  ",
          "amount": -8.89,
          "currency": "EUR",
          "balance": 1.166,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-15T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-11-15T10:07:07 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -78.04,
          "currency": "EUR",
          "balance": 1.175,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-15T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . WWW.IKEA.DE, Ihr Einka  uf bei WWW.IKEA.DE  ",
          "amount": -28.86,
          "currency": "EUR",
          "balance": 1.253,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-15T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABYZEITENG, Ihr Einka  uf bei BABYZEITENG  ",
          "amount": -26.3,
          "currency": "EUR",
          "balance": 1.282,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-15T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Haftpflichtkasse Darmstadt",
          "transactionType": 1,
          "usage": "29620929 Beitrag 04.11.16  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 1.308,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-14T23:00:00.000Z",
          "accountedDate": "2016-11-14T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Gemeinde Biebergemund Gemeindekasse",
          "transactionType": 1,
          "usage": "108496-200-1 GRUNDBESITZABGABEN FRI  EDRICH-KRUPP-STRASSE 19  ",
          "amount": -22.09,
          "currency": "EUR",
          "balance": 1.323,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-14T23:00:00.000Z",
          "accountedDate": "2016-11-14T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "HORNBACH FRANKFURT",
          "transactionType": 1,
          "usage": "121117120166933181200005240 ELV6522  0613 12.11 17.12 ME0  ",
          "amount": -43.98,
          "currency": "EUR",
          "balance": 1.345,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "ABOUT YOU GmbH - RatePAY GmbH",
          "transactionType": 2,
          "usage": "DG3192264G0  ",
          "amount": -112.97,
          "currency": "EUR",
          "balance": 1.389,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "BABYONE",
          "transactionType": 1,
          "usage": "BABYONE FRANCHISE- UND SYS//MUENSTE  R/DE 2016-11-12T18:14:30 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 1.502,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "KST 60009",
          "transactionType": 1,
          "usage": "APCOA PARKING DEUTSCHLAND//STUTTGAR  T/DE 2016-11-11T13:27:43 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -3.6,
          "currency": "EUR",
          "balance": 1.512,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 1.516,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-10T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . LIMAS, Ihr Einkauf bei  LIMAS  ",
          "amount": -119,
          "currency": "EUR",
          "balance": 1.526,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-10T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -2.08,
          "currency": "EUR",
          "balance": 1.645,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-10T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GESCHENKIDE, Ihr Einka  uf bei GESCHENKIDE  ",
          "amount": -34.8,
          "currency": "EUR",
          "balance": 1.647,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-10T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "V092588243  ",
          "amount": -288.86,
          "currency": "EUR",
          "balance": 1.682,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-09T23:00:00.000Z",
          "accountedDate": "2016-11-09T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F16012843314 12,29 EUR  ",
          "amount": -12.29,
          "currency": "EUR",
          "balance": 1.971,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-08T23:00:00.000Z",
          "accountedDate": "2016-11-08T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-11-08T12:54:07 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -23.58,
          "currency": "EUR",
          "balance": 1.983,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-08T23:00:00.000Z",
          "accountedDate": "2016-11-08T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "JET TANKSTELLEN DEUTSCHLAND",
          "transactionType": 1,
          "usage": "071110300025781181200001400 OLV8554  3089 07.11 10.30 ME0  ",
          "amount": -44.48,
          "currency": "EUR",
          "balance": 2.007,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-07T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-11-07T14:33:03 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -63.23,
          "currency": "EUR",
          "balance": 2.051,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-07T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX.COM, Ihr Einka  uf bei NETFLIX.COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 2.114,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-07T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 2.122,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "SCHECK, IN-EINKAUFS-CENTER//ACHERN/DE",
          "transactionType": 1,
          "usage": "SCHECK IN CENTER FRANKFURT//ACHERN/  DE 2016-11-04T11:57:41 Folgenr.000  Verfalld.2018-12  ",
          "amount": -64.1,
          "currency": "EUR",
          "balance": 2.124,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2016-11-04T14:14:05 Folgenr.000  Verfalld.2018-12  ",
          "amount": -30.52,
          "currency": "EUR",
          "balance": 2.188,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-11-05T14:47:03 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -133.39,
          "currency": "EUR",
          "balance": 2.219,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DIEBESTENST, Ihr Einka  uf bei DIEBESTENST  ",
          "amount": -115.9,
          "currency": "EUR",
          "balance": 2.352,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 11/16 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.49,
          "currency": "EUR",
          "balance": 2.468,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Regierungspraesidium Kassel",
          "transactionType": 2,
          "usage": "1523005223 / OF-E 373  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 2.486,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-02T23:00:00.000Z",
          "accountedDate": "2016-11-02T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Uebertrag  ",
          "amount": -11,
          "currency": "EUR",
          "balance": 2.506,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-02T23:00:00.000Z",
          "accountedDate": "2016-11-02T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Rundfunk ARD, ZDF, DRadio",
          "transactionType": 2,
          "usage": "RF24X630562441  ",
          "amount": -52.5,
          "currency": "EUR",
          "balance": 13.506,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-02T23:00:00.000Z",
          "accountedDate": "2016-11-02T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Ausgleich  ",
          "amount": -1.5,
          "currency": "EUR",
          "balance": 13.558,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA KREISSPARKASSE GELNHAU                           ",
          "transactionType": 1,
          "usage": "NR6830245024 KSK HAITZ1    BARGELDAUSZAHLUNG  31.10  110349  ",
          "amount": -120,
          "currency": "EUR",
          "balance": 15.058,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA KREISSPARKASSE GELNHAU                           ",
          "transactionType": 1,
          "usage": "NR6830245024 KSK HAITZ1    BARGELDAUSZAHLUNG  31.10  110250  ",
          "amount": -110,
          "currency": "EUR",
          "balance": 15.178,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-11-01T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "STADT OFFENBACH",
          "transactionType": 1,
          "usage": "STADT OFFENBACH BUERGERBUERO//OFFEN  BACH/DE 2016-11-01T10:00:16 Folgenr  .000 Verfalld.2018-12  ",
          "amount": -87.8,
          "currency": "EUR",
          "balance": 15.288,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-11-01T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 10/2016 Sabrina Goersch  ",
          "amount": -52.43,
          "currency": "EUR",
          "balance": 15.376,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-11-01T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 15.428,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 15.468,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2495959752 VERKAUF 28.10  .2016 WKN 847191  ",
          "amount": 9.071,
          "currency": "EUR",
          "balance": 14.858,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2495959751 VERKAUF 28.10  .2016 WKN 164321  ",
          "amount": 5.163,
          "currency": "EUR",
          "balance": 5.787,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 27  .10.16 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 623.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete November 2016/ 1.147,42 EURO/  ",
          "amount": -1.147,
          "currency": "EUR",
          "balance": 624.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.11.2016-30.11.2016-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 1.772,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 1.832,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 1.894,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018, Abschlag Monat: 11  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 2.575,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:11.  16  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 2.643,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-30T23:00:00.000Z",
          "accountedDate": "2016-10-29T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Mikeska",
          "transactionType": 1,
          "usage": "Rahmenkredit  Monatliche Zinsen  10/2016  ",
          "amount": -2.43,
          "currency": "EUR",
          "balance": 2.707,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-30T23:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . GOOGLE PLAY, Ihr Einka  uf bei GOOGLE PLAY  ",
          "amount": -0.99,
          "currency": "EUR",
          "balance": 2.709,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-30T23:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 11 16 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 2.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-30T23:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 2.747,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-27T22:00:00.000Z",
          "accountedDate": "2016-10-27T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gehalt Oktober 2016 inkl. Urlaubsab  geltung etage3 design+digital GmbH  ",
          "amount": 2.103,
          "currency": "EUR",
          "balance": 3.115,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-26T22:00:00.000Z",
          "accountedDate": "2016-10-26T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Dietmar und Isabella Landgraf",
          "transactionType": 2,
          "usage": "Pecorina Lammfell - eBay  Kleinanzeigen  ",
          "amount": -26,
          "currency": "EUR",
          "balance": 1.011,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-26T22:00:00.000Z",
          "accountedDate": "2016-10-26T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -1.99,
          "currency": "EUR",
          "balance": 1.037,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-25T22:00:00.000Z",
          "accountedDate": "2016-10-25T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Dr. Leber Datentechnik",
          "transactionType": 2,
          "usage": "Rechnungs-Nr. H600051621 vom  21.10.2016, Sabrina Goersch  ",
          "amount": -10.7,
          "currency": "EUR",
          "balance": 1.039,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-25T22:00:00.000Z",
          "accountedDate": "2016-10-25T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Ausgleich kurzfristig  ",
          "amount": 1.5,
          "currency": "EUR",
          "balance": 1.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-27T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR6830245024 AUDIBLE.DE/    KAUFUMSATZ  21.10  142627  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": -449.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-24T13:30:32 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -90.23,
          "currency": "EUR",
          "balance": -439.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": -349.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISTAPRINTB, Ihr Einka  uf bei VISTAPRINTB  ",
          "amount": -10.98,
          "currency": "EUR",
          "balance": -339.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -35.14,
          "currency": "EUR",
          "balance": -328.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -1.05,
          "currency": "EUR",
          "balance": -293.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-23T22:00:00.000Z",
          "accountedDate": "2016-10-23T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-21T15:05:55 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -145.62,
          "currency": "EUR",
          "balance": 756.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-23T22:00:00.000Z",
          "accountedDate": "2016-10-23T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2495865268 VERKAUF 20.10  .2016 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 902.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-23T22:00:00.000Z",
          "accountedDate": "2016-10-23T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Conrad Electronic SE",
          "transactionType": 2,
          "usage": "1969332868  ",
          "amount": -29.12,
          "currency": "EUR",
          "balance": 602.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-19T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  18.10  124214  ",
          "amount": -29.99,
          "currency": "EUR",
          "balance": 631.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-19T22:00:00.000Z",
          "accountedDate": "2016-10-19T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ERNSTINGSFA, Ihr Einka  uf bei ERNSTINGSFA  ",
          "amount": -23.45,
          "currency": "EUR",
          "balance": 661.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-18T22:00:00.000Z",
          "accountedDate": "2016-10-18T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "KST 60009",
          "transactionType": 1,
          "usage": "APCOA PARKING DEUTSCHLAND//STUTTGAR  T/DE 2016-10-17T11:02:20 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -7.2,
          "currency": "EUR",
          "balance": 685.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-18T22:00:00.000Z",
          "accountedDate": "2016-10-18T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-18T15:46:25 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -73.03,
          "currency": "EUR",
          "balance": 692.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-18T22:00:00.000Z",
          "accountedDate": "2016-10-18T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ONLINEPETSB, Ihr Einka  uf bei ONLINEPETSB  ",
          "amount": -50.75,
          "currency": "EUR",
          "balance": 765.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-17T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR6830245024 OFFENBACH    BARGELDAUSZAHLUNG  15.10  092914  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 816.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-17T22:00:00.000Z",
          "accountedDate": "2016-10-17T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-17T11:48:14 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -79.68,
          "currency": "EUR",
          "balance": 876.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Audible GmbH",
          "transactionType": 2,
          "usage": "54965228135041  ",
          "amount": -12.95,
          "currency": "EUR",
          "balance": 955.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Zalando SE",
          "transactionType": 2,
          "usage": "10103101010519  ",
          "amount": -74.95,
          "currency": "EUR",
          "balance": 968.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Verbaudet Deutschland GmbH",
          "transactionType": 2,
          "usage": "KDNR 3622460210  ",
          "amount": -77.92,
          "currency": "EUR",
          "balance": 1.043,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "MVZ Dr. med. H. Riegel GmbH",
          "transactionType": 2,
          "usage": "PR 1610 2306 v. 12.10.  ",
          "amount": -19.44,
          "currency": "EUR",
          "balance": 1.121,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Stadt Offenbach Ordnungsamt",
          "transactionType": 2,
          "usage": "Aktenzeichen 4087811196 /  Kennzeichen OF E 373  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 1.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-15T16:10:54 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -43.87,
          "currency": "EUR",
          "balance": 1.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65347//OFFENBACH/DE 2  016-10-15T16:14:47 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -5.75,
          "currency": "EUR",
          "balance": 1.204,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "AMAZON MEDIA EU SARL",
          "transactionType": 1,
          "usage": "D01-7579459-3690604 AMZN.COM/bill 1  688245090332421  ",
          "amount": -1.29,
          "currency": "EUR",
          "balance": 1.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DHL OL, Ihr Einkauf be  i DHL OL  ",
          "amount": -42.99,
          "currency": "EUR",
          "balance": 1.211,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . PLANETCARDS, Ihr Einka  uf bei PLANETCARDS  ",
          "amount": -42.75,
          "currency": "EUR",
          "balance": 1.254,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-11T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA FRANKFURTER VOLKSBANK                            ",
          "transactionType": 1,
          "usage": "NR6830245024 FOYER    BARGELDAUSZAHLUNG  11.10  105820  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.297,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "ESSO DEUTSCHLAND GMBH",
          "transactionType": 1,
          "usage": "ESSO DEUTSCHLAND GMBH//Offenbach/DE  2016-10-12T19:18:43 Folgenr.000 Ve  rfalld.2018-12  ",
          "amount": -59.07,
          "currency": "EUR",
          "balance": 1.387,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "DANKE, SAGT IHR REAL TEAM",
          "transactionType": 1,
          "usage": "111011410000105181231938240 ELV6539  5218 11.10 11.41 ME0  ",
          "amount": -32.98,
          "currency": "EUR",
          "balance": 1.446,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F16011522244 12,58 EUR  ",
          "amount": -12.58,
          "currency": "EUR",
          "balance": 1.479,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Ausgleich  ",
          "amount": -1.5,
          "currency": "EUR",
          "balance": 1.492,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-11T22:00:00.000Z",
          "accountedDate": "2016-10-11T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VAN KAICK MIA",
          "transactionType": 0,
          "usage": "MUTTER + KIND  ",
          "amount": 2.5,
          "currency": "EUR",
          "balance": 2.992,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-11T22:00:00.000Z",
          "accountedDate": "2016-10-11T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "BARMER GEK",
          "transactionType": 0,
          "usage": "768333792750 546,00- LEISTUNG VOM 2  6.09.2016 BIS 06. 11.2016 400000027  2285306  ",
          "amount": 546,
          "currency": "EUR",
          "balance": 492.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-11T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  10.10  111253  ",
          "amount": -22.79,
          "currency": "EUR",
          "balance": -53.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-11T22:00:00.000Z",
          "accountedDate": "2016-10-11T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "HORNBACH FRANKFURT",
          "transactionType": 1,
          "usage": "101017400159715181200005240 ELV6522  0613 10.10 17.40 ME0  ",
          "amount": -40.15,
          "currency": "EUR",
          "balance": -30.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-13T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AMAZON DOWNLOADS                                 ",
          "transactionType": 1,
          "usage": "NR6830245024 AMAZON.DE   LU    KAUFUMSATZ  09.10  104732  ",
          "amount": -23.95,
          "currency": "EUR",
          "balance": 9.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-13T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  07.10  092339  ",
          "amount": -14.39,
          "currency": "EUR",
          "balance": 33.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-10T18:31:18 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -81.3,
          "currency": "EUR",
          "balance": 47.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . WWW.IKEA.DE, Ihr Einka  uf bei WWW.IKEA.DE  ",
          "amount": -43.84,
          "currency": "EUR",
          "balance": 128.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . KP FAMILY, Ihr Einkauf  bei KP FAMILY  ",
          "amount": -68.37,
          "currency": "EUR",
          "balance": 172.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "V092588243  ",
          "amount": -288.86,
          "currency": "EUR",
          "balance": 241.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-09T22:00:00.000Z",
          "accountedDate": "2016-10-09T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . BABY MARKT, Ihr Einkau  f bei BABY MARKT  ",
          "amount": -154.18,
          "currency": "EUR",
          "balance": 529.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-09T22:00:00.000Z",
          "accountedDate": "2016-10-09T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . STIFTSAPOTH, Ihr Einka  uf bei STIFTSAPOTH  ",
          "amount": -20.89,
          "currency": "EUR",
          "balance": 684.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-09T22:00:00.000Z",
          "accountedDate": "2016-10-09T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Kerstin Ursinus",
          "transactionType": 2,
          "usage": "B200079012  ",
          "amount": -50,
          "currency": "EUR",
          "balance": 704.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Vertbaudet Deutschland GmbH",
          "transactionType": 2,
          "usage": "KDNR 3622460210  ",
          "amount": -52.93,
          "currency": "EUR",
          "balance": 754.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebergang  ",
          "amount": 1.5,
          "currency": "EUR",
          "balance": 807.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "wie ausgemacht  ",
          "amount": -550,
          "currency": "EUR",
          "balance": -692.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . NETFLIX COM, Ihr Einka  uf bei NETFLIX COM  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": -142.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -54.02,
          "currency": "EUR",
          "balance": -134.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-05T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Restaurant Kanouhou",
          "transactionType": 2,
          "usage": "Hochzeitsessen 24.09.  ",
          "amount": -975.3,
          "currency": "EUR",
          "balance": -80.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA EVEREST HRAKLEIO TRANS                           ",
          "transactionType": 1,
          "usage": "NR6830245024 IRAKLEIO    GR    KAUFUMSATZ  03.10  092739  ",
          "amount": -4.45,
          "currency": "EUR",
          "balance": 895.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-05T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . MICROSOFT, Ihr Einkauf  bei MICROSOFT  ",
          "amount": -2,
          "currency": "EUR",
          "balance": 899.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-05T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "IKEA 393 FRANKFURT",
          "transactionType": 1,
          "usage": "ELV54000458 04.10 13.23 ME0  ",
          "amount": -434.11,
          "currency": "EUR",
          "balance": 901.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-05T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "IKEA 393 FRANKFURT",
          "transactionType": 1,
          "usage": "ELV54091267 04.10 10.13 ME0  ",
          "amount": -13.16,
          "currency": "EUR",
          "balance": 1.335,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA EUROBANK ATM S1A00A22/                           ",
          "transactionType": 1,
          "usage": "NR6830245024 BALI RETHIM GR    BARGELDAUSZAHLUNG  01.10  205412  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 1.348,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA REISEBANK FRANKFURT AT                           ",
          "transactionType": 1,
          "usage": "NR6830245024 FRANKFURT    BARGELDAUSZAHLUNG  03.10 14.12 UHR  141251  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.448,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-09T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA ANTONAKI MARIA                                   ",
          "transactionType": 1,
          "usage": "NR6830245024 RETHIMNO    GR    KAUFUMSATZ  29.09  125926  ",
          "amount": -134,
          "currency": "EUR",
          "balance": 1.538,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Axel Beck",
          "transactionType": 0,
          "usage": "Finanzausgleich Teil 2  ",
          "amount": 400,
          "currency": "EUR",
          "balance": 1.672,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-10-04T16:40:09 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -65.31,
          "currency": "EUR",
          "balance": 1.272,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . FRESSNAPF, Ihr Einkauf  bei FRESSNAPF  ",
          "amount": -59.9,
          "currency": "EUR",
          "balance": 1.338,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Allg.Deutscher Automobil-Club ADAC e.V.",
          "transactionType": 1,
          "usage": "KRANKENSCHUTZ-BEITRAG FALLIG: 30.09  .16 GORSCH, SABRINA ADAC-SCHUTZBRIE  F VERS.-AG  ",
          "amount": -6.8,
          "currency": "EUR",
          "balance": 1.398,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 10/16 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.49,
          "currency": "EUR",
          "balance": 1.404,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 1.422,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA EKO                                              ",
          "transactionType": 1,
          "usage": "NR6830245024 IRAKLEIO    GR    KAUFUMSATZ  28.09  130247  ",
          "amount": -50.01,
          "currency": "EUR",
          "balance": 812.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA TAPA                                             ",
          "transactionType": 1,
          "usage": "NR6830245024 XANTHOUDIDO GR    KAUFUMSATZ  28.09  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 862.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "SANTANDER CONSUMER BANK AG",
          "transactionType": 1,
          "usage": "CleverCard direct ABRECHNUNG VOM 28  .09.16 67229400990051247380  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 882.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 883.45,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 09/2016 Sabrina Goersch  ",
          "amount": -51.98,
          "currency": "EUR",
          "balance": -116.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": -64.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:10.  16  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": -24.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.10.2016-31.10.2016-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 39.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "Miete Oktober 2016/ 1.147,42 EURO/N  ebenkostenabrechnung 2015/ 50,57 EU  RO/  ",
          "amount": -1.197,
          "currency": "EUR",
          "balance": 99.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018  ",
          "amount": -233.75,
          "currency": "EUR",
          "balance": 1.297,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-03T22:00:00.000Z",
          "accountedDate": "2016-10-03T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "KN:14018, Monat: 10  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 1.531,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-02T22:00:00.000Z",
          "accountedDate": "2016-10-02T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": 1.599,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-02T22:00:00.000Z",
          "accountedDate": "2016-10-02T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 2.279,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-29T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "",
          "transactionType": null,
          "usage": "",
          "amount": -2.64,
          "currency": "EUR",
          "balance": 2.341,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-29T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gehalt September 2016 + Heirats/Kin  derpramie etage3 design+digital Gmb  H  ",
          "amount": 2.013,
          "currency": "EUR",
          "balance": 2.344,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-28T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA ELEFTHERIAS SQ. 11                               ",
          "transactionType": 1,
          "usage": "NR6830245024 HERAKLIO    GR    BARGELDAUSZAHLUNG  28.09  165630  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 331.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-29T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 10 16 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": 531.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-29T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 568.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-27T22:00:00.000Z",
          "accountedDate": "2016-09-26T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR6830245024 CINEMAXX    BARGELDAUSZAHLUNG  26.09  092059  ",
          "amount": -50,
          "currency": "EUR",
          "balance": 936.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-27T22:00:00.000Z",
          "accountedDate": "2016-10-02T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  26.09  194223  ",
          "amount": -34.95,
          "currency": "EUR",
          "balance": 986.19,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-27T22:00:00.000Z",
          "accountedDate": "2016-09-27T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -3.98,
          "currency": "EUR",
          "balance": 1.021,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-26T22:00:00.000Z",
          "accountedDate": "2016-09-26T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "CONDOR Flugdienst GmbH",
          "transactionType": 1,
          "usage": "2009643747Vorg. 9643747 Vers. 03 46  897 GOERSCHSABRINA  ",
          "amount": -59.98,
          "currency": "EUR",
          "balance": 1.025,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-25T22:00:00.000Z",
          "accountedDate": "2016-09-25T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "HAARSTUDIO OCHS",
          "transactionType": 1,
          "usage": "Haarstudio Ochs, Pe//Offenbach/DE 2  016-09-24T09:42:20 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -99,
          "currency": "EUR",
          "balance": 1.085,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-25T22:00:00.000Z",
          "accountedDate": "2016-09-25T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-23T19:14:48 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -20.93,
          "currency": "EUR",
          "balance": 1.184,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-25T22:00:00.000Z",
          "accountedDate": "2016-09-25T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-23T18:57:21 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -177.48,
          "currency": "EUR",
          "balance": 1.205,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-25T22:00:00.000Z",
          "accountedDate": "2016-09-25T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -500,
          "currency": "EUR",
          "balance": 1.382,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-22T22:00:00.000Z",
          "accountedDate": "2016-09-22T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 273.38,
          "currency": "EUR",
          "balance": 1.882,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-21T22:00:00.000Z",
          "accountedDate": "2016-09-21T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2495241962 VERKAUF 20.09  .2016 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 1.609,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-20T22:00:00.000Z",
          "accountedDate": "2016-09-20T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Car insurance  ",
          "amount": -850,
          "currency": "EUR",
          "balance": 1.309,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-20T22:00:00.000Z",
          "accountedDate": "2016-09-20T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebertrag Autoversicherung und  Urlaub  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 2.159,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-20T22:00:00.000Z",
          "accountedDate": "2016-09-20T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "AMAZON EU S.A R.L., NIEDERLASSUNG DEUTSCHLAND",
          "transactionType": 1,
          "usage": "304-2044474-8608334 Amazon.de 03157  77769569210  ",
          "amount": -5.99,
          "currency": "EUR",
          "balance": 159.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-19T22:00:00.000Z",
          "accountedDate": "2016-09-19T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "BACIO DORO GMBH BAD HOMBURG",
          "transactionType": 1,
          "usage": "Bacio Doro Schmuckv//Bad Homburg v.  d./DE 2016-09-19T19:31:09 Folgenr.  000 Verfalld.2018-12  ",
          "amount": -301,
          "currency": "EUR",
          "balance": 165.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-19T22:00:00.000Z",
          "accountedDate": "2016-09-19T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-19T20:33:25 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -23.26,
          "currency": "EUR",
          "balance": 466.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-19T22:00:00.000Z",
          "accountedDate": "2016-09-19T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 259.75,
          "currency": "EUR",
          "balance": 489.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "GALERIA KAUFHOF GMBH FFM",
          "transactionType": 1,
          "usage": "Galeria Kaufhof Frankfurt//Frankfur  t/DE 2016-09-17T19:01:53 Folgenr.00  0 Verfalld.2018-12  ",
          "amount": -119.99,
          "currency": "EUR",
          "balance": 229.63,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VAPIANO",
          "transactionType": 1,
          "usage": "VAPIANO//Frankfurt am Main/DE 2016-  09-16T22:02:14 Folgenr.000 Verfalld  .2018-12  ",
          "amount": -24,
          "currency": "EUR",
          "balance": 349.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "P+C SAGT DANKE",
          "transactionType": 1,
          "usage": "P+C SAGT DANKE//Frankfurt/DE 2016-0  9-17T16:49:07 Folgenr.000 Verfalld.  2018-12  ",
          "amount": -79.9,
          "currency": "EUR",
          "balance": 373.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2016-09-17T13:07:43 Folgenr.000  Verfalld.2018-12  ",
          "amount": -39.2,
          "currency": "EUR",
          "balance": 453.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 0,
          "usage": "PP.3981.PP ABBUCHUNG VOM PAYPAL-KON  TO  ",
          "amount": 698.96,
          "currency": "EUR",
          "balance": 492.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-18T22:00:00.000Z",
          "accountedDate": "2016-09-18T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-17T13:36:38 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -97.5,
          "currency": "EUR",
          "balance": -206.24,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-15T22:00:00.000Z",
          "accountedDate": "2016-09-20T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  14.09  132545  ",
          "amount": -13.92,
          "currency": "EUR",
          "balance": -108.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-15T22:00:00.000Z",
          "accountedDate": "2016-09-20T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  14.09  135439  ",
          "amount": -115.46,
          "currency": "EUR",
          "balance": -94.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-15T22:00:00.000Z",
          "accountedDate": "2016-09-15T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Otto Gmbh und Co KG",
          "transactionType": 2,
          "usage": "Kundennr. 21707797 / RE-Nr. W  1099980 / RE-Nr. W 1018251 / RE-Nr.  W 1107700  ",
          "amount": -78.87,
          "currency": "EUR",
          "balance": 20.64,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-15T22:00:00.000Z",
          "accountedDate": "2016-09-15T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-15T19:15:18 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -29.34,
          "currency": "EUR",
          "balance": 99.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-15T22:00:00.000Z",
          "accountedDate": "2016-09-15T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . VISIONISTAS, Ihr Einka  uf bei VISIONISTAS  ",
          "amount": -31.36,
          "currency": "EUR",
          "balance": 128.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-14T22:00:00.000Z",
          "accountedDate": "2016-09-14T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . LIMANGOGMBH, Ihr Einka  uf bei LIMANGOGMBH  ",
          "amount": -79.94,
          "currency": "EUR",
          "balance": 160.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-13T22:00:00.000Z",
          "accountedDate": "2016-09-13T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 240.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-13T22:00:00.000Z",
          "accountedDate": "2016-09-13T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DP AG, Ihr Einkauf bei  DP AG  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 250.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-13T22:00:00.000Z",
          "accountedDate": "2016-09-13T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . 321LINSEN, Ihr Einkauf  bei 321LINSEN  ",
          "amount": -75.88,
          "currency": "EUR",
          "balance": 270.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-12T22:00:00.000Z",
          "accountedDate": "2016-09-11T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR6830245024 GELNHAUSEN    BARGELDAUSZAHLUNG  11.09 18.21 UHR  182154  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 346.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-12T22:00:00.000Z",
          "accountedDate": "2016-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Otto GmbH und Co KG",
          "transactionType": 2,
          "usage": "Kunden-Nr. 21707797 / Rechnungs-Nr.  W 1070970  ",
          "amount": -104.91,
          "currency": "EUR",
          "balance": 446.03,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-12T22:00:00.000Z",
          "accountedDate": "2016-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Axel Beck",
          "transactionType": 0,
          "usage": "Finanzausgleich  ",
          "amount": 400,
          "currency": "EUR",
          "balance": 550.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-12T22:00:00.000Z",
          "accountedDate": "2016-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052959794 Wir sagen danke. RG-N  r. F16010122812 13,30 EUR  ",
          "amount": -13.3,
          "currency": "EUR",
          "balance": 150.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-11T22:00:00.000Z",
          "accountedDate": "2016-09-14T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR6830245024 800-279-662 LU    KAUFUMSATZ  08.09  104940  ",
          "amount": -12.99,
          "currency": "EUR",
          "balance": 164.24,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-11T22:00:00.000Z",
          "accountedDate": "2016-09-11T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-09T18:32:52 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -105.35,
          "currency": "EUR",
          "balance": 177.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-08T22:00:00.000Z",
          "accountedDate": "2016-09-08T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . tigabei, Ihr Einkauf b  ei tigabei, Artikel-321498049676  ",
          "amount": -21.47,
          "currency": "EUR",
          "balance": 282.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-06T22:00:00.000Z",
          "accountedDate": "2016-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65349//OFFENBACH/DE 2  016-09-06T20:30:52 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -24.35,
          "currency": "EUR",
          "balance": 304.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-06T22:00:00.000Z",
          "accountedDate": "2016-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ENVIEDEFRAI, Ihr Einka  uf bei ENVIEDEFRAI  ",
          "amount": -201.96,
          "currency": "EUR",
          "balance": 328.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-05T18:46:52 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -94.41,
          "currency": "EUR",
          "balance": 530.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "SKY DEUTSCHLAND FER.",
          "transactionType": 1,
          "usage": "44372788 09/16 SKY ABO - MEHR INFO  AUF SKY.DE/KONTO  ",
          "amount": -17.49,
          "currency": "EUR",
          "balance": 624.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ABOUTYOUGMB, Ihr Einka  uf bei ABOUTYOUGMB  ",
          "amount": -309.7,
          "currency": "EUR",
          "balance": 642.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-04T22:00:00.000Z",
          "accountedDate": "2016-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-09-02T21:09:34 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -18.58,
          "currency": "EUR",
          "balance": 951.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-04T22:00:00.000Z",
          "accountedDate": "2016-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . RHEINMAINTH, Ihr Einka  uf bei RHEINMAINTH  ",
          "amount": -39,
          "currency": "EUR",
          "balance": 970.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-04T22:00:00.000Z",
          "accountedDate": "2016-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . saxonia-handel, Ihr Ei  nkauf bei saxonia-handel, Artikel-3  81514071990  ",
          "amount": -11.94,
          "currency": "EUR",
          "balance": 1.009,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-01T22:00:00.000Z",
          "accountedDate": "2016-09-01T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Geburtsvorbereitung  ",
          "amount": -80,
          "currency": "EUR",
          "balance": 1.021,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-01T22:00:00.000Z",
          "accountedDate": "2016-09-01T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "APOTHEKE IM HAFENZENTRUM",
          "transactionType": 1,
          "usage": "APOTHEKE IM HAFENZENTRUM//OFFENBACH  /DE 2016-09-01T10:18:46 Folgenr.000  Verfalld.2018-12  ",
          "amount": -5,
          "currency": "EUR",
          "balance": 1.101,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Wenzel Patrick",
          "transactionType": 0,
          "usage": "Miete  ",
          "amount": 610,
          "currency": "EUR",
          "balance": 1.106,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 284915 LT. CABLESURF/ FON V  ERTRAG: 08/2016 Sabrina Goersch  ",
          "amount": -52.25,
          "currency": "EUR",
          "balance": 496.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . HOCHZEITIDE, Ihr Einka  uf bei HOCHZEITIDE  ",
          "amount": -30.85,
          "currency": "EUR",
          "balance": 548.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . TIFFANYROSE, Ihr Einka  uf bei TIFFANYROSE  ",
          "amount": -610,
          "currency": "EUR",
          "balance": 579.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . ASOSCOMLTD, Ihr Einkau  f bei ASOSCOMLTD  ",
          "amount": -318.96,
          "currency": "EUR",
          "balance": 1.189,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "EREF+20160801-2100L MV 13750-011/ 3  ,00 EURO/Miete September 2016/ 1.14  7,42 EURO/  ",
          "amount": -1.15,
          "currency": "EUR",
          "balance": 1.508,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "ABG FRANKFURT HOLDING Wohnungsbau- und Beteiligungsgesellschaft mbH",
          "transactionType": 1,
          "usage": "01.09.2016-30.09.2016-Miete Gar./ 6  0,00 EURO/  ",
          "amount": -60,
          "currency": "EUR",
          "balance": 2.658,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "PROENGENO GmbH + Co. KG",
          "transactionType": 1,
          "usage": "Abschlag KN: 14018, ID: 116417-16-0  9  ",
          "amount": -68,
          "currency": "EUR",
          "balance": 2.718,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VOLKSWOHL BUND Lebensversicherung a.G.",
          "transactionType": 1,
          "usage": "039306665 LA001244048/ 039306665 FO  NDS 40,00  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 2.786,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Santander Consumer Bank",
          "transactionType": 1,
          "usage": "FINANZIERUNGSNR.9325904740 BLZ.3101  0833  ",
          "amount": -62.45,
          "currency": "EUR",
          "balance": 2.826,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-31T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "ALTE LEIPZIGER LEBEN",
          "transactionType": 1,
          "usage": "Vers-Nr:00009617625-Ihr Beitrag:09.  16  ",
          "amount": -63.85,
          "currency": "EUR",
          "balance": 2.889,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Goersch",
          "transactionType": 1,
          "usage": "Rahmenkredit  Monatliche Zinsen  08/2016  ",
          "amount": -1.7,
          "currency": "EUR",
          "balance": 2.953,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Urlaub  ",
          "amount": -350,
          "currency": "EUR",
          "balance": 2.954,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gehalt August 2016 etage3 design+di  gital GmbH  ",
          "amount": 1.491,
          "currency": "EUR",
          "balance": 3.304,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Hochzeit  ",
          "amount": 2,
          "currency": "EUR",
          "balance": 1.813,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "purfitness Obertshausen GmbH",
          "transactionType": 1,
          "usage": "V-Nr. 3070 09 16 Beitrag 36.79  ",
          "amount": -36.79,
          "currency": "EUR",
          "balance": -186.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VR Bank Main-Kinzig-Buedingen eG",
          "transactionType": 1,
          "usage": "Teilzahlung Darlehen  ",
          "amount": -680.5,
          "currency": "EUR",
          "balance": -149.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "WEG Fried.Krupp.Str.",
          "transactionType": 2,
          "usage": "Einheit Nr. 007 im Objekt  Friedrich-Krupp-Str. 19,  Biebergemuend, Hausgeld laufend  ",
          "amount": -368,
          "currency": "EUR",
          "balance": 530.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-29T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "etage 3 design + digital GmbH",
          "transactionType": 0,
          "usage": "Gesammelte Benzinkosten aus April b  is Juli 2016 etage3 design+digital  GmbH  ",
          "amount": 339.65,
          "currency": "EUR",
          "balance": 898.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-29T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-08-29T18:39:09 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -21.17,
          "currency": "EUR",
          "balance": 559.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-29T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . SERVICE4HAN, Ihr Einka  uf bei SERVICE4HAN  ",
          "amount": -137.62,
          "currency": "EUR",
          "balance": 580.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-29T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "ARAL AG",
          "transactionType": 1,
          "usage": "Aral Hammersb Am Lachbach 1  ",
          "amount": -15.22,
          "currency": "EUR",
          "balance": 718.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-28T22:00:00.000Z",
          "accountedDate": "2016-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-08-27T12:47:27 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -70.29,
          "currency": "EUR",
          "balance": 733.35,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-28T22:00:00.000Z",
          "accountedDate": "2016-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "FRANKFURTER VOLKSBANK",
          "transactionType": 1,
          "usage": "Offenbach-Kaiserstrase//Offenbach/D  E 2016-08-28T10:11:02 Folgenr.000 V  erfalld.2018-12 Entgelt  4,50EUR  ",
          "amount": -54.5,
          "currency": "EUR",
          "balance": 803.64,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-28T22:00:00.000Z",
          "accountedDate": "2016-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "absatzplus Agentur fur Werbeartikele.K.",
          "transactionType": 0,
          "usage": "Storno 21260807  ",
          "amount": 27.47,
          "currency": "EUR",
          "balance": 858.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-28T22:00:00.000Z",
          "accountedDate": "2016-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 830.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-28T22:00:00.000Z",
          "accountedDate": "2016-08-28T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Zahnaerzte Torsten Schoenle undGabriele Boettinger",
          "transactionType": 2,
          "usage": "RE-Nr. 20161329 / Vaclav Mikeska  ",
          "amount": -141.97,
          "currency": "EUR",
          "balance": -169.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-25T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR6830245016 AMAZON.DE   LU    KAUFUMSATZ  24.08  112352  ",
          "amount": -56.97,
          "currency": "EUR",
          "balance": -27.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-25T22:00:00.000Z",
          "accountedDate": "2016-08-25T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-08-25T14:07:13 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -11.14,
          "currency": "EUR",
          "balance": 29.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-24T22:00:00.000Z",
          "accountedDate": "2016-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "BACIO DORO GMBH BAD HOMBURG",
          "transactionType": 1,
          "usage": "Bacio Doro Schmuckv//Bad Homburg v.  d./DE 2016-08-24T19:29:10 Folgenr.  000 Verfalld.2018-12  ",
          "amount": -300,
          "currency": "EUR",
          "balance": 40.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-24T22:00:00.000Z",
          "accountedDate": "2016-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Dies und das  ",
          "amount": -500,
          "currency": "EUR",
          "balance": 340.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-23T22:00:00.000Z",
          "accountedDate": "2016-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 840.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-23T22:00:00.000Z",
          "accountedDate": "2016-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "V092588243  ",
          "amount": -288.86,
          "currency": "EUR",
          "balance": -159.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-23T22:00:00.000Z",
          "accountedDate": "2016-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 2,
          "usage": "Geschaeftszeichen V092588243  ",
          "amount": -296.36,
          "currency": "EUR",
          "balance": 129.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-23T22:00:00.000Z",
          "accountedDate": "2016-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "FIL FONDSBANK GMBH",
          "transactionType": 0,
          "usage": "1008618043 2494743595 VERKAUF 22.08  .2016 WKN 977020  ",
          "amount": 300,
          "currency": "EUR",
          "balance": 425.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-23T22:00:00.000Z",
          "accountedDate": "2016-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "190815080334090181256030413 REWE SA  GT DANKE. 44400041  ",
          "amount": -4.47,
          "currency": "EUR",
          "balance": 125.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-22T22:00:00.000Z",
          "accountedDate": "2016-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VISA INGDIBA ATM                                      ",
          "transactionType": 1,
          "usage": "NR6830245016 ARAL HOMBU    BARGELDAUSZAHLUNG  19.08 20.25 UHR  202605  ",
          "amount": -140,
          "currency": "EUR",
          "balance": 130.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-22T22:00:00.000Z",
          "accountedDate": "2016-08-25T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VISA JAGDHAUS WALDIDYLL                               ",
          "transactionType": 1,
          "usage": "NR6830245016 HARTENSTEIN    KAUFUMSATZ  21.08  102450  ",
          "amount": -149,
          "currency": "EUR",
          "balance": 270.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-22T22:00:00.000Z",
          "accountedDate": "2016-08-25T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR6830245016 AUDIBLE.DE/    KAUFUMSATZ  21.08  152116  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 419.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-22T22:00:00.000Z",
          "accountedDate": "2016-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-08-19T20:53:19 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -12.67,
          "currency": "EUR",
          "balance": 429.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-21T22:00:00.000Z",
          "accountedDate": "2016-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "DM DROGERIEMARKT SAGT DANKE",
          "transactionType": 1,
          "usage": "DM FIL.2242 H:65347//OFFENBACH/DE 2  016-08-19T15:01:27 Folgenr.000 Verf  alld.2018-12  ",
          "amount": -8.6,
          "currency": "EUR",
          "balance": 442.06,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-21T22:00:00.000Z",
          "accountedDate": "2016-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . PFISTER, Ihr Einkauf b  ei PFISTER  ",
          "amount": -53.89,
          "currency": "EUR",
          "balance": 450.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-21T22:00:00.000Z",
          "accountedDate": "2016-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . TAJARAHORSE, Ihr Einka  uf bei TAJARAHORSE  ",
          "amount": -30.8,
          "currency": "EUR",
          "balance": 504.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-21T22:00:00.000Z",
          "accountedDate": "2016-08-21T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . DOMAINFACTO, Ihr Einka  uf bei DOMAINFACTO  ",
          "amount": -13.75,
          "currency": "EUR",
          "balance": 535.35,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Uebertrag  ",
          "amount": 1,
          "currency": "EUR",
          "balance": 549.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Rundfunk ARD, ZDF, DRadio",
          "transactionType": 2,
          "usage": "RF24X630562441  ",
          "amount": -52.5,
          "currency": "EUR",
          "balance": -450.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "MVZ Dr. med. H. Riegel GmbH",
          "transactionType": 2,
          "usage": "PR 1608 2757  ",
          "amount": -35.53,
          "currency": "EUR",
          "balance": -398.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "APOTHEKE IM HESSENCENTER",
          "transactionType": 1,
          "usage": "APOTHEKE im Hessencenter//Frankfurt  am Main/DE 2016-08-18T19:56:57 Fol  genr.000 Verfalld.2018-12  ",
          "amount": -21.3,
          "currency": "EUR",
          "balance": -362.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "REWE Offenbach am",
          "transactionType": 1,
          "usage": "REWE SAGT DANKE. 44400041//Offenbac  h am Main/DE 2016-08-18T14:56:04 Fo  lgenr.000 Verfalld.2018-12  ",
          "amount": -12.7,
          "currency": "EUR",
          "balance": -341.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-18T22:00:00.000Z",
          "accountedDate": "2016-08-18T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "PayPal Europe S.a.r.l. et Cie S.C.A",
          "transactionType": 1,
          "usage": "PP.3981.PP . LIEFERHELD, Ihr Einkau  f bei LIEFERHELD  ",
          "amount": -11.8,
          "currency": "EUR",
          "balance": -328.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": null,
          "accountedDate": null,
          "date": {
            "month": null,
            "year": null
          },
          "transactionType": null,
          "amount": null,
          "balance": null
        }
      ]

    public static vaclavTransactions = [
        {
          "paidDate": "2017-09-12T22:00:00.000Z",
          "accountedDate": "2017-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17011252265 31,64 EUR  ",
          "amount": -31.64,
          "currency": "EUR",
          "balance": 354.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-11T22:00:00.000Z",
          "accountedDate": "2017-09-14T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  08.09  185630  ",
          "amount": -46.95,
          "currency": "EUR",
          "balance": 385.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-10T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMZ*FANTIC26                                     ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  07.09  ",
          "amount": 22.26,
          "currency": "EUR",
          "balance": 432.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-10T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMZ*TRIDEER                                      ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  07.09  ",
          "amount": 12.24,
          "currency": "EUR",
          "balance": 410.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-10T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA COINBASE CGWFAYZN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON      GB    KAUFUMSATZ  04.09  233435  ",
          "amount": -15.41,
          "currency": "EUR",
          "balance": 398.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-10T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA COINBASE 4UI2Q90C                                ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON      GB    KAUFUMSATZ  04.09  231935  ",
          "amount": -33.11,
          "currency": "EUR",
          "balance": 413.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-10T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  04.09  132203  ",
          "amount": -27.16,
          "currency": "EUR",
          "balance": 446.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-10T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  04.09  184649  ",
          "amount": -23.66,
          "currency": "EUR",
          "balance": 474.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-05T22:00:00.000Z",
          "accountedDate": "2017-09-10T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  04.09  120135  ",
          "amount": -2.25,
          "currency": "EUR",
          "balance": 497.7,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  03.09  133155  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 499.95,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  04.09  ",
          "amount": -0.35,
          "currency": "EUR",
          "balance": 554.95,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA COINIFY.COM                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 HERLEV      DK    KAUFUMSATZ  01.09  223706  ",
          "amount": -51.5,
          "currency": "EUR",
          "balance": 555.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.09  032243  ",
          "amount": -7.6,
          "currency": "EUR",
          "balance": 606.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1849200  KAUFUMSATZ  02.09                 23,90  120116  ",
          "amount": -20.17,
          "currency": "EUR",
          "balance": 614.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA WALDSCHWIMMBAD NEU-ISE                           ",
          "transactionType": 1,
          "usage": "NR7153322028 NEU-ISENBUR    KAUFUMSATZ  02.09  154852  ",
          "amount": -7,
          "currency": "EUR",
          "balance": 634.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA PAYPAL *VIRWOX                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 AT    KAUFUMSATZ  02.09  131017  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 641.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA PAYPAL *VIRWOX                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 AT    KAUFUMSATZ  02.09  130257  ",
          "amount": -10,
          "currency": "EUR",
          "balance": 661.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  01.09  183859  ",
          "amount": -13.07,
          "currency": "EUR",
          "balance": 671.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  01.09  230452  ",
          "amount": -24.01,
          "currency": "EUR",
          "balance": 684.64,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-04T22:00:00.000Z",
          "accountedDate": "2017-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Coinbase UK, Ltd.",
          "transactionType": 2,
          "usage": "CBAEURDDFZSKNV  ",
          "amount": -20,
          "currency": "EUR",
          "balance": 708.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA PAYPAL *321LINSEN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  31.08  144220  ",
          "amount": -107.97,
          "currency": "EUR",
          "balance": 728.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-09-03T22:00:00.000Z",
          "accountedDate": "2017-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA PAYPAL *DUZZL.COM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  30.08  193920  ",
          "amount": -19.98,
          "currency": "EUR",
          "balance": 836.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  30.08  210120  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 856.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AMAZON.DE                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  30.08  000034  ",
          "amount": -13.99,
          "currency": "EUR",
          "balance": 870.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-09-05T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 AUDIBLE.DE/    KAUFUMSATZ  30.08  115039  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 884.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-31T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 353033 LT. CABLESURF/ FON V  ERTRAG: 08/2017 Vaclav Mikeska  ",
          "amount": -29.98,
          "currency": "EUR",
          "balance": 894.53,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Goersch",
          "transactionType": 2,
          "usage": "Other  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 924.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Ausgleich  ",
          "amount": -500,
          "currency": "EUR",
          "balance": 1.124,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Miete und Umlagen  ",
          "amount": -1.2,
          "currency": "EUR",
          "balance": 1.624,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "e-Brokers GmbH",
          "transactionType": 0,
          "usage": "Gehalt e-Brokers  ",
          "amount": 2.8,
          "currency": "EUR",
          "balance": 2.824,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-30T22:00:00.000Z",
          "accountedDate": "2017-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  78,82 EUR Zinsen 18,18 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 23.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-29T22:00:00.000Z",
          "accountedDate": "2017-09-03T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  28.08  190431  ",
          "amount": -13.98,
          "currency": "EUR",
          "balance": 320.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PRINCE FOOD, 415 LONDO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 MITCHAM     GB  KURS       0,9193965  BARGELDAUSZAHLUNG  25.08                100,00  214709  ",
          "amount": -108.77,
          "currency": "EUR",
          "balance": 334.57,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  25.08  090341  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 443.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PRINCE FOOD, 415 LONDO                           ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -1.9,
          "currency": "EUR",
          "balance": 543.34,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZEBRANO BAR                                      ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.34,
          "currency": "EUR",
          "balance": 545.24,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SHAKESPEARES HEAD                                ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.2,
          "currency": "EUR",
          "balance": 545.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HAND & RACQUET                                   ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.2,
          "currency": "EUR",
          "balance": 545.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AINT NOTHIN BUT                                  ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.2,
          "currency": "EUR",
          "balance": 545.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BURGER KING WIMBLEDON                            ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.1,
          "currency": "EUR",
          "balance": 546.18,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA WH SMITH TRAVEL                                  ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  28.08  ",
          "amount": -0.05,
          "currency": "EUR",
          "balance": 546.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA WH SMITH TRAVEL                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 HEATHROW T  GB  KURS       0,9193965  KAUFUMSATZ  27.08                  2,85  160713  ",
          "amount": -3.1,
          "currency": "EUR",
          "balance": 546.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AINT NOTHIN BUT                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON  W1B GB  KURS       0,9193965  KAUFUMSATZ  27.08                 10,70  020346  ",
          "amount": -11.64,
          "currency": "EUR",
          "balance": 549.43,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PAYPAL *UBER BV                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  27.08  035051  ",
          "amount": -36.97,
          "currency": "EUR",
          "balance": 561.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZEBRANO BAR                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON      GB  KURS       0,9193965  KAUFUMSATZ  26.08                 18,00  224453  ",
          "amount": -19.58,
          "currency": "EUR",
          "balance": 598.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SHAKESPEARES HEAD                                ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON      GB  KURS       0,9193965  KAUFUMSATZ  26.08                 10,61  003101  ",
          "amount": -11.54,
          "currency": "EUR",
          "balance": 617.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HAND & RACQUET                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 WIMBLEDON   GB  KURS       0,9193965  KAUFUMSATZ  25.08                 10,40  001242  ",
          "amount": -11.31,
          "currency": "EUR",
          "balance": 629.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BURGER KING WIMBLEDON                            ",
          "transactionType": 1,
          "usage": "NR7153322028 LONDON      GB  KURS       0,9193965  KAUFUMSATZ  26.08                  4,99  010221  ",
          "amount": -5.43,
          "currency": "EUR",
          "balance": 640.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  26.08  172317  ",
          "amount": -25.9,
          "currency": "EUR",
          "balance": 645.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PAYPAL *UBER BV                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  26.08  023034  ",
          "amount": -9.56,
          "currency": "EUR",
          "balance": 671.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-28T22:00:00.000Z",
          "accountedDate": "2017-08-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BAUHAUS 589                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  25.08  093447  ",
          "amount": -160,
          "currency": "EUR",
          "balance": 681.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-24T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "London  ",
          "amount": 400,
          "currency": "EUR",
          "balance": 841.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-24T22:00:00.000Z",
          "accountedDate": "2017-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  23.08  115111  ",
          "amount": -24.54,
          "currency": "EUR",
          "balance": 441.36,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-23T22:00:00.000Z",
          "accountedDate": "2017-08-22T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  22.08  195713  ",
          "amount": -45,
          "currency": "EUR",
          "balance": 465.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-22T22:00:00.000Z",
          "accountedDate": "2017-08-27T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS AM                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  20.08  010752  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 510.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RP AUTO,S.R.O.                                   ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -5.82,
          "currency": "EUR",
          "balance": 518.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PEEK CLOPPENBURG SR                              ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.5,
          "currency": "EUR",
          "balance": 524.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SB VANKOVKA                                      ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.12,
          "currency": "EUR",
          "balance": 525.21,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZABKA - NAMESTI REPUBL                           ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.06,
          "currency": "EUR",
          "balance": 525.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZABKA - NAMESTI REPUBL                           ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.05,
          "currency": "EUR",
          "balance": 525.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HORNBACH PLZEN                                   ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  21.08  ",
          "amount": -0.04,
          "currency": "EUR",
          "balance": 525.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RP AUTO,S.R.O.                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08               8655,00  135710  ",
          "amount": -332.41,
          "currency": "EUR",
          "balance": 525.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA HORNBACH PLZEN                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 PLZEN       CZ  KURS      26,0368500  KAUFUMSATZ  20.08                 56,28  131703  ",
          "amount": -2.16,
          "currency": "EUR",
          "balance": 857.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZABKA - NAMESTI REPUBL                           ",
          "transactionType": 1,
          "usage": "NR7153322028 PLZEN       CZ  KURS      26,0368500  KAUFUMSATZ  20.08                 75,30  121317  ",
          "amount": -2.89,
          "currency": "EUR",
          "balance": 860.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA ZABKA - NAMESTI REPUBL                           ",
          "transactionType": 1,
          "usage": "NR7153322028 PLZEN       CZ  KURS      26,0368500  KAUFUMSATZ  20.08                 89,70  114418  ",
          "amount": -3.45,
          "currency": "EUR",
          "balance": 862.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SB-TANK 5047                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 ERLANGEN    KAUFUMSATZ  20.08  153046  ",
          "amount": -60.86,
          "currency": "EUR",
          "balance": 866.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PEEK CLOPPENBURG SR                              ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                748,00  161507  ",
          "amount": -28.73,
          "currency": "EUR",
          "balance": 927.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-21T22:00:00.000Z",
          "accountedDate": "2017-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SB VANKOVKA                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0368500  KAUFUMSATZ  18.08                178,00  165134  ",
          "amount": -6.84,
          "currency": "EUR",
          "balance": 955.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RB VIDENSKA, BRNO                                ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0116600  BARGELDAUSZAHLUNG  17.08               3000,00  162007  ",
          "amount": -115.33,
          "currency": "EUR",
          "balance": 962.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RB VIDENSKA, BRNO                                ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  18.08  ",
          "amount": -2.02,
          "currency": "EUR",
          "balance": 1.078,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PIVOVARSKA STAROBRNO                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  18.08  ",
          "amount": -0.55,
          "currency": "EUR",
          "balance": 1.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DR.MAX LEKARNA 239                               ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  18.08  ",
          "amount": -0.28,
          "currency": "EUR",
          "balance": 1.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DM DROGERIE MARKT 239                            ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  18.08  ",
          "amount": -0.18,
          "currency": "EUR",
          "balance": 1.081,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  18.08  ",
          "amount": -0.18,
          "currency": "EUR",
          "balance": 1.081,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0116600  KAUFUMSATZ  17.08                265,00  182901  ",
          "amount": -10.19,
          "currency": "EUR",
          "balance": 1.081,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PIVOVARSKA STAROBRNO                             ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0116600  KAUFUMSATZ  16.08                814,00  221054  ",
          "amount": -31.29,
          "currency": "EUR",
          "balance": 1.091,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DM DROGERIE MARKT 239                            ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,0116600  KAUFUMSATZ  17.08                269,00  171555  ",
          "amount": -10.34,
          "currency": "EUR",
          "balance": 1.122,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-20T22:00:00.000Z",
          "accountedDate": "2017-08-23T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DR.MAX LEKARNA 239                               ",
          "transactionType": 1,
          "usage": "NR7153322028 VIDENSKA 99 CZ  KURS      26,0116600  KAUFUMSATZ  17.08                418,00  162602  ",
          "amount": -16.07,
          "currency": "EUR",
          "balance": 1.133,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-16T22:00:00.000Z",
          "accountedDate": "2017-08-16T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 1,
          "currency": "EUR",
          "balance": 1.149,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-15T22:00:00.000Z",
          "accountedDate": "2017-08-20T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA DB RENT GMBH                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  14.08  130351  ",
          "amount": -4,
          "currency": "EUR",
          "balance": 149.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA 110 00 NAM. REPUBLIKY                            ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 1     CZ  KURS      26,1455700  BARGELDAUSZAHLUNG  12.08               6000,00  031445  ",
          "amount": -229.48,
          "currency": "EUR",
          "balance": 153.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA 110 00 NAM. REPUBLIKY                            ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -4.02,
          "currency": "EUR",
          "balance": 382.73,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA IKEA BRNO                                        ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -1,
          "currency": "EUR",
          "balance": 386.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA KADERNICTVI KLIER 073                            ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -0.3,
          "currency": "EUR",
          "balance": 387.75,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESTAURACE KULATAK                               ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -0.23,
          "currency": "EUR",
          "balance": 388.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA KFC OLYMPIA BRNO                                 ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -0.17,
          "currency": "EUR",
          "balance": 388.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-13T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA VIENNA HOUSE DIPLOMA                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  14.08  ",
          "amount": -0.15,
          "currency": "EUR",
          "balance": 388.45,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA VIENNA HOUSE DIPLOMA                             ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 6     CZ  KURS      26,1455700  KAUFUMSATZ  12.08                230,00  214926  ",
          "amount": -8.8,
          "currency": "EUR",
          "balance": 388.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA CS PHM HUSTOPECE                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 HUSTOPECE   CZ    KAUFUMSATZ  12.08  155912  ",
          "amount": -64.69,
          "currency": "EUR",
          "balance": 397.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA IKEA BRNO                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,1455700  KAUFUMSATZ  12.08               1489,00  173423  ",
          "amount": -56.95,
          "currency": "EUR",
          "balance": 462.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA KFC OLYMPIA BRNO                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO MODRIC CZ  KURS      26,1455700  KAUFUMSATZ  12.08                257,00  163138  ",
          "amount": -9.83,
          "currency": "EUR",
          "balance": 519.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA KADERNICTVI KLIER 073                            ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,1455700  KAUFUMSATZ  12.08                450,00  190533  ",
          "amount": -17.21,
          "currency": "EUR",
          "balance": 528.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA RESTAURACE KULATAK                               ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 6     CZ  KURS      26,1455700  KAUFUMSATZ  11.08                343,00  234431  ",
          "amount": -13.12,
          "currency": "EUR",
          "balance": 546.08,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-17T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AUTOBAHNRASTHAUS WUERZ                           ",
          "transactionType": 1,
          "usage": "NR7153322028 WUERZBURG    KAUFUMSATZ  11.08  171646  ",
          "amount": -21.65,
          "currency": "EUR",
          "balance": 559.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-14T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 580.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-14T22:00:00.000Z",
          "accountedDate": "2017-08-14T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Techniker Krankenkasse",
          "transactionType": 1,
          "usage": "TK-BuchNr 06803411896 Monate 06/17-  07/17 V092588243 Beitraege  ",
          "amount": -1.24,
          "currency": "EUR",
          "balance": 635.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-13T22:00:00.000Z",
          "accountedDate": "2017-08-16T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  10.08  195033  ",
          "amount": -36,
          "currency": "EUR",
          "balance": 1.876,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-10T22:00:00.000Z",
          "accountedDate": "2017-08-15T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  09.08  110248  ",
          "amount": -34.95,
          "currency": "EUR",
          "balance": 1.912,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-10T22:00:00.000Z",
          "accountedDate": "2017-08-15T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  09.08  220935  ",
          "amount": -13.98,
          "currency": "EUR",
          "balance": 1.947,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-09T22:00:00.000Z",
          "accountedDate": "2017-08-09T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17009783434 37,49 EUR  ",
          "amount": -37.49,
          "currency": "EUR",
          "balance": 1.96,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  05.08  143037  ",
          "amount": -340,
          "currency": "EUR",
          "balance": 1.998,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  06.08 14.57 UHR  145802  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 2.338,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA MYTAXI.COM*VQOR7                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 TAXI TOUR   ES    KAUFUMSATZ  06.08  211558  ",
          "amount": -19.7,
          "currency": "EUR",
          "balance": 2.438,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA TEGUT FILIALE 3782                               ",
          "transactionType": 1,
          "usage": "NR7153322028 BIEBER    KAUFUMSATZ  05.08  ",
          "amount": -8.18,
          "currency": "EUR",
          "balance": 2.458,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-07T22:00:00.000Z",
          "accountedDate": "2017-08-10T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  05.08  111956  ",
          "amount": -20.97,
          "currency": "EUR",
          "balance": 2.466,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "FOERSTER S CAFE RESTAURANT",
          "transactionType": 1,
          "usage": "FOERSTER S CAFE RESTAURANT GIR 6912  9760//OFFENBACH/DE 2017-08-05T14:23  :08 Folgenr.002 Verfalld.2019-12  ",
          "amount": -25,
          "currency": "EUR",
          "balance": 2.487,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-09T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.08  155050  ",
          "amount": -7.58,
          "currency": "EUR",
          "balance": 2.512,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-06T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Oliver Melzer",
          "transactionType": 2,
          "usage": "GLo01072017  ",
          "amount": -4.432,
          "currency": "EUR",
          "balance": 2.519,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-03T22:00:00.000Z",
          "accountedDate": "2017-08-02T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  03.08  ",
          "amount": -0.35,
          "currency": "EUR",
          "balance": 6.952,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-03T22:00:00.000Z",
          "accountedDate": "2017-08-08T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1793200  KAUFUMSATZ  02.08                 23,90  102428  ",
          "amount": -20.27,
          "currency": "EUR",
          "balance": 6.953,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-01T22:00:00.000Z",
          "accountedDate": "2017-08-06T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  31.07  221324  ",
          "amount": -22.99,
          "currency": "EUR",
          "balance": 6.973,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-08-01T22:00:00.000Z",
          "accountedDate": "2017-08-01T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "e-Brokers GmbH",
          "transactionType": 0,
          "usage": "2017-07  ",
          "amount": 4.462,
          "currency": "EUR",
          "balance": 6.996,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "hcc fuer fa offenbach am main",
          "transactionType": 2,
          "usage": "4498466386212 / 044 846 63862 m.  24.07.17 991  ",
          "amount": -969.23,
          "currency": "EUR",
          "balance": 2.533,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 3,
          "currency": "EUR",
          "balance": 3.502,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-08-03T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA AUDIBLE GMBH                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 AUDIBLE.DE/    KAUFUMSATZ  30.07  114138  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 502.99,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-08-03T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "VISA WWW.IQOS.DE                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 GRAEFELFING    KAUFUMSATZ  28.07  172637  ",
          "amount": -63.9,
          "currency": "EUR",
          "balance": 512.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-31T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 353033 LT. CABLESURF/ FON V  ERTRAG: 07/2017 Vaclav Mikeska  ",
          "amount": -29.98,
          "currency": "EUR",
          "balance": 576.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-30T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  77,70 EUR Zinsen 19,30 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 606.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-30T22:00:00.000Z",
          "accountedDate": "2017-07-30T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Miete und Umlagen  ",
          "amount": -1.2,
          "currency": "EUR",
          "balance": 903.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-27T22:00:00.000Z",
          "accountedDate": "2017-08-01T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  26.07  130814  ",
          "amount": -62.18,
          "currency": "EUR",
          "balance": 2.103,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-27T22:00:00.000Z",
          "accountedDate": "2017-08-01T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  26.07  132724  ",
          "amount": -16.57,
          "currency": "EUR",
          "balance": 2.166,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-26T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA HORNBACH-BAUMARKT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  25.07  191406  ",
          "amount": -62.5,
          "currency": "EUR",
          "balance": 2.182,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-26T22:00:00.000Z",
          "accountedDate": "2017-07-31T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  25.07  193149  ",
          "amount": -10.15,
          "currency": "EUR",
          "balance": 2.245,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA CRELAN CASH-MORE                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 /OUDENAAR.  BE    BARGELDAUSZAHLUNG  21.07  175757  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 2.255,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA ELLIS GOURMET BURGER                             ",
          "transactionType": 1,
          "usage": "NR7153322028 ANTWERPEN   BE    KAUFUMSATZ  23.07  181918  ",
          "amount": -41.6,
          "currency": "EUR",
          "balance": 2.455,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA ZOO                                              ",
          "transactionType": 1,
          "usage": "NR7153322028 ANTWERPEN   BE    KAUFUMSATZ  23.07  143015  ",
          "amount": -52,
          "currency": "EUR",
          "balance": 2.496,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA HOTEL STEENHUYSE                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 OUDENAARDE  BE    KAUFUMSATZ  22.07  110433  ",
          "amount": -98,
          "currency": "EUR",
          "balance": 2.548,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA BURGERIJ                                         ",
          "transactionType": 1,
          "usage": "NR7153322028 ANTWERPEN 1 BE    KAUFUMSATZ  22.07  194155  ",
          "amount": -41,
          "currency": "EUR",
          "balance": 2.646,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA QUICK 754 ASTRIDPLEIN                            ",
          "transactionType": 1,
          "usage": "NR7153322028 ANTWERPEN   BE    KAUFUMSATZ  22.07  140511  ",
          "amount": -19.1,
          "currency": "EUR",
          "balance": 2.687,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-24T22:00:00.000Z",
          "accountedDate": "2017-07-27T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS AM                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  20.07  012342  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 2.706,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA ABN-AMRO                                         ",
          "transactionType": 1,
          "usage": "NR7153322028 EINDHOVEN   NL    BARGELDAUSZAHLUNG  19.07  222129  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 2.714,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-23T22:00:00.000Z",
          "accountedDate": "2017-07-26T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA LIDL 482 OIRSCHOT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OIRSCHOT    NL    KAUFUMSATZ  20.07  125436  ",
          "amount": -3.37,
          "currency": "EUR",
          "balance": 2.814,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA EFR SERV 610  TRADE P                            ",
          "transactionType": 1,
          "usage": "NR7153322028 VENLO       NL    KAUFUMSATZ  19.07  114653  ",
          "amount": -5.15,
          "currency": "EUR",
          "balance": 2.818,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA BLUECOLLAR HOTEL                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 EINDHOVEN   NL    KAUFUMSATZ  19.07  170706  ",
          "amount": -62.5,
          "currency": "EUR",
          "balance": 2.823,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA E.D LANKES EINDHOVEN                             ",
          "transactionType": 1,
          "usage": "NR7153322028 EINDHOVEN   NL    KAUFUMSATZ  19.07  205205  ",
          "amount": -32.3,
          "currency": "EUR",
          "balance": 2.885,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-25T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA KFC EINDHOVEN 206                                ",
          "transactionType": 1,
          "usage": "NR7153322028 EINDHOVEN   NL    KAUFUMSATZ  19.07  222413  ",
          "amount": -8,
          "currency": "EUR",
          "balance": 2.918,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-20T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "First Data Deutschland GmbH",
          "transactionType": 2,
          "usage": "Cafetaria de Luc//LIESSEL/NL/1 2017  -07-19T13:58:43 Folgenr.002 Verfall  d.2019-12  ",
          "amount": -9.95,
          "currency": "EUR",
          "balance": 2.926,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-19T22:00:00.000Z",
          "accountedDate": "2017-07-18T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA SPARKASSE KREFELD                                ",
          "transactionType": 1,
          "usage": "NR7153322028 HINSBECK    BARGELDAUSZAHLUNG  18.07  140950  ",
          "amount": -150,
          "currency": "EUR",
          "balance": 2.936,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-18T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA LEONARDO HOTEL CITY                              ",
          "transactionType": 1,
          "usage": "NR7153322028 DUESSELDORF    KAUFUMSATZ  17.07  152510  ",
          "amount": -53.1,
          "currency": "EUR",
          "balance": 3.086,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-18T22:00:00.000Z",
          "accountedDate": "2017-07-23T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA TAINS-MEIN-ASIAMARKT G                           ",
          "transactionType": 1,
          "usage": "NR7153322028 DUESSELDORF    KAUFUMSATZ  17.07  172738  ",
          "amount": -9.2,
          "currency": "EUR",
          "balance": 3.139,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA KSK RHEIN-HUNSRUECK                              ",
          "transactionType": 1,
          "usage": "NR7153322028 ST. GOAR    BARGELDAUSZAHLUNG  16.07  213305  ",
          "amount": -150,
          "currency": "EUR",
          "balance": 3.148,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-20T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  16.07  133155  ",
          "amount": -94.06,
          "currency": "EUR",
          "balance": 3.298,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-17T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "DB Vertrieb GmbH",
          "transactionType": 1,
          "usage": "DB AUTOMAT//KOBLENZ HBF/DE 2017-07-  17T12:49:59 Folgenr.002 Verfalld.20  19-12  ",
          "amount": -35,
          "currency": "EUR",
          "balance": 3.392,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "FOERSTER S CAFE RESTAURANT",
          "transactionType": 1,
          "usage": "FOERSTER S CAFE RESTAURANT GIR 6912  9760//OFFENBACH/DE 2017-07-15T14:24  :58 Folgenr.002 Verfalld.2019-12  ",
          "amount": -25,
          "currency": "EUR",
          "balance": 3.427,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 3.452,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-16T22:00:00.000Z",
          "accountedDate": "2017-07-16T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Jessica Carraro",
          "transactionType": 2,
          "usage": "10048  ",
          "amount": -59.5,
          "currency": "EUR",
          "balance": 3.507,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-13T22:00:00.000Z",
          "accountedDate": "2017-07-12T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  12.07 21.01 UHR  210205  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 3.567,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-12T22:00:00.000Z",
          "accountedDate": "2017-07-17T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  11.07  201003  ",
          "amount": -8.39,
          "currency": "EUR",
          "balance": 3.657,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-11T22:00:00.000Z",
          "accountedDate": "2017-07-11T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17008399560 12,38 EUR  ",
          "amount": -12.38,
          "currency": "EUR",
          "balance": 3.665,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-10T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA 49001280BILLARD TREFF                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  07.07  133152  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 3.677,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-10T22:00:00.000Z",
          "accountedDate": "2017-07-13T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA BIKEMAX FRANKFURT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  07.07  120805  ",
          "amount": -6.99,
          "currency": "EUR",
          "balance": 3.767,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Ausgleich  ",
          "amount": -4,
          "currency": "EUR",
          "balance": 3.774,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Wieder zurueck  ",
          "amount": 7,
          "currency": "EUR",
          "balance": 7.774,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Goersch",
          "transactionType": 2,
          "usage": "",
          "amount": -7,
          "currency": "EUR",
          "balance": 774.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 4,
          "currency": "EUR",
          "balance": 7.774,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Sabrina Goersch",
          "transactionType": 2,
          "usage": "Miete und Umlagen  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 3.774,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Finanzamt Offenbach am Main II",
          "transactionType": 2,
          "usage": "Steuernummer 4484663862  ",
          "amount": -15,
          "currency": "EUR",
          "balance": 3.874,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-09T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Zalando SE",
          "transactionType": 2,
          "usage": "10103126686309  ",
          "amount": -74.9,
          "currency": "EUR",
          "balance": 3.889,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-05T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA DB RENT GMBH                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  04.07  094952  ",
          "amount": -5,
          "currency": "EUR",
          "balance": 3.964,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-05T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA PAYPAL *BEP                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  04.07  102732  ",
          "amount": -11.71,
          "currency": "EUR",
          "balance": 3.969,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-05T22:00:00.000Z",
          "accountedDate": "2017-07-10T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA PAYPAL *HUANJIANPIN                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  04.07  102323  ",
          "amount": -5.35,
          "currency": "EUR",
          "balance": 3.981,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-03T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA COMGATE*HITHIT                                   ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  04.07  ",
          "amount": -0.2,
          "currency": "EUR",
          "balance": 3.986,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA COMGATE*HITHIT                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 11    CZ  KURS      26,0717400  KAUFUMSATZ  03.07                300,00  235217  ",
          "amount": -11.51,
          "currency": "EUR",
          "balance": 3.986,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-04T22:00:00.000Z",
          "accountedDate": "2017-07-09T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.07  183435  ",
          "amount": -7.57,
          "currency": "EUR",
          "balance": 3.998,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  03.07  ",
          "amount": -0.37,
          "currency": "EUR",
          "balance": 4.006,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-06T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1391100  KAUFUMSATZ  02.07                 23,90  221646  ",
          "amount": -20.98,
          "currency": "EUR",
          "balance": 4.006,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-06T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  30.06  215418  ",
          "amount": -24.65,
          "currency": "EUR",
          "balance": 4.027,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-06T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  30.06  221721  ",
          "amount": -34.59,
          "currency": "EUR",
          "balance": 4.052,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-03T22:00:00.000Z",
          "accountedDate": "2017-07-03T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "",
          "amount": -4,
          "currency": "EUR",
          "balance": 4.086,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-05T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  29.06  012640  ",
          "amount": -33.23,
          "currency": "EUR",
          "balance": 8.086,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-05T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  29.06  203832  ",
          "amount": -179.99,
          "currency": "EUR",
          "balance": 8.119,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "e-Brokers GmbH",
          "transactionType": 0,
          "usage": "2017-06  ",
          "amount": 6.247,
          "currency": "EUR",
          "balance": 8.299,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-07-02T22:00:00.000Z",
          "accountedDate": "2017-07-02T22:00:00.000Z",
          "date": {
            "month": 7,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 353033 LT. CABLESURF/ FON V  ERTRAG: 06/2017 Vaclav Mikeska  ",
          "amount": -29.98,
          "currency": "EUR",
          "balance": 2.052,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "hcc fuer fa offenbach am main",
          "transactionType": 2,
          "usage": "4498466386212 / 044 846 63862 m.  26.06.17 991  ",
          "amount": -797.39,
          "currency": "EUR",
          "balance": 2.082,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-07-04T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *WISSTONETEC                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  27.06  205139  ",
          "amount": -44.88,
          "currency": "EUR",
          "balance": 2.879,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  76,59 EUR Zinsen 20,41 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 2.924,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-29T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 2,
          "usage": "Miete und Umlagen  ",
          "amount": -1.2,
          "currency": "EUR",
          "balance": 3.221,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SANTANDER CONSUMER B A                           ",
          "transactionType": 1,
          "usage": "NR7153322028 KARLSRUHE    BARGELDAUSZAHLUNG  25.06 19.39 UHR  193932  ",
          "amount": -150,
          "currency": "EUR",
          "balance": 4.421,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  25.06  213128  ",
          "amount": -3.74,
          "currency": "EUR",
          "balance": 4.571,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA RISTORANTE AMBIENTE IT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 KELSTERBACH    KAUFUMSATZ  24.06  221810  ",
          "amount": -22.4,
          "currency": "EUR",
          "balance": 4.575,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA GUTE FAHRT MIT AGIP                              ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  24.06  173510  ",
          "amount": -10.18,
          "currency": "EUR",
          "balance": 4.597,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  23.06  215825  ",
          "amount": -2.23,
          "currency": "EUR",
          "balance": 4.607,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-26T22:00:00.000Z",
          "accountedDate": "2017-06-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  23.06  212925  ",
          "amount": -7.56,
          "currency": "EUR",
          "balance": 4.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-22T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA FRANKFURTER SPARKASSE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 F-SECKB.LS    BARGELDAUSZAHLUNG  22.06  173835  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 4.617,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-25T22:00:00.000Z",
          "accountedDate": "2017-06-28T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE FRANKFURT/BOR                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  22.06  185117  ",
          "amount": -7.79,
          "currency": "EUR",
          "balance": 4.707,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.05,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.04,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.04,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.04,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.04,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 0,
          "usage": "NR7153322028             GB    GUTSCHRIFTSBELEG  21.06  ",
          "amount": 0.04,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-27T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  21.06  070641  ",
          "amount": -12.93,
          "currency": "EUR",
          "balance": 4.715,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-27T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  20.06  135332  ",
          "amount": -11.69,
          "currency": "EUR",
          "balance": 4.728,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-27T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS AM                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  20.06  010208  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 4.739,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-22T22:00:00.000Z",
          "accountedDate": "2017-06-27T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  21.06  071142  ",
          "amount": -11,
          "currency": "EUR",
          "balance": 4.747,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  19.06  213909  ",
          "amount": -7.68,
          "currency": "EUR",
          "balance": 4.758,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-20T22:00:00.000Z",
          "accountedDate": "2017-06-25T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA IQOS STORE BERLIN AS2                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  19.06  182527  ",
          "amount": -69,
          "currency": "EUR",
          "balance": 4.766,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-19T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 UMS.ST APR.17 9  ,02 EUR  ",
          "amount": 9.02,
          "currency": "EUR",
          "balance": 4.835,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-22T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SHELL 5577                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINTAL    KAUFUMSATZ  17.06  144225  ",
          "amount": -51.59,
          "currency": "EUR",
          "balance": 4.826,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-19T22:00:00.000Z",
          "accountedDate": "2017-06-19T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 4.878,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-18T22:00:00.000Z",
          "accountedDate": "2017-06-21T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  15.06  151545  ",
          "amount": -8.34,
          "currency": "EUR",
          "balance": 4.933,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-14T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA FRANKFURTER SPARKASSE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 F-AFFENT.E    BARGELDAUSZAHLUNG  14.06  230940  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 4.941,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-15T22:00:00.000Z",
          "accountedDate": "2017-06-20T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *JETBRAINSSR R9                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  13.06  130653  ",
          "amount": -15.35,
          "currency": "EUR",
          "balance": 5.031,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-13T22:00:00.000Z",
          "accountedDate": "2017-06-13T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17007031176 9,98 EUR  ",
          "amount": -9.98,
          "currency": "EUR",
          "balance": 5.046,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-12T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA 49001280BILLARD TREFF                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  09.06  132721  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 5.056,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-12T22:00:00.000Z",
          "accountedDate": "2017-06-15T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA LUFTHANSA                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 PAYPAL COM    KAUFUMSATZ  09.06  214244  ",
          "amount": -161.35,
          "currency": "EUR",
          "balance": 5.146,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  02.06  214528  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 5.308,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SHELL AM KREUZSTEIN 75                           ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINTAL 2    BARGELDAUSZAHLUNG  03.06  174615  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 5.398,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SHELL 5577                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINTAL    KAUFUMSATZ  03.06  174529  ",
          "amount": -7.3,
          "currency": "EUR",
          "balance": 5.488,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA DM-DROGERIE MARKT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  03.06  181030  ",
          "amount": -12.3,
          "currency": "EUR",
          "balance": 5.495,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.06  051902  ",
          "amount": -7.54,
          "currency": "EUR",
          "balance": 5.507,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  02.06  213727  ",
          "amount": -9.44,
          "currency": "EUR",
          "balance": 5.515,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *321LINSEN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  02.06  171018  ",
          "amount": -112.97,
          "currency": "EUR",
          "balance": 5.524,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-11T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  02.06  172608  ",
          "amount": -11.47,
          "currency": "EUR",
          "balance": 5.637,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-06T22:00:00.000Z",
          "accountedDate": "2017-06-06T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "PANE E VINO",
          "transactionType": 1,
          "usage": "PANE E VINO//HATTERSHEIM/DE 2017-06  -05T19:18:50 Folgenr.002 Verfalld.2  019-12  ",
          "amount": -21.1,
          "currency": "EUR",
          "balance": 5.649,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-04T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  02.06  ",
          "amount": -0.35,
          "currency": "EUR",
          "balance": 5.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-08T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1202100  KAUFUMSATZ  02.06                 22,33  061911  ",
          "amount": -19.93,
          "currency": "EUR",
          "balance": 5.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-05T22:00:00.000Z",
          "accountedDate": "2017-06-08T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  01.06  130436  ",
          "amount": -5.95,
          "currency": "EUR",
          "balance": 5.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-06-01T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "e-Brokers GmbH",
          "transactionType": 0,
          "usage": "Rechnungsnummer: 2017-05  ",
          "amount": 5.057,
          "currency": "EUR",
          "balance": 5.696,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-29T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  30.05  202752  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 638.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-06-05T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "VISA PAYPAL *MBSGERMANYG                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  30.05  154540  ",
          "amount": -7.9,
          "currency": "EUR",
          "balance": 728.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-31T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 6,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 353033 LT. CABLESURF/ FON V  ERTRAG: 05/2017 Vaclav Mikeska  ",
          "amount": -29.98,
          "currency": "EUR",
          "balance": 736.88,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-06-04T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  29.05  183621  ",
          "amount": -22.99,
          "currency": "EUR",
          "balance": 766.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-06-04T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  29.05  205534  ",
          "amount": -3.65,
          "currency": "EUR",
          "balance": 789.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-30T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  75,48 EUR Zinsen 21,52 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 793.5,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-29T22:00:00.000Z",
          "accountedDate": "2017-06-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA VAPIANO MAINZ RHEINTER                           ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINZ    KAUFUMSATZ  28.05  183706  ",
          "amount": -26.8,
          "currency": "EUR",
          "balance": 1.09,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-28T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA INGDIBA ATM                                      ",
          "transactionType": 1,
          "usage": "NR7153322028 ESSO FFM    BARGELDAUSZAHLUNG  24.05 21.09 UHR  210945  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.117,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-28T22:00:00.000Z",
          "accountedDate": "2017-05-31T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  24.05  ",
          "amount": -21.06,
          "currency": "EUR",
          "balance": 1.207,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-25T22:00:00.000Z",
          "accountedDate": "2017-05-30T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PAYPAL *ISTANBULCOM                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  23.05  153830  ",
          "amount": -3.29,
          "currency": "EUR",
          "balance": 1.228,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-24T22:00:00.000Z",
          "accountedDate": "2017-05-24T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.231,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-21T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  19.05  190536  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 181.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 AMZN.COM/BI LU    KAUFUMSATZ  20.05  014420  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 271.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PAYPAL *PADERSHOPUG                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  18.05  221900  ",
          "amount": -3.49,
          "currency": "EUR",
          "balance": 279.64,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  19.05  142337  ",
          "amount": -4.99,
          "currency": "EUR",
          "balance": 283.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-22T22:00:00.000Z",
          "accountedDate": "2017-05-25T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  19.05  141438  ",
          "amount": -79.99,
          "currency": "EUR",
          "balance": 288.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-18T22:00:00.000Z",
          "accountedDate": "2017-05-17T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  17.05  164827  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 368.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-17T22:00:00.000Z",
          "accountedDate": "2017-05-16T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMZ*AMAZON.DE 008 00 8                           ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  16.05  ",
          "amount": 175.89,
          "currency": "EUR",
          "balance": 458.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-17T22:00:00.000Z",
          "accountedDate": "2017-05-22T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PAYPAL *DONGFENGPIN                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  16.05  140752  ",
          "amount": -50.88,
          "currency": "EUR",
          "balance": 282.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-16T22:00:00.000Z",
          "accountedDate": "2017-05-16T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Nico Pacher Anmeldungs-Serv",
          "transactionType": 1,
          "usage": "TXID 224715348 Halbmarathon 0AAnmel  de-Code DW2YU6K  ",
          "amount": -30,
          "currency": "EUR",
          "balance": 333.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA FRANKFURTER SPARKASSE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 F-ZEIL CR4    BARGELDAUSZAHLUNG  12.05  210051  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 363.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  13.05  205239  ",
          "amount": -18.84,
          "currency": "EUR",
          "balance": 453.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-15T22:00:00.000Z",
          "accountedDate": "2017-05-18T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PAYPAL *JETBRAINSSR R9                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  13.05  153654  ",
          "amount": -15.35,
          "currency": "EUR",
          "balance": 471.94,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 487.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 200,
          "currency": "EUR",
          "balance": 542.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-14T22:00:00.000Z",
          "accountedDate": "2017-05-14T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 200,
          "currency": "EUR",
          "balance": 342.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-11T22:00:00.000Z",
          "accountedDate": "2017-05-16T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  10.05  022159  ",
          "amount": -175.89,
          "currency": "EUR",
          "balance": 142.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-10T22:00:00.000Z",
          "accountedDate": "2017-05-10T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17005689108 41,13 EUR  ",
          "amount": -41.13,
          "currency": "EUR",
          "balance": 318.18,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-09T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA FRANKFURT-INNENSTADT                             ",
          "transactionType": 1,
          "usage": "NR7153322028 RANKFURT    BARGELDAUSZAHLUNG  06.05  233731  ",
          "amount": -250,
          "currency": "EUR",
          "balance": 359.31,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-11T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  06.05  212747  ",
          "amount": -6.67,
          "currency": "EUR",
          "balance": 609.31,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-08T22:00:00.000Z",
          "accountedDate": "2017-05-11T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  06.05  203118  ",
          "amount": -6.28,
          "currency": "EUR",
          "balance": 615.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-04T22:00:00.000Z",
          "accountedDate": "2017-05-09T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PARKENFRANKFURTAIRPORT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  02.05  145612  ",
          "amount": -13.5,
          "currency": "EUR",
          "balance": 622.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-04T22:00:00.000Z",
          "accountedDate": "2017-05-09T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.05  133322  ",
          "amount": -7.39,
          "currency": "EUR",
          "balance": 635.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA MCDONALD S                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  02.05  144437  ",
          "amount": -29.18,
          "currency": "EUR",
          "balance": 643.15,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-03T22:00:00.000Z",
          "accountedDate": "2017-05-08T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  02.05  182826  ",
          "amount": -40.68,
          "currency": "EUR",
          "balance": 672.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  02.05  ",
          "amount": -0.27,
          "currency": "EUR",
          "balance": 713.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0883100  KAUFUMSATZ  01.05                 17,03  034541  ",
          "amount": -15.65,
          "currency": "EUR",
          "balance": 713.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-02T22:00:00.000Z",
          "accountedDate": "2017-05-07T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  29.04  170041  ",
          "amount": -22.89,
          "currency": "EUR",
          "balance": 728.93,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  74,37 EUR Zinsen 22,63 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 751.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-05-01T22:00:00.000Z",
          "accountedDate": "2017-05-01T22:00:00.000Z",
          "date": {
            "month": 5,
            "year": 2017
          },
          "account": "Kabelfernsehen Muenchen",
          "transactionType": 1,
          "usage": "KD.NR.: 353033 LT. CABLESURF/ FON V  ERTRAG: 04/2017 Vaclav Mikeska  ",
          "amount": -79.97,
          "currency": "EUR",
          "balance": 1.048,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-24T22:00:00.000Z",
          "accountedDate": "2017-04-27T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS AM                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  20.04  010013  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 1.128,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-24T22:00:00.000Z",
          "accountedDate": "2017-04-24T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.136,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-23T22:00:00.000Z",
          "accountedDate": "2017-04-26T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  20.04  123240  ",
          "amount": -41.03,
          "currency": "EUR",
          "balance": 86.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-19T22:00:00.000Z",
          "accountedDate": "2017-04-24T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  18.04  111335  ",
          "amount": -51.49,
          "currency": "EUR",
          "balance": 127.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA TRANSACT MR BARBER                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  17.04  002302  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 179.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA IC CASH 01010201                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  14.04  220552  ",
          "amount": -50,
          "currency": "EUR",
          "balance": 279.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA STADTWERKE VERKEHRSGES                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  14.04  231208  ",
          "amount": -2.9,
          "currency": "EUR",
          "balance": 329.3,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  13.04  125456  ",
          "amount": -47.84,
          "currency": "EUR",
          "balance": 332.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-18T22:00:00.000Z",
          "accountedDate": "2017-04-23T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA PAYPAL *JETBRAINSSR R8                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  13.04  061317  ",
          "amount": -15.35,
          "currency": "EUR",
          "balance": 380.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-17T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 UMS.ST FEB.17 3  ,33 EUR, UMS.ST MRZ.17 5,86 EUR  ",
          "amount": 9.19,
          "currency": "EUR",
          "balance": 395.39,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-17T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 386.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-17T22:00:00.000Z",
          "accountedDate": "2017-04-17T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 300,
          "currency": "EUR",
          "balance": 441.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-12T22:00:00.000Z",
          "accountedDate": "2017-04-19T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  11.04  145013  ",
          "amount": -12.82,
          "currency": "EUR",
          "balance": 141.2,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-12T22:00:00.000Z",
          "accountedDate": "2017-04-19T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA PARKENFRANKFURTAIRPORT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  10.04  201619  ",
          "amount": -4.5,
          "currency": "EUR",
          "balance": 154.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-12T22:00:00.000Z",
          "accountedDate": "2017-04-19T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  11.04  183330  ",
          "amount": -31.43,
          "currency": "EUR",
          "balance": 158.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-18T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA SHELL 5660                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  10.04  203415  ",
          "amount": -7.77,
          "currency": "EUR",
          "balance": 189.95,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-18T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA MCDONALD S                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  10.04  194437  ",
          "amount": -8.19,
          "currency": "EUR",
          "balance": 197.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-18T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  10.04  114306  ",
          "amount": -31.81,
          "currency": "EUR",
          "balance": 205.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-11T22:00:00.000Z",
          "accountedDate": "2017-04-11T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17004339722 36,68 EUR  ",
          "amount": -36.68,
          "currency": "EUR",
          "balance": 237.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-09T22:00:00.000Z",
          "accountedDate": "2017-04-12T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  06.04  111736  ",
          "amount": -11.08,
          "currency": "EUR",
          "balance": 274.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-06T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA VB KURPFALZ H + G BANK                           ",
          "transactionType": 1,
          "usage": "NR7153322028 KORNMARKT    BARGELDAUSZAHLUNG  05.04  165753  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 285.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-05T22:00:00.000Z",
          "accountedDate": "2017-04-10T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.04  234844  ",
          "amount": -7.35,
          "currency": "EUR",
          "balance": 485.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA 49001280BILLARD TREFF                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  03.04  190431  ",
          "amount": -70,
          "currency": "EUR",
          "balance": 492.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-03T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  04.04  ",
          "amount": -0.29,
          "currency": "EUR",
          "balance": 562.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0642100  KAUFUMSATZ  04.04                 17,73  235526  ",
          "amount": -16.66,
          "currency": "EUR",
          "balance": 563.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-04T22:00:00.000Z",
          "accountedDate": "2017-04-09T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE FRANKFURT/BOR                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  03.04  191040  ",
          "amount": -4.96,
          "currency": "EUR",
          "balance": 579.78,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  31.03  220016  ",
          "amount": -12.1,
          "currency": "EUR",
          "balance": 584.74,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-03T22:00:00.000Z",
          "accountedDate": "2017-04-06T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  31.03  101136  ",
          "amount": -42.18,
          "currency": "EUR",
          "balance": 596.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-03-29T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA 49001280BILLARD TREFF                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  29.03  184803  ",
          "amount": -70,
          "currency": "EUR",
          "balance": 639.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-04-02T22:00:00.000Z",
          "accountedDate": "2017-04-05T22:00:00.000Z",
          "date": {
            "month": 4,
            "year": 2017
          },
          "account": "VISA REWE FRANKFURT/BOR                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  29.03  184626  ",
          "amount": -3.57,
          "currency": "EUR",
          "balance": 709.02,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-30T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  73,27 EUR Zinsen 23,73 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 712.59,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-26T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  26.03  150905  ",
          "amount": -40,
          "currency": "EUR",
          "balance": 1.009,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-27T22:00:00.000Z",
          "accountedDate": "2017-03-30T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  25.03  205707  ",
          "amount": -6.82,
          "currency": "EUR",
          "balance": 1.049,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-26T22:00:00.000Z",
          "accountedDate": "2017-03-23T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  23.03  213644  ",
          "amount": -50,
          "currency": "EUR",
          "balance": 1.056,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-26T22:00:00.000Z",
          "accountedDate": "2017-03-26T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.106,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-21T23:00:00.000Z",
          "accountedDate": "2017-03-26T22:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 AMZN.COM/BI LU    KAUFUMSATZ  20.03  235735  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 56.41,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-16T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMZ*CSL-COMPUTER                                 ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  16.03  ",
          "amount": 24.85,
          "currency": "EUR",
          "balance": 64.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-19T23:00:00.000Z",
          "accountedDate": "2017-03-16T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  16.03  160057  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 39.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-15T23:00:00.000Z",
          "accountedDate": "2017-03-14T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  14.03 20.35 UHR  203529  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 129.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-15T23:00:00.000Z",
          "accountedDate": "2017-03-14T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  14.03 20.29 UHR  202943  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 219.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  13.03  004913  ",
          "amount": -18.59,
          "currency": "EUR",
          "balance": 309.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA PAYPAL *JETBRAINSSR R8                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  13.03  134751  ",
          "amount": -15.35,
          "currency": "EUR",
          "balance": 328.14,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA MSFT * E02003GJSB                                ",
          "transactionType": 1,
          "usage": "NR7153322028 MSFT AZURE  IE    KAUFUMSATZ  13.03  164244  ",
          "amount": -72.37,
          "currency": "EUR",
          "balance": 343.49,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  13.03  004930  ",
          "amount": -22.99,
          "currency": "EUR",
          "balance": 415.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-19T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  13.03  021248  ",
          "amount": -12.95,
          "currency": "EUR",
          "balance": 438.85,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-14T23:00:00.000Z",
          "accountedDate": "2017-03-14T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Sportgemeinschaft Wiking 1903 e.V.",
          "transactionType": 1,
          "usage": "WV-2272-M000249-00001 DE43ZZZ000001  86017 Mitgliedsbeitrag SpoGez Wikin  g Mikeska Vaclav  ",
          "amount": -55,
          "currency": "EUR",
          "balance": 451.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-13T23:00:00.000Z",
          "accountedDate": "2017-03-16T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA PAYPAL *321LINSEN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  11.03  103311  ",
          "amount": -107.97,
          "currency": "EUR",
          "balance": 506.8,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "",
          "amount": 400,
          "currency": "EUR",
          "balance": 614.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-09T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  09.03  205759  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 214.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-15T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  09.03  094217  ",
          "amount": -24.85,
          "currency": "EUR",
          "balance": 304.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17002906349 20,84 EUR  ",
          "amount": -20.84,
          "currency": "EUR",
          "balance": 329.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "ABOUT YOU - RatePAY GmbH",
          "transactionType": 2,
          "usage": "DG3993860S9  ",
          "amount": -27.89,
          "currency": "EUR",
          "balance": 350.46,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-12T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Tchibo GmbH",
          "transactionType": 2,
          "usage": "2016027610  ",
          "amount": -38.66,
          "currency": "EUR",
          "balance": 378.35,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-09T23:00:00.000Z",
          "accountedDate": "2017-03-14T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  08.03  225233  ",
          "amount": -13.1,
          "currency": "EUR",
          "balance": 417.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-08T23:00:00.000Z",
          "accountedDate": "2017-03-13T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  07.03  201624  ",
          "amount": -5.9,
          "currency": "EUR",
          "balance": 430.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-08T23:00:00.000Z",
          "accountedDate": "2017-03-13T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA WAXY S IRISH PUB                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  07.03  222735  ",
          "amount": -13.8,
          "currency": "EUR",
          "balance": 436.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-07T23:00:00.000Z",
          "accountedDate": "2017-03-12T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  06.03  105341  ",
          "amount": -29.95,
          "currency": "EUR",
          "balance": 449.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-09T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA PAYPAL *HEAVENLABSS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  04.03  101810  ",
          "amount": -108,
          "currency": "EUR",
          "balance": 479.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-06T23:00:00.000Z",
          "accountedDate": "2017-03-09T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.03  144653  ",
          "amount": -7.36,
          "currency": "EUR",
          "balance": 587.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA TRANSACT MR BARBER                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  02.03  220205  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 595.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  03.03  ",
          "amount": -0.3,
          "currency": "EUR",
          "balance": 685.12,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-08T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0493000  KAUFUMSATZ  02.03                 18,04  183806  ",
          "amount": -17.19,
          "currency": "EUR",
          "balance": 685.42,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-05T23:00:00.000Z",
          "accountedDate": "2017-03-05T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "Tchibo GmbH",
          "transactionType": 2,
          "usage": "20160276101003  ",
          "amount": -41.22,
          "currency": "EUR",
          "balance": 702.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-03-01T23:00:00.000Z",
          "accountedDate": "2017-03-06T23:00:00.000Z",
          "date": {
            "month": 3,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  28.02  000904  ",
          "amount": -180.46,
          "currency": "EUR",
          "balance": 743.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-27T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  25.02  160915  ",
          "amount": -21.96,
          "currency": "EUR",
          "balance": 924.29,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-27T23:00:00.000Z",
          "accountedDate": "2017-03-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  24.02  134512  ",
          "amount": -16.85,
          "currency": "EUR",
          "balance": 946.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-27T23:00:00.000Z",
          "accountedDate": "2017-02-27T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  72,17 EUR Zinsen 24,83 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 963.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  23.02  214624  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-26T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.35,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-22T23:00:00.000Z",
          "accountedDate": "2017-02-22T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Zalando SE",
          "transactionType": 2,
          "usage": "10103115419032  ",
          "amount": -56.95,
          "currency": "EUR",
          "balance": 300.1,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-21T23:00:00.000Z",
          "accountedDate": "2017-02-26T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 AMZN.COM/BI LU    KAUFUMSATZ  20.02  002456  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 357.05,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-19T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  18.02  133145  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 365.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  17.02  104202  ",
          "amount": -19.07,
          "currency": "EUR",
          "balance": 455.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  17.02  103627  ",
          "amount": -19.07,
          "currency": "EUR",
          "balance": 474.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  17.02  175910  ",
          "amount": -21.48,
          "currency": "EUR",
          "balance": 493.18,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-20T23:00:00.000Z",
          "accountedDate": "2017-02-23T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  17.02  103623  ",
          "amount": -27.72,
          "currency": "EUR",
          "balance": 514.66,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-16T23:00:00.000Z",
          "accountedDate": "2017-02-16T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "",
          "amount": -900,
          "currency": "EUR",
          "balance": 542.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-15T23:00:00.000Z",
          "accountedDate": "2017-02-14T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  14.02  174907  ",
          "amount": -140,
          "currency": "EUR",
          "balance": 1.442,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-15T23:00:00.000Z",
          "accountedDate": "2017-02-20T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  14.02  180246  ",
          "amount": -15.56,
          "currency": "EUR",
          "balance": 1.582,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-14T23:00:00.000Z",
          "accountedDate": "2017-02-19T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA PAYPAL *JETBRAINSSR                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  13.02  105500  ",
          "amount": -15.35,
          "currency": "EUR",
          "balance": 1.597,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-13T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  11.02  205113  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.613,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-13T23:00:00.000Z",
          "accountedDate": "2017-02-16T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  11.02  203007  ",
          "amount": -9.04,
          "currency": "EUR",
          "balance": 1.703,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-13T23:00:00.000Z",
          "accountedDate": "2017-02-16T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  10.02  162654  ",
          "amount": -31.55,
          "currency": "EUR",
          "balance": 1.712,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-12T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 UMS.ST DEZ.16 4  2,50 EUR, UMS.ST JAN.17 4,83 EUR  ",
          "amount": 47.33,
          "currency": "EUR",
          "balance": 1.743,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-12T23:00:00.000Z",
          "accountedDate": "2017-02-09T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  09.02  204857  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.696,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-12T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17001621786 33,77 EUR  ",
          "amount": -33.77,
          "currency": "EUR",
          "balance": 1.786,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-09T23:00:00.000Z",
          "accountedDate": "2017-02-14T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA AMAZON DOWNLOADS                                 ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  08.02  114536  ",
          "amount": -24.95,
          "currency": "EUR",
          "balance": 1.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-07T23:00:00.000Z",
          "accountedDate": "2017-02-12T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA PAYPAL *HEAVENLABSS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  05.02  194912  ",
          "amount": -30,
          "currency": "EUR",
          "balance": 1.845,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-05T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA BANKHAUS AUGUST LENZ A                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  05.02  150159  ",
          "amount": -80,
          "currency": "EUR",
          "balance": 1.875,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-06T23:00:00.000Z",
          "accountedDate": "2017-02-09T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.02  214716  ",
          "amount": -7.35,
          "currency": "EUR",
          "balance": 1.955,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-05T23:00:00.000Z",
          "accountedDate": "2017-02-05T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "Jan Blaha",
          "transactionType": 0,
          "usage": "GLOOBSTER  ",
          "amount": 595,
          "currency": "EUR",
          "balance": 1.962,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-05T23:00:00.000Z",
          "accountedDate": "2017-02-02T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  03.02  ",
          "amount": -0.29,
          "currency": "EUR",
          "balance": 1.367,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-05T23:00:00.000Z",
          "accountedDate": "2017-02-08T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0753100  KAUFUMSATZ  02.02                 18,04  205350  ",
          "amount": -16.78,
          "currency": "EUR",
          "balance": 1.367,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-01T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  31.01  213026  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.384,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-02-01T23:00:00.000Z",
          "accountedDate": "2017-02-06T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "VISA PAYPAL *321LINSEN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  31.01  180629  ",
          "amount": -39.89,
          "currency": "EUR",
          "balance": 1.474,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-31T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 2,
            "year": 2017
          },
          "account": "PIERLUIGI NICOLELLA",
          "transactionType": 2,
          "usage": "",
          "amount": -162,
          "currency": "EUR",
          "balance": 1.514,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-30T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  71,08 EUR Zinsen 25,92 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 1.676,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-29T23:00:00.000Z",
          "accountedDate": "2017-02-01T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE RETAIL AMAZO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  26.01  100727  ",
          "amount": -20.43,
          "currency": "EUR",
          "balance": 1.973,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-25T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA MCDONALDS FLORENC                                ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  26.01  ",
          "amount": -0.07,
          "currency": "EUR",
          "balance": 1.994,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-26T23:00:00.000Z",
          "accountedDate": "2017-01-31T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA MCDONALDS FLORENC                                ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA       CZ  KURS      26,9778100  KAUFUMSATZ  24.01                114,00  015317  ",
          "amount": -4.23,
          "currency": "EUR",
          "balance": 1.994,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-25T23:00:00.000Z",
          "accountedDate": "2017-01-24T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA SHELL MALKOVICE P                                ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  25.01  ",
          "amount": -1.1,
          "currency": "EUR",
          "balance": 1.998,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-25T23:00:00.000Z",
          "accountedDate": "2017-01-30T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA SHELL MALKOVICE P                                ",
          "transactionType": 1,
          "usage": "NR7153322028 BOR U TACHO CZ  KURS      26,9998100  KAUFUMSATZ  24.01               1693,70  134825  ",
          "amount": -62.73,
          "currency": "EUR",
          "balance": 1.999,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-23T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  24.01  ",
          "amount": -0.24,
          "currency": "EUR",
          "balance": 2.062,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-23T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PARKOVACI DUM ROZMAR                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  24.01  ",
          "amount": -0.02,
          "currency": "EUR",
          "balance": 2.062,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-29T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 1     CZ  KURS      26,9638400  KAUFUMSATZ  23.01                374,00  152511  ",
          "amount": -13.87,
          "currency": "EUR",
          "balance": 2.062,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-29T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PARKOVACI DUM ROZMAR                             ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,9638400  KAUFUMSATZ  22.01                 30,00  152835  ",
          "amount": -1.11,
          "currency": "EUR",
          "balance": 2.076,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-24T23:00:00.000Z",
          "accountedDate": "2017-01-24T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 2.077,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-22T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA LIDL364                                          ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  23.01  ",
          "amount": -0.23,
          "currency": "EUR",
          "balance": 1.027,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-22T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA LIDL364                                          ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  23.01  ",
          "amount": -0.07,
          "currency": "EUR",
          "balance": 1.027,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA LIDL364                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 HUSTOPECE   CZ  KURS      26,9990100  KAUFUMSATZ  22.01                114,40  192134  ",
          "amount": -4.24,
          "currency": "EUR",
          "balance": 1.027,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA LIDL364                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 HUSTOPECE   CZ  KURS      26,9990100  KAUFUMSATZ  20.01                348,32  190642  ",
          "amount": -12.9,
          "currency": "EUR",
          "balance": 1.031,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-23T23:00:00.000Z",
          "accountedDate": "2017-01-26T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DIGITAL SVCS                              ",
          "transactionType": 1,
          "usage": "NR7153322028 AMZN.COM/BI LU    KAUFUMSATZ  20.01  000102  ",
          "amount": -7.99,
          "currency": "EUR",
          "balance": 1.044,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-22T23:00:00.000Z",
          "accountedDate": "2017-01-19T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA JEDNOTA NS 490                                   ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  20.01  ",
          "amount": -0.21,
          "currency": "EUR",
          "balance": 1.052,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-22T23:00:00.000Z",
          "accountedDate": "2017-01-25T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA JEDNOTA NS 490                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 VELKE PAVLO CZ  KURS      26,9874900  KAUFUMSATZ  19.01                319,81  154613  ",
          "amount": -11.85,
          "currency": "EUR",
          "balance": 1.053,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-19T23:00:00.000Z",
          "accountedDate": "2017-01-18T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VANKOVKABRNO                                     ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,9986400  BARGELDAUSZAHLUNG  18.01               5000,00  191917  ",
          "amount": -185.19,
          "currency": "EUR",
          "balance": 1.064,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-19T23:00:00.000Z",
          "accountedDate": "2017-01-18T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VANKOVKABRNO                                     ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  19.01  ",
          "amount": -3.24,
          "currency": "EUR",
          "balance": 1.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-17T23:00:00.000Z",
          "accountedDate": "2017-01-16T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PAP OIL VEL.PAVLOVICE                            ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  17.01  ",
          "amount": -1.01,
          "currency": "EUR",
          "balance": 1.253,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-17T23:00:00.000Z",
          "accountedDate": "2017-01-22T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PAP OIL VEL.PAVLOVICE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 VELKE PAVLO CZ  KURS      26,9692300  KAUFUMSATZ  16.01               1552,65  121024  ",
          "amount": -57.57,
          "currency": "EUR",
          "balance": 1.254,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-16T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VACLAVSKE NAM. 42                                ",
          "transactionType": 1,
          "usage": "NR7153322028 PRAHA 1     CZ  KURS      26,9750500  BARGELDAUSZAHLUNG  15.01               2000,00  012615  ",
          "amount": -74.14,
          "currency": "EUR",
          "balance": 1.311,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-16T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VACLAVSKE NAM. 42                                ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  16.01  ",
          "amount": -1.3,
          "currency": "EUR",
          "balance": 1.386,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-16T23:00:00.000Z",
          "accountedDate": "2017-01-19T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  14.01  125819  ",
          "amount": -14.53,
          "currency": "EUR",
          "balance": 1.387,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-18T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  12.01  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 1.401,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-18T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VAPIANO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  12.01  135047  ",
          "amount": -18.45,
          "currency": "EUR",
          "balance": 1.407,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-15T23:00:00.000Z",
          "accountedDate": "2017-01-15T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "FITNESS FIRST GERMANY GMBH",
          "transactionType": 1,
          "usage": "NP Home 12M 15.01.-03.02.17  ",
          "amount": -45.88,
          "currency": "EUR",
          "balance": 1.426,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  10.01  225845  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.472,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-11T23:00:00.000Z",
          "accountedDate": "2017-01-16T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  10.01  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 1.562,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-10T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F17000351482 29,37 EUR  ",
          "amount": -29.37,
          "currency": "EUR",
          "balance": 1.568,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VAPIANO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  08.01  132742  ",
          "amount": -18.45,
          "currency": "EUR",
          "balance": 1.597,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  06.01  125043  ",
          "amount": -20.24,
          "currency": "EUR",
          "balance": 1.616,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA DM-DROGERIE MARKT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  06.01  125640  ",
          "amount": -7.7,
          "currency": "EUR",
          "balance": 1.636,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-09T23:00:00.000Z",
          "accountedDate": "2017-01-12T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  06.01  010025  ",
          "amount": -14.99,
          "currency": "EUR",
          "balance": 1.643,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-08T23:00:00.000Z",
          "accountedDate": "2017-01-05T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    BARGELDAUSZAHLUNG  05.01 00.03 UHR  000359  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 1.658,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-08T23:00:00.000Z",
          "accountedDate": "2017-01-11T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  05.01  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 1.758,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-05T23:00:00.000Z",
          "accountedDate": "2017-01-04T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  05.01  ",
          "amount": -0.3,
          "currency": "EUR",
          "balance": 1.764,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-05T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0388000  KAUFUMSATZ  04.01                 18,04  193735  ",
          "amount": -17.37,
          "currency": "EUR",
          "balance": 1.765,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-05T23:00:00.000Z",
          "accountedDate": "2017-01-10T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA AMAZON PRIME GEBUEHR                             ",
          "transactionType": 1,
          "usage": "NR7153322028 AMZN.DE/INF LU    KAUFUMSATZ  04.01  015246  ",
          "amount": -49,
          "currency": "EUR",
          "balance": 1.782,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-04T23:00:00.000Z",
          "accountedDate": "2017-01-09T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.01  023408  ",
          "amount": -7.34,
          "currency": "EUR",
          "balance": 1.831,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-03T23:00:00.000Z",
          "accountedDate": "2017-01-08T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA VAPIANO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  02.01  123752  ",
          "amount": -18.45,
          "currency": "EUR",
          "balance": 1.838,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-02T23:00:00.000Z",
          "accountedDate": "2017-01-05T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  30.12  215931  ",
          "amount": -12.1,
          "currency": "EUR",
          "balance": 1.857,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-02T23:00:00.000Z",
          "accountedDate": "2017-01-05T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  30.12  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 1.869,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2017-01-01T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 1,
            "year": 2017
          },
          "account": "VISA TRANSACT MR BARBER                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  29.12  011438  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.875,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2017-01-03T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA DM-DROGERIE MARKT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  28.12  125707  ",
          "amount": -23,
          "currency": "EUR",
          "balance": 1.965,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-29T23:00:00.000Z",
          "accountedDate": "2016-12-29T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  69,99 EUR Zinsen 27,01 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 1.988,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-28T23:00:00.000Z",
          "accountedDate": "2016-12-28T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 EINK.ST 2015 1.  303,00 EUR, SOL.EST 2015 70,94 EUR  ",
          "amount": 1.373,
          "currency": "EUR",
          "balance": 2.285,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 MESSE    BARGELDAUSZAHLUNG  26.12  220138  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 911.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA ASPONE SRO                                       ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  27.12  ",
          "amount": -0.23,
          "currency": "EUR",
          "balance": 1.001,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA ASPONE SRO                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 ZLIN - LOUN CZ  KURS      27,0033100  KAUFUMSATZ  26.12                350,00  140022  ",
          "amount": -12.96,
          "currency": "EUR",
          "balance": 1.001,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA SHELL 5577                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINTAL    KAUFUMSATZ  25.12  151817  ",
          "amount": -7.54,
          "currency": "EUR",
          "balance": 1.014,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-27T23:00:00.000Z",
          "accountedDate": "2017-01-01T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  24.12  111728  ",
          "amount": -35.09,
          "currency": "EUR",
          "balance": 1.022,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  22.12 22.27 UHR  222736  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.057,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "PIERLUIGI NICOLELLA",
          "transactionType": 2,
          "usage": "",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.147,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-26T23:00:00.000Z",
          "accountedDate": "2016-12-26T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.237,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-21T23:00:00.000Z",
          "accountedDate": "2016-12-27T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  20.12  ",
          "amount": -6,
          "currency": "EUR",
          "balance": 187.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-21T23:00:00.000Z",
          "accountedDate": "2016-12-27T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA VAPIANO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  20.12  131020  ",
          "amount": -18.45,
          "currency": "EUR",
          "balance": 193.37,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-19T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA ESSO STATION FRANKFURT                           ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  18.12  ",
          "amount": -7.4,
          "currency": "EUR",
          "balance": 211.82,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-19T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA VAPIANO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  18.12  133044  ",
          "amount": -18.45,
          "currency": "EUR",
          "balance": 219.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-19T23:00:00.000Z",
          "accountedDate": "2016-12-22T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE FRANKFURT/BOR                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  16.12  125318  ",
          "amount": -18.73,
          "currency": "EUR",
          "balance": 237.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-18T23:00:00.000Z",
          "accountedDate": "2016-12-18T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 200,
          "currency": "EUR",
          "balance": 256.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-14T23:00:00.000Z",
          "accountedDate": "2016-12-19T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  13.12  105313  ",
          "amount": -535,
          "currency": "EUR",
          "balance": 56.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-14T23:00:00.000Z",
          "accountedDate": "2016-12-14T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "FITNESS FIRST GERMANY GMBH",
          "transactionType": 1,
          "usage": "NP Home 12M 15.12.16-14.01.17  ",
          "amount": -71.98,
          "currency": "EUR",
          "balance": 591.4,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA TRANSACT CRMHUNSRUECKO                           ",
          "transactionType": 1,
          "usage": "NR7153322028 DAXWEILER    BARGELDAUSZAHLUNG  09.12  153247  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 663.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA E-AKTIV MARKT WOLST                              ",
          "transactionType": 1,
          "usage": "NR7153322028 GAU-ALGESHE    KAUFUMSATZ  10.12  155234  ",
          "amount": -6.78,
          "currency": "EUR",
          "balance": 763.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA BIOBUTTEK WILHELM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 CAPELLEN    LU    KAUFUMSATZ  10.12  131700  ",
          "amount": -27,
          "currency": "EUR",
          "balance": 770.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  10.12  164341  ",
          "amount": -12.1,
          "currency": "EUR",
          "balance": 797.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-15T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA SHELL 0214                                       ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  09.12  135927  ",
          "amount": -44.45,
          "currency": "EUR",
          "balance": 809.26,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Smartphone  ",
          "amount": 200,
          "currency": "EUR",
          "balance": 853.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-12T23:00:00.000Z",
          "accountedDate": "2016-12-12T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F16014146865 26,06 EUR  ",
          "amount": -26.06,
          "currency": "EUR",
          "balance": 653.71,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 UMS.ST NOV.16 3  ,17 EUR  ",
          "amount": 3.17,
          "currency": "EUR",
          "balance": 679.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-14T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  08.12  145953  ",
          "amount": -28.72,
          "currency": "EUR",
          "balance": 676.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-11T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "Sabrina Mikeska",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 150,
          "currency": "EUR",
          "balance": 705.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-08T23:00:00.000Z",
          "accountedDate": "2016-12-07T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  07.12  215823  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 555.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-08T23:00:00.000Z",
          "accountedDate": "2016-12-13T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  07.12  141915  ",
          "amount": -57.2,
          "currency": "EUR",
          "balance": 645.32,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-06T23:00:00.000Z",
          "accountedDate": "2016-12-11T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  05.12  212032  ",
          "amount": -58.46,
          "currency": "EUR",
          "balance": 702.52,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-04T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  05.12  ",
          "amount": -0.3,
          "currency": "EUR",
          "balance": 760.98,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-08T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  03.12  220233  ",
          "amount": -13.1,
          "currency": "EUR",
          "balance": 761.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-08T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  03.12  213622  ",
          "amount": -5.9,
          "currency": "EUR",
          "balance": 774.38,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-08T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.12  060250  ",
          "amount": -7.34,
          "currency": "EUR",
          "balance": 780.28,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-05T23:00:00.000Z",
          "accountedDate": "2016-12-08T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,0624100  KAUFUMSATZ  02.12                 18,04  072010  ",
          "amount": -16.98,
          "currency": "EUR",
          "balance": 787.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-07T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  01.12  222251  ",
          "amount": -13.1,
          "currency": "EUR",
          "balance": 804.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-12-04T23:00:00.000Z",
          "accountedDate": "2016-12-07T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  01.12  183646  ",
          "amount": -30.88,
          "currency": "EUR",
          "balance": 817.7,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-30T23:00:00.000Z",
          "accountedDate": "2016-12-05T23:00:00.000Z",
          "date": {
            "month": 12,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  29.11  124428  ",
          "amount": -68.83,
          "currency": "EUR",
          "balance": 848.58,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-29T23:00:00.000Z",
          "accountedDate": "2016-11-29T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  68,90 EUR Zinsen 28,10 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 917.41,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-28T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKF.STR    BARGELDAUSZAHLUNG  25.11  213915  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.214,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA DM-DROGERIE MARKT                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  24.11  112000  ",
          "amount": -8.75,
          "currency": "EUR",
          "balance": 1.304,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-27T23:00:00.000Z",
          "accountedDate": "2016-11-30T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  24.11  110457  ",
          "amount": -35.01,
          "currency": "EUR",
          "balance": 1.313,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-24T23:00:00.000Z",
          "accountedDate": "2016-11-23T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 CINEMAXX    BARGELDAUSZAHLUNG  23.11  205613  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 1.348,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-24T23:00:00.000Z",
          "accountedDate": "2016-11-29T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA APCOA PARKING                                    ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  23.11  142530  ",
          "amount": -79.8,
          "currency": "EUR",
          "balance": 1.438,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-24T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.517,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-23T23:00:00.000Z",
          "accountedDate": "2016-11-28T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE ALI SAHIN OHG                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  22.11  120822  ",
          "amount": -15.28,
          "currency": "EUR",
          "balance": 467.97,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-22T23:00:00.000Z",
          "accountedDate": "2016-11-27T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA PICASSO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  21.11  194742  ",
          "amount": -15.4,
          "currency": "EUR",
          "balance": 483.25,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-22T23:00:00.000Z",
          "accountedDate": "2016-11-22T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FITNESS FIRST GERMANY GMBH",
          "transactionType": 1,
          "usage": "NP Home 12M 15.11.-14.12.16  ",
          "amount": -71.98,
          "currency": "EUR",
          "balance": 498.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-21T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA APCOA PARKING                                    ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  19.11  201843  ",
          "amount": -3.6,
          "currency": "EUR",
          "balance": 570.63,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-21T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA PICASSO                                          ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  20.11  125557  ",
          "amount": -7,
          "currency": "EUR",
          "balance": 574.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-21T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  19.11  181944  ",
          "amount": -17.64,
          "currency": "EUR",
          "balance": 581.23,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-21T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA APCOA PARKING                                    ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  18.11  171353  ",
          "amount": -5.4,
          "currency": "EUR",
          "balance": 598.87,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-21T23:00:00.000Z",
          "accountedDate": "2016-11-24T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  18.11  175544  ",
          "amount": -13.8,
          "currency": "EUR",
          "balance": 604.27,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-20T23:00:00.000Z",
          "accountedDate": "2016-11-23T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA APCOA PARKING                                    ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  17.11  154948  ",
          "amount": -14.4,
          "currency": "EUR",
          "balance": 618.07,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-17T23:00:00.000Z",
          "accountedDate": "2016-11-16T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA 49001280BILLARD TREFF                            ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    BARGELDAUSZAHLUNG  16.11  154502  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 632.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-17T23:00:00.000Z",
          "accountedDate": "2016-11-22T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  16.11  211145  ",
          "amount": -7.03,
          "currency": "EUR",
          "balance": 722.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-16T23:00:00.000Z",
          "accountedDate": "2016-11-21T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  15.11  213903  ",
          "amount": -13.1,
          "currency": "EUR",
          "balance": 729.5,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-15T23:00:00.000Z",
          "accountedDate": "2016-11-20T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  14.11  122242  ",
          "amount": -18.07,
          "currency": "EUR",
          "balance": 742.6,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-14T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMZ*MAXIMOFITNESS                                ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  11.11  ",
          "amount": 20.5,
          "currency": "EUR",
          "balance": 760.67,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-14T23:00:00.000Z",
          "accountedDate": "2016-11-17T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA FOERSTER S CAFE-RESTAU                           ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH /    KAUFUMSATZ  12.11  230352  ",
          "amount": -21,
          "currency": "EUR",
          "balance": 740.17,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-14T23:00:00.000Z",
          "accountedDate": "2016-11-17T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  11.11  202803  ",
          "amount": -49.99,
          "currency": "EUR",
          "balance": 761.17,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 UMS.ST OKT.16 3  5,27 EUR  ",
          "amount": 35.27,
          "currency": "EUR",
          "balance": 811.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMZ*GREENERY HK                                  ",
          "transactionType": 0,
          "usage": "NR7153322028             LU    GUTSCHRIFTSBELEG  10.11  ",
          "amount": 8.97,
          "currency": "EUR",
          "balance": 775.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-13T23:00:00.000Z",
          "accountedDate": "2016-11-16T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  10.11  173816  ",
          "amount": -29.99,
          "currency": "EUR",
          "balance": 766.92,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-10T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "FA OFFENBACH I",
          "transactionType": 0,
          "usage": "ERSTATT.04484663862 DIE AUFLISTUNG  DER EINZELNEN ERSTATTUNGSPOSTEN IST  AUS DER ERSTATTUNGSMITTEILUNG ZU E  NTNEHMEN.  ",
          "amount": 484.22,
          "currency": "EUR",
          "balance": 796.91,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-09T23:00:00.000Z",
          "accountedDate": "2016-11-14T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  08.11  191708  ",
          "amount": -24,
          "currency": "EUR",
          "balance": 312.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-09T23:00:00.000Z",
          "accountedDate": "2016-11-09T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F16012829404 19,85 EUR  ",
          "amount": -19.85,
          "currency": "EUR",
          "balance": 336.69,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-08T23:00:00.000Z",
          "accountedDate": "2016-11-13T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  07.11  151143  ",
          "amount": -12.47,
          "currency": "EUR",
          "balance": 356.54,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA ALDI SUED SAGT DANKE                             ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  04.11  121456  ",
          "amount": -4.99,
          "currency": "EUR",
          "balance": 369.01,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA ALDI SUED SAGT DANKE                             ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    KAUFUMSATZ  04.11  104102  ",
          "amount": -21.47,
          "currency": "EUR",
          "balance": 374,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-07T23:00:00.000Z",
          "accountedDate": "2016-11-10T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.11  191717  ",
          "amount": -7.34,
          "currency": "EUR",
          "balance": 395.47,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-09T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA PAYPAL *321LINSEN                                ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.11  113048  ",
          "amount": -39.89,
          "currency": "EUR",
          "balance": 402.81,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 0,
          "usage": "Zurueck  ",
          "amount": 303.48,
          "currency": "EUR",
          "balance": 442.7,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-06T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Dirk Pfeiffer",
          "transactionType": 2,
          "usage": "eBay Artikelnr. 291923873460 / CAD  Grafikkarte NVIDIA Quadro 2000  ",
          "amount": -25,
          "currency": "EUR",
          "balance": 139.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-03T23:00:00.000Z",
          "accountedDate": "2016-11-02T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA FRANKFURTER SPARKASSE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 F-HAUPTW.2    BARGELDAUSZAHLUNG  02.11  230507  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 164.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-03T23:00:00.000Z",
          "accountedDate": "2016-11-02T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  03.11  ",
          "amount": -0.29,
          "currency": "EUR",
          "balance": 254.22,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-03T23:00:00.000Z",
          "accountedDate": "2016-11-08T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1049100  KAUFUMSATZ  02.11                 18,04  185616  ",
          "amount": -16.33,
          "currency": "EUR",
          "balance": 254.51,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  31.10  132737  ",
          "amount": -29.99,
          "currency": "EUR",
          "balance": 270.84,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-11-01T23:00:00.000Z",
          "accountedDate": "2016-11-06T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  31.10  100559  ",
          "amount": -12.61,
          "currency": "EUR",
          "balance": 300.83,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-11-03T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA PAYPAL *GITHUB INC 4ZA                           ",
          "transactionType": 1,
          "usage": "NR7153322028 4029357733  US    KAUFUMSATZ  30.10  112104  ",
          "amount": -80,
          "currency": "EUR",
          "balance": 313.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-11-03T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "VISA AMAZON EU                                        ",
          "transactionType": 1,
          "usage": "NR7153322028 AMAZON.DE   LU    KAUFUMSATZ  28.10  174630  ",
          "amount": -129,
          "currency": "EUR",
          "balance": 393.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-31T23:00:00.000Z",
          "accountedDate": "2016-10-31T23:00:00.000Z",
          "date": {
            "month": 11,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 2,
          "usage": "Closer and closer to the Ferrari  ",
          "amount": -300,
          "currency": "EUR",
          "balance": 522.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-30T23:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  67,82 EUR Zinsen 29,18 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 822.44,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-27T22:00:00.000Z",
          "accountedDate": "2016-10-26T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA COMMERZBANK ATM                                  ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT    BARGELDAUSZAHLUNG  26.10 21.57 UHR  215759  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 1.119,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-25T22:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA REWE FRANKFURT/BOR                               ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT A    KAUFUMSATZ  24.10  123945  ",
          "amount": -6.38,
          "currency": "EUR",
          "balance": 1.219,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-25T22:00:00.000Z",
          "accountedDate": "2016-10-30T23:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA AMAZON DE MARKETPLACE                            ",
          "transactionType": 1,
          "usage": "NR7153322028 800-279-662 LU    KAUFUMSATZ  24.10  013848  ",
          "amount": -12.9,
          "currency": "EUR",
          "balance": 1.225,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-24T22:00:00.000Z",
          "accountedDate": "2016-10-24T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Mikeska, Sabrina",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 1.05,
          "currency": "EUR",
          "balance": 1.238,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-20T22:00:00.000Z",
          "accountedDate": "2016-10-25T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  19.10  123227  ",
          "amount": -6.07,
          "currency": "EUR",
          "balance": 188.72,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-17T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA TRANSACT BERLINER 37                             ",
          "transactionType": 1,
          "usage": "NR7153322028 FRANKFURT M    BARGELDAUSZAHLUNG  16.10  164823  ",
          "amount": -50,
          "currency": "EUR",
          "balance": 194.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-13T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA SPARKASSE OFFENBACH                              ",
          "transactionType": 1,
          "usage": "NR7153322028 BERL.STR.    BARGELDAUSZAHLUNG  13.10  083926  ",
          "amount": -200,
          "currency": "EUR",
          "balance": 244.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-16T22:00:00.000Z",
          "accountedDate": "2016-10-16T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "FITNESS FIRST GERMANY GMBH",
          "transactionType": 1,
          "usage": "10813994 VACLAV Monatsbeitrag  ",
          "amount": -71.98,
          "currency": "EUR",
          "balance": 444.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-12T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F16011510194 51,88 EUR  ",
          "amount": -51.88,
          "currency": "EUR",
          "balance": 516.77,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-10T22:00:00.000Z",
          "accountedDate": "2016-10-13T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  07.10  192256  ",
          "amount": -59.39,
          "currency": "EUR",
          "balance": 568.65,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-09T22:00:00.000Z",
          "accountedDate": "2016-10-12T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  06.10  095350  ",
          "amount": -6.29,
          "currency": "EUR",
          "balance": 628.04,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-06T22:00:00.000Z",
          "accountedDate": "2016-10-06T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "wie ausgemacht  ",
          "amount": 550,
          "currency": "EUR",
          "balance": 634.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA IKEA FFM-NIEDERESCHBAC                           ",
          "transactionType": 1,
          "usage": "NR7153322028 NIEDERESCHB    BARGELDAUSZAHLUNG  04.10  103549  ",
          "amount": -100,
          "currency": "EUR",
          "balance": 84.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-04T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  05.10  ",
          "amount": -0.28,
          "currency": "EUR",
          "balance": 184.33,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-05T22:00:00.000Z",
          "accountedDate": "2016-10-10T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1149000  KAUFUMSATZ  04.10                 18,04  231943  ",
          "amount": -16.18,
          "currency": "EUR",
          "balance": 184.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-10-04T22:00:00.000Z",
          "accountedDate": "2016-10-09T22:00:00.000Z",
          "date": {
            "month": 10,
            "year": 2016
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.10  094707  ",
          "amount": -7.34,
          "currency": "EUR",
          "balance": 200.79,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-29T22:00:00.000Z",
          "accountedDate": "2016-09-29T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  66,75 EUR Zinsen 30,25 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 208.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-25T22:00:00.000Z",
          "accountedDate": "2016-09-25T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 500,
          "currency": "EUR",
          "balance": 505.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-22T22:00:00.000Z",
          "accountedDate": "2016-09-21T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  22.09  ",
          "amount": -0.03,
          "currency": "EUR",
          "balance": 5.13,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-22T22:00:00.000Z",
          "accountedDate": "2016-09-27T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA BAGETERIE BOULEVARD                              ",
          "transactionType": 1,
          "usage": "NR7153322028 BRNO        CZ  KURS      26,8270300  KAUFUMSATZ  21.09                 39,00  151845  ",
          "amount": -1.45,
          "currency": "EUR",
          "balance": 5.16,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-14T22:00:00.000Z",
          "accountedDate": "2016-09-19T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  13.09  094602  ",
          "amount": -41.87,
          "currency": "EUR",
          "balance": 6.61,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-14T22:00:00.000Z",
          "accountedDate": "2016-09-14T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "FITNESS FIRST GERMANY GMBH",
          "transactionType": 1,
          "usage": "10813994 VACLAV Monatsbeitrag  ",
          "amount": -71.98,
          "currency": "EUR",
          "balance": 48.48,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-12T22:00:00.000Z",
          "accountedDate": "2016-09-12T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Klarmobil GmbH",
          "transactionType": 1,
          "usage": "Kd 1052829108 Wir sagen danke. RG-N  r. F16010101118 41,16 EUR  ",
          "amount": -41.16,
          "currency": "EUR",
          "balance": 120.46,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA SPARDA-BANK SUEDWEST                             ",
          "transactionType": 1,
          "usage": "NR7153322028 MAINZ FORT    BARGELDAUSZAHLUNG  03.09  185907  ",
          "amount": -90,
          "currency": "EUR",
          "balance": 161.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-04T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028    1,75% WECHSELKURSGEBUEHR  05.09  ",
          "amount": -0.28,
          "currency": "EUR",
          "balance": 251.62,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-08T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA MLAB                                             ",
          "transactionType": 1,
          "usage": "NR7153322028 4157582748  US  KURS       1,1127000  KAUFUMSATZ  03.09                 18,04  075404  ",
          "amount": -16.21,
          "currency": "EUR",
          "balance": 251.9,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-08T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA PAYPAL *MICROSOFT OFFI                           ",
          "transactionType": 1,
          "usage": "NR7153322028 35314369001 GB    KAUFUMSATZ  03.09  044814  ",
          "amount": -7.34,
          "currency": "EUR",
          "balance": 268.11,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-08T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  02.09  222114  ",
          "amount": -12.1,
          "currency": "EUR",
          "balance": 275.45,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-05T22:00:00.000Z",
          "accountedDate": "2016-09-08T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA REWE OFFENBACH AM                                ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH A    KAUFUMSATZ  02.09  122505  ",
          "amount": -39.21,
          "currency": "EUR",
          "balance": 287.55,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-04T22:00:00.000Z",
          "accountedDate": "2016-09-07T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA STONE VILLAGE                                    ",
          "transactionType": 1,
          "usage": "NR7153322028 GEROPOTAMO  GR    KAUFUMSATZ  31.08  175431  ",
          "amount": -330,
          "currency": "EUR",
          "balance": 326.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-01T22:00:00.000Z",
          "accountedDate": "2016-08-31T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA VVB MAINGAU EG                                   ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    BARGELDAUSZAHLUNG  31.08  191942  ",
          "amount": -80,
          "currency": "EUR",
          "balance": 656.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-01T22:00:00.000Z",
          "accountedDate": "2016-09-01T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Geburtsvorbereitung  ",
          "amount": 80,
          "currency": "EUR",
          "balance": 736.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-09-01T22:00:00.000Z",
          "accountedDate": "2016-09-06T22:00:00.000Z",
          "date": {
            "month": 9,
            "year": 2016
          },
          "account": "VISA LOSTERIA OFFENBACH                               ",
          "transactionType": 1,
          "usage": "NR7153322028 OFFENBACH    KAUFUMSATZ  31.08  220059  ",
          "amount": -12.1,
          "currency": "EUR",
          "balance": 656.76,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Urlaub  ",
          "amount": 350,
          "currency": "EUR",
          "balance": 668.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-30T22:00:00.000Z",
          "accountedDate": "2016-08-30T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Vaclav Mikeska",
          "transactionType": 1,
          "usage": "Darl.-Leistung 6700386060 Tilgung 2  65,68 EUR Zinsen 31,32 EUR  ",
          "amount": -297,
          "currency": "EUR",
          "balance": 318.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-29T22:00:00.000Z",
          "accountedDate": "2016-08-29T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "UROLOGICUM OFFENBACH",
          "transactionType": 1,
          "usage": "ELV67086501 24.08 10.14 ME21  ",
          "amount": -35.03,
          "currency": "EUR",
          "balance": 615.86,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-24T22:00:00.000Z",
          "accountedDate": "2016-08-24T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "Sabrina Goersch",
          "transactionType": 0,
          "usage": "Dies und das  ",
          "amount": 500,
          "currency": "EUR",
          "balance": 650.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": "2016-08-22T22:00:00.000Z",
          "accountedDate": "2016-08-25T22:00:00.000Z",
          "date": {
            "month": 8,
            "year": 2016
          },
          "account": "VISA HOTEL HELGA S.R.O.                               ",
          "transactionType": 1,
          "usage": "NR7153322028 MARIANSKE L CZ    KAUFUMSATZ  19.08  152333  ",
          "amount": -43.5,
          "currency": "EUR",
          "balance": 150.89,
          "balanceCurrency": "EUR"
        },
        {
          "paidDate": null,
          "accountedDate": null,
          "date": {
            "month": null,
            "year": null
          },
          "transactionType": null,
          "amount": null,
          "balance": null
        }
      ]

}

export class IncomeItem {
    amount: number;
    name: string;
    start?: MonthDate;
    end?: MonthDate;
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

 export class MonthlyGroupedIncomes {
    date: MonthDate;
    items: IncomeItem[];
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