import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FacadeService } from 'facade-service';

@Component({
  selector: 'app-play-friend',
  templateUrl: './play-friend.component.html',
  styleUrls: ['./play-friend.component.scss']
})
export class PlayFriendComponent implements OnInit {
	languageLabels: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(private facadeService: FacadeService) {}

	ngOnInit() {
		this.languageLabels = this.facadeService.getLanguageLabels();
	}

}
