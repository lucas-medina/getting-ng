import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-editor-address',
  templateUrl: './profile-editor-address.component.html',
  styleUrls: ['./profile-editor-address.component.css']
})
export class ProfileEditorAddressComponent implements OnInit {

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
