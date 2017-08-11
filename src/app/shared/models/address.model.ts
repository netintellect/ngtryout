export class Address {
  public houseNumber?: number;

  constructor(
    public street: string,
    public zipCode: string,
    public city: string,
    public country: string = "be") {}
}
