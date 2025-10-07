import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientAnimatedBg } from './gradient-animated-bg';

describe('GradientAnimatedBg', () => {
  let component: GradientAnimatedBg;
  let fixture: ComponentFixture<GradientAnimatedBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientAnimatedBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientAnimatedBg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
