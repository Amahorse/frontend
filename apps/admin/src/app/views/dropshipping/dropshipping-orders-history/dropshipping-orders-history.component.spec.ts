import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropshippingOrdersHistoryComponent } from './dropshipping-orders-history.component';

describe('DropshippingOrdersHistoryComponent', () => {
  let component: DropshippingOrdersHistoryComponent;
  let fixture: ComponentFixture<DropshippingOrdersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropshippingOrdersHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropshippingOrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
