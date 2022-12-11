import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationSidebarComponent } from './user-creation-sidebar.component';

describe('UserCreationSidebarComponent', () => {
  let component: UserCreationSidebarComponent;
  let fixture: ComponentFixture<UserCreationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
