export class Login {
  constructor(public password: string, public username: string) {}
}

export class Register extends Login {
  constructor(
    password: string,
    username: string,
    public confirmPassword: string,
    public firstName: string,
    public lastName: string
  ) {
    super(username, password);
  }
}
