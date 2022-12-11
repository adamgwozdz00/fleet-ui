import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVehiclesComponent } from './user-vehicles.component';

describe('UserVehiclesComponent', () => {
  let component: UserVehiclesComponent;
  let fixture: ComponentFixture<UserVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
