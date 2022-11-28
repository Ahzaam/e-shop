import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminComponent } from './shop-admin.component';

describe('ShopAdminComponent', () => {
  let component: ShopAdminComponent;
  let fixture: ComponentFixture<ShopAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
