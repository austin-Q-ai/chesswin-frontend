import { Component, OnInit } from '@angular/core';

// services
import { FacadeService } from 'facade-service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	languageLabels;

	constructor(
		private facadeService: FacadeService
	) { }

	ngOnInit(): void {
		this.facadeService
			.getLanguageLabels()
			.subscribe(data => (this.languageLabels = data));
	}

}
