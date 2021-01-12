import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPricelistComponent } from './cart_pricelist.component';

describe('CartPricelistComponent', () => {
  let component: CartPricelistComponent;
  let fixture: ComponentFixture<CartPricelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPricelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPricelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
