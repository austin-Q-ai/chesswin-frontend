import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingOpponentViewComponent } from './waiting-opponent-view.component';

describe('WaitingOpponentViewComponent', () => {
  let component: WaitingOpponentViewComponent;
  let fixture: ComponentFixture<WaitingOpponentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingOpponentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingOpponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
