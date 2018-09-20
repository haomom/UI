import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SuspenseAccountService } from './suspense-account.service';

describe('SuspenseAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ SuspenseAccountService ]
  }));

  it('should be created', () => {
    const service: SuspenseAccountService = TestBed.get(SuspenseAccountService);
    expect(service).toBeTruthy();
  });
});
