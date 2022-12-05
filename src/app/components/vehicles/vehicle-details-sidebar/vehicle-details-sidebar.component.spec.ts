import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VehicleDetailsSidebarComponent} from './vehicle-details-sidebar.component';

describe('VehicleDetailsSidebarComponent', () => {
  let component: VehicleDetailsSidebarComponent;
  let fixture: ComponentFixture<VehicleDetailsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleDetailsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
