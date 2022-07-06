export class ProductManager {
    private products = [];

    constructor() {
    }
    getAll=()=>this.products;
    setAdd=(product)=>this.products.push(product);
}