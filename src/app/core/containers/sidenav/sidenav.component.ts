import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	loggedIn: boolean = true;
	
	items = [
		{ 'icon':'home.png', 'itemText': 'Home'},
		{ 'icon':'about us.png', 'itemText': 'About Us'},
		{ 'icon':'question icon gold.png', 'itemText': 'Question / Answer'},
		{ 'icon':'coins gold icon.png', 'itemText': 'Play with ChessCoin'},
		{ 'icon':'icon hand with coin gols.png', 'itemText': 'ChessCoin Shop'},
		{ 'icon':'coin play for free gold.png', 'itemText': 'Play for free'},
		{ 'icon':'cubo gold png.png', 'itemText': 'Play with a Friend'},
		{ 'icon':'contact us icon gold.png', 'itemText': 'Contact Us'},
		{ 'icon':'icon hand with coin gols.png', 'itemText': 'Wallet Withdraw'},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
