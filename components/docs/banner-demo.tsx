const rows = [
  { brand: 'Northwind', total: '42%', young: '51% A', older: '33% B' },
  { brand: 'Harbor', total: '28%', young: '22% B', older: '36% A' },
  { brand: 'Field & Co', total: '18%', young: '16%', older: '21%' },
];

export const BannerDemo = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-fd-border bg-fd-background text-left text-[13px] text-fd-foreground">
      <div className="flex items-center justify-between border-b border-fd-border px-3 py-2 text-[11px] text-fd-muted-foreground">
        <span className="font-medium tracking-wide uppercase">Brand × age</span>
        <span className="font-mono">weighted · 95%</span>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-[11px] text-fd-muted-foreground">
            <th className="px-3 py-2 font-medium">Brand</th>
            <th className="px-3 py-2 font-medium">Total</th>
            <th className="px-3 py-2 font-medium">18–34</th>
            <th className="px-3 py-2 font-medium">35–54</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.brand} className="border-t border-fd-border">
              <td className="px-3 py-2">{row.brand}</td>
              <td className="px-3 py-2 font-mono tabular-nums">{row.total}</td>
              <td className="px-3 py-2 font-mono tabular-nums">{row.young}</td>
              <td className="px-3 py-2 font-mono tabular-nums">{row.older}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const bannerDemoCode = `const rows = [
  { brand: 'Northwind', total: '42%', young: '51% A', older: '33% B' },
  { brand: 'Harbor', total: '28%', young: '22% B', older: '36% A' },
];

export function BannerDemo() {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Total</th>
          <th>18–34</th>
          <th>35–54</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.brand}>
            <td>{row.brand}</td>
            <td>{row.total}</td>
            <td>{row.young}</td>
            <td>{row.older}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`;
