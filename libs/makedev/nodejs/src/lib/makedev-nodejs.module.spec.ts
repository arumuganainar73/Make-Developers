import { async, TestBed } from '@angular/core/testing';
import { MakedevNodejsModule } from './makedev-nodejs.module';

describe('MakedevNodejsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevNodejsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevNodejsModule).toBeDefined();
  });
});
