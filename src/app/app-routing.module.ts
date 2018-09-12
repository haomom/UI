import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { PostingResultsComponent } from './posting-results/posting-results.component';
import { PendingActionsComponent } from './pending-actions/pending-actions.component';
import { SuspenseAccountsComponent } from './suspense-accounts/suspense-accounts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'posting-results', component: PostingResultsComponent },
  { path: 'pending-actions', component: PendingActionsComponent },
  { path: 'suspense-accounts', component: SuspenseAccountsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
