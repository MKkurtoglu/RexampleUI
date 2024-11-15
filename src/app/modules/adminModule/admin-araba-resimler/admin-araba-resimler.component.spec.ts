import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArabaResimlerComponent } from './admin-araba-resimler.component';

describe('AdminArabaResimlerComponent', () => {
  let component: AdminArabaResimlerComponent;
  let fixture: ComponentFixture<AdminArabaResimlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminArabaResimlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminArabaResimlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
