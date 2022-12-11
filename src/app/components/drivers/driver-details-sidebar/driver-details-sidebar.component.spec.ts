import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DriverDetailsSidebarComponent} from './driver-details-sidebar.component';

describe('DriverDetailsSidebarComponent', () => {
  let component: DriverDetailsSidebarComponent;
  let fixture: ComponentFixture<DriverDetailsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverDetailsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
