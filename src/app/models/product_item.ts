import * as check from 'check-types';
import {IProductItemDTO} from './product_item.interface';

export class ProductItem {

    id: number = 0;
    name: string = null;
    image: string = null;
    price: number = 0;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {IProductItemDTO}
     */
    fromJson(data): ProductItem {

        if (check.assigned(data.id)) {
            this.id = data.id;
        }

        if (check.assigned(data.name)) {
            this.name = data.name;
        }

        if (check.assigned(data.image)) {
            this.image = data.image;
        }

        if (check.assigned(data.price)) {
            this.price = data.price;
        }
        

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {IProductItemDTO}
     */
    toJson() {
        const data: IProductItemDTO = null;

        data.id = this.id;
        data.name = this.name;
        data.image = this.image;
        data.price = this.price;

        return data;
    }


    /**
     * Create ProductItem object from data object
     *
     * @param {IProductItemDTO} data
     * @return {ProductnItem}
     */
    static factory(data: IProductItemDTO): ProductItem {
        return (new ProductItem()).fromJson(data);
    }
}
