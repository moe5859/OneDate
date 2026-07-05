import { StyleSheet, Text, View } from 'react-native';

import { spacing, typography, useAppTheme } from '@onedate/theme';
import { Button, Card, EmptyState, Screen } from '@onedate/ui';

import { useAuth } from '../../../providers/auth-provider';
import { useAuthActions } from '../../auth/hooks/use-auth-actions';

export function HomeScreen() {
  const { session } = useAuth();
  const { colorScheme, resolvedScheme, theme } = useAppTheme();
  const { isPending, signOut } = useAuthActions();

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={[styles.eyebrow, { color: theme.accent }]}>Foundation Ready</Text>
        <Text style={[styles.title, { color: theme.foreground }]}>Phase 1 is in place.</Text>
        <Text style={[styles.subtitle, { color: theme.foregroundMuted }]}>
          Authentication, theme, navigation, Supabase wiring, and shared UI are ready for the planner
          engine to build on next.
        </Text>
      </View>

      <Card>
        <Text style={[styles.sectionTitle, { color: theme.foreground }]}>Current session</Text>
        <Text style={[styles.body, { color: theme.foregroundMuted }]}>
          Signed in as {session?.user.email ?? 'unknown user'}.
        </Text>
        <Text style={[styles.body, { color: theme.foregroundMuted }]}>
          Theme preference: {colorScheme} · Resolved theme: {resolvedScheme}
        </Text>
      </Card>

      <EmptyState
        actionLabel="Sign out"
        description="Planner generation, maps, places, weather, and AI orchestration are intentionally deferred to Phase 2."
        onActionPress={() => void signOut()}
        title="No planner features yet"
      />

      <Button disabled={isPending} onPress={() => void signOut()} variant="ghost">
        {isPending ? 'Signing out...' : 'Sign out'}
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    color: '#5F5D57',
    fontSize: typography.body,
    lineHeight: 22,
  },
  eyebrow: {
    color: '#F46F5B',
    fontSize: typography.label,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  header: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    color: '#1E1E1B',
    fontSize: typography.title,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: '#5F5D57',
    fontSize: typography.bodyLarge,
    lineHeight: 24,
  },
  title: {
    color: '#1E1E1B',
    fontSize: typography.h1,
    fontWeight: '700',
  },
});
