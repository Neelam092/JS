/*let mobile = {
    color : 'Silver',
    price : 35000,
    brand : 'Apple'
};
console.log(mobile);*/

class Mobile{
    constructor(color, price,brand){
        this.color = color;
        this.price = price;
        this.brand = brand;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price){
        this.price = price;
        }
    getBrand(){
        return this.brand;
    }
    setBrand(brand){
        this.brand = brand;
    }
    printSpecification(){         //  printSpecification() instance method to fetch data
        let spec = `COLOR : ${this.getColor()}
                    PRICE : ${this.getPrice()}
                    BRAND : ${this.getBrand()}`;
        console.log(spec);
    }
}

let mobile = new Mobile('Silver',35000,'Apple');
mobile.printSpecification();
mobile.setPrice(45000);
mobile.printSpecification();

