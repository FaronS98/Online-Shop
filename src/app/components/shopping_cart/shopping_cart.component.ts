import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping_cart.component.html',
  styleUrls: ['./shopping_cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  assetsUrl: string = "../../assets/images/";
  constructor() { }

  ngOnInit(): void {
  }

}
