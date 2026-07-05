import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { spacing, typography, useAppTheme } from '@onedate/theme';

export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.accent} size="small" />
      <Text style={[styles.message, { color: theme.foregroundMuted }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.md,
    justifyContent: 'center',
    minHeight: 180,
    padding: spacing.xl,
  },
  message: {
    fontSize: typography.body,
    textAlign: 'center',
  },
});
