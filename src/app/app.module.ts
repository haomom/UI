import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { PostingResultsComponent } from './posting-results/posting-results.component';
import { PendingActionsComponent } from './pending-actions/pending-actions.component';
import { SuspenseAccountsComponent } from './suspense-accounts/suspense-accounts.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadModule } from '@progress/kendo-angular-upload';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    HomeComponent,
    UploadComponent,
    PostingResultsComponent,
    PendingActionsComponent,
    SuspenseAccountsComponent,
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
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
