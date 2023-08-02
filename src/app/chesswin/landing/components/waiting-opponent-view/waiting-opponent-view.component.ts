import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-opponent-view',
  templateUrl: './waiting-opponent-view.component.html',
  styleUrls: ['./waiting-opponent-view.component.scss']
})
export class WaitingOpponentViewComponent implements OnInit {
	@Input() languageLabels: any;

  constructor() { }

  ngOnInit(): void {
  }

}
