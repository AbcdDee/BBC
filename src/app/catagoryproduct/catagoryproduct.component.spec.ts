import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryproductComponent } from './catagoryproduct.component';

describe('CatagoryproductComponent', () => {
  let component: CatagoryproductComponent;
  let fixture: ComponentFixture<CatagoryproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatagoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
