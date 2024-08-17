export class BaseRoles {
  constructor(
    public code: string,
    public enabled: boolean,
    public isSystem: boolean,
    public name: string,
    public permissions: string[],
    public roleType: number
  ) {}
}

export class Roles extends BaseRoles {
  constructor(
    code: string,
    enabled: boolean,
    isSystem: boolean,
    name: string,
    permissions: string[],
    roleType: number,
    public id: string,
    public createdAt: string,
    public updatedAt: string
  ) {
    super(code, enabled, isSystem, name, permissions, roleType);
  }
}
