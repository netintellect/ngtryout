export class Credentials {
  public isAuthenticated?: boolean;

  constructor(
    public userName: string,
    public password: string,
  ) { }

  public reset(): void {
    this.userName = "";
    this.password = "";
    this.isAuthenticated = null;
  }
}
