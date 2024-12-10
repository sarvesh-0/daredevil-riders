import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureToursComponent } from './future-tours.component';

describe('FutureToursComponent', () => {
  let component: FutureToursComponent;
  let fixture: ComponentFixture<FutureToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
