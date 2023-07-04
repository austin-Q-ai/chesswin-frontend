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
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Hello'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'About Us'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Question / Answer'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Play with ChessCoin'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'ChessCoin Shop'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Play for free'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Play with a Friend'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Contact Us'},
		{ 'iconURL':'../../../../assets/icons/gold-coin-icon.png', 'itemText': 'Wallet Withdraw'},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
