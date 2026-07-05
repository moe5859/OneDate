import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ROUTES } from '@onedate/config';
import { spacing, typography } from '@onedate/theme';
import { Button, Card, Screen } from '@onedate/ui';

import { AuthShell } from '../components/auth-shell';

export function WelcomeScreen() {
  return (
    <AuthShell
      eyebrow="AI Relationship Companion"
      subtitle="Create memorable experiences in minutes with a calm, guided foundation built for relationships, not transactions."
      title="Plan meaningful time together without the planning spiral."
    >
      <View style={styles.content}>
        <Text style={styles.copy}>
          Phase 1 focuses on a polished foundation: authentication, navigation, theme, and shared UI
          that future planning features can safely build on.
        </Text>
        <Link asChild href={ROUTES.signUp}>
          <Button>Create an account</Button>
        </Link>
        <Link asChild href={ROUTES.signIn}>
          <Button variant="secondary">Sign in</Button>
        </Link>
        <Card style={styles.note}>
          <Text style={styles.noteTitle}>Privacy first</Text>
          <Text style={styles.noteBody}>
            Budget history is not stored permanently, and sensitive account data stays inside Supabase
            auth and protected tables.
          </Text>
        </Card>
      </View>
    </AuthShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
  },
  copy: {
    color: '#5F5D57',
    fontSize: typography.body,
    lineHeight: 24,
  },
  note: {
    backgroundColor: '#FDF7F2',
  },
  noteBody: {
    color: '#5F5D57',
    fontSize: typography.body,
    lineHeight: 22,
  },
  noteTitle: {
    color: '#1E1E1B',
    fontSize: typography.title,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
});
