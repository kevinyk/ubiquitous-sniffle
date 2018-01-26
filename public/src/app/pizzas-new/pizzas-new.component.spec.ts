import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasNewComponent } from './pizzas-new.component';

describe('PizzasNewComponent', () => {
  let component: PizzasNewComponent;
  let fixture: ComponentFixture<PizzasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
