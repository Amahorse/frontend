import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropshippingCustomersComponent } from './dropshipping-customers.component';

describe('DropshippingCustomersComponent', () => {
  let component: DropshippingCustomersComponent;
  let fixture: ComponentFixture<DropshippingCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropshippingCustomersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropshippingCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
