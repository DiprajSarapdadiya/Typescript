var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.write = function (str) {
        this.data = str;
    };
    Book.prototype.read = function () {
        return this.data;
    };
    return Book;
}());
var b1 = new Book();
b1.write("Alchemist");
console.log(b1.read());
