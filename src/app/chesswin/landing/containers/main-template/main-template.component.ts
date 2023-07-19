import { Component, OnInit } from '@angular/core';

// services
import { FacadeService } from 'facade-service';

@Component({
	selector: 'app-main-template',
	templateUrl: './main-template.component.html',
	styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {

	languageLabels;

	items = [
		{ 'icon':'icon 2 coins', 'itemText': 'Play with ChessCoin', 'img': 'horse', 'background': 'gold'},
		{ 'icon':'icon 3 hand with coin', 'itemText': 'ChessCoin Shop', 'img': 'queen', 'background': 'gold'},
		{ 'icon':'icon 1 caballo', 'itemText': 'Play for free', 'img': 'horse', 'background': 'plata'},
		{ 'icon':'icon 4 cubo', 'itemText': 'Play with Friends', 'img': 'queen', 'background': 'gold'},
	]

	constructor(
		private facadeService: FacadeService
	) {}

	ngOnInit(): void {
		this.facadeService
			.getLanguageLabels()
			.subscribe(data => (this.languageLabels = data));
	}
}
