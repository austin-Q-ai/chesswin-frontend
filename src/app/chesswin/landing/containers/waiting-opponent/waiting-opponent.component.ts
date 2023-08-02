import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FacadeService } from 'facade-service';

@Component({
  selector: 'app-waiting-opponent',
  templateUrl: './waiting-opponent.component.html',
  styleUrls: ['./waiting-opponent.component.scss']
})
export class WaitingOpponentComponent implements OnInit {

	languageLabels: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(private facadeService: FacadeService) {}

	ngOnInit() {
		this.languageLabels = this.facadeService.getLanguageLabels();
	}

}
