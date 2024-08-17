export class BaseProfile {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public mobile: string,
    public username: string
  ) {}
}

export class Profile extends BaseProfile {
  constructor(
    email: string,
    firstName: string,
    lastName: string,
    mobile: string,
    username: string,
    public devices: {
      connectedAt: string;
      createdAt: string;
      deviceId: string;
      id: string;
    }[],
    public permissions: string[],
    public roleId: string,
    public roleName: string
  ) {
    super(email, firstName, lastName, mobile, username);
  }
}

export class ChangePassword {
  constructor(
    public confirmPassword: string,
    public currentPassword: string,
    public password: string
  ) {}
}

export class LoginHistory {
  constructor(
    public createdAt: string,
    public expiresAt: string,
    public id: string,
    public ip: string,
    public revoked: boolean,
    public userAgent: string
  ) {}
}
