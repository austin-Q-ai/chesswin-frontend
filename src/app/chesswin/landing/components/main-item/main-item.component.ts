import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-item',
	templateUrl: './main-item.component.html',
	styleUrls: ['./main-item.component.scss']
})
export class MainItemComponent implements OnInit {
	@Input() icon: String;
	@Input() itemText: String;
	@Input() image: String;
	@Input() background: String;

	constructor() { }

	ngOnInit(): void {
	}

}
