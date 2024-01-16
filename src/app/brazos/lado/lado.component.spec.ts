import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoComponent } from './lado.component';

describe('LadoComponent', () => {
  let component: LadoComponent;
  let fixture: ComponentFixture<LadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LadoComponent]
    });
    fixture = TestBed.createComponent(LadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
