import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RefuelHistoryComponent} from './refuel-history.component';

describe('RefuelHistoryComponent', () => {
  let component: RefuelHistoryComponent;
  let fixture: ComponentFixture<RefuelHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefuelHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefuelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
