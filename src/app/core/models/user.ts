export class User {
  constructor(
    public createdAt: string,
    public email: string,
    public enabled: boolean,
    public username: string,
    public firstName: string,
    public lastName: string,
    public id: string,
    public mobile: string,
    public roleId: string,
    public roleName: string,
    public updatedAt: string
  ) {}
}

export class UserMenu {
  constructor(
    public name: string,
    public icon: string,
    public code?: string,
    public navPath?: string,
    public children?: { name: string; icon: string; navPath: string }[]
  ) {}
}
