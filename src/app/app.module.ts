import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptors/authentication';
import { APP_BASE_HREF } from '@angular/common';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './components/upload/upload.component';
import { SuspenseAccountsComponent } from './components/suspense-accounts/suspense-accounts.component';
import { GBaseCredentialsComponent } from './components/g-base-credentials/g-base-credentials.component';
import { EditComponent } from './components/g-base-credentials/edit/edit.component';
import { TestComponent } from './components/g-base-credentials/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    UploadComponent,
    SuspenseAccountsComponent,
    GBaseCredentialsComponent,
    EditComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    LayoutModule,
    UploadModule,
    DialogModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    { 
      provide: APP_BASE_HREF, 
      useValue: '/' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
