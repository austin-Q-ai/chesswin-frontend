import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
	@Input() playWithFree: boolean;
	
	timeMenuOpened :boolean = false;
	time: number = 10;
	items: number[] = [1,2,3,4,5];

	constructor() { }

	ngOnInit(): void {
	}

	menuOpen() {
		this.timeMenuOpened = !this.timeMenuOpened;
		if (this.items.length == 2) this.items = [1,2,3,4,5];
		else this.items = [4,5];
	}

	timeSet(time: number) {
		this.time = time;
		this.timeMenuOpened = false;
		this.items = [1,2,3,4,5];
	}

}
