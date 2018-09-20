import { Component, OnInit, Input } from '@angular/core';
import { GBaseCredentials } from './../../../models/g-base-credentials';

@Component({
  selector: 'g-base-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  showDialog: boolean;
  @Input() selectedRow: GBaseCredentials;
  constructor() { }

  ngOnInit() {
  }

  public cancel() {
    this.showDialog = false;
  }

  public open() {
    this.showDialog = true;
  }
}
