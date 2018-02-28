import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizArticlesComponent } from './biz-articles.component';

describe('BizArticlesComponent', () => {
  let component: BizArticlesComponent;
  let fixture: ComponentFixture<BizArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
