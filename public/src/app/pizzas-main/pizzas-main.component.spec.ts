import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasMainComponent } from './pizzas-main.component';

describe('PizzasMainComponent', () => {
  let component: PizzasMainComponent;
  let fixture: ComponentFixture<PizzasMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
