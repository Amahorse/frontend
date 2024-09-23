import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppOfflineComponent } from './app-offline.component';

describe('AppOfflineComponent', () => {
  let component: AppOfflineComponent;
  let fixture: ComponentFixture<AppOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOfflineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
