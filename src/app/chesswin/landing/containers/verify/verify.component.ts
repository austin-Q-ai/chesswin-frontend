import { Component, OnInit } from '@angular/core';

// services
import { FacadeService } from 'facade-service';

@Component({
	selector: 'app-verify',
	templateUrl: './verify.component.html',
	styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

	languageLabels;
	requesting: Boolean = false;

	verified: Boolean = true;

	constructor(
		private facadeService: FacadeService
	) { }

	ngOnInit(): void {
		this.facadeService
			.getLanguageLabels()
			.subscribe(data => (this.languageLabels = data));
	}

}
