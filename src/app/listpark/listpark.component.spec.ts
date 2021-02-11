import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListparkComponent } from './listpark.component';

describe('ListparkComponent', () => {
  let component: ListparkComponent;
  let fixture: ComponentFixture<ListparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
