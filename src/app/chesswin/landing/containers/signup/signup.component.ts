import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// rxjs
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { FacadeService } from 'facade-service';

// functions
import { getErrorFromCode } from '../../../../common/functions/auth-errors';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit, OnDestroy {
	hide=true;
	requesting: boolean;
	serverError: string;

	signupForm: FormGroup;

	languageLabels;

	submitted = false;
	emailError = false;
	passwordError = false;

	destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

	constructor(
		private facadeService: FacadeService,
		private formBuilder: FormBuilder,
		private router: Router
	) {
		this.signupForm = this.createForm();
	}

	ngOnInit() {
		this.facadeService
			.getLanguageLabels()
			.subscribe(data => (this.languageLabels = data));

		this.signupForm.valueChanges
			.pipe(takeUntil(this.destroyed))
			.subscribe(() =>
				this.submitted ? this.clearErrors() : (this.submitted = false)
			);
	}

	ngOnDestroy() {
		this.destroyed.next(true);
		this.destroyed.complete();
	}

	get emailInvalid() {
		const control = this.signupForm.get('email');

		return !!control.errors;
	}

	get passwordInvalid() {
		const control = this.signupForm.get('password');

		return !!control.errors;
	}

	async signup(userCredentials) {
		this.requesting = true;
		this.serverError = '';

		try {
			await this.facadeService.login(
				userCredentials.email,
				userCredentials.password
			);

			this.router.navigate(['/app/']);

			this.requesting = false;
		} catch (error) {
			this.serverError = getErrorFromCode(error.code);

			this.requesting = false;
		}
	}

	emitSignupForm() {
		this.serverError = '';

		if (this.signupForm.valid) {
			this.signup(this.signupForm.value);
		} else {
			if (this.emailInvalid) {
				this.emailError = true;
			}
			if (this.passwordInvalid) {
				this.passwordError = true;
			}
		}

		this.submitted = true;
	}

	clearErrors() {
		this.emailError = false;
		this.passwordError = false;
		this.serverError = '';
	}

	createForm() {
		return this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
	}
}
