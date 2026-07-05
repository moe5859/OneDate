import { StyleSheet, Text, View } from 'react-native';

import { radius, spacing, typography, useAppTheme } from '@onedate/theme';

export function LogoMark() {
  const { theme } = useAppTheme();

  return (
    <View style={styles.row}>
      <View style={[styles.mark, { backgroundColor: theme.accent }]}>
        <Text style={styles.markText}>O</Text>
      </View>
      <Text style={[styles.wordmark, { color: theme.foreground }]}>OneDate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mark: {
    alignItems: 'center',
    backgroundColor: '#F46F5B',
    borderRadius: radius.md,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  markText: {
    color: '#FFFFFF',
    fontSize: typography.title,
    fontWeight: '700',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  wordmark: {
    fontSize: typography.h2,
    fontWeight: '700',
  },
});
