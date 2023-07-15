import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// rxjs
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';

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

	countries: String[] = ['Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Basque Country','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','British Antarctic Territory','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Canary Islands','Cape Verde','Catalonia','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Commonwealth','Comoros','Cook Islands','Costa Rica','Cote dIvoire','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','England','Equatorial Guinea','Eritrea','Estonia','Ethiopia','European Union','Falkland Islands','Faroe Islands','Federated States of Micronesia','Fiji Islands','Finland','France','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','GoSquared','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea-Bissau','Guinea','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mars','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Nagorno Karabakh','Namibia','NATO','Nauru','Nepal','Netherlands Antilles','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','none','Norfolk Island','North Korea','Northern Cyprus','Northern Mariana Islands','Norway','Olympics','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn-Islands','Poland','Portugal','Puerto Rico','Qatar','Red-Cross','Republic-of-the-Congo','Reunion','Romania','Russian Federation','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Scotland','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint-Maarten','Slovakia','Slovenia','Solomon Islands','Somalia','Somaliland','South Africa','South Georgia and the South Sandwich Islands','South Korea','South Ossetia','South Sudan','Spain','SriLanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','The Democratic Republic of the Congo','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United Nations','United States','Uruguay','US-Virgin-Islands','Uzbekistan','Vanuatu','Vatican-City','Venezuela','Vietnam','Virgin Islands, British','Wales','Wallis And Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];
	selectedCountry: String;
	filteredCountries: Observable<String[]>;
	countryControl = new FormControl();

	constructor(
		private facadeService: FacadeService,
		private formBuilder: FormBuilder,
		private router: Router
	) {
		this.signupForm = this.createForm();
		this.filteredCountries = this.countryControl.valueChanges.pipe(
			startWith(''),
			map(country => (country ? this._filterCountries(country) : this.countries.slice())),
		);
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

	private _filterCountries(country: String): String[] {
		const filterValue = country.toLowerCase();

		return this.countries.filter(country => country.toLowerCase().includes(filterValue));
	}

	onSelecteCountry() {
		this.selectedCountry = this.countryControl.value;
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
