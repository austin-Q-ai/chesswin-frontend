import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	
	showMenu = true;
	responsiveView = false;

	constructor() { }

	ngOnInit(): void {
	}

}
