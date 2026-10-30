import type { Metadata } from 'next';
import { PaperPage } from '@/components/paper/chrome';

export const metadata: Metadata = { title: 'Security' };

export default function SecurityPage() {
  return (
    <PaperPage
      title="Sign-in is a code, not a password."
      lede="Email codes and Google, Microsoft, and GitHub sign-in go through Stytch. Datasets stay in your workspace. We do not publish a SOC report on this page."
    >
      <ul className="flex flex-col gap-3 text-[16px] leading-6">
        <li>Session tokens are how the app calls the API.</li>
        <li>A project member sees the files in that project.</li>
        <li>Exports are downloaded from a signed link, one button per file.</li>
      </ul>
    </PaperPage>
  );
}
