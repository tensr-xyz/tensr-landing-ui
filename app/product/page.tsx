import type { Metadata } from 'next';
import { PaperPage, Soon } from '@/components/paper/chrome';

export const metadata: Metadata = { title: 'Product' };

export default function ProductPage() {
  return (
    <PaperPage
      title="The work, from file to table."
      lede="Projects, chat, sources, the response sheet, tables, and a report. Each number in a table can open the respondents behind it when the file still has that provenance."
    >
      <ul className="flex flex-col gap-3 text-[16px] leading-6">
        <li>Chat asks the agent to run an analysis on the open dataset.</li>
        <li>The sheet shows column labels, blanks as empty cells, and pages through the file.</li>
        <li>Tables save a stub, a banner, a weight, and significance letters.</li>
        <li>Reports export a deck, a banner book, or a topline.</li>
        <li>
          Interview clips <Soon>coming soon</Soon>
        </li>
      </ul>
    </PaperPage>
  );
}
