import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { radius, spacing, useAppTheme } from '@onedate/theme';

export function Card({ children, style, ...props }: PropsWithChildren<ViewProps>) {
  const { theme } = useAppTheme();

  return (
    <View
      style={[styles.card, { backgroundColor: theme.backgroundElevated, borderColor: theme.border }, style]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.md,
    borderWidth: 1,
    padding: spacing.lg,
  },
});
