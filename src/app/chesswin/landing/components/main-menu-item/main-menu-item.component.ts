import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-menu-item',
	templateUrl: './main-menu-item.component.html',
	styleUrls: ['./main-menu-item.component.scss']
})
export class MainMenuItemComponent implements OnInit {
	@Input() icon: String;
	@Input() itemText: String;
	@Input() image: String;
	@Input() background: String;

	constructor() { }

	ngOnInit(): void {
	}

}
