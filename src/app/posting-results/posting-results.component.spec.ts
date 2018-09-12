import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingResultsComponent } from './posting-results.component';

describe('PostingResultsComponent', () => {
  let component: PostingResultsComponent;
  let fixture: ComponentFixture<PostingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
