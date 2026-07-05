import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { ROUTES } from '@onedate/config';
import { spacing, typography } from '@onedate/theme';

import { AuthForm } from '../components/auth-form';
import { AuthShell } from '../components/auth-shell';
import { useAuthActions } from '../hooks/use-auth-actions';
import { signInSchema, type SignInValues } from '../validation/auth-schema';

export function SignInScreen() {
  const { error, isPending, signIn } = useAuthActions();

  return (
    <AuthShell
      eyebrow="Welcome back"
      subtitle="Sign in to continue building a thoughtful, calm relationship experience across mobile and web."
      title="Pick up where you left off."
    >
      <AuthForm<SignInValues>
        defaultValues={{ email: '', password: '' }}
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
          {
            autoCapitalize: 'none',
            label: 'Password',
            name: 'password',
            placeholder: 'Minimum 8 characters',
            secureTextEntry: true,
          },
        ]}
        onSubmit={async (values) => {
          await signIn(values.email, values.password);
        }}
        resolver={signInSchema}
        submitLabel="Sign in"
        submitting={isPending}
        footer={
          <>
            <Link href={ROUTES.forgotPassword} style={styles.link}>
              Forgot your password?
            </Link>
            <Text style={styles.secondaryCopy}>
              New here?{' '}
              <Link href={ROUTES.signUp} style={styles.link}>
                Create your account
              </Link>
            </Text>
          </>
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
    marginTop: spacing.sm,
  },
});
