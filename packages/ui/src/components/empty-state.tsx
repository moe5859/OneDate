import { StyleSheet, Text, View, type ViewProps } from 'react-native';

import { spacing, typography, useAppTheme } from '@onedate/theme';

import { Button } from './button';

type EmptyStateProps = ViewProps & {
  actionLabel?: string;
  description: string;
  onActionPress?: () => void;
  title: string;
};

export function EmptyState({
  actionLabel,
  description,
  onActionPress,
  title,
  ...props
}: EmptyStateProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.container} {...props}>
      <Text style={[styles.title, { color: theme.foreground }]}>{title}</Text>
      <Text style={[styles.description, { color: theme.foregroundMuted }]}>{description}</Text>
      {actionLabel && onActionPress ? (
        <Button onPress={onActionPress} style={styles.button}>
          {actionLabel}
        </Button>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
  },
  container: {
    alignItems: 'center',
    gap: spacing.md,
    justifyContent: 'center',
    minHeight: 220,
    padding: spacing.xl,
  },
  description: {
    fontSize: typography.body,
    lineHeight: 22,
    maxWidth: 320,
    textAlign: 'center',
  },
  title: {
    fontSize: typography.h3,
    fontWeight: '700',
    textAlign: 'center',
  },
});
