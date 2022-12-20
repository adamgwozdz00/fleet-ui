import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteSidebarComponent } from './user-delete-sidebar.component';

describe('UserDeleteSidebarComponent', () => {
  let component: UserDeleteSidebarComponent;
  let fixture: ComponentFixture<UserDeleteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
