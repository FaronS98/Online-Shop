import { Component, Input } from '@angular/core';
import { ShopProductsService } from '../../services/shop_products.services';
import { CartProduct } from '../../models/cart_product';
import { ProductItem } from '../../models/product_item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping_cart.component.html',
  styleUrls: ['./shopping_cart.component.scss']
})
export class ShoppingCartComponent {

  @Input() cartProduct: CartProduct[] = [];
  @Input() products: ProductItem[] = [];
  assetsUrl: string = "../../assets/images/";
  productQuantity: number = null;
  hide: Boolean = false;

  /**
   * @constructor
   */
  constructor(
    private shopProductsService: ShopProductsService,
  ) {

  }

  /**
   * Increase product`s quantity
   * @param {number} productId
   */
  increaseQuantity(productId: number): void{
    for(let cart of this.cartProduct){
      if(cart.productId === productId){
        cart.quantity++;
        console.log(cart.quantity)
      }
    }
  }


  /**
   * Decrease product`s quantity
   * @param {number} productId
   */
  decreaseQuantity(productId: number): void{
    for(let cart of this.cartProduct){
      if(cart.productId === productId && cart.quantity >0 ){        
        cart.quantity--;
      }
    }
  }

  /**
   * Hide product and reset product`s quantity
   * @param {number} productId
   */
  hideProduct(productId: number){
    for(let cart of this.cartProduct){
      if(cart.productId === productId){   
        cart.quantity = 0;
        this.hide = true;   
        this.shopProductsService.sendClickEventCalculatePrice();     
      }
    }
  }

  /**
   * Update shopping cart
   */
  updateShoppingCart(){
    this.shopProductsService.sendClickEventCalculatePrice();
  }

}
