import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

	items = [
		{ 'icon':'coins', 'itemText': 'Play with ChessCoin', 'img': 'horse', 'background': 'gold', 'url': '/app/play-chesscoin'},
		{ 'icon':'hand with coin', 'itemText': 'ChessCoin Shop', 'img': 'queen', 'background': 'gold', 'url': '/app/shop'},
		{ 'icon':'caballo', 'itemText': 'Play for free', 'img': 'horse', 'background': 'plata', 'url': '/app/play-free'},
		{ 'icon':'cubo', 'itemText': 'Play with Friends', 'img': 'queen', 'background': 'gold', 'url': '/app/play-friend'},
	]

	constructor(
		private router: Router
	) {}

	ngOnInit(): void {}

	navigate(url: string) {
		this.router.navigate([url]);
	}
}
