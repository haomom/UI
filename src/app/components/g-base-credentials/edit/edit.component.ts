import { Component, OnInit, Input } from '@angular/core';
import { GBaseCredentials } from './../../../models/g-base-credentials';

@Component({
  selector: 'g-base-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  showDialog: boolean;
  @Input() selectedRow: GBaseCredentials;

  public branches: string[] = ["London", "Milan"];

  constructor() { }

  ngOnInit() {
  }

  public delete() {
    this.showDialog = false;
  }

  public save() {
    this.showDialog = false;
  }

  public cancel() {
    this.showDialog = false;
  }

  public open() {
    this.showDialog = true;
  }

}
