import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { FacadeService } from 'facade-service';

// interfaces
import { User } from '../../../common/models/user';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

	loggedIn: boolean = true;
	
	items = [
		{ 'icon':'home.png', 'itemText': 'Home', 'url': '/'},
		{ 'icon':'about us.png', 'itemText': 'About Us', 'url': '/contact-us'},
		{ 'icon':'question icon gold.png', 'itemText': 'Question / Answer', 'url': '/faq'},
		{ 'icon':'coins gold icon.png', 'itemText': 'Play with ChessCoin', 'url': '/app/play-chesscoin'},
		{ 'icon':'icon hand with coin gols.png', 'itemText': 'ChessCoin Shop', 'url': '/app/shop'},
		{ 'icon':'coin play for free gold.png', 'itemText': 'Play for free', 'url': '/app/play-free'},
		{ 'icon':'cubo gold png.png', 'itemText': 'Play with a Friend', 'url': '/app/play-friend'},
		{ 'icon':'contact us icon gold.png', 'itemText': 'Contact Us', 'url': '/contact-us'},
		{ 'icon':'icon hand with coin gols.png', 'itemText': 'Wallet Withdraw', 'url': '/app'},
	]

	destroyed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

	constructor(
		private facadeService: FacadeService,
		private router: Router
	) {}

	async ngOnInit() {
		const cognitoUser = (await this.facadeService.getUserCognito(
			this.facadeService.user.getValue().email
		)) as any;

		console.log(cognitoUser)

		let user;

		cognitoUser.UserAttributes.map((item) => {
			user = { ...user, [`${item.Name}`]: item.Value };
		});

		this.facadeService.user.next(user);

		this.facadeService.user
			.pipe(takeUntil(this.destroyed))
			.subscribe((userData) => {
				if (userData) {
					this.user.next(userData);
				}
			});
	}

	ngOnDestroy() {
		this.destroyed.next(true);
		this.destroyed.complete();
	}

	clickNavItem(url: string) {
		this.router.navigate([url]);
	}

}
