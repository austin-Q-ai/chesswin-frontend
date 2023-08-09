import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { AboutUsComponent } from '../containers/about-us/about-us.component';
import { FairPlayComponent } from '../containers/fair-play/fair-play.component';
import { FaqComponent } from '../containers/faq/faq.component';
import { HowToComponent } from '../containers/how-to/how-to.component';
import { PrivacyPolicyComponent } from '../containers/privacy-policy/privacy-policy.component';
import { HomeGuard } from 'src/app/guards/home.guard';
import { LoginComponent } from '../containers/login/login.component';
import { ContactUsComponent } from '../containers/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from '../containers/terms-and-conditions/terms-and-conditions.component';
import { RefundPolicyComponent } from '../containers/refund-policy/refund-policy.component';
import { SignupComponent } from '../containers/signup/signup.component';
import { VerifyComponent } from '../containers/verify/verify.component';
import { HomeComponent } from '../containers/home/home.component';

const landingRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'signup'	,
		component: SignupComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'faq',
		component: FaqComponent
	},
	{
		path: 'fair-play',
		component: FairPlayComponent
	},
	{
		path: 'privacy',
		component: PrivacyPolicyComponent
	},
	{
		path: 'how-to',
		component: HowToComponent
	},
	{
		path: 'contact-us',
		component: ContactUsComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'terms-and-conditions',
		component: TermsAndConditionsComponent
	},
	{
		path: 'refund-policy',
		component: RefundPolicyComponent
	},
	{
		path: 'verify',
		component: VerifyComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'home',
		component: HomeComponent
	}
	// {
	//   path: 'about-us',
	//   component: AboutUsComponent
	// }
];

@NgModule({
	imports: [RouterModule.forChild(landingRoutes)],
	exports: [RouterModule]
})
export class LandingRouting {}
