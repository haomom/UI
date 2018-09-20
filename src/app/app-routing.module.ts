import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { SuspenseAccountsComponent } from './components/suspense-accounts/suspense-accounts.component';
import { GBaseCredentialsComponent } from './components/g-base-credentials/g-base-credentials.component';

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'ledger/credentials', component: GBaseCredentialsComponent },
  { path: 'ledger/suspense-accounts', component: SuspenseAccountsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
