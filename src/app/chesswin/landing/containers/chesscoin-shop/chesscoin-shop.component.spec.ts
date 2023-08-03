import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChesscoinShopComponent } from './chesscoin-shop.component';

describe('ChesscoinShopComponent', () => {
  let component: ChesscoinShopComponent;
  let fixture: ComponentFixture<ChesscoinShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChesscoinShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChesscoinShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
