import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSidebarMenuComponent } from './nav-sidebar-menu.component';

describe('NavSidebarMenuComponent', () => {
  let component: NavSidebarMenuComponent;
  let fixture: ComponentFixture<NavSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSidebarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
