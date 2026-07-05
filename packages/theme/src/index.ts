export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
} as const;

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const typography = {
  display: 36,
  h1: 30,
  h2: 24,
  h3: 20,
  title: 18,
  bodyLarge: 17,
  body: 15,
  caption: 13,
  label: 12,
} as const;

export const motion = {
  fast: 200,
  base: 250,
  slow: 350,
} as const;

export type ThemeTokens = {
  accent: string;
  accentSoft: string;
  background: string;
  backgroundElevated: string;
  border: string;
  error: string;
  foreground: string;
  foregroundMuted: string;
  primary: string;
  secondaryAccent: string;
  success: string;
  warning: string;
};

export const lightTheme: ThemeTokens = {
  background: '#F7F4EF',
  backgroundElevated: '#FFFFFF',
  foreground: '#1E1E1B',
  foregroundMuted: '#5F5D57',
  border: '#E7E0D6',
  primary: '#1E1E1B',
  accent: '#F46F5B',
  accentSoft: '#FCE1D8',
  secondaryAccent: '#C7A758',
  success: '#1F9D68',
  warning: '#D9871C',
  error: '#C64A4A',
};

export const darkTheme: ThemeTokens = {
  background: '#131311',
  backgroundElevated: '#1D1D1A',
  foreground: '#F7F4EF',
  foregroundMuted: '#B9B2A8',
  border: '#31302A',
  primary: '#F7F4EF',
  accent: '#FF8B74',
  accentSoft: '#3B2622',
  secondaryAccent: '#E0C16F',
  success: '#37C88A',
  warning: '#EAAA43',
  error: '#EC7C7C',
};

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
  },
} as const;

export * from './store';
export * from './provider';
