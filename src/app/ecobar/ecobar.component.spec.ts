import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcobarComponent } from './ecobar.component';

describe('EcobarComponent', () => {
  let component: EcobarComponent;
  let fixture: ComponentFixture<EcobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcobarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
