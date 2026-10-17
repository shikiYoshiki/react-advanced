class Product {
    public name: string;
    private price: number;
    protected category: string;

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    describe(): void {
        console.log('--- 同じクラス内からのアクセス ---');
        console.log(`商品名：${this.name}`);
        console.log(`価格：${this.price}`);
        console.log(`カテゴリ：${this.category}`);
    }
}

class Drink extends Product {
    describe(): void {
        console.log('--- サブクラスからのアクセス ---');
        console.log(`商品名：${this.name}`);
        // console.log(`価格：${this.price}`);
        console.log(`カテゴリ：${this.category}`);
    }
}

const shampoo = new Product('シャンプー', 500, '生活雑貨');
shampoo.describe();

const coffee = new Drink('コーヒー', 1500, '飲料');
coffee.describe();

console.log('--- 外部からのアクセス ---');
console.log(`商品名：${shampoo.name}`);
// console.log(`価格：${shampoo.price}`);
// console.log(`カテゴリ：${shampoo.category}`);

