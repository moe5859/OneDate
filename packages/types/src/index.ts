export type AppColorScheme = 'light' | 'dark' | 'system';

export type AuthMode = 'sign-in' | 'sign-up';

export type UserProfile = {
  id: string;
  displayName: string | null;
  avatarUrl: string | null;
  city: string | null;
  country: string | null;
  preferredLanguage: string | null;
  onboardingCompleted: boolean;
};

export type AppSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number | null;
  userId: string;
};

export type Result<TData, TError extends string = string> =
  | { ok: true; data: TData }
  | { ok: false; error: TError; message: string };
