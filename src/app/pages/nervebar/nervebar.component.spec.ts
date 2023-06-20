import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervebarComponent } from './nervebar.component';

describe('NervebarComponent', () => {
  let component: NervebarComponent;
  let fixture: ComponentFixture<NervebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NervebarComponent]
    });
    fixture = TestBed.createComponent(NervebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
