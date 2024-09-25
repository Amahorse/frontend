import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationKitComponent } from './communication-kit.component';

describe('CommunicationKitComponent', () => {
  let component: CommunicationKitComponent;
  let fixture: ComponentFixture<CommunicationKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationKitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
