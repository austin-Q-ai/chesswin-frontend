import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-playlist-item',
	templateUrl: './playlist-item.component.html',
	styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {
	@Input() index: number;
	@Input() playWithFree: Boolean;
	
	imageList = ['gold coin blank', 'blue green coin', 'red coin', 'green coin', 'coin naranja'];

	constructor() { }

	ngOnInit(): void {
	}

}
