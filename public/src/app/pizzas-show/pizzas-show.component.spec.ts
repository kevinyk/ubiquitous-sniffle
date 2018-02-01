import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasShowComponent } from './pizzas-show.component';

describe('PizzasShowComponent', () => {
  let component: PizzasShowComponent;
  let fixture: ComponentFixture<PizzasShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
