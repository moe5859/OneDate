import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import type { OneDateSupabaseClient } from '@onedate/supabase';
import { useAppTheme } from '@onedate/theme';
import { ErrorState, Screen } from '@onedate/ui';

import { AppProviders } from '../providers/app-providers';

function LayoutContent() {
  const { resolvedScheme } = useAppTheme();

  return (
    <>
      <StatusBar style={resolvedScheme === 'dark' ? 'light' : 'dark'} />
      <Slot />
    </>
  );
}

export function RootLayoutShell({
  createClient,
}: {
  createClient: () => OneDateSupabaseClient;
}) {
  try {
    const client = createClient();

    return (
      <AppProviders client={client}>
        <LayoutContent />
      </AppProviders>
    );
  } catch (error) {
    return (
      <Screen scroll={false}>
        <ErrorState message={(error as Error).message} />
      </Screen>
    );
  }
}
