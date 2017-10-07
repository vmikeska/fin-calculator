

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FilterRule, FilterCategoryService } from '../endpoints/filter-category.service';
import { Data, CategoryItem } from '../data';

@Component({
    selector: 're-settings',
    templateUrl: 're-settings.html'
})

export class ReSettingsComponent implements OnInit {
    constructor(private _fcSvc: FilterCategoryService) { }

    ngOnInit() { }

    public newCfCat
    public newCfValue
    public newCfProp



    public cats: CategoryItem[] = Data.cats;

    private groupRulesByCategory(rules: FilterRule[]) {
        let groupedRules = _.groupBy(rules, "categoryId");
    }

    public newCatFilterClick() {

        let nr: FilterRule = {
            categoryId: this.newCfCat,
            propName: this.newCfValue,
            value: this.newCfValue
        }

        this._fcSvc.postAsync(nr);
    }



}





// public static categoryRules: FilterRule[] = [
//     //Flat OF
//     {
//         categoryId: 1,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "ABG FRANKFURT HOLDING"
//             },
//             {
//                 propName: "account",
//                 contains: "PROENGENO GmbH + Co. KG"
//             }
//         ]

//     },
//     //Car
//     {
//         categoryId: 2,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "tanken"
//             },
//             {
//                 propName: "account",
//                 contains: "shell"
//             },
//             {
//                 propName: "account",
//                 contains: "CS PHM"
//             },
//             {
//                 propName: "account",
//                 contains: "SB-TANK"
//             },
//             {
//                 propName: "account",
//                 contains: "MR. WASH AUTOSERVICE AG"
//             },
//             {
//                 propName: "account",
//                 contains: "aral"
//             },
//             {
//                 propName: "account",
//                 contains: "esso"
//             },
//             {
//                 propName: "account",
//                 contains: "TANKSTELLEN"
//             },
//             {
//                 propName: "account",
//                 contains: "TOTAL DEUTSCHLAND"
//             },
//             {
//                 propName: "account",
//                 contains: "agip"
//             },
//             {
//                 propName: "account",
//                 contains: "RP AUTO"
//             },
//             {
//                 propName: "account",
//                 contains: "PAP OIL"
//             },
//             {
//                 propName: "account",
//                 contains: "ADAC"
//             },


//         ]


//     },
//     //Work
//     {
//         categoryId: 3,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "MICROSOFT"
//             },
//             {
//                 propName: "account",
//                 contains: "JETBRAIN"
//             },
//             {
//                 propName: "account",
//                 contains: "mlab"
//             },
//             {
//                 propName: "account",
//                 contains: "Kabelfernsehen Muenchen"
//             },
//         ]

//     },
//     //Flat Bieber
//     {
//         categoryId: 4,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "VR Bank Main-Kinzig-Buedingen eG"
//             },
//             {
//                 propName: "account",
//                 contains: "Gemeinde Biebergemund Gemeindekasse"
//             },
//             {
//                 propName: "account",
//                 contains: "WEG Fried.Krupp.Str"
//             },
//             {
//                 propName: "account",
//                 contains: "Detlef Niesser"
//             },


//         ]

//     },
//     //Insurance
//     {
//         categoryId: 5,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "VOLKSWOHL BUND Lebensversicherung a.G"
//             },
//             {
//                 propName: "account",
//                 contains: "ALTE LEIPZIGER LEBEN"
//             },
//         ]

//     },
//     //Dog
//     {
//         categoryId: 6,
//         rules: [
//             {
//                 propName: "usage",
//                 contains: "HUNDESTEUER"
//             }
//         ]

//     },
//     //Other
//     {
//         categoryId: 7,
//         rules: [
//             {
//                 propName: "xxxx",
//                 contains: "xxxx"
//             }
//         ]
//     },
//     //Multimedia
//     {
//         categoryId: 8,
//         rules: [
//             {
//                 propName: "usage",
//                 contains: "netflix"
//             },
//             {
//                 propName: "account",
//                 contains: "audible"
//             },
//             {
//                 propName: "account",
//                 contains: "SKY DEUTSCHLAND"
//             },
//             {
//                 propName: "usage",
//                 contains: "PP.3981.PP . MICROSOFT, Ihr Einkauf bei MICROSOFT"
//             },
//             {
//                 propName: "account",
//                 contains: "Rundfunk ARD, ZDF, DRadio"
//             },




//         ]

//     },
//     //Debts
//     {
//         categoryId: 9,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "Santander Consumer Bank"
//             }


//         ]
//     },
//     //Elementary needs
//     {
//         categoryId: 10,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "321LINSEN"
//             },
//             {
//                 propName: "account",
//                 contains: "KADERNICTVI"
//             },
//             {
//                 propName: "account",
//                 contains: "haar"
//             },
//             {
//                 propName: "usage",
//                 contains: "DP AG"
//             },
//             {
//                 propName: "account",
//                 contains: "ikea"
//             },
//             {
//                 propName: "account",
//                 contains: "AMAZON"
//             },


//         ]

//     },
//     //Fun
//     {
//         categoryId: 11,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "ERLEBNISPARK"
//             }

//         ]

//     },
//     //Sports
//     {
//         categoryId: 12,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "purfitness Obertshausen GmbH"
//             },
//             {
//                 propName: "account",
//                 contains: "FITNESS FIRST GERMANY GMBH"
//             },
//             {
//                 propName: "account",
//                 contains: "Sportgemeinschaft Wiking 1903 e.V."
//             },
//         ]

//     },
//     //Health
//     {
//         categoryId: 13,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "LEKARNA"
//             },
//             {
//                 propName: "account",
//                 contains: "APOTHEKE"
//             },
//             {
//                 propName: "account",
//                 contains: "Dr. med. dent. B. Graml"
//             },



//         ]

//     },
//     //Commnunication
//     {
//         categoryId: 14,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "Klarmobil GmbH"
//             }
//         ]

//     },
//     //Zoey
//     {
//         categoryId: 15,
//         rules: [
//             {
//                 propName: "usage",
//                 contains: "baby"
//             },
//             {
//                 propName: "usage",
//                 contains: "Mamikreisel"
//             },
//             {
//                 propName: "account",
//                 contains: "baby"
//             },
//             {
//                 propName: "account",
//                 contains: "MONTE MARE SAGT DANKE"
//             },



//         ]
//     },
//     //Groceries
//     {
//         categoryId: 16,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "ALBERT"
//             },
//             {
//                 propName: "account",
//                 contains: "TEGUT"
//             },
//             {
//                 propName: "account",
//                 contains: "REWE"
//             },
//             {
//                 propName: "account",
//                 contains: "ALDI"
//             },
//             {
//                 propName: "account",
//                 contains: "LIDL"
//             },
//             {
//                 propName: "account",
//                 contains: "DROGERIE"
//             },
//             {
//                 propName: "account",
//                 contains: "DROGERIE"
//             },
//             {
//                 propName: "usage",
//                 contains: "CROWDBUTCHI"
//             },




//         ]
//     },
//     //restaurants
//     {
//         categoryId: 17,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "vapiano"
//             },
//             {
//                 propName: "account",
//                 contains: "LOSTERIA"
//             },
//             {
//                 propName: "account",
//                 contains: "BAGETERIE"
//             },
//             {
//                 propName: "account",
//                 contains: "restaurant"
//             },
//             {
//                 propName: "account",
//                 contains: "RASTHAUS"
//             },
//             {
//                 propName: "account",
//                 contains: "KFC"
//             },
//             {
//                 propName: "account",
//                 contains: "STAROBRNO"
//             },
//             {
//                 propName: "account",
//                 contains: "RESTAURACE"
//             },
//             {
//                 propName: "account",
//                 contains: "BURGER"
//             },
//             {
//                 propName: "account",
//                 contains: "RISTORANTE"
//             },
//             {
//                 propName: "account",
//                 contains: "BRAUHAUS"
//             },
//             {
//                 propName: "account",
//                 contains: "MCDONALD"
//             },


//         ]
//     },
//     //Holidays
//     {
//         categoryId: 18,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "HOTEL"
//             },
//             {
//                 propName: "account",
//                 contains: "ZOO"
//             },
//             {
//                 propName: "usage",
//                 contains: "EXPEDIA"
//             },
//             {
//                 propName: "account",
//                 contains: "HOLIDAY INN"
//             },
//             {
//                 propName: "account",
//                 contains: "LUFTHANSA"
//             },
//             {
//                 propName: "usage",
//                 contains: "RYANAIR"
//             },
//             {
//                 propName: "usage",
//                 contains: "BOOKING.COM"
//             },
//             {
//                 propName: "usage",
//                 contains: "amoma"
//             },
//             {
//                 propName: "usage",
//                 contains: "WECHSELKURSGEBUEHR"
//             },
//             {
//                 propName: "account",
//                 contains: "DB Vertrieb GmbH"
//             },






//         ]


//     },
//     //Clothes
//     {
//         categoryId: 16,
//         rules: [
//             {
//                 propName: "usage",
//                 contains: "ABOUTYOUGMB"
//             },
//             {
//                 propName: "account",
//                 contains: "BIJOU BRIGITTE"
//             },
//             {
//                 propName: "account",
//                 contains: "DEICHMANN"
//             },
//             {
//                 propName: "account",
//                 contains: "PEEK CLOPPENBURG"
//             },
//             {
//                 propName: "account",
//                 contains: "Zalando"
//             },
//             {
//                 propName: "account",
//                 contains: "otto"
//             },
//             {
//                 propName: "account",
//                 contains: "VISA RESERVED"
//             },
//             {
//                 propName: "account",
//                 contains: "PANE E VINO"
//             },


//         ]

//     },
//     //Party
//     {
//         categoryId: 20,
//         rules: [
//             {
//                 propName: "account",
//                 contains: "MYTAXI"
//             },
//             {
//                 propName: "account",
//                 contains: "UBER"
//             },
//             {
//                 propName: "account",
//                 contains: "DB RENT GMBH"
//             },
//             {
//                 propName: "account",
//                 contains: "IQOS"
//             }
//         ]

//     },
//     //Cash
//     {
//         categoryId: 21,
//         rules: [
//             {
//                 propName: "usage",
//                 contains: "BARGELDAUSZAHLUNG"
//             },


//         ]

//     },



// ]