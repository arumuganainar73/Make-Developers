import { async, TestBed } from '@angular/core/testing';
import { MakedevJqueryModule } from './makedev-jquery.module';

describe('MakedevJqueryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevJqueryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevJqueryModule).toBeDefined();
  });
});
