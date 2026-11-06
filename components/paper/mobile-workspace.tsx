const columns = [
  'Total',
  'W3 A',
  'W4 B',
  'Male C',
  'Female D',
  '18–34 E',
  '35–54 F',
  '55+ G',
] as const;

const rows: { name: string; strong?: boolean; cells: string[] }[] = [
  { name: 'London', cells: ['45%', '44%', '46%', '47%', '43%', '51% FG', '44%', '39%'] },
  {
    name: 'North East',
    strong: true,
    cells: ['33%', '38% b', '29%', '35%', '32%', '37%', '34%', '29%'],
  },
  { name: 'North West', cells: ['35%', '36%', '35%', '36%', '35%', '38%', '35%', '33%'] },
  {
    name: 'Scotland',
    strong: true,
    cells: ['37%', '31%', '42% a', '39%', '35%', '45% G', '36%', '31%'],
  },
  { name: 'South East', cells: ['42%', '41%', '43%', '40%', '41%', '44%', '42%', '40%'] },
  { name: 'Wales', cells: ['33%', '33%', '34%', '34%', '33%', '35%', '34%', '32%'] },
  {
    name: 'Total aware',
    strong: true,
    cells: ['40%', '39%', '40%', '40%', '39%', '44%', '40%', '37%'],
  },
];

const bases = ['4,812', '2,406', '2,406', '2,331', '2,481', '1,402', '1,688', '1,722'];

function Cell({ value }: { value: string }) {
  const match = value.match(/^([\d,.%]+)(?:\s+(.+))?$/);
  return (
    <td className="px-2 py-2 text-right whitespace-nowrap">
      <span>{match?.[1] ?? value}</span>
      {match?.[2] ? (
        <span className="ml-1 text-[12px] font-semibold text-[#1E6B58]">{match[2]}</span>
      ) : null}
    </td>
  );
}

export function MobileWorkspace() {
  return (
    <div className="flex flex-col gap-3 text-[#1B1C1A]">
      <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_18px_40px_#14473A33]">
        <div className="flex items-center justify-between px-3.5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-[2px] bg-[#1E6B58]" />
            <p className="text-[14px] leading-5 font-medium">Brand tracker W4</p>
          </div>
          <p className="text-[13px] leading-4 text-[#6A6B66]">Live · 2</p>
        </div>
        <div className="flex gap-1.5 overflow-hidden px-3.5 pb-2">
          <span className="rounded-full bg-[#1B1C1A] px-2.5 py-1 text-[12px] leading-4 text-white">
            T1 Unaided awareness
          </span>
          <span className="rounded-full border border-[#E7E6E1] px-2.5 py-1 text-[12px] leading-4 text-[#6A6B66]">
            T2 Prompted awareness
          </span>
        </div>
        <div className="px-3.5 pt-2 pb-3">
          <p className="text-[16px] leading-5 font-medium">T1 · Unaided awareness by region</p>
          <p className="mt-1 text-[13px] leading-4 text-[#6A6B66]">
            Sample table · Base: the rows in the file
          </p>
          <div className="mt-3 flex gap-2">
            {['Chart', 'Add to book', 'Export'].map(label => (
              <span
                key={label}
                className="inline-flex h-11 items-center border border-[#E7E6E1] px-3 text-[13px] leading-4"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2 border-t border-[#E7E6E1] px-3.5 py-3 text-[13px] leading-5">
          <p>
            <span className="text-[#6A6B66]">Stub </span>region ×{' '}
            <span className="text-[#9A9A93]">+ Drop variable</span>
          </p>
          <p>
            <span className="text-[#6A6B66]">Banner </span>Wave × Gender × Age band ×
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['Column %', 'Sig 95% · A/a letters', 'Weight wt_natrep'].map((chip, index) => (
              <span
                key={chip}
                className={`inline-flex h-8 items-center px-2.5 text-[12px] leading-4 ${index === 1 ? 'bg-[#E8F1ED] text-[#1E6B58]' : 'bg-[#F6F6F3] text-[#1B1C1A]'}`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto border-t border-[#E7E6E1]">
          <table className="w-[640px] border-collapse text-[13px] leading-4">
            <thead>
              <tr className="text-[#6A6B66]">
                <th className="px-3 py-2 text-left font-medium">Region</th>
                {columns.map(column => (
                  <th key={column} className="px-2 py-2 text-right font-medium whitespace-nowrap">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr
                  key={row.name}
                  className={`border-t border-[#E7E6E1] ${row.strong ? 'bg-[#E8F1ED] font-medium' : ''}`}
                >
                  <td className="px-3 py-2 text-left whitespace-nowrap">{row.name}</td>
                  {row.cells.map((cell, index) => (
                    <Cell key={`${row.name}-${index}`} value={cell} />
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[#E7E6E1] text-[#6A6B66]">
                <td className="px-3 py-2 text-left whitespace-nowrap">Base (unwtd)</td>
                {bases.map((base, index) => (
                  <td key={`${base}-${index}`} className="px-2 py-2 text-right whitespace-nowrap">
                    {base}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-[#E7E6E1] bg-[#F6F6F3] px-3.5 py-2.5 text-[12px] leading-4 text-[#6A6B66]">
          <span>4,812 respondents</span>
          <span>Effective base 4,106</span>
          <span>Weighted</span>
          <span className="text-[#1E6B58]">Every cell traceable</span>
        </div>
        <div className="flex items-center justify-between border-t border-[#E7E6E1] px-3.5 py-3 text-[13px] leading-4">
          <span>W4 client book</span>
          <span className="text-[#1E6B58]">Run as banner book on W5 →</span>
        </div>
      </div>

      <div className="rounded-[12px] bg-white px-3.5 py-3.5 shadow-[0_18px_40px_#14473A33]">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-[3px] bg-[#1E6B58]" />
          <p className="text-[14px] leading-5 font-medium">Agent · Awareness by region</p>
        </div>
        <p className="mt-3 ml-8 max-w-[240px] rounded-[12px] bg-[#F6F6F3] px-3 py-2 text-[13px] leading-5">
          Unaided awareness by region, W4 vs W3, flag what moved
        </p>
        <div className="mt-3 space-y-1 text-[13px] leading-5 text-[#6A6B66]">
          <p>✓ Built T1 · region × wave, gender, age</p>
          <p>✓ Weighted by wt_natrep, sig at 95%</p>
        </div>
        <p className="mt-3 text-[13px] leading-5">Two regions moved significantly between waves:</p>
        <div className="mt-2 space-y-1.5">
          {[
            ['Scotland 31% → 42%', 'row 4'],
            ['North East 38% → 29%', 'row 2'],
          ].map(([label, row]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-2 rounded-[7px] bg-[#E8F1ED] px-2 py-1.5 text-[13px] leading-5"
            >
              <span>{label}</span>
              <span className="text-[12px] font-medium text-[#1E6B58]">{row}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] leading-5">
          Scotland&apos;s W4 base is 212 so treat it as directional. Younger people in London are
          driving the London number, worth a split if that&apos;s a client question.
        </p>
        <div className="mt-3 rounded-[12px] border border-[#E7E6E1] px-3 py-2.5 text-[13px] leading-4 text-[#9A9A93]">
          Ask, or tell it to change the table…
        </div>
      </div>
    </div>
  );
}
