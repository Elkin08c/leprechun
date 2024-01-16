import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebroComponent } from './cerebro.component';

describe('CerebroComponent', () => {
  let component: CerebroComponent;
  let fixture: ComponentFixture<CerebroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerebroComponent]
    });
    fixture = TestBed.createComponent(CerebroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
