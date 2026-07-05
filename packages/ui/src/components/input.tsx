import { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

import { radius, spacing, typography, useAppTheme } from '@onedate/theme';

type InputProps = TextInputProps & {
  label: string;
  hint?: string | undefined;
};

export const Input = forwardRef<TextInput, InputProps>(function Input(
  { hint, label, style, ...props },
  ref,
) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: theme.foreground }]}>{label}</Text>
      <TextInput
        ref={ref}
        placeholderTextColor={theme.foregroundMuted}
        style={[
          styles.input,
          {
            backgroundColor: theme.backgroundElevated,
            borderColor: theme.border,
            color: theme.foreground,
          },
          style,
        ]}
        {...props}
      />
      {hint ? <Text style={[styles.hint, { color: theme.foregroundMuted }]}>{hint}</Text> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  hint: {
    fontSize: typography.caption,
    marginTop: spacing.sm,
  },
  input: {
    borderRadius: radius.md,
    borderWidth: 1,
    fontSize: typography.body,
    minHeight: 52,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  label: {
    fontSize: typography.label,
    fontWeight: '600',
    letterSpacing: 0.2,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  wrapper: {
    gap: spacing.xs,
  },
});
