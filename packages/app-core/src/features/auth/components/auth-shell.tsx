import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { spacing, typography, useAppTheme } from '@onedate/theme';
import { Card, LogoMark, Screen } from '@onedate/ui';

type AuthShellProps = PropsWithChildren<{
  eyebrow: string;
  subtitle: string;
  title: string;
}>;

export function AuthShell({ children, eyebrow, subtitle, title }: AuthShellProps) {
  const { theme } = useAppTheme();

  return (
    <Screen>
      <View style={styles.container}>
        <LogoMark />
        <View style={styles.header}>
          <Text style={[styles.eyebrow, { color: theme.accent }]}>{eyebrow}</Text>
          <Text style={[styles.title, { color: theme.foreground }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: theme.foregroundMuted }]}>{subtitle}</Text>
        </View>
        <Card>{children}</Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xl,
    justifyContent: 'center',
    minHeight: '100%',
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
  },
  subtitle: {
    color: '#5F5D57',
    fontSize: typography.bodyLarge,
    lineHeight: 24,
    maxWidth: 520,
  },
  title: {
    color: '#1E1E1B',
    fontSize: typography.h1,
    fontWeight: '700',
    lineHeight: 36,
  },
});
