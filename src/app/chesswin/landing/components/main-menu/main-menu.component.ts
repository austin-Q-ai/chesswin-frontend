import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

	items = [
		{ 'icon':'coins', 'itemText': 'Play with ChessCoin', 'img': 'horse', 'background': 'gold'},
		{ 'icon':'hand with coin', 'itemText': 'ChessCoin Shop', 'img': 'queen', 'background': 'gold'},
		{ 'icon':'caballo', 'itemText': 'Play for free', 'img': 'horse', 'background': 'plata'},
		{ 'icon':'cubo', 'itemText': 'Play with Friends', 'img': 'queen', 'background': 'gold'},
	]

	constructor(
	) {}

	ngOnInit(): void {}
}
