export class PageRoutes {
  static LOGIN = 'login';
  static REGISTER = 'register';
  static PROFILE = 'profile';
  static USER = 'user';
  static ROLE = 'role';
  static DEVICE = 'device';
  static BATTERY = 'battery';
  static BATTERY_SENSOR = 'battery/:id/sensor';
  static DEVICE_METRIC = 'device/:id/metric';
}

export class PrivateRoutes {
  static PROFILE = 'profile';
  static USER = 'user';
  static ROLE = 'role';
  static DEVICE = 'device';
  static BATTERY = 'battery';
}
