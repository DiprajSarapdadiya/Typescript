var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "setID", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getID", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setAmount", {
        set: function (amount) {
            this.amount = amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getAmount", {
        get: function () {
            return this.amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setStock", {
        set: function (stock) {
            this.stock = stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getStock", {
        get: function () {
            return this.stock;
        },
        enumerable: false,
        configurable: true
        
    });
    Product.prototype.increaseStock = function (quantity) {
        this.stock += quantity;
    };
    Product.prototype.decreaseStock = function (quantity) {
        this.stock -= quantity;
    };
    return Product;
}());
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
