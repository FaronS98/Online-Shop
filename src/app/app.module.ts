import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping_cart/shopping_cart.component';
import { CartPricelistComponent } from './components/cart_pricelist/cart_pricelist.component';
import { ShopBasketComponent } from './components/shop_basket/shop_basket.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CartPricelistComponent,
    ShopBasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
