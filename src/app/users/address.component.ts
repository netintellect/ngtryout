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
  public possibleCountries: Array<{ code: string, description: string}> = [
    { code: "be", description: "België" },
    { code: "de", description: "Duitsland" },
    { code: "nl", description: "Nederland" },
    { code: "us", description: "Verenigde Staten"}
  ];
  //#endregion
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.createFormBindings();
  }

  public save(): void {
    this.model.street = this.addressForm.controls.street.value;
    this.model.houseNumber = this.addressForm.controls.houseNumber.value;
    this.model.zipCode = this.addressForm.controls.zipCode.value;
    this.model.city = this.addressForm.controls.city.value;
    this.model.country = this.addressForm.controls.country.value.code;
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
