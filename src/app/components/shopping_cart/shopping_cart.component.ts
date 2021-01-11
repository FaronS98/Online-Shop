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
      console.log(this.products);
    });
  }

  /**
   * Get cart`s product
   */
  getCartProduct(): void {
    this.tailorCollectionService.getCartProducts().subscribe(carts => {
      this.cartProduct = carts; 
      console.log(this.cartProduct);
    });
  }

}
