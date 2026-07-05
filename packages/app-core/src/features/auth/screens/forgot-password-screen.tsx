import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { ROUTES } from '@onedate/config';
import { typography } from '@onedate/theme';

import { AuthForm } from '../components/auth-form';
import { AuthShell } from '../components/auth-shell';
import { useAuthActions } from '../hooks/use-auth-actions';
import { forgotPasswordSchema, type ForgotPasswordValues } from '../validation/auth-schema';

export function ForgotPasswordScreen() {
  const { error, isPending, resetPassword } = useAuthActions();

  return (
    <AuthShell
      eyebrow="Reset password"
      subtitle="We’ll ask Supabase to send a password reset email without exposing account details."
      title="Regain access securely."
    >
      <AuthForm<ForgotPasswordValues>
        defaultValues={{ email: '' }}
        errorMessage={error}
        fields={[
          {
            autoCapitalize: 'none',
            autoComplete: 'email',
            keyboardType: 'email-address',
            label: 'Email',
            name: 'email',
            placeholder: 'you@example.com',
          },
        ]}
        onSubmit={async (values) => {
          await resetPassword(values.email);
        }}
        resolver={forgotPasswordSchema}
        submitLabel="Send reset email"
        submitting={isPending}
        footer={
          <Text style={styles.secondaryCopy}>
            Remembered it?{' '}
            <Link href={ROUTES.signIn} style={styles.link}>
              Back to sign in
            </Link>
          </Text>
        }
      />
    </AuthShell>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#F46F5B',
    fontSize: typography.body,
    fontWeight: '600',
  },
  secondaryCopy: {
    color: '#5F5D57',
    fontSize: typography.body,
  },
});
