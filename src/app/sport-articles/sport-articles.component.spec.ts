import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportArticlesComponent } from './sport-articles.component';

describe('SportArticlesComponent', () => {
  let component: SportArticlesComponent;
  let fixture: ComponentFixture<SportArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
