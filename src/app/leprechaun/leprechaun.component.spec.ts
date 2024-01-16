import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeprechaunComponent } from './leprechaun.component';

describe('LeprechaunComponent', () => {
  let component: LeprechaunComponent;
  let fixture: ComponentFixture<LeprechaunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeprechaunComponent]
    });
    fixture = TestBed.createComponent(LeprechaunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
