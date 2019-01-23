import { async, TestBed } from '@angular/core/testing';
import { MakedevAngularjsModule } from './makedev-angularjs.module';

describe('MakedevAngularjsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevAngularjsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevAngularjsModule).toBeDefined();
  });
});
