import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Address} from "../shared/models/address.model";

@Component({
  moduleId: module.id,
  selector: 'app-address-component',
  templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit {
  //#region state
  public addressForm: FormGroup;
  @Input() public model: Address;
  //#endregion
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.createFormBindings();
  }

  public save(): void {

  }

  public reset(): void {

  }

  private createFormBindings(): void {
    this.addressForm = this.formBuilder.group({
      "street": [ "", [ Validators.required]],
      "houseNumber": [ "" ],
      "zipCode": [ "", [ Validators.required]],
      "city": [ "", [ Validators.required]],
      "country": [ "", [ Validators.required]]
    })
  }
}
