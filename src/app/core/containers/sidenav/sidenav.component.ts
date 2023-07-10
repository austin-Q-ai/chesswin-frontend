import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	
	showMenu = true;
	responsiveView = false;
	items = [
		{ 'icon':'home.svg', 'itemText': 'Home'},
		{ 'icon':'about us.svg', 'itemText': 'About Us'},
		{ 'icon':'question icon gold.svg', 'itemText': 'Question / Answer'},
		{ 'icon':'coins gold icon.svg', 'itemText': 'Play with ChessCoin'},
		{ 'icon':'icon hand with coin gols.svg', 'itemText': 'ChessCoin Shop'},
		{ 'icon':'coin play for free gold.svg', 'itemText': 'Play for free'},
		{ 'icon':'cubo gold png.svg', 'itemText': 'Play with a Friend'},
		{ 'icon':'contact us icon gold.svg', 'itemText': 'Contact Us'},
		{ 'icon':'icon hand with coin gols.svg', 'itemText': 'Wallet Withdraw'},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
