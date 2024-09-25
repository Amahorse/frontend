import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingDownloadComponent } from './listing-download.component';

describe('ListingDownloadComponent', () => {
  let component: ListingDownloadComponent;
  let fixture: ComponentFixture<ListingDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDownloadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
