"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JBL = exports.LOGITECH = exports.MICROSOFT = exports.ASUS = exports.LENOVO = exports.DELL = exports.HP = exports.ONEPLUS = exports.HUAWEI = exports.XIAOMI = exports.SAMSUNG = exports.APPLE = exports.CHILDRENS_BOOKS = exports.NON_FICTION = exports.FICTION = exports.OUTDOOR_TOYS = exports.BOARD_GAMES = exports.ACTION_FIGURES = exports.CAMPING_GEAR = exports.ATHLETIC_CLOTHING = exports.OUTDOOR_GEAR = exports.FITNESS_EQUIPMENT = exports.PERSONAL_CARE = exports.MAKEUP = exports.HAIRCARE = exports.SKINCARE = exports.APPLIANCES = exports.HOME_DECOR = exports.COOKWARE = exports.FURNITURE = exports.KIDS_CLOTHING = exports.WOMENS_CLOTHING = exports.MENS_CLOTHING = exports.CANNED_GOODS = exports.BEVERAGES = exports.SNACKS = exports.FRUITS_AND_VEGETABLES = exports.ACCESSORIES = exports.TABLETS = exports.LAPTOPS = exports.MOBILES = exports.TOYS_AND_GAMES = exports.BOOKS_AND_MEDIA = exports.SPORTS_AND_OUTDOORS = exports.HEALTH_AND_BEAUTY = exports.HOME_AND_KITCHEN = exports.CLOTHING_AND_APPAREL = exports.GROCERY = exports.ELECTRONICS = exports.INTERNAL_SERVER_ERROR = void 0;
exports.CETAPHIL = exports.GE = exports.KITCHEN_AID = exports.WHIRLPOOL = exports.LG = exports.HOME_GOODS = exports.ANTHROPOLOGIE = exports.WEST_ELM = exports.LODGE = exports.LE_CREUSET = exports.ALL_CLAD = exports.CUISINART = exports.CALPHALON = exports.POTTERY_BARN = exports.CRATE_AND_BARREL = exports.WAYFAIR = exports.ASHLEY_FURNITURE = exports.IKEA = exports.GYMBOREE = exports.HM_KIDS = exports.OLD_NAVY_KIDS = exports.GAP_KIDS = exports.CARTERS = exports.GAP = exports.FOREVER_21 = exports.ZARA = exports.TOMMY_HILFIGER = exports.RALPH_LAUREN = exports.LEVI = exports.ADIDAS = exports.NIKE = exports.PROGRESSO = exports.LIBBYS = exports.HEINZ = exports.DEL_MONTE = exports.CAMPBELL = exports.RED_BULL = exports.NESTLE = exports.STARBUCKS = exports.PEPSI = exports.COCA_COLA = exports.PLANTERS = exports.HERSHEY = exports.PRINGLES = exports.DORITOS = exports.LAYS = exports.Fruits_Vegetables = exports.SONY = exports.ANKER = exports.BELKIN = void 0;
exports.HACHETTE_BOOK_GROUP = exports.SIMON_AND_SCHUSTER = exports.HARPER_COLLINS = exports.PENGUIN_RANDOM_HOUSE = exports.BUNCH_O_BALLOONS = exports.NERF = exports.RADIO_FLYER = exports.STEP_2 = exports.LITTLE_TIKES = exports.CATAN_STUDIO = exports.ASMODEE = exports.RAVENSBURGER = exports.BANDAI = exports.MCFARLANE_TOYS = exports.FUNKO = exports.MATTEL = exports.HASBRO = exports.KELTY = exports.COLEMAN = exports.PUMA = exports.LULULEMON = exports.UNDER_ARMOUR = exports.MARMOT = exports.REI = exports.COLUMBIA = exports.PATAGONIA = exports.THE_NORTH_FACE = exports.SCHWINN = exports.LIFE_FITNESS = exports.PELOTON = exports.BOWFLEX = exports.NORDIC_TRACK = exports.JOHNSON_AND_JOHNSON = exports.GILLETTE = exports.NIVEA = exports.COLGATE = exports.DOVE = exports.REVLON = exports.COVER_GIRL = exports.MAC = exports.MAYBELLINE = exports.TRESEMME = exports.GARNIER = exports.LOREAL = exports.HEAD_AND_SHOULDERS = exports.PANTENE = exports.AVEENO = exports.LA_ROCHE_POSAY = exports.OLAY = exports.NEUTROGENA = void 0;
exports.expiry = exports.passwordValidationRegex = exports.emailValidationRegex = exports.Brands = exports.SubCategory = exports.Categories = exports.CANDLEWICK_PRESS = exports.SIMON_AND_SCHUSTER_CHILDRENS_PUBLISHING = exports.HARPER_COLLINS_CHILDRENS_BOOKS = exports.PENGUIN_RANDOM_HOUSE_CHILDRENS = exports.SCHOLASTIC = exports.OXFORD_UNIVERSITY_PRESS = exports.BARNES_AND_NOBLE = void 0;
exports.INTERNAL_SERVER_ERROR = "Internal Server Error";
// CATEGORY'S
exports.ELECTRONICS = "Electronics";
exports.GROCERY = "Grocery";
exports.CLOTHING_AND_APPAREL = "Clothing and Apparel";
exports.HOME_AND_KITCHEN = "Home and Kitchen";
exports.HEALTH_AND_BEAUTY = "Health and Beauty";
exports.SPORTS_AND_OUTDOORS = "Sports and Outdoors";
exports.BOOKS_AND_MEDIA = "Books and Media";
exports.TOYS_AND_GAMES = "Toys and Games";
// SUBCATEGORY'S
exports.MOBILES = "Mobiles";
exports.LAPTOPS = "Laptops";
exports.TABLETS = "Tablets";
exports.ACCESSORIES = "Accessories";
exports.FRUITS_AND_VEGETABLES = "Fruits & Vegetables";
exports.SNACKS = "Snacks";
exports.BEVERAGES = "Beverages";
exports.CANNED_GOODS = "Canned Goods";
exports.MENS_CLOTHING = "Men's Clothing";
exports.WOMENS_CLOTHING = "Women's Clothing";
exports.KIDS_CLOTHING = "Kid's Clothing";
exports.FURNITURE = "Furniture";
exports.COOKWARE = "Cookware";
exports.HOME_DECOR = "Home Decor";
exports.APPLIANCES = "Appliances";
exports.SKINCARE = "Skincare";
exports.HAIRCARE = "Haircare";
exports.MAKEUP = "Makeup";
exports.PERSONAL_CARE = "Personal Care";
exports.FITNESS_EQUIPMENT = "Fitness Equipment";
exports.OUTDOOR_GEAR = "Outdoor Gear";
exports.ATHLETIC_CLOTHING = "Athletic Clothing";
exports.CAMPING_GEAR = "Camping Gear";
exports.ACTION_FIGURES = "Action Figures";
exports.BOARD_GAMES = "Board Games";
exports.OUTDOOR_TOYS = "Outdoor Toys";
exports.FICTION = "Fiction";
exports.NON_FICTION = "Non-Fiction";
exports.CHILDRENS_BOOKS = "Children's Books";
// BRAND'S
// Mobiles
exports.APPLE = "Apple";
exports.SAMSUNG = "Samsung";
exports.XIAOMI = "Xiaomi";
exports.HUAWEI = "Huawei";
exports.ONEPLUS = "OnePlus";
// Laptops
exports.HP = "HP";
exports.DELL = "Dell";
exports.LENOVO = "Lenovo";
// export const APPLE = "Apple";
exports.ASUS = "Asus";
// Tablets
// export const APPLE = "Apple";
// export const SAMSUNG = "Samsung";
exports.MICROSOFT = "Microsoft";
// export const HUAWEI = "Huawei";
// Accessories
exports.LOGITECH = "Logitech";
exports.JBL = "JBL";
exports.BELKIN = "Belkin";
exports.ANKER = "Anker";
exports.SONY = "Sony";
exports.Fruits_Vegetables = "Fruits & Vegetables";
// Snacks
exports.LAYS = "Lay's";
exports.DORITOS = "Doritos";
exports.PRINGLES = "Pringles";
exports.HERSHEY = "Hershey's";
exports.PLANTERS = "Planters";
// Beverages
exports.COCA_COLA = "Coca-Cola";
exports.PEPSI = "Pepsi";
exports.STARBUCKS = "Starbucks";
exports.NESTLE = "Nestlé";
exports.RED_BULL = "Red Bull";
// Canned Goods
exports.CAMPBELL = "Campbell's";
exports.DEL_MONTE = "Del Monte";
exports.HEINZ = "Heinz";
exports.LIBBYS = "Libby's";
exports.PROGRESSO = "Progresso";
// Men's Clothing
exports.NIKE = "Nike";
exports.ADIDAS = "Adidas";
exports.LEVI = "Levi's";
exports.RALPH_LAUREN = "Ralph Lauren";
exports.TOMMY_HILFIGER = "Tommy Hilfiger";
// Women's Clothing
exports.ZARA = "Zara";
exports.FOREVER_21 = "Forever 21";
exports.GAP = "Gap";
// Kid's Clothing
exports.CARTERS = "Carter's";
exports.GAP_KIDS = "Gap Kids";
exports.OLD_NAVY_KIDS = "Old Navy Kids";
exports.HM_KIDS = "H&M Kids";
exports.GYMBOREE = "Gymboree";
// Furniture
exports.IKEA = "IKEA";
exports.ASHLEY_FURNITURE = "Ashley Furniture";
exports.WAYFAIR = "Wayfair";
exports.CRATE_AND_BARREL = "Crate and Barrel";
exports.POTTERY_BARN = "Pottery Barn";
// Cookware
exports.CALPHALON = "Calphalon";
exports.CUISINART = "Cuisinart";
exports.ALL_CLAD = "All-Clad";
exports.LE_CREUSET = "Le Creuset";
exports.LODGE = "Lodge";
// Home Decor
exports.WEST_ELM = "West Elm";
// export const CRATE_AND_BARREL = "Crate and Barrel";
// export const POTTERY_BARN = "Pottery Barn";
exports.ANTHROPOLOGIE = "Anthropologie";
exports.HOME_GOODS = "HomeGoods";
// Appliances
exports.LG = "LG Appliances";
exports.WHIRLPOOL = "Whirlpool";
exports.KITCHEN_AID = "KitchenAid";
exports.GE = "GE Appliances";
// Skincare
exports.CETAPHIL = "Cetaphil";
exports.NEUTROGENA = "Neutrogena";
exports.OLAY = "Olay";
exports.LA_ROCHE_POSAY = "La Roche-Posay";
exports.AVEENO = "Aveeno";
// Haircare
exports.PANTENE = "Pantene";
exports.HEAD_AND_SHOULDERS = "Head & Shoulders";
exports.LOREAL = "L'Oréal";
exports.GARNIER = "Garnier";
exports.TRESEMME = "Tresemme";
// Makeup
exports.MAYBELLINE = "Maybelline New York";
exports.MAC = "MAC Cosmetics";
exports.COVER_GIRL = "CoverGirl";
exports.REVLON = "Revlon";
// Personal Care
exports.DOVE = "Dove";
exports.COLGATE = "Colgate";
exports.NIVEA = "Nivea";
exports.GILLETTE = "Gillette";
exports.JOHNSON_AND_JOHNSON = "Johnson & Johnson";
// Fitness Equipment
exports.NORDIC_TRACK = "NordicTrack";
exports.BOWFLEX = "Bowflex";
exports.PELOTON = "Peloton";
exports.LIFE_FITNESS = "Life Fitness";
exports.SCHWINN = "Schwinn";
// Outdoor Gear
exports.THE_NORTH_FACE = "The North Face";
exports.PATAGONIA = "Patagonia";
exports.COLUMBIA = "Columbia";
exports.REI = "REI";
exports.MARMOT = "Marmot";
// Athletic Clothing
exports.UNDER_ARMOUR = "Under Armour";
exports.LULULEMON = "Lululemon";
exports.PUMA = "Puma";
// Camping Gear
exports.COLEMAN = "Coleman";
exports.KELTY = "Kelty";
// Action Figures
exports.HASBRO = "Hasbro";
exports.MATTEL = "Mattel";
exports.FUNKO = "Funko";
exports.MCFARLANE_TOYS = "McFarlane Toys";
exports.BANDAI = "Bandai";
// Board Games
exports.RAVENSBURGER = "Ravensburger";
exports.ASMODEE = "Asmodee";
exports.CATAN_STUDIO = "Catan Studio";
// Outdoor Toys
exports.LITTLE_TIKES = "Little Tikes";
exports.STEP_2 = "Step2";
exports.RADIO_FLYER = "Radio Flyer";
exports.NERF = "Nerf";
exports.BUNCH_O_BALLOONS = "Bunch O Balloons";
// Fiction
exports.PENGUIN_RANDOM_HOUSE = "Penguin Random House";
exports.HARPER_COLLINS = "HarperCollins";
exports.SIMON_AND_SCHUSTER = "Simon & Schuster";
exports.HACHETTE_BOOK_GROUP = "Hachette Book Group";
exports.BARNES_AND_NOBLE = "Barnes & Noble";
// Non-Fiction
// export const PENGUIN_RANDOM_HOUSE = "Penguin Random House";
// export const HARPER_COLLINS = "HarperCollins";
// export const SIMON_AND_SCHUSTER = "Simon & Schuster";
// export const HACHETTE_BOOK_GROUP = "Hachette Book Group";
exports.OXFORD_UNIVERSITY_PRESS = "Oxford University Press";
// Children's Books
exports.SCHOLASTIC = "Scholastic";
exports.PENGUIN_RANDOM_HOUSE_CHILDRENS = "Penguin Random House Children's";
exports.HARPER_COLLINS_CHILDRENS_BOOKS = "HarperCollins Children's Books";
exports.SIMON_AND_SCHUSTER_CHILDRENS_PUBLISHING = "Simon & Schuster Children's Publishing";
exports.CANDLEWICK_PRESS = "Candlewick Press";
exports.Categories = [
    exports.ELECTRONICS,
    exports.GROCERY,
    exports.CLOTHING_AND_APPAREL,
    exports.HOME_AND_KITCHEN,
    exports.HEALTH_AND_BEAUTY,
    exports.SPORTS_AND_OUTDOORS,
    exports.BOOKS_AND_MEDIA,
    exports.TOYS_AND_GAMES,
];
exports.SubCategory = [
    exports.MOBILES,
    exports.LAPTOPS,
    exports.TABLETS,
    exports.ACCESSORIES,
    exports.FRUITS_AND_VEGETABLES,
    exports.SNACKS,
    exports.BEVERAGES,
    exports.CANNED_GOODS,
    exports.MENS_CLOTHING,
    exports.WOMENS_CLOTHING,
    exports.KIDS_CLOTHING,
    exports.FURNITURE,
    exports.COOKWARE,
    exports.HOME_DECOR,
    exports.APPLIANCES,
    exports.SKINCARE,
    exports.HAIRCARE,
    exports.MAKEUP,
    exports.PERSONAL_CARE,
    exports.FITNESS_EQUIPMENT,
    exports.OUTDOOR_GEAR,
    exports.ACTION_FIGURES,
    exports.BOARD_GAMES,
    exports.FICTION,
    exports.NON_FICTION,
    exports.CHILDRENS_BOOKS,
    exports.ATHLETIC_CLOTHING,
    exports.CAMPING_GEAR,
    exports.OUTDOOR_TOYS,
];
exports.Brands = [
    exports.APPLE,
    exports.SAMSUNG,
    exports.XIAOMI,
    exports.HUAWEI,
    exports.ONEPLUS,
    exports.HP,
    exports.DELL,
    exports.LENOVO,
    exports.ASUS,
    exports.MICROSOFT,
    exports.LOGITECH,
    exports.JBL,
    exports.BELKIN,
    exports.ANKER,
    exports.SONY,
    exports.LAYS,
    exports.DORITOS,
    exports.PRINGLES,
    exports.PLANTERS,
    exports.COCA_COLA,
    exports.PEPSI,
    exports.STARBUCKS,
    exports.NESTLE,
    exports.RED_BULL,
    exports.CAMPBELL,
    exports.DEL_MONTE,
    exports.HEINZ,
    exports.LIBBYS,
    exports.PROGRESSO,
    exports.NIKE,
    exports.ADIDAS,
    exports.LEVI,
    exports.RALPH_LAUREN,
    exports.ZARA,
    exports.FOREVER_21,
    exports.GAP,
    exports.CARTERS,
    exports.GAP_KIDS,
    exports.OLD_NAVY_KIDS,
    exports.HM_KIDS,
    exports.GYMBOREE,
    exports.IKEA,
    exports.ASHLEY_FURNITURE,
    exports.CRATE_AND_BARREL,
    exports.POTTERY_BARN,
    exports.CALPHALON,
    exports.CUISINART,
    exports.ALL_CLAD,
    exports.LE_CREUSET,
    exports.LODGE,
    exports.WEST_ELM,
    exports.ANTHROPOLOGIE,
    exports.LG,
    exports.WHIRLPOOL,
    exports.KITCHEN_AID,
    exports.GE,
    exports.CETAPHIL,
    exports.NEUTROGENA,
    exports.OLAY,
    exports.LA_ROCHE_POSAY,
    exports.AVEENO,
    exports.PANTENE,
    exports.HEAD_AND_SHOULDERS,
    exports.LOREAL,
    exports.GARNIER,
    exports.TRESEMME,
    exports.MAYBELLINE,
    exports.MAC,
    exports.COVER_GIRL,
    exports.REVLON,
    exports.DOVE,
    exports.COLGATE,
    exports.NIVEA,
    exports.GILLETTE,
    exports.JOHNSON_AND_JOHNSON,
    exports.NORDIC_TRACK,
    exports.BOWFLEX,
    exports.PELOTON,
    exports.LIFE_FITNESS,
    exports.SCHWINN,
    exports.THE_NORTH_FACE,
    exports.PATAGONIA,
    exports.COLUMBIA,
    exports.REI,
    exports.MARMOT,
    exports.UNDER_ARMOUR,
    exports.LULULEMON,
    exports.PUMA,
    exports.COLEMAN,
    exports.KELTY,
    exports.HASBRO,
    exports.MATTEL,
    exports.FUNKO,
    exports.MCFARLANE_TOYS,
    exports.BANDAI,
    exports.RAVENSBURGER,
    exports.ASMODEE,
    exports.CATAN_STUDIO,
    exports.LITTLE_TIKES,
    exports.STEP_2,
    exports.RADIO_FLYER,
    exports.NERF,
    exports.BUNCH_O_BALLOONS,
    exports.PENGUIN_RANDOM_HOUSE,
    exports.HARPER_COLLINS,
    exports.HARPER_COLLINS_CHILDRENS_BOOKS,
    exports.SIMON_AND_SCHUSTER,
    exports.HACHETTE_BOOK_GROUP,
    exports.BARNES_AND_NOBLE,
    exports.OXFORD_UNIVERSITY_PRESS,
    exports.SCHOLASTIC,
    exports.PENGUIN_RANDOM_HOUSE_CHILDRENS,
    exports.SIMON_AND_SCHUSTER_CHILDRENS_PUBLISHING,
    exports.CANDLEWICK_PRESS,
    exports.Fruits_Vegetables,
    exports.HERSHEY,
    exports.TOMMY_HILFIGER,
    exports.WAYFAIR,
];
exports.emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
exports.passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
exports.expiry = "1d";
