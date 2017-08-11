import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../shared/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credentials} from "../shared/models/credentials.model";
import {phoneNumberValidator} from "../shared/validators/phone.validator";

@Component({
  moduleId: module.id,
  selector: 'app-credentials-component',
  templateUrl: 'credentials.component.html',
  styleUrls: [
    "credentials.component.scss"
  ]
})

export class CredentialsComponent
  implements OnInit, OnChanges {
  //#region state
  @Input() public model: Credentials;
  public credentialsForm: FormGroup;
  //#endregion
  //#region behavior
  constructor(@Inject(FormBuilder)private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes detected ${changes.toString()}`);
  }

  ngOnInit() {

  }

  public buildForm(): void {
    this.credentialsForm = this.formBuilder.group({
      "authentication": this.formBuilder.group({
        "userName": ["", [Validators.required, Validators.minLength(2)]],
        "password": ["", [Validators.required, Validators.minLength(12)]],
        "phone": ["", [phoneNumberValidator()]],
        "isAuthenticated": [false, [Validators.required]]
      })
    })
  }

  public save(): void {
    this.model.userName = this.credentialsForm.get("authentication.userName").value;
    this.model.password = this.credentialsForm.get("authentication.password").value;
    this.model.isAuthenticated = this.credentialsForm.get("authentication.isAuthenticated").value;
  }

  public reset(): void {

  }
  //#endregion
}
