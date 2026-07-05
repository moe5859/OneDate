import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, type ScrollViewProps } from 'react-native';

import { spacing, useAppTheme } from '@onedate/theme';

type ScreenProps = PropsWithChildren<
  ScrollViewProps & {
    padded?: boolean;
    scroll?: boolean;
  }
>;

export function Screen({ children, padded = true, scroll = true, ...props }: ScreenProps) {
  const { theme } = useAppTheme();
  const content = scroll ? (
    <ScrollView
      contentContainerStyle={[styles.content, padded ? styles.padded : undefined]}
      {...props}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, padded ? styles.padded : undefined]}>{children}</View>
  );

  return <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>{content}</SafeAreaView>;
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  padded: {
    padding: spacing.lg,
  },
  safeArea: {
    flex: 1,
  },
});
