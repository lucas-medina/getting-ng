import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorAddressComponent } from './profile-editor-address.component';

describe('ProfileEditorAddressComponent', () => {
  let component: ProfileEditorAddressComponent;
  let fixture: ComponentFixture<ProfileEditorAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
