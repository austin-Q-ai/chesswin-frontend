import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthGuard } from 'src/app/guards/auth.guard';

// components
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { DashboardComponent } from '../../chesswin/chess-app/containers/dashboard/dashboard.component';
import { SidenavComponent } from '../containers/sidenav/sidenav.component';

const routes: Routes = [
	{
		path: '',
		// component: DashboardComponent,
		component: SidenavComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../../chesswin/landing/landing.module').then(landingModule => landingModule.LandingModule)
			},
			{
				path: 'app',
				loadChildren: () => import('../../chesswin/chess-app/chess-app.module').then(chessAppModule => chessAppModule.ChessAppModule),
				// canActivate: [AuthGuard]
			},
		]
	},
	{
		path: 'admin',
		loadChildren: () => import('../../chesswin/admin/admin.module').then(adminModule => adminModule.AdminModule)
	},
	{ path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRouting {}
