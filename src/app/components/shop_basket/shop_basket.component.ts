import { Component, OnInit } from '@angular/core';
import { ShopProductsService } from '../../services/shop_products.services';
import { CartProduct } from '../../models/cart_product';
import { ProductItem } from '../../models/product_item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-basket',
  templateUrl: './shop_basket.component.html',
  styleUrls: ['./shop_basket.component.scss']
})
export class ShopBasketComponent implements OnInit {

  products: ProductItem[] = [];
  cartProduct: CartProduct[] = [];
  productQuantity: number = null;
  sendOrder: boolean = false;

  clickEventSubscription:Subscription;

  /**
   * @constructor
   */
  constructor(
    private shopProductsService: ShopProductsService,
  ) {
    this.clickEventSubscription = this.shopProductsService.getClickEventSendOrder().subscribe(()=>{
      this.displayMessage();
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCartProduct();
  }

  
  /**
   * Get products
   */
  getProducts(): void {
    this.shopProductsService.getProductItem().subscribe(products => {
      this.products = products; 
    });
  }

  /**
   * Get cart`s product
   */
  getCartProduct(): void {
    this.shopProductsService.getCartProducts().subscribe(carts => {
      this.cartProduct = carts; 
    });
  }

   /**
   * Display send order message
   */
  displayMessage(){
    this.sendOrder = true;
  }
}