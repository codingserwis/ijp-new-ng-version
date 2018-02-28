import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyArticlesComponent } from './technology-articles.component';

describe('TechnologyArticlesComponent', () => {
  let component: TechnologyArticlesComponent;
  let fixture: ComponentFixture<TechnologyArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
