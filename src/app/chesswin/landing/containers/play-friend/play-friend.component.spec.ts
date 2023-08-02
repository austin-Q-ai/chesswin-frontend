import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFriendComponent } from './play-friend.component';

describe('PlayFriendComponent', () => {
  let component: PlayFriendComponent;
  let fixture: ComponentFixture<PlayFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
