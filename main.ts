import {Product} from "./product";
import {ProductManager} from "./productManager";

let laptop=new Product('Rog Strix',3000);
let iphone=new Product('Iphone 13-pro Max-Blue cherry',2500);

let productmanager=new ProductManager();
productmanager.setAdd(laptop);
productmanager.setAdd(iphone);

console.log(productmanager.getAll());