import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaltoolbarComponent } from './principaltoolbar.component';

describe('PrincipaltoolbarComponent', () => {
  let component: PrincipaltoolbarComponent;
  let fixture: ComponentFixture<PrincipaltoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaltoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaltoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
