import { ProductNode } from '../shared/model/ProductNode';
import { Product } from './product';

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    // constructor(product: Product) {
    //     this.id = product.id;
    //     this.name = product.name;
    //     this.imageUrl = product.imageUrl;
    //     this.unitPrice = product.unitPrice;

    //     this.quantity = 1;
    // }
    constructor(product: ProductNode) {
        this.id = product.id;
        this.name = product.title;
        this.imageUrl = product.image;
        this.unitPrice = product.price;

        this.quantity = 1;
    }
}
