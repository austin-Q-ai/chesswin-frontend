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
		{ 'iconURL':'../../../../assets/icons/updated/home.svg', 'itemText': 'Home'},
		{ 'iconURL':'../../../../assets/icons/updated/about us.svg', 'itemText': 'About Us'},
		{ 'iconURL':'../../../../assets/icons/updated/question icon gold.svg', 'itemText': 'Question / Answer'},
		{ 'iconURL':'../../../../assets/icons/updated/coins gold icon.svg', 'itemText': 'Play with ChessCoin'},
		{ 'iconURL':'../../../../assets/icons/updated/icon hand with coin gols.svg', 'itemText': 'ChessCoin Shop'},
		{ 'iconURL':'../../../../assets/icons/updated/coin play for free gold.svg', 'itemText': 'Play for free'},
		{ 'iconURL':'../../../../assets/icons/updated/cubo gold png.svg', 'itemText': 'Play with a Friend'},
		{ 'iconURL':'../../../../assets/icons/updated/contact us icon gold.svg', 'itemText': 'Contact Us'},
		{ 'iconURL':'../../../../assets/icons/updated/icon hand with coin gols.svg', 'itemText': 'Wallet Withdraw'},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
