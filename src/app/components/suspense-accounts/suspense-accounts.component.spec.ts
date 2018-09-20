import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridModule } from '@progress/kendo-angular-grid';
import { SuspenseAccountsComponent } from './suspense-accounts.component';
import { HttpClientModule } from '@angular/common/http';

describe('SuspenseAccountsComponent', () => {
  let component: SuspenseAccountsComponent;
  let fixture: ComponentFixture<SuspenseAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GridModule, 
        HttpClientModule
      ],
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
