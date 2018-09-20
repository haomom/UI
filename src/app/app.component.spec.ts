import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './components/upload/upload.component'
import { SuspenseAccountsComponent } from './components/suspense-accounts/suspense-accounts.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadModule } from '@progress/kendo-angular-upload';
import { APP_BASE_HREF } from '@angular/common';
import { GBaseCredentialsComponent } from './components/g-base-credentials/g-base-credentials.component';
import { EditComponent } from './components/g-base-credentials/edit/edit.component';
import { TestComponent } from './components/g-base-credentials/test/test.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        NavbarComponent,
        UploadComponent,
        SuspenseAccountsComponent,
        GBaseCredentialsComponent,
        EditComponent,
        TestComponent
      ],
      imports: [
        AppRoutingModule,
        ButtonsModule,
        GridModule,
        LayoutModule,
        UploadModule,
        DialogModule,
        InputsModule,
        DropDownsModule,
        FormsModule
      ],
      providers: [
        { 
          provide: APP_BASE_HREF, 
          useValue: '/' 
        }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'FrontEndApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FrontEndApp');
  }));
});
