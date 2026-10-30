import type { Metadata } from 'next';
import { PaperPage, Soon } from '@/components/paper/chrome';

export const metadata: Metadata = { title: 'Integrations' };

export default function IntegrationsPage() {
  return (
    <PaperPage
      title="Bring a file. Live connectors are next."
      lede="SPSS, CSV, and Excel upload today. A Qualtrics definition can be read as a fallback to a .sav. Nothing here pulls a live survey on a schedule."
    >
      <ul className="flex flex-col gap-3 text-[16px] leading-6">
        <li>.sav, .csv, and .xlsx upload.</li>
        <li>
          Qualtrics live sync <Soon>coming soon</Soon>
        </li>
        <li>
          Decipher <Soon>coming soon</Soon>
        </li>
        <li>
          Alchemer <Soon>coming soon</Soon>
        </li>
        <li>
          Prolific fielding <Soon>coming soon</Soon>
        </li>
      </ul>
    </PaperPage>
  );
}
