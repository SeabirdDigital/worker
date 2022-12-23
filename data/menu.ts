import { Menu } from "./menu.d.ts";

const menu: Menu = [
    {
        name: "Pasta",
        dishes: [
            {
                name: "Spaghetti Bolognese",
                description:
                    "Spaghetti med hemlagad köttfärssås och parmesan ost.",
                price: 119,
            },
            {
                name: "Penne al tonno",
                description:
                    "Penne pasta med hemlagad tonfisksås och persilja.",
                price: 119,
            },
            {
                name: "Gambri e zucchini",
                description: "Räkor, zucchini, färska tomater och chili.",
                price: 129,
            },
            {
                name: "Vegetarian",
                description:
                    "Lök, champinjoner, paprika, svarta oliver, tomatsås och parmesan ost.",
                price: 109,
            },
        ],
    },
    {
        name: "Rosse Pizzor",
        dishes: [
            {
                name: "Margherita",
                description:
                    "Tomat san marzano, fior di latte mozzarella, basilka, extra jungfurolivolja",
                price: 95,
            },
            {
                name: "La Siciliana",
                description:
                    "Tomat san marzano, fior di latte mozzarella, aubergine, basilka",
                price: 115,
            },
            {
                name: "Bufalina",
                description:
                    "Tomat san marzano, mozzarella di bufala, basilka, extra jungfruolivolja",
                price: 119,
            },
            {
                name: "Ortolana",
                description:
                    "Tomat san marzano, fior di latte mozzarella, friarielli, scarola, champinjon, kronärtskocka, basilika, extra jungfruolivolja",
                price: 139,
            },
            {
                name: "Due Sicilia",
                description:
                    "Tomat san marzano, fioir di latte mozzarella, kapris, sardeller, oregano, vitlök, extra jungfurolivolja",
                price: 129,
            },
            {
                name: "La Calabrese",
                description:
                    "Tomat san marzano, fior di latte mozzarella, nduja, basilika, extra jungfruolivolja",
                price: 129,
            },
            {
                name: "Calzone Salami",
                description:
                    "Tomat san marzano, fior di latte mozzarella, salami napoli ricotta, parmigiano reggiano, extra, jungfruolivolja",
                price: 119,
            },
            {
                name: "Calzone Skinka",
                description:
                    "Tomat san marzano, fior di latte mozzarella, skinka, ricotta, parmigiano reggiano, extra jungfruolivolja",
                price: 119,
            },
            {
                name: "Inferno",
                description:
                    "Tomat san marzano, fiori di latte mozzarella, nduja, spianata salami, svarta oliver, extra jungfruolivolja",
                price: 139,
            },
            {
                name: "Bresola E Ruocla",
                description:
                    "Tomat san marzano, fior di latte mozzarella, bresaola, rucola, parmigiano reggiano, extra jungfruolivolja",
                price: 139,
            },
            {
                name: "Burata E Crudo",
                description:
                    "Tomat san marzano, fior di latte mozzarella, prosciutto papatello, pecorino romano extra jungfruolivolja",
                price: 149,
            },
            {
                name: "Capricciosa",
                description:
                    "Tomat san marzano, fior di latte mozzarella, skinka, champinjoner, spianata salami extra jungfruolivolja",
                price: 129,
            },
            {
                name: "Quattro Stagione",
                description:
                    "Tomat san marzano, fior di latte mozzarella, skinka, champinjoner, paprika ricotta, extra jungfruolivolja",
                price: 129,
            },
            {
                name: "Vesuvio",
                description:
                    "Tomat san marzano, fior di latte mozzarella, skinka, basilika, extra jungfruolivolja",
                price: 110,
            },
            {
                name: "Quattro Formaggi",
                description:
                    "Tomat san marzano, fior di latte mozzarella, gorgonzola, chevré, parmigiano reggiano, basilika, extra jungfruolivolja",
                price: 119,
            },
            {
                name: "Romana Pizza",
                description:
                    "San Marzano tomatsås, buffalomozzarella, kyckling, svamp och svarta oliver.",
                price: 110,
            },
            {
                name: "Kycklingpizza",
                description: "Kyckling, Mozzarella, Svamp och Svarta Oliver",
                price: 110,
            },
            {
                name: "Kebab",
                description:
                    "Tomat san marzano, fior di latte mozzarella, nötkebab, rödlök, svarta oliver, champinjoner, valfri sås",
                price: 110,
            },
        ],
    },
    {
        name: "Veganska Pizzor",
        dishes: [
            {
                name: "Vegansk La Lucana",
                description:
                    "Tomat san marzano, oregano, basilika, vitlök, extra jungfruolivolja",
                price: 90,
            },
            {
                name: "Vegansk La Berta",
                description:
                    "Friarielli, kokt krossad potatis, aubergine, basilika, extra jungfruolivolja",
                price: 110,
            },
            {
                name: "Vegansk Capricciosa",
                description:
                    "Tomat san marzano, vegan mozzarella, vegan skinka, champinjoner, basilika, extra jungfruolivolja",
                price: 110,
            },
            {
                name: "Vegansk Vegetriana",
                description:
                    "Tomat san marzano, vegan mozzarella, kronärtskocka, champinjon, paprika, rödlök, basilika, extra jungfruolivolja",
                price: 110,
            },
            {
                name: "Vegansk Kebab",
                description:
                    "Tomat san marzano, vegan mozzarella, vegan kebab, rödlök, champinjon, champinjon, basilika, extra jungfruolivolja",
                price: 119,
            },
            {
                name: "Vegansk La Lucana",
                description:
                    "Tomat san marzano, oregano basilika, vitlök, extra jungfruolivolja",
                price: 90,
            },
        ],
    },
    {
        name: "Bianche Pizzor",
        dishes: [
            {
                name: "Pugliese",
                description:
                    "Kokt krossad potatis, karl johan svamp, fior di latte mozzarella, basilika, extra jungfruolivolja",
                price: 119,
            },
            {
                name: "La Napolitana",
                description:
                    "Friarielli, salsicia, fior di latte mozzarella, basilika, extra jungfruolivolja",
                price: 139,
            },
        ],
    },
    {
        name: "Hamburgare",
        dishes: [
            {
                name: "Smoky Cheddar Cheese & Bacon Burger",
                description:
                    "En 180 gram högrevsburgare med sallad tomat, rödlök, rökt cheddarost och bacon. Pommes inkluderat.",
                price: 129,
            },
            {
                name: "Spicy Chicken Burger",
                description:
                    "Pankopannerat kycklingbröst med bacon, romansallad rökt cheddarost, rödlök och sirachimayo. Pommes inkluderat.",
                price: 129,
            },
            {
                name: "Solo Cheese Burger",
                description:
                    "180g högrevsburgare med sallad, tomat, rödlök, 2x rökt cheddarost. Serveras med pommes.",
                price: 119,
            },
            {
                name: "Solo Special",
                description:
                    "2x 180g högrevsburgare med sallad, tomat, rödlök, rökt cheddarost, bacon, husets dressing. Serveras med pommes.",
                price: 189,
            },
            {
                name: "Vegan Burger",
                description:
                    "180g vegansk burgare med tomat, rödlök, sallad, vegansk dressing, vegansk ost. Serveras med pommes.",
                price: 119,
            },
        ],
    },
];

export default menu;
