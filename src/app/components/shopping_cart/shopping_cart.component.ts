import { Component, OnInit } from '@angular/core';
import { ShopProductsService } from '../../services/shop_products.services';
import { CartProduct } from '../../models/cart_product';
import { ProductItem } from '../../models/product_item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping_cart.component.html',
  styleUrls: ['./shopping_cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  assetsUrl: string = "../../assets/images/";
  products: ProductItem[] = [];
  cartProduct: CartProduct[] = [];
  productQuantity: number = null;
  hide: Boolean = false;

  /**
   * @constructor
   */
  constructor(
    private tailorCollectionService: ShopProductsService,
  ) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getCartProduct();
  }

  
  /**
   * Get products
   */
  getProducts(): void {
    this.tailorCollectionService.getProductItem().subscribe(products => {
      this.products = products; 
    });
  }

  /**
   * Get cart`s product
   */
  getCartProduct(): void {
    this.tailorCollectionService.getCartProducts().subscribe(carts => {
      this.cartProduct = carts; 
    });
  }

  /**
   * Increase product`s quantity
   */
  increaseQuantity(productId: number): void{
    for(let cart of this.cartProduct){
      if(cart.productId === productId){
        cart.quantity++;
      }
    }
  }


  /**
   * Decrease product`s quantity
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
   */
  hideProduct(productId: number){
    for(let cart of this.cartProduct){
      if(cart.productId === productId){   
        cart.quantity = 0;
        this.hide = true;
      }
    }
  }

}
