import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { ROUTES } from '@onedate/config';
import { typography } from '@onedate/theme';

import { AuthForm } from '../components/auth-form';
import { AuthShell } from '../components/auth-shell';
import { useAuthActions } from '../hooks/use-auth-actions';
import { signUpSchema, type SignUpValues } from '../validation/auth-schema';

export function SignUpScreen() {
  const { error, isPending, signUp } = useAuthActions();

  return (
    <AuthShell
      eyebrow="Create your account"
      subtitle="Start with a secure account foundation built for shared experiences, memories, and long-term trust."
      title="Join OneDate."
    >
      <AuthForm<SignUpValues>
        defaultValues={{ confirmPassword: '', email: '', password: '' }}
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
            placeholder: 'At least 8 characters',
            secureTextEntry: true,
          },
          {
            autoCapitalize: 'none',
            label: 'Confirm Password',
            name: 'confirmPassword',
            placeholder: 'Repeat your password',
            secureTextEntry: true,
          },
        ]}
        onSubmit={async (values) => {
          await signUp(values.email, values.password);
        }}
        resolver={signUpSchema}
        submitLabel="Create account"
        submitting={isPending}
        footer={
          <Text style={styles.secondaryCopy}>
            Already have an account?{' '}
            <Link href={ROUTES.signIn} style={styles.link}>
              Sign in
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
