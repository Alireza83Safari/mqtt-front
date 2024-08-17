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

export class User {
  constructor(
    public address: any,
    public id: any,
    public email: any,
    public username: any,
    public password: any,
    public name: any,
    public phone: any
  ) {}
}
