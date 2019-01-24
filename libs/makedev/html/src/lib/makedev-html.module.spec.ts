import { async, TestBed } from '@angular/core/testing';
import { MakedevHtmlModule } from './makedev-html.module';

describe('MakedevHtmlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MakedevHtmlModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MakedevHtmlModule).toBeDefined();
  });
});
