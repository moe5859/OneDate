import { Redirect, Tabs } from 'expo-router';

import { ROUTES } from '@onedate/config';
import { useAppTheme } from '@onedate/theme';
import { LoadingState, Screen } from '@onedate/ui';

import { useAuth } from '../providers/auth-provider';

export function ProtectedTabsLayout() {
  const { status } = useAuth();
  const { theme } = useAppTheme();

  if (status === 'loading') {
    return (
      <Screen scroll={false}>
        <LoadingState message="Preparing your space..." />
      </Screen>
    );
  }

  if (status !== 'authenticated') {
    return <Redirect href={ROUTES.auth} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.foregroundMuted,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
