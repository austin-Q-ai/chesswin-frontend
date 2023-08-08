import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-payment-method',
  templateUrl: './select-payment-method.component.html',
  styleUrls: ['./select-payment-method.component.scss']
})
export class SelectPaymentMethodComponent implements OnInit {
	isHovered: { [key: string]: boolean } = {};
	isClicked: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(item: string) {
	this.isHovered = {};
	this.isClicked = {};
	this.isHovered[item] = true;
	this.isClicked[item] = true;
  }

  leave(item: string) {
	if (!this.isClicked[item]) {
		this.isHovered[item] = false
	}
  }

}
