import { StyleSheet, Text, View } from 'react-native';

import { spacing, typography, useAppTheme } from '@onedate/theme';

import { Button } from './button';

type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.foreground }]}>Something interrupted the experience.</Text>
      <Text style={[styles.message, { color: theme.foregroundMuted }]}>{message}</Text>
      {onRetry ? (
        <Button onPress={onRetry} style={styles.button}>
          Try Again
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
  message: {
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
