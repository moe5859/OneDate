import { StyleSheet, Text, View } from 'react-native';

import { radius, typography, useAppTheme } from '@onedate/theme';

export function Avatar({ initials }: { initials: string }) {
  const { theme } = useAppTheme();

  return (
    <View style={[styles.avatar, { backgroundColor: theme.accentSoft }]}>
      <Text style={[styles.text, { color: theme.foreground }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  text: {
    fontSize: typography.body,
    fontWeight: '700',
  },
});
