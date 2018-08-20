import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this._formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this._formBuilder.array([
      this._formBuilder.control('')
    ])
  });

  constructor(private _formBuilder: FormBuilder) {

  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this._formBuilder.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Dolan',
      address: {
        street: '123 Street St.'
      }
    });
  }

  ngOnInit() {
  }

}
