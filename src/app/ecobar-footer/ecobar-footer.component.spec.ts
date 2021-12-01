import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcobarFooterComponent } from './ecobar-footer.component';

describe('EcobarFooterComponent', () => {
  let component: EcobarFooterComponent;
  let fixture: ComponentFixture<EcobarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcobarFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcobarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
