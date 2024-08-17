export class ApiRoutes {
  /* AUTH */
  static LOGIN = 'auth/login';
  static REGISTER = 'auth/register';
  static LOGOUT = 'auth/logout';

  /* BATTERY */
  static BATTERY = 'battery';
  static BATTERY_EDIT = 'battery/{id}/edit';
  static BATTERY_SENSORS = 'battery/{id}/sensors';
  static BATTERY_SENSORS_CHART = 'battery/{id}/sensors/chart';

  /* DEVICES */
  static DEVICES = 'devices';
  static DEVICES_EDIT = 'devices/{id}/edit';
  static DEVICES_METRICS = 'devices/{id}/metrics';
  static DEVICES_METRICS_CHART = 'devices/{id}/metrics/chart';
  static DEVICES_USER_CONNECT = 'devices/{id}/user/connect';

  /* PROFILE */
  static PROFILE = 'profile';
  static PROFILE_CHANGE_PASSWORD = 'profile/change-password';
  static PROFILE_LOGIN_HISTORY = 'profile/login-history';

  /* ROLES */
  static ROLES = 'roles';
  static ROLES_DELETE = 'roles/delete/{id}';
  static ROLES_EDIT = 'roles/edit/{id}';

  /* USERS */
  static USERS = 'users';
  static USERS_DELETE = 'users/delete/{id}';
  static USERS_EDIT = 'users/edit/{id}';

  static BASIC_INFO = 'basic_info';
  static USER_MENUS = 'user_menus';
}
