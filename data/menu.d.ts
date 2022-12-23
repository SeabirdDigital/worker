export type Menu = Category[];

type Category = {
    name: string;
    dishes: Dish[];
};

type Dish = {
    name: string;
    description: string;
    price: number;
};
