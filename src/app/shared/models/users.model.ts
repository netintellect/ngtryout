export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public address: string,
    public zipCode: string,
    public email: string,
    public company: string,
    public newsLetter?: boolean,
    public gender?: string,
  ) {}
}
