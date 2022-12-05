import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VehicleCreationSidebarComponent} from './vehicle-creation-sidebar.component';

describe('VehicleCreationSidebarComponent', () => {
  let component: VehicleCreationSidebarComponent;
  let fixture: ComponentFixture<VehicleCreationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCreationSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCreationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
