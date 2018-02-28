import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentArticlesComponent } from './entertainment-articles.component';

describe('EntertainmentArticlesComponent', () => {
  let component: EntertainmentArticlesComponent;
  let fixture: ComponentFixture<EntertainmentArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
