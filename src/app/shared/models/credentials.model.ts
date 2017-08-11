export class Credentials {
  constructor(
    public userName: string,
    public password: string
  ) { }

  public reset(): void {
    this.userName = "";
    this.password = "";
  }
}
