import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomiaComponent } from './anatomia.component';

describe('AnatomiaComponent', () => {
  let component: AnatomiaComponent;
  let fixture: ComponentFixture<AnatomiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnatomiaComponent]
    });
    fixture = TestBed.createComponent(AnatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
