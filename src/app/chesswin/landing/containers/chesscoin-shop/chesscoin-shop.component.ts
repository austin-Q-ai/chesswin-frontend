import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chesscoin-shop',
  templateUrl: './chesscoin-shop.component.html',
  styleUrls: ['./chesscoin-shop.component.scss']
})

export class ChesscoinShopComponent implements OnInit {

	packages = [
		{
			id: 1,
			name: 'Pawn Packet of Coins',
			price: 5.00,
			coins: 50,
			image: './assets/images/packages/packages-pawn-bg.png'
		},
		{
			id: 2,
			name: 'Rook Packet of Coins',
			price: 10.00,
			coins: 100,
			image: './assets/images/packages/packages-rook-bg.png'
		},
		{
			id: 3,
			name: 'Horse Packet of Coins',
			price: 20.00,
			coins: 200,
			image: './assets/images/packages/packages-knight-bg.png'
		},
		{
			id: 4,
			name: 'Offices Packet of Coins',
			price: 50.00,
			coins: 500,
			image: './assets/images/packages/packages-bishop-bg.png'
		},
		{
			id: 5,
			name: 'Queen Packet of Coins',
			price: 100.00,
			coins: 1000,
			image: './assets/images/packages/packages-queen-bg.png'
		},
		{
			id: 6,
			name: 'King Packet of Coins',
			price: 300.00,
			coins: 3000,
			image: './assets/images/packages/packages-king-bg.png'
		},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
