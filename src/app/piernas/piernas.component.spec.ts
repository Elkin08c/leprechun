import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernasComponent } from './piernas.component';

describe('PiernasComponent', () => {
  let component: PiernasComponent;
  let fixture: ComponentFixture<PiernasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiernasComponent]
    });
    fixture = TestBed.createComponent(PiernasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
