import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DriverDeleteSidebarComponent} from './driver-delete-sidebar.component';

describe('DriverDeleteSidebarComponent', () => {
  let component: DriverDeleteSidebarComponent;
  let fixture: ComponentFixture<DriverDeleteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverDeleteSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDeleteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
