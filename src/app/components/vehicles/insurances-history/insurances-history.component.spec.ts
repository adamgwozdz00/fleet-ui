import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InsurancesHistoryComponent} from './insurances-history.component';

describe('InsurancesHistoryComponent', () => {
  let component: InsurancesHistoryComponent;
  let fixture: ComponentFixture<InsurancesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsurancesHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
