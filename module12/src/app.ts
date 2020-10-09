import _ from 'lodash';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

// const p1 = new Product('A Book', 12.99);
// console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

loadedProducts.forEach(product => console.log(product.getInformation()));
