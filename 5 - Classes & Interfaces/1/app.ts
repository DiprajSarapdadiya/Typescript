class Product{
  private name: string;
  private id: number;
  private amount: number;
  private stock: number;

  set setID(id: number){
    this.id = id;
  }
  get getID(){
    return this.id;
  }

  set setName(name: string){
    this.name = name;
  }
  get getName(){
    return this.name;
  }

  set setAmount(amount: number){
    this.amount = amount;
  }
  get getAmount(){
    return this.amount;
  }

  set setStock(stock: number){
    this.stock = stock;
  }
  get getStock(){
    return this.stock;
  }

  increaseStock(quantity: number){
      this.stock += quantity;
  } 
  
  decreaseStock(quantity: number){
    this.stock -= quantity;
  }

}

var p1 = new Product();
p1.setID = 1;
p1.setName = 'Mobile';
p1.setAmount = 50000;
p1.setStock = 20;

console.log(p1);
p1.increaseStock(5);
console.log(p1);
p1.decreaseStock(15);
console.log(p1.getStock);

var p2 = new Product();
p2.setID = 2;
p2.setName = 'Laptop';
p2.setAmount = 500000;
p2.setStock = 5;

p2.increaseStock(2);
console.log(p2);
p2.decreaseStock(4);
console.log(p2.getStock);

var p3 = new Product();
p3.setID = 3;
p3.setName = 'Earbuds';
p3.setAmount = 2500;
p3.setStock = 50;

p3.increaseStock(10);
console.log(p3);
p3.decreaseStock(20);
console.log(p3.getStock);

