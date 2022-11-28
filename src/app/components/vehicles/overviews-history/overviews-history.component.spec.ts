import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OverviewsHistoryComponent} from './overviews-history.component';

describe('OverviewsHistoryComponent', () => {
  let component: OverviewsHistoryComponent;
  let fixture: ComponentFixture<OverviewsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
