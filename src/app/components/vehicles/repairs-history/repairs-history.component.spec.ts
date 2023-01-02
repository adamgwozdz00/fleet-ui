import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RepairsHistoryComponent} from './repairs-history.component';

describe('RepairsHistoryComponent', () => {
  let component: RepairsHistoryComponent;
  let fixture: ComponentFixture<RepairsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepairsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
