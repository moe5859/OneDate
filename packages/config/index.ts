export const APP_NAME = 'OneDate';

export const ROUTES = {
  auth: '/(auth)/welcome',
  signIn: '/(auth)/sign-in',
  signUp: '/(auth)/sign-up',
  forgotPassword: '/(auth)/forgot-password',
  home: '/(tabs)',
  profile: '/(tabs)/profile',
  settings: '/settings',
} as const;

export const STORAGE_KEYS = {
  colorScheme: 'onedate.color-scheme',
} as const;
