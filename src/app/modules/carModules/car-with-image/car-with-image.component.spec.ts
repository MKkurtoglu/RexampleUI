import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWithImageComponent } from './car-with-image.component';

describe('CarWithImageComponent', () => {
  let component: CarWithImageComponent;
  let fixture: ComponentFixture<CarWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarWithImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
