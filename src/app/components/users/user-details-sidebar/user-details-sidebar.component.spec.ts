import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsSidebarComponent } from './user-details-sidebar.component';

describe('UserDetailsSidebarComponent', () => {
  let component: UserDetailsSidebarComponent;
  let fixture: ComponentFixture<UserDetailsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
