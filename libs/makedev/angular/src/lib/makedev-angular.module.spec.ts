import { async, TestBed } from '@angular/core/testing';
import { MakedevAngularModule } from './makedev-angular.module';

describe('MakedevAngularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevAngularModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevAngularModule).toBeDefined();
  });
});
