import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwaggerDevComponent } from './swagger-dev.component';

describe('SwaggerDevComponent', () => {
  let component: SwaggerDevComponent;
  let fixture: ComponentFixture<SwaggerDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaggerDevComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwaggerDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
