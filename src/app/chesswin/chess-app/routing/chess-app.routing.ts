import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { GameGuard } from 'src/app/guards/game.guard';

// containers
import { GameComponent } from '../containers/game/game.component';
import { PackagesComponent } from '../../landing/containers/packages/packages.component';
import { PlayChesscoinComponent } from '../containers/play-chesscoin/play-chesscoin.component';
import { PlayFreeComponent } from '../containers/play-free/play-free.component';
import { PlayFriendComponent } from "../containers/play-friend/play-friend.component";
import { WaitingOpponentComponent } from "../containers/waiting-opponent/waiting-opponent.component";
import { ShopTemplateComponent } from "../containers/shop-template/shop-template.component";
import { ChesscoinShopComponent } from "../containers/chesscoin-shop/chesscoin-shop.component";
import { SelectPaymentMethodComponent } from "../containers/select-payment-method/select-payment-method.component";
import { MainTemplateComponent } from "../../landing/containers/main-template/main-template.component";

// components
import { ConvertToCashViewComponent } from '../components/side-nav/convert-to-cash-view/convert-to-cash-view.component';
import { CreditCardViewComponent } from '../components/side-nav/credit-card-view/credit-card-view.component';

const routes: Routes = [
	// {
	// 	path: 'game',
	// 	component: GameComponent,
	// 	canActivate: [GameGuard],
	// 	canDeactivate: [GameGuard]
	// },
	{
		path: 'convert-to-cash',
		component: ConvertToCashViewComponent
	},
	{
		path: 'credit-card',
		component: CreditCardViewComponent
	},
	{
		path: '',
		redirectTo: '/app/shop',
		pathMatch: 'full'
	},
	{
		path: 'play-friend',
		component: PlayFriendComponent
	},
	{
		path: 'waiting-opponent',
		component: WaitingOpponentComponent
	},
	{
		path: 'shop',
		component: ShopTemplateComponent,
		children: [
			{
				path:'',
				component: ChesscoinShopComponent
			},
			{
				path: 'buy',
				children: [
					{
						path: '',
						component: SelectPaymentMethodComponent
					}
				]
			}
		]
	},
	{
		path: '',
		component: MainTemplateComponent,
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
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChessAppRoutingModule {}
