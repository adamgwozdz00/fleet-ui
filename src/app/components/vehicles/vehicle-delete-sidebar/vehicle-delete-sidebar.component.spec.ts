import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDeleteSidebarComponent } from './vehicle-delete-sidebar.component';

describe('VehicleDeleteSidebarComponent', () => {
  let component: VehicleDeleteSidebarComponent;
  let fixture: ComponentFixture<VehicleDeleteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDeleteSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDeleteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
