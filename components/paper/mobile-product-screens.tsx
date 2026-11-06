import type { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-white text-[13px] leading-4 text-[#1B1C1A]">
      {children}
    </div>
  );
}

function Head({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-3.5 py-3">
      <p className="text-[14px] leading-5 font-medium">{title}</p>
      <p className="text-[12px] leading-4 text-[#6A6B66]">{meta}</p>
    </div>
  );
}

function WideTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto border-t border-[#E7E6E1]">
      <table className="w-[560px] border-collapse text-[13px] leading-4">{children}</table>
    </div>
  );
}

const responseRows = [
  ['R204310', 'North East', 'Male', '24', 'Very likely', '1.08'],
  ['R204317', 'London', 'Female', '19', 'Fairly likely', '1.15'],
  ['R204324', 'North West', 'Female', '32', 'Neither', '0.88'],
  ['R204331', 'North East', 'Male', '34', 'Not very likely', '1.54'],
  ['R204338', 'London', 'Male', '69', 'Not at all', '0.79'],
  ['R204366', 'Scotland', 'Female', '19', 'Fairly likely', '1.15'],
] as const;

export function ResponsesPhone() {
  return (
    <Card>
      <Head title="Brand tracker W4" meta="Responses" />
      <div className="flex flex-wrap gap-1.5 px-3.5 pb-3">
        <span className="inline-flex h-8 items-center bg-[#F6F6F3] px-2.5 text-[12px] leading-4">
          region is not Northern Ireland
        </span>
        <span className="inline-flex h-8 items-center bg-[#E8F1ED] px-2.5 text-[12px] leading-4 text-[#1E6B58]">
          Q20 switch is 4 or 5
        </span>
      </div>
      <WideTable>
        <thead>
          <tr className="text-left text-[#6A6B66]">
            {['resp_id', 'region', 'gender', 'age', 'Q20 switch', 'weight'].map(label => (
              <th key={label} className="px-2.5 py-2 font-medium whitespace-nowrap">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {responseRows.map(row => (
            <tr key={row[0]} className="border-t border-[#E7E6E1]">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-2.5 py-2 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </WideTable>
      <div className="border-t border-[#E7E6E1] px-3.5 py-3">
        <p className="text-[14px] leading-5 font-medium">Q20 switch</p>
        <p className="mt-0.5 text-[12px] leading-4 text-[#6A6B66]">Single choice · 5 codes</p>
        <div className="mt-3 space-y-2">
          {[
            ['5 Very likely', '14%', 'w-[14%]'],
            ['4 Fairly likely', '21%', 'w-[21%]'],
            ['3 Neither', '25%', 'w-1/4'],
            ['2 Not very likely', '24%', 'w-[24%]'],
            ['1 Not at all likely', '13%', 'w-[13%]'],
          ].map(([label, value, width]) => (
            <div key={label} className="grid grid-cols-[1fr_36px] items-center gap-2">
              <div>
                <p>{label}</p>
                <div className="mt-1 h-1.5 bg-[#E7E6E1]">
                  <div className={`h-full bg-[#1E6B58] ${width}`} />
                </div>
              </div>
              <p className="text-right">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[12px] leading-4 text-[#6A6B66]">
          74 missing answers, all from the mobile route. Looks like a routing fault, not refusals.
        </p>
      </div>
      <p className="border-t border-[#E7E6E1] bg-[#F6F6F3] px-3.5 py-2.5 text-[12px] leading-4 text-[#6A6B66]">
        2,406 of 2,481 · Every cell traceable
      </p>
    </Card>
  );
}

const themes = [
  ['Price', '700', '31%', '27%', '29%', '31%'],
  ['Bill clarity / trust', '542', '24%', '33%', '16%', '24%'],
  ['Customer service', '384', '17%', '14%', '18%', '17%'],
  ['Greener tariff', '248', '11%', '17%', '10%', '11%'],
  ['Smart meter problems', '203', '9%', '6%', '11%', '9%'],
  ['Moving house', '158', '7%', '6%', '8%', '7%'],
] as const;

export function ThemesPhone() {
  return (
    <Card>
      <Head title="Open end · Q22" meta="2,259 coded" />
      <div className="px-3.5 pb-3">
        <p className="text-[16px] leading-5 font-medium">
          Why are you thinking of switching supplier?
        </p>
        <p className="mt-1 text-[12px] leading-4 text-[#6A6B66]">
          9 themes · coded by agent, 3 edits by you · weighted wt_natrep
        </p>
      </div>
      <WideTable>
        <thead>
          <tr className="text-left text-[#6A6B66]">
            {['Theme', 'Quotes', 'Total', '18–34', 'W3', 'W4'].map(label => (
              <th key={label} className="px-2.5 py-2 font-medium whitespace-nowrap">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {themes.map(row => (
            <tr
              key={row[0]}
              className={`border-t border-[#E7E6E1] ${row[0] === 'Bill clarity / trust' ? 'bg-[#E8F1ED] font-medium' : ''}`}
            >
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-2.5 py-2 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </WideTable>
      <div className="space-y-2 border-t border-[#E7E6E1] px-3.5 py-3">
        <p>
          Trust in bill explanations is the theme that&apos;s growing: up 8 points since W3, and
          it&apos;s under-35s driving it.
        </p>
        <p className="rounded-[8px] bg-[#F6F6F3] px-3 py-2">
          “Bills went up again and nobody explained why.”
          <span className="mt-1 block text-[12px] leading-4 text-[#6A6B66]">
            R204317 · London · survey
          </span>
        </p>
      </div>
    </Card>
  );
}

export function TablesPhone() {
  return (
    <Card>
      <Head title="W4 client book" meta="14 tables" />
      <div className="flex gap-1.5 px-3.5 pb-3">
        <span className="rounded-full bg-[#1B1C1A] px-2.5 py-1 text-[12px] leading-4 text-white">
          T1 Unaided awareness
        </span>
        <span className="rounded-full border border-[#E7E6E1] px-2.5 py-1 text-[12px] leading-4 text-[#6A6B66]">
          T2 Prompted
        </span>
      </div>
      <div className="space-y-1 border-t border-[#E7E6E1] px-3.5 py-3 text-[13px] leading-5">
        <p>
          <span className="text-[#6A6B66]">Stub </span>region
        </p>
        <p>
          <span className="text-[#6A6B66]">Banner </span>Wave × Gender × Age band
        </p>
      </div>
      <WideTable>
        <thead>
          <tr className="text-[#6A6B66]">
            <th className="px-2.5 py-2 text-left font-medium">Region</th>
            {['Total', 'W3 A', 'W4 B', 'Male C', 'Female D'].map(label => (
              <th key={label} className="px-2 py-2 text-right font-medium whitespace-nowrap">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['London', '45%', '44%', '46%', '47%', '43%'],
            ['North East', '33%', '38% b', '29%', '35%', '32%'],
            ['Scotland', '37%', '31%', '42% a', '39%', '35%'],
            ['Total aware', '40%', '39%', '40%', '40%', '39%'],
          ].map(row => (
            <tr
              key={row[0]}
              className={`border-t border-[#E7E6E1] ${row[0] === 'Scotland' || row[0] === 'North East' ? 'bg-[#E8F1ED] font-medium' : ''}`}
            >
              <td className="px-2.5 py-2 whitespace-nowrap">{row[0]}</td>
              {row.slice(1).map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-2 py-2 text-right whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </WideTable>
      <p className="border-t border-[#E7E6E1] bg-[#F6F6F3] px-3.5 py-2.5 text-[12px] leading-4 text-[#6A6B66]">
        Base 4,812 · weighted wt_natrep · sig at 95%
      </p>
    </Card>
  );
}

export function EvidencePhone() {
  return (
    <Card>
      <Head title="T1 · Unaided awareness" meta="Scotland · W4" />
      <div className="px-3.5 pb-3">
        <p className="text-[40px] leading-none tracking-[-0.04em]">42%</p>
        <p className="mt-2 text-[13px] leading-5 text-[#1E6B58]">
          Higher than W3 (31%) at 95% · letter A · p = 0.02
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#E7E6E1] px-3.5 py-3">
        {[
          ['Base, unweighted', '212'],
          ['Effective base', '198'],
          ['Said Octavia in Q3', '89 people'],
          ['Weight', 'wt_natrep'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[12px] leading-4 text-[#6A6B66]">{label}</p>
            <p className="text-[14px] leading-5 font-medium">{value}</p>
          </div>
        ))}
      </div>
      <WideTable>
        <thead>
          <tr className="text-left text-[#6A6B66]">
            {['resp_id', 'region', 'gender', 'age', 'Q3 unaided', 'weight'].map(label => (
              <th key={label} className="px-2.5 py-2 font-medium whitespace-nowrap">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['R204366', 'Scotland', 'Female', '19', 'Octavia', '1.15'],
            ['R204408', 'Scotland', 'Male', '69', 'Octavia', '0.79'],
            ['R205112', 'Scotland', 'Female', '27', 'Octavia', '1.08'],
          ].map(row => (
            <tr key={row[0]} className="border-t border-[#E7E6E1] bg-[#E8F1ED]">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-2.5 py-2 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </WideTable>
      <div className="space-y-2 border-t border-[#E7E6E1] px-3.5 py-3">
        <p className="rounded-[8px] bg-[#F6F6F3] px-3 py-2">
          “Octavia, they sponsor the rugby now.”
          <span className="mt-1 block text-[12px] leading-4 text-[#6A6B66]">
            R204366 · Scotland · row 9
          </span>
        </p>
        <p className="rounded-[8px] bg-[#F6F6F3] px-3 py-2">
          “Octavia rang me about a better tariff.”
          <span className="mt-1 block text-[12px] leading-4 text-[#6A6B66]">
            R204408 · Scotland · row 15
          </span>
        </p>
      </div>
    </Card>
  );
}
