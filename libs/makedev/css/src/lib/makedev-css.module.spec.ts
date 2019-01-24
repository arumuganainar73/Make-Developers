import { async, TestBed } from '@angular/core/testing';
import { MakedevCssModule } from './makedev-css.module';

describe('MakedevCssModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevCssModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevCssModule).toBeDefined();
  });
});
