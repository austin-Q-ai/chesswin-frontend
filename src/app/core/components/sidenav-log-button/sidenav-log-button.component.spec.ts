import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLogButtonComponent } from './sidenav-log-button.component';

describe('SidenavLogButtonComponent', () => {
  let component: SidenavLogButtonComponent;
  let fixture: ComponentFixture<SidenavLogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavLogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
