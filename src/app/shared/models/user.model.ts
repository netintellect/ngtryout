import {Credentials} from "./credentials.model";
import {Address} from "./address.model";

export class User {
  public phone?: string;
  public company?: string;
  public newsLetter?: boolean;
  public gender?: string;
  public credentials: Credentials = new Credentials("", "");
  public address: Address = new Address("", "", "");

  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public dateOfBirth: Date,
              public email: string,
        ) {
  }

  public static create(): User {
    return new User(
      0,
      "",
      "",
      new Date(),
      ""
    );
  }

  reset() {
    this.id = 0,
    this.firstName = "";
    this.lastName = "";
    this.dateOfBirth = new Date();
    this.address = new Address("", "", "", "");
    this.email = "";
    this.company = "";
    this.newsLetter = null;
    this.gender = null;
    this.credentials = new Credentials("", "");
  }
}

