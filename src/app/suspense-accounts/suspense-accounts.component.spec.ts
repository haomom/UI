import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenseAccountsComponent } from './suspense-accounts.component';

describe('SuspenseAccountsComponent', () => {
  let component: SuspenseAccountsComponent;
  let fixture: ComponentFixture<SuspenseAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenseAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenseAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
