import { Component, OnInit } from '@angular/core';
// services
import { FacadeService } from 'facade-service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public url: string = null;

	constructor(
		private facadeService: FacadeService,
		private cookieService: CookieService,
	) { }

	async ngOnInit() {
		const languageId = this.cookieService.get('language');

		if (languageId) {
			this.facadeService.setLanguage(languageId);
		} else {
			this.facadeService.setLanguage('en');

			this.cookieService.set('language', 'en');
		}
	}
}
