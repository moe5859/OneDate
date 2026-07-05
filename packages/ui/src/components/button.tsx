import { forwardRef, type PropsWithChildren } from 'react';
import {
  Pressable,
  Text,
  type PressableProps,
  type PressableStateCallbackType,
  type StyleProp,
  StyleSheet,
  type View,
  type ViewStyle,
} from 'react-native';

import { radius, spacing, typography, useAppTheme, type ThemeTokens } from '@onedate/theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<
  Omit<PressableProps, 'style'> & {
    style?: StyleProp<ViewStyle>;
    variant?: ButtonVariant;
  }
>;

export const Button = forwardRef<View, ButtonProps>(function Button(
  { children, disabled, style, variant = 'primary', ...props },
  ref,
) {
  const { theme } = useAppTheme();
  const variantStyles = createVariantStyles(theme);
  const labelStyles = createLabelStyles(theme);

  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }: PressableStateCallbackType) => [
        styles.base,
        variantStyles[variant],
        pressed && !disabled ? styles.pressed : undefined,
        disabled ? styles.disabled : undefined,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.label, labelStyles[variant]]}>{children}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: typography.bodyLarge,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
});

function createVariantStyles(theme: ThemeTokens) {
  return StyleSheet.create({
    ghost: {
      backgroundColor: 'transparent',
    },
    primary: {
      backgroundColor: theme.accent,
    },
    secondary: {
      backgroundColor: theme.foreground,
    },
  });
}

function createLabelStyles(theme: ThemeTokens) {
  return StyleSheet.create({
    ghost: {
      color: theme.foreground,
    },
    primary: {
      color: theme.backgroundElevated,
    },
    secondary: {
      color: theme.backgroundElevated,
    },
  });
}
