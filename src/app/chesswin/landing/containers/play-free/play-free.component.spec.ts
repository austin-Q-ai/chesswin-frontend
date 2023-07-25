import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFreeComponent } from './play-free.component';

describe('PlayFreeComponent', () => {
	let component: PlayFreeComponent;
	let fixture: ComponentFixture<PlayFreeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PlayFreeComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayFreeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
