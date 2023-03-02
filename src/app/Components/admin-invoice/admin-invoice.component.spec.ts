import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvoiceComponent } from './admin-invoice.component';

describe('AdminInvoiceComponent', () => {
  let component: AdminInvoiceComponent;
  let fixture: ComponentFixture<AdminInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
