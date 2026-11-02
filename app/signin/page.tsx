import type { Metadata } from 'next';
import { PaperStytch, SignInForm } from '@/components/paper/stytch-provider';

export const metadata: Metadata = { title: 'Sign in' };

export default function SignInPage() {
  return (
    <PaperStytch>
      <SignInForm />
    </PaperStytch>
  );
}
