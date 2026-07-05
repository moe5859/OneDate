import { StyleSheet, Text, View } from 'react-native';

import type { AppColorScheme } from '@onedate/types';
import { spacing, typography, useAppTheme } from '@onedate/theme';
import { Button, Card, Screen } from '@onedate/ui';

const OPTIONS: AppColorScheme[] = ['system', 'light', 'dark'];

function formatOptionLabel(option: AppColorScheme) {
  return option.length > 0 ? option.charAt(0).toUpperCase() + option.slice(1) : option;
}

export function SettingsScreen() {
  const { colorScheme, setColorScheme, theme } = useAppTheme();

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.foreground }]}>Settings</Text>
        <Text style={[styles.subtitle, { color: theme.foregroundMuted }]}>
          Theme selection is stored locally and shared across the foundation experience.
        </Text>
      </View>

      <Card>
        <Text style={[styles.sectionTitle, { color: theme.foreground }]}>Appearance</Text>
        <View style={styles.options}>
          {OPTIONS.map((option) => (
            <Button
              key={option}
              onPress={() => void setColorScheme(option)}
              variant={option === colorScheme ? 'primary' : 'secondary'}
            >
              {formatOptionLabel(option)}
            </Button>
          ))}
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  options: {
    gap: spacing.md,
  },
  sectionTitle: {
    color: '#1E1E1B',
    fontSize: typography.title,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  subtitle: {
    color: '#5F5D57',
    fontSize: typography.bodyLarge,
    lineHeight: 24,
  },
  title: {
    color: '#1E1E1B',
    fontSize: typography.h1,
    fontWeight: '700',
  },
});
