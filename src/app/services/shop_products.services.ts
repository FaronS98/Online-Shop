import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartProduct} from '../models/cart_product';
import {ICartProductDTO} from '../models/cart_product.interface';
import {ProductItem} from '../models/product_item';
import {IProductItemDTO} from '../models/product_item.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopProductsService {

  mainUrl: string = '../assets/data'; 
  private subjectOrder= new Subject<any>();
  private subjectPrice= new Subject<any>();

  /**
   * @constructor
   */
  constructor(private http: HttpClient) { }
 

  getCartProducts(): Observable<CartProduct[]> {
    const url = `${this.mainUrl}/cart_products.json`;
    
    return this.http
            .get<ICartProductDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return CartProduct.factory(item) as CartProduct
              }))
          );
  }

  getProductItem(): Observable<ProductItem[]> {
    const url = `${this.mainUrl}/products.json`;
    
    return this.http
            .get<IProductItemDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return ProductItem.factory(item) as ProductItem
              }))
          );
  }

 
  sendClickEventSendOrder(){
    this.subjectOrder.next();
  }

  getClickEventSendOrder():Observable<any>{
    return this.subjectOrder.asObservable();
  }

 
  sendClickEventCalculatePrice(){
    this.subjectPrice.next();
  }

  
  getClickEventCalculatePrice():Observable<any>{
    return this.subjectPrice.asObservable();
  }

}