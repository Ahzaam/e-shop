import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsComponent } from './home-products.component';

describe('HomeProductsComponent', () => {
  let component: HomeProductsComponent;
  let fixture: ComponentFixture<HomeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
