import { Component, OnInit, Input } from '@angular/core';
import { ShopProductsService } from '../../services/shop_products.services';
import { CartProduct } from '../../models/cart_product';
import { ProductItem } from '../../models/product_item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-pricelist',
  templateUrl: './cart_pricelist.component.html',
  styleUrls: ['./cart_pricelist.component.scss']
})
export class CartPricelistComponent implements OnInit {

  @Input() cartProduct: CartProduct[] = [];
  @Input() products: ProductItem[] = [];

  shippingPrice: number = 0;
  subtotalPrice: number = 0;
  grandTotalPrice: number = 0;

  clickEventSubscription:Subscription;

   /**
   * @constructor
   */
  constructor(
    private shopProductsService: ShopProductsService,
  ) {
    this.clickEventSubscription = this.shopProductsService.getClickEventCalculatePrice().subscribe(()=>{
      this.calculatethePrice();
    });
  }

  ngOnInit(){
    this.calculatethePrice();
  }

  /**
  * Calculate the price
  */
  calculatethePrice(){
    for(let cart of this.cartProduct){
      for(let product of this.products){
        if(cart.productId === product.id){        
          this.subtotalPrice = Math.floor((cart.quantity * product.price)*100)/100;
        }        
      }    
        if((this.subtotalPrice < 100) || (cart.quantity = 0)){
          this.shippingPrice = 23.80;
        }else{
          this.shippingPrice = 0;
      }  
    }    
    this.grandTotalPrice = this.subtotalPrice + this.shippingPrice;
  }

  /**
  * Send order
  */
   sendOrder(){
    this.shopProductsService.sendClickEventSendOrder();
   }
}
