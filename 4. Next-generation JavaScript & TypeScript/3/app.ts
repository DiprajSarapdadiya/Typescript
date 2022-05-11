var products: (
  | {
      name: string;
      stock: number;
      original: number;
      discount?: number;
  }
)[];
products = [
  { name: "Mobile", stock: 3, original: 4000 },
  { name: "Laptop", stock: 1, original: 10000, discount: 0.1 },
  { name: "Mouse", stock: 4, original: 299.99 },
  { name: "Keyboard", stock: 1, original: 299.99, discount: 0.8 },
  { name: "Headphone", stock: 2, original: 199.99, discount: 0.65 },
];

function calculateSalePriceAndTotals(products: any) {
  let result1 = products.map(fun1);
  return result1;
}

function fun1(value: any, index: number, product: any) {
  if (value.discount > 0) {
    let sale = value.original - value.original * value.discount;
    return {
      discount: value.discount,
      name: value.name,
      original: value.original,
      sale: sale,
      stock: value.stock,
      total: sale * value.stock,
    };
  } else {
    return {
      name: value.name,
      original: value.original,
      sale: value.original,
      stock: value.stock,
      total: value.original * value.stock,
    };
  }
}

console.log(calculateSalePriceAndTotals(products));
