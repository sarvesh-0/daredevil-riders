import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastToursComponent } from './past-tours.component';

describe('PastToursComponent', () => {
  let component: PastToursComponent;
  let fixture: ComponentFixture<PastToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
