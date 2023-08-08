import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

// modules
import { CommonModule } from 'common-module';
import { ChessAppRoutingModule } from './routing/chess-app.routing';

// containers
import { GameComponent } from './containers/game/game.component';
import { PlayChesscoinComponent } from './containers/play-chesscoin/play-chesscoin.component';
import { PlayFreeComponent } from './containers/play-free/play-free.component';
import { PlayFriendComponent } from './containers/play-friend/play-friend.component';
import { WaitingOpponentComponent } from './containers/waiting-opponent/waiting-opponent.component';
import { ChesscoinShopComponent } from './containers/chesscoin-shop/chesscoin-shop.component';
import { ShopTemplateComponent } from './containers/shop-template/shop-template.component';
import { SelectPaymentMethodComponent } from './containers/select-payment-method/select-payment-method.component';
import { MainTemplateComponent } from "../landing/containers/main-template/main-template.component";

// components
import { ChallengeViewComponent } from './components/side-nav/challenge-view/challenge-view.component';
import { FriendsViewComponent } from './components/side-nav/friends-view/friends-view.component';
import { GameEngineComponent } from './components/game/game-engine/game-engine.component';
import { GameViewComponent } from './components/game/game-view/game-view.component';
import { MessagesViewComponent } from './components/messages-view/messages-view.component';
import { ChallengeDialogComponent } from './components/side-nav/challenge-dialog/challenge-dialog.component';
import { PackagesViewComponent } from '../landing/components/packages-view/packages-view.component';
import { PackagesComponent } from '../landing/containers/packages/packages.component';
import { ConvertToCashViewComponent } from './components/side-nav/convert-to-cash-view/convert-to-cash-view.component';
import { CreditCardViewComponent } from './components/side-nav/credit-card-view/credit-card-view.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlayFriendViewComponent } from './components/play-friend-view/play-friend-view.component';
import { WaitingOpponentViewComponent } from './components/waiting-opponent-view/waiting-opponent-view.component';
import { WelcomeComponent } from "../../common/components/welcome/welcome.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ChessAppRoutingModule,
		LayoutModule,
		ReactiveFormsModule,
	],
	declarations: [
		// containers
		GameComponent,
		PackagesComponent,
		PlayChesscoinComponent,
		PlayFreeComponent,
		PlayFriendComponent,
		WaitingOpponentComponent,
		ChesscoinShopComponent,
		ShopTemplateComponent,
		SelectPaymentMethodComponent,
		// components
		PackagesViewComponent,
		ChallengeViewComponent,
		FriendsViewComponent,
		GameEngineComponent,
		GameViewComponent,
		MessagesViewComponent,
		PlaylistComponent,
		PlaylistItemComponent,
		PlayFriendViewComponent,
		WaitingOpponentViewComponent,
		// dialogs
		ChallengeDialogComponent,
		ConvertToCashViewComponent,
		CreditCardViewComponent
	],
	entryComponents: [ChallengeDialogComponent]
})
export class ChessAppModule {}
