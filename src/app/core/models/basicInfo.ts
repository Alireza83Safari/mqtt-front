export class Permission {
  constructor(
    public children: string[],
    public code: string,
    public groupTitle: string,
    public icon: string,
    public name: string,
    public navPath: string,
    public onClick: string,
    public showInNav: boolean
  ) {}
}

export class Role {
  constructor(public key: string, public value: string) {}
}

export class PermissionsAndRoles {
  constructor(public permissions: Permission[], public roles: Role[]) {}
}
