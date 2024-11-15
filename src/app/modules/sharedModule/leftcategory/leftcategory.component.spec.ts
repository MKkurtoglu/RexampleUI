import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcategoryComponent } from './leftcategory.component';

describe('LeftcategoryComponent', () => {
  let component: LeftcategoryComponent;
  let fixture: ComponentFixture<LeftcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
