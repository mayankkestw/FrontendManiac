class ProductBuilder {
  constructor() {
    (this.name = ""), (this.description = "no description"), (this.price = 0);
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  build() {
    return new Product(this.name, this.description, this.price);
  }
}

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getInfo(){
        console.log(`My car is ${this.name}, ${this.description}, amounts to ${this.price}`);
    };
}


const Car = new ProductBuilder()
  .setName("Mercedez Benz")
  .setDescription("finest car")
  .setPrice(1000000).build()

Car.getInfo()


