import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDefaultComponent } from './article-default.component';

describe('ArticleDefaultComponent', () => {
  let component: ArticleDefaultComponent;
  let fixture: ComponentFixture<ArticleDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
