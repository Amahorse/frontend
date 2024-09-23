import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwaggerPublicComponent } from './swagger-public.component';

describe('SwaggerPublicComponent', () => {
  let component: SwaggerPublicComponent;
  let fixture: ComponentFixture<SwaggerPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaggerPublicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwaggerPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
