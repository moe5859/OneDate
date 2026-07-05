import { create } from 'zustand';

import type { AppColorScheme } from '@onedate/types';

type ThemeState = {
  colorScheme: AppColorScheme;
  resolvedScheme: Exclude<AppColorScheme, 'system'>;
  setColorScheme: (scheme: AppColorScheme) => void;
  setResolvedScheme: (scheme: Exclude<AppColorScheme, 'system'>) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  colorScheme: 'system',
  resolvedScheme: 'light',
  setColorScheme: (colorScheme) => set({ colorScheme }),
  setResolvedScheme: (resolvedScheme) => set({ resolvedScheme }),
}));
