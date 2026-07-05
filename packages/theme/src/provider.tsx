import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

import type { AppColorScheme } from '@onedate/types';
import { STORAGE_KEYS } from '@onedate/config';

import { darkTheme, lightTheme, type ThemeTokens } from './index';
import { useThemeStore } from './store';

type ThemeContextValue = {
  colorScheme: AppColorScheme;
  resolvedScheme: 'light' | 'dark';
  setColorScheme: (scheme: AppColorScheme) => Promise<void>;
  theme: ThemeTokens;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useSystemColorScheme();
  const { colorScheme, resolvedScheme, setColorScheme: setThemePreference, setResolvedScheme } =
    useThemeStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    async function hydrate() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEYS.colorScheme);

        if (!active) {
          return;
        }

        if (stored === 'light' || stored === 'dark' || stored === 'system') {
          setThemePreference(stored);
        }
      } finally {
        if (active) {
          setReady(true);
        }
      }
    }

    void hydrate();

    return () => {
      active = false;
    };
  }, [setThemePreference]);

  useEffect(() => {
    const nextResolved = colorScheme === 'system' ? systemScheme ?? 'light' : colorScheme;
    setResolvedScheme(nextResolved);
  }, [colorScheme, setResolvedScheme, systemScheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colorScheme,
      resolvedScheme,
      setColorScheme: async (scheme) => {
        setThemePreference(scheme);
        await AsyncStorage.setItem(STORAGE_KEYS.colorScheme, scheme);
      },
      theme: resolvedScheme === 'dark' ? darkTheme : lightTheme,
    }),
    [colorScheme, resolvedScheme, setThemePreference],
  );

  if (!ready) {
    return null;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider.');
  }

  return context;
}
