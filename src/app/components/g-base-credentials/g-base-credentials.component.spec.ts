import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GBaseCredentialsComponent } from './g-base-credentials.component';
import { EditComponent } from './edit/edit.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

describe('GBaseCredentialsComponent', () => {
  let component: GBaseCredentialsComponent;
  let fixture: ComponentFixture<GBaseCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GBaseCredentialsComponent, 
        EditComponent, 
        TestComponent 
      ],
      imports: [
        GridModule, 
        DialogModule,
        InputsModule,
        DropDownsModule,
        ButtonsModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GBaseCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
