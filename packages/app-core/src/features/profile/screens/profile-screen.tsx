import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ROUTES } from '@onedate/config';
import { spacing, typography, useAppTheme } from '@onedate/theme';
import { Avatar, Button, Card, Screen } from '@onedate/ui';

import { useAuth } from '../../../providers/auth-provider';

export function ProfileScreen() {
  const { session } = useAuth();
  const { theme } = useAppTheme();
  const email = session?.user.email ?? 'No email available';
  const initials = email.slice(0, 2).toUpperCase();

  return (
    <Screen>
      <Card>
        <View style={styles.header}>
          <Avatar initials={initials} />
          <View style={styles.meta}>
            <Text style={[styles.title, { color: theme.foreground }]}>Your account</Text>
            <Text style={[styles.subtitle, { color: theme.foregroundMuted }]}>
              Phase 1 profile foundation backed by Supabase Auth.
            </Text>
          </View>
        </View>
        <Text style={[styles.label, { color: theme.foregroundMuted }]}>Email</Text>
        <Text style={[styles.value, { color: theme.foreground }]}>{email}</Text>
        <Link asChild href={ROUTES.settings}>
          <Button style={styles.button} variant="secondary">
            Open settings
          </Button>
        </Link>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  label: {
    color: '#5F5D57',
    fontSize: typography.label,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
  },
  meta: {
    flex: 1,
    gap: spacing.xs,
  },
  subtitle: {
    color: '#5F5D57',
    fontSize: typography.body,
  },
  title: {
    color: '#1E1E1B',
    fontSize: typography.title,
    fontWeight: '700',
  },
  value: {
    color: '#1E1E1B',
    fontSize: typography.bodyLarge,
  },
});
