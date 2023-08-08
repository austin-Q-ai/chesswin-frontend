import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayChesscoinComponent } from './play-chesscoin.component';

describe('PlayChesscoinComponent', () => {
	let component: PlayChesscoinComponent;
	let fixture: ComponentFixture<PlayChesscoinComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PlayChesscoinComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayChesscoinComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
