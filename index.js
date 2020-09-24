const data = [
  { product_name: 'Nail', count: 67, price_for_all: 364 },
  { product_name: 'Hammer', count: 43, price_for_all: 453 },
  { product_name: 'Tile', count: 23, price_for_all: 553 },
];

const total = data.reduce(
  (accumulator, item) => {
    accumulator.count += item.count;
    accumulator.price += item.price_for_all;
    return accumulator;
  },
  { count: 0, price: 0 }
);

console.log(total);
