import { Component, OnInit } from '@angular/core';
import { CognitoUser } from 'amazon-cognito-identity-js';

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

	verified: Boolean = false;

	constructor(
		private facadeService: FacadeService
	) { }

	ngOnInit(): void {
		this.facadeService
			.getLanguageLabels()
			.subscribe(data => (this.languageLabels = data));
	}

	async cognito_verify(cognitousername: string, result: string) {
		try {
			console.log("ok")
			await this.facadeService.verify(cognitousername, result);

			this.requesting = false;
			this.verified = true;
		} catch (error) {
			console.log("ok1")
			this.requesting = false;
		}
	}

	verify() {
		// get verification input value as string
		let result = '';
		for (let i = 0; i < 6; i++) {
		const digitInput = document.getElementById(`digit${i}`) as HTMLInputElement;
			result += digitInput.value;
		}
		
		// Retrieve the cognitousername from session storage
		const cognitousername = JSON.parse(sessionStorage.getItem('cognitousername'));
		this.cognito_verify(cognitousername, result);
		// Clear the stored value from session storage (optional)
		sessionStorage.removeItem('cognitousername');
	}

}
