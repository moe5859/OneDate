import type { ReactNode } from 'react';
import { Controller, useForm, type DefaultValues, type Path } from 'react-hook-form';
import { StyleSheet, Text, View, type TextInputProps } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodType } from 'zod';

import { spacing, typography } from '@onedate/theme';
import { Button, Input } from '@onedate/ui';

type AuthField<TValues> = {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: TextInputProps['autoComplete'];
  keyboardType?: TextInputProps['keyboardType'];
  label: string;
  name: Path<TValues>;
  placeholder: string;
  secureTextEntry?: boolean;
};

type AuthFormProps<TValues extends Record<string, string>> = {
  defaultValues: DefaultValues<TValues>;
  errorMessage: string | null;
  fields: Array<AuthField<TValues>>;
  footer?: ReactNode;
  onSubmit: (values: TValues) => Promise<void>;
  resolver: ZodType<TValues>;
  submitLabel: string;
  submitting: boolean;
};

export function AuthForm<TValues extends Record<string, string>>({
  defaultValues,
  errorMessage,
  fields,
  footer,
  onSubmit,
  resolver,
  submitLabel,
  submitting,
}: AuthFormProps<TValues>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TValues>({
    defaultValues,
    resolver: zodResolver(resolver),
  });

  return (
    <View style={styles.form}>
      {fields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: controllerField }) => (
            <Input
              autoCapitalize={field.autoCapitalize}
              autoComplete={field.autoComplete}
              keyboardType={field.keyboardType}
              label={field.label}
              onBlur={controllerField.onBlur}
              onChangeText={controllerField.onChange}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
              value={controllerField.value}
              hint={errors[field.name]?.message ? String(errors[field.name]?.message) : undefined}
            />
          )}
        />
      ))}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button disabled={submitting} onPress={handleSubmit((values) => void onSubmit(values))}>
        {submitting ? 'Please wait...' : submitLabel}
      </Button>
      {footer}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: '#C64A4A',
    fontSize: typography.caption,
  },
  form: {
    gap: spacing.md,
  },
});
