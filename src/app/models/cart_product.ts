import * as check from 'check-types';
import {ICartProductDTO} from './cart_product.interface'

export class CartProduct {

    productId: number = 0;
    quantity: number = 0;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {ICartProductDTO}
     */
    fromJson(data): CartProduct {

        if (check.assigned(data.productId)) {
            this.productId= data.productId;
        }

        if (check.assigned(data.quantity)) {
            this.quantity = data.quantity;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {ICartProductDTO}
     */
    toJson() {
        const data: ICartProductDTO = null;

        data.productId = this.productId;
        data.quantity = this.quantity;
        
        return data;
    }


    /**
     * Create CardProduct object from data object
     *
     * @param {ICartProductDTO} data
     * @return {CartProduct}
     */
    static factory(data: ICartProductDTO): CartProduct {
        return (new CartProduct()).fromJson(data);
    }
}
