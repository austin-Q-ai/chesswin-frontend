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
import { PackagesComponent } from '../containers/packages/packages.component';
import { TermsAndConditionsComponent } from '../containers/terms-and-conditions/terms-and-conditions.component';
import { RefundPolicyComponent } from '../containers/refund-policy/refund-policy.component';
import { SignupComponent } from '../containers/signup/signup.component';
import { VerifyComponent } from '../containers/verify/verify.component';
import { HomeComponent } from '../containers/home/home.component';
import { MainTemplateComponent } from '../containers/main-template/main-template.component';
import { PlayChesscoinComponent } from '../containers/play-chesscoin/play-chesscoin.component';
import { PlayFreeComponent } from '../containers/play-free/play-free.component';
import { PlayFriendComponent } from "../containers/play-friend/play-friend.component";
import { WaitingOpponentComponent } from "../containers/waiting-opponent/waiting-opponent.component";

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
		component: FaqComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'fair-play',
		component: FairPlayComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'privacy',
		component: PrivacyPolicyComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'how-to',
		component: HowToComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'contact-us',
		component: ContactUsComponent,
		canActivate: [HomeGuard]
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'terms-and-conditions',
		component: TermsAndConditionsComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'refund-policy',
		component: RefundPolicyComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'verify',
		component: VerifyComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'play-friend',
		component: PlayFriendComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'waiting-opponent',
		component: WaitingOpponentComponent,
		canActivate: [HomeGuard]
	},
	{
		path: '',
		component: MainTemplateComponent,
		canActivate: [HomeGuard],
		children: [
			{
				path: 'play-chesscoin',
				component: PlayChesscoinComponent
			},
			{
				path: 'play-free',
				component: PlayFreeComponent
			}
		]
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
