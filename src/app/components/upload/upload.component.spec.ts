import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadComponent } from './upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadComponent ],
      imports: [
        LayoutModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
