import type { Metadata } from 'next';
import { CodeForm, PaperStytch } from '@/components/paper/stytch-provider';

export const metadata: Metadata = { title: 'Enter code' };

export default function CodePage() {
  return (
    <PaperStytch>
      <CodeForm />
    </PaperStytch>
  );
}
