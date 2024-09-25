import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropshippingNewOrderComponent } from './dropshipping-new-order.component';

describe('DropshippingNewOrderComponent', () => {
  let component: DropshippingNewOrderComponent;
  let fixture: ComponentFixture<DropshippingNewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropshippingNewOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropshippingNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
