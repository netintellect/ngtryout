import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/users.model";

@Component({
  moduleId: module.id,
  selector: 'users-component',
  templateUrl: 'users.component.html',
  styleUrls: [ 'users.component.scss' ]
})
export class UsersComponent implements OnInit {

  //#region state
  public formModel: User;
  public isReadOnly: boolean = true;
  //#endregion

  //#region behavior
  constructor() {
    this.formModel = new User(
      0,
      "",
      "",
      new Date(),
      "",
      "",
      true,
      ""
    )
  }

  ngOnInit() {
  }
  //#endregion
}
