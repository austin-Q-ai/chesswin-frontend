import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFriendViewComponent } from './play-friend-view.component';

describe('PlayFriendViewComponent', () => {
  let component: PlayFriendViewComponent;
  let fixture: ComponentFixture<PlayFriendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFriendViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFriendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
