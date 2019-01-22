import { async, TestBed } from '@angular/core/testing';
import { MakedevJavascriptModule } from './makedev-javascript.module';

describe('MakedevJavascriptModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevJavascriptModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevJavascriptModule).toBeDefined();
  });
});
