import {Credentials} from "./credentials.model";

export class User {
  public company?: string;
  public newsLetter?: boolean;
  public gender?: string;
  public credentials: Credentials = new Credentials("", "");

  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public dateOfBirth: Date,
              public address: string,
              public zipCode: string,
              public email: string,
        ) {
  }

  public static create(): User {
    return new User(
      0,
      "",
      "",
      new Date(),
      "",
      "",
      ""
    );
  }

  reset() {
    this.id = 0,
      this.firstName = "";
    this.lastName = "";
    this.dateOfBirth = new Date();
    this.address = "";
    this.zipCode = "";
    this.email = "";
    this.company = "";
    this.newsLetter = null;
    this.gender = null;
  }
}

