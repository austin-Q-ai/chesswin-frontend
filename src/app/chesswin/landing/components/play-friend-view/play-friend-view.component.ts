import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-friend-view',
  templateUrl: './play-friend-view.component.html',
  styleUrls: ['./play-friend-view.component.scss']
})
export class PlayFriendViewComponent implements OnInit {
	@Input() languageLabels: any;

  constructor() { }

  ngOnInit(): void {
  }

}
