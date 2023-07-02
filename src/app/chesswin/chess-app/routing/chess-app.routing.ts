import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { GameGuard } from 'src/app/guards/game.guard';

// containers
import { GameComponent } from '../containers/game/game.component';
import { PackagesComponent } from '../../landing/containers/packages/packages.component';

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
		component: PackagesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChessAppRoutingModule {}
