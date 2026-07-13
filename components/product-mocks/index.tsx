import '@/styles/tensr-mock.css';

const SHEET_ROWS = [
  ['1', 'Precious Achiuwa', 'C', '20.7', '7.6'],
  ['2', 'Bam Adebayo', 'C', '34.0', '19.3'],
  ['3', 'Ochai Agbaji', 'SG', '21.0', '5.8'],
  ['4', 'Santi Aldama', 'PF', '26.4', '10.7'],
  ['5', 'Nickeil Alexander‑W.', 'SG', '28.9', '12.4'],
  ['6', 'Grayson Allen', 'SG', '33.5', '13.5'],
  ['7', 'Jarrett Allen', 'C', '32.6', '16.5'],
  ['8', 'Jose Alvarado', 'PG', '21.7', '7.1'],
  ['9', 'Kyle Anderson', 'PF', '22.9', '6.4'],
];

function WinChrome({ url = 'app.tensr.xyz/w/nba-2024' }: { url?: string }) {
  return (
    <div className="win-bar">
      <div className="win-dots">
        <i />
        <i />
        <i />
      </div>
      <div className="win-omni">
        <svg className="lk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
        {url}
      </div>
      <div className="win-right av-stack">
        <span className="av s av-1">OL</span>
        <span className="av s av-2">MR</span>
        <span className="av s av-3">JP</span>
      </div>
    </div>
  );
}

export function HeroProductMock() {
  return (
    <div className="tensr-mock hero-visual">
      <div className="float-badge" style={{ left: -18, bottom: 48 }}>
        <span className="ic">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
        <span>
          <span className="k">Pearson r</span>
          <br />
          <span className="v mono">0.847 · p&lt;.001</span>
        </span>
      </div>
      <div
        className="win"
        role="img"
        aria-label="Tensr workspace preview with spreadsheet and AI agent"
      >
        <WinChrome />
        <div className="hero-mock">
          <div className="hero-sheet">
            <div className="sheet">
              <table>
                <thead>
                  <tr>
                    <th className="idx">#</th>
                    <th>
                      Player <span className="ty txt">abc</span>
                    </th>
                    <th>
                      Pos <span className="ty txt">abc</span>
                    </th>
                    <th>
                      MP <span className="ty">#</span>
                    </th>
                    <th>
                      PTS <span className="ty">#</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SHEET_ROWS.map(([idx, player, pos, mp, pts], i) => (
                    <tr key={idx}>
                      <td className="idx">{idx}</td>
                      <td className={i === 0 ? 'sel' : undefined}>{player}</td>
                      <td>
                        <span className="posbadge">{pos}</span>
                      </td>
                      <td className="num">{mp}</td>
                      <td className="num">{pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="agent ws-agent">
            <div className="agent-head">
              <span className="ico">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                </svg>
              </span>
              <div>
                <div className="t">Tensr Agent</div>
                <div className="s">
                  <span className="dot" /> Connected · 23 ops
                </div>
              </div>
            </div>
            <div className="agent-body">
              <div className="agent-kicker">
                <span className="d" /> Reading dataset
              </div>
              <div className="agent-msg">
                I see <span className="hl">505 NBA players</span> across{' '}
                <span className="hl">15 columns</span>. 14 numeric, 1 categorical. Ask me anything,
                or pick a starter:
              </div>
              <div className="agent-sub">Suggested</div>
              <div className="agent-sugg">
                What&apos;s the correlation between minutes played and points scored?
              </div>
              <div className="agent-sugg">Run a one‑way ANOVA of PTS across positions</div>
            </div>
            <div className="agent-input">
              <div className="ph">Ask about your data…</div>
              <div className="tools">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span className="send">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 14-7-7 14-2-5-5-2Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WORKSPACE_ROWS = [
  ['1', 'Precious Achiuwa', 'C', '24', '20.7', '.503', '6.6', '1.0', '7.6'],
  ['2', 'Bam Adebayo', 'C', '26', '34.0', '.521', '10.4', '3.9', '19.3'],
  ['3', 'Ochai Agbaji', 'SG', '23', '21.0', '.444', '2.8', '1.2', '5.8'],
  ['4', 'Santi Aldama', 'PF', '23', '26.4', '.470', '5.8', '2.3', '10.7'],
  ['5', 'Nickeil Alexander‑W.', 'SG', '25', '28.9', '.461', '3.4', '2.9', '12.4'],
  ['6', 'Grayson Allen', 'SG', '28', '33.5', '.498', '3.9', '3.1', '13.5'],
  ['7', 'Jarrett Allen', 'C', '25', '32.6', '.633', '10.5', '2.7', '16.5'],
  ['8', 'Jose Alvarado', 'PG', '25', '21.7', '.435', '2.3', '3.6', '7.1'],
  ['9', 'Kyle Anderson', 'PF', '30', '22.9', '.461', '4.3', '4.2', '6.4'],
  ['10', 'Giannis Antetokounmpo', 'PF', '29', '35.2', '.611', '11.5', '6.5', '30.4'],
  ['11', 'OG Anunoby', 'SF', '26', '34.1', '.492', '4.2', '2.1', '14.7'],
  ['12', 'Deni Avdija', 'SF', '23', '30.1', '.489', '7.2', '3.8', '14.7'],
  ['13', 'Deandre Ayton', 'C', '25', '32.4', '.570', '11.1', '1.6', '16.7'],
  ['14', 'Marvin Bagley III', 'PF', '24', '21.1', '.586', '6.3', '1.0', '11.7'],
  ['15', 'LaMelo Ball', 'PG', '22', '32.3', '.433', '5.1', '8.0', '23.9'],
  ['16', 'Paolo Banchero', 'PF', '21', '35.0', '.455', '6.9', '5.4', '22.6'],
  ['17', 'Desmond Bane', 'SG', '25', '34.4', '.464', '4.4', '5.5', '24.0'],
  ['18', 'Scottie Barnes', 'SF', '22', '34.9', '.475', '8.2', '6.1', '19.9'],
  ['19', 'RJ Barrett', 'SG', '23', '31.7', '.495', '5.4', '3.3', '21.8'],
  ['20', 'Nicolas Batum', 'SF', '35', '25.5', '.453', '3.8', '2.1', '5.3'],
];

const FILTER_COLS = [
  'Player',
  'Pos',
  'Age',
  'Tm',
  'G',
  'GS',
  'MP',
  'FG',
  'FGA',
  'FG%',
  '3P',
  'TRB',
  'AST',
  'PTS',
];

function EyeIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SparkIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  );
}

function AppTitlebar({ doc = "NBA Per-Game Stats ('23-24).csv" }: { doc?: string }) {
  return (
    <div className="app-titlebar">
      <div className="doc-tabs">
        <div className="doc-tab on">
          <span className="doc-kind">She</span>
          <span className="doc-name">{doc}</span>
        </div>
      </div>
      <div className="titlebar-search">Search analyses &amp; plugins…</div>
      <div className="win-right av-stack">
        <span className="av s av-1">OL</span>
        <span className="av s av-2">MR</span>
        <span className="av s av-3">JP</span>
      </div>
    </div>
  );
}

export function WorkspaceProductMock() {
  return (
    <div className="tensr-mock">
      <div
        className="win showcase-frame"
        role="img"
        aria-label="Tensr full workspace with column filters, spreadsheet, and AI agent"
      >
        <WinChrome />
        <AppTitlebar />
        <div className="ws">
          <div className="ws-rail">
            <div className="rh">Column filters</div>
            <div className="rail-counts">
              <span>
                <i className="dot brand" /> 14 numeric
              </span>
              <span>
                <i className="dot muted" /> 1 text
              </span>
            </div>
            {FILTER_COLS.map(name => (
              <div key={name} className="colrow">
                <span className="eye" aria-hidden="true">
                  <EyeIcon />
                </span>
                <span className="colname">{name}</span>
                <span className="chev">▾</span>
              </div>
            ))}
            <div className="rail-foot">Visible 14/15 cols</div>
          </div>
          <div className="ws-main">
            <div className="ws-subtabs">
              <div className="ws-subtab on">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
                Sheet
              </div>
              <div className="ws-subtab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="m7 9 3 3-3 3M13 15h4" />
                </svg>
                Notebook
              </div>
            </div>
            <div className="sheet">
              <table>
                <thead>
                  <tr>
                    <th className="idx">#</th>
                    <th>Player</th>
                    <th>Pos</th>
                    <th>Age</th>
                    <th>MP</th>
                    <th>FG%</th>
                    <th>TRB</th>
                    <th>AST</th>
                    <th>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {WORKSPACE_ROWS.map((row, i) => (
                    <tr key={row[0]}>
                      <td className="idx">{row[0]}</td>
                      <td className={i === 0 ? 'sel' : undefined}>{row[1]}</td>
                      <td>
                        <span className="posbadge">{row[2]}</span>
                      </td>
                      <td className="num">{row[3]}</td>
                      <td className="num">{row[4]}</td>
                      <td className="num">{row[5]}</td>
                      <td className="num">{row[6]}</td>
                      <td className="num">{row[7]}</td>
                      <td className="num">{row[8]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ws-status">
              <span className="ok">● Saved</span>
              <span>Total rows: 505</span>
              <span>Player1</span>
              <span style={{ marginLeft: 'auto' }}>Terminal ⌘`</span>
            </div>
          </div>
          <div className="agent ws-agent">
            <div className="agent-head">
              <span className="ico">
                <SparkIcon size={15} />
              </span>
              <div>
                <div className="t">Tensr Agent</div>
                <div className="s">
                  <span className="dot" /> Connected
                </div>
              </div>
              <button type="button" className="agent-new" tabIndex={-1}>
                + New chat
              </button>
            </div>
            <div className="agent-body">
              <div className="agent-msg" style={{ fontSize: 13 }}>
                Correlation between <b>MP</b> and <b>PTS</b> across 505 players:
              </div>
              <div className="mini-table">
                <div className="r h">
                  <span className="c">Statistic</span>
                  <span className="c num">Value</span>
                  <span className="c num">95% CI</span>
                </div>
                <div className="r">
                  <span className="c">Pearson r</span>
                  <span className="c num" style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>
                    0.847
                  </span>
                  <span className="c num">.82–.87</span>
                </div>
                <div className="r">
                  <span className="c">p‑value</span>
                  <span className="c num">&lt;.001</span>
                  <span className="c num">—</span>
                </div>
                <div className="r">
                  <span className="c">n</span>
                  <span className="c num">505</span>
                  <span className="c num">—</span>
                </div>
              </div>
              <div className="interp" style={{ marginTop: 0 }}>
                <span className="ai">
                  <SparkIcon />
                </span>
                <span className="x">
                  <b>Strong positive correlation.</b> Players who log more minutes score
                  substantially more. Open as a full report?
                </span>
              </div>
            </div>
            <div className="agent-input">
              <div className="ph">Ask about your data…</div>
              <div className="tools">
                <span className="send">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 14-7-7 14-2-5-5-2Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgentProductMock() {
  return (
    <div className="tensr-mock">
      <div className="win showcase-frame" role="img" aria-label="Tensr Agent running ANOVA">
        <WinChrome url="Tensr Agent" />
        <div className="agent agent-solo">
          <div className="agent-head">
            <span className="ico">
              <SparkIcon size={15} />
            </span>
            <div>
              <div className="t">Tensr Agent</div>
              <div className="s">
                <span className="dot" /> Connected · claude-haiku
              </div>
            </div>
            <button type="button" className="agent-new" tabIndex={-1}>
              + New chat
            </button>
          </div>
          <div className="agent-body" style={{ overflow: 'hidden' }}>
            <div className="chat-user">Is scoring different across positions?</div>
            <div className="agent-thinking">Planning one-way ANOVA · PTS by Pos…</div>
            <div className="agent-msg" style={{ fontSize: 13 }}>
              Running a one‑way ANOVA of <b>PTS</b> by <b>position</b> (5 groups, n=505):
            </div>
            <div className="mini-table">
              <div className="r h">
                <span className="c">Source</span>
                <span className="c num">F</span>
                <span className="c num">p</span>
                <span className="c num">η²</span>
              </div>
              <div className="r">
                <span className="c">Position</span>
                <span className="c num">8.41</span>
                <span className="c num" style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>
                  &lt;.001
                </span>
                <span className="c num">.063</span>
              </div>
            </div>
            <div className="interp" style={{ marginTop: 0 }}>
              <span className="ai">
                <SparkIcon />
              </span>
              <span className="x">
                <b>Significant difference.</b> Position explains ~6% of variance in scoring. Centers
                and guards differ most — want the Tukey post‑hoc?
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <span className="agent-sugg" style={{ padding: '7px 11px', fontSize: 12 }}>
                Open as report
              </span>
              <span className="agent-sugg" style={{ padding: '7px 11px', fontSize: 12 }}>
                Run Tukey HSD
              </span>
              <span className="agent-sugg" style={{ padding: '7px 11px', fontSize: 12 }}>
                Add to notebook
              </span>
            </div>
          </div>
          <div className="agent-input">
            <div className="ph">Ask about your data…</div>
            <div className="tools">
              <span className="send">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 14-7-7 14-2-5-5-2Z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="agent-foot">↵ send · ⇧↵ newline</div>
        </div>
      </div>
    </div>
  );
}

export function ReportProductMock() {
  return (
    <div className="tensr-mock">
      <div className="win showcase-frame" role="img" aria-label="Tensr ANOVA analysis report">
        <WinChrome url="app.tensr.xyz/w/nba-2024/report" />
        <div className="report-layout">
          <div className="report report-v2">
            <div className="report-hero">
              <div className="report-kicker">Analysis report</div>
              <h3 className="report-title">Points scored by position</h3>
              <p className="report-sub">PTS · Pos · one-way ANOVA</p>
              <div className="report-chips">
                <span className="rchip backdrop-blur-md">
                  <b>DV</b> PTS
                </span>
                <span className="rchip backdrop-blur-md">
                  <b>Factor</b> Pos
                </span>
                <span className="rchip backdrop-blur-md">
                  <b>Groups</b> 5
                </span>
                <span className="rchip backdrop-blur-md">
                  <b>n</b> 505
                </span>
                <span className="rchip backdrop-blur-md">
                  <b>Engine</b> scipy
                </span>
              </div>
            </div>

            <div className="report-card backdrop-blur-xl backdrop-saturate-150">
              <div className="report-card-h">
                <span className="kind-badge">One way ANOVA</span>
                <span className="card-title">ANOVA table</span>
                <span className="card-action">Copy</span>
              </div>
              <table className="stat-table emphasized">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>SS</th>
                    <th>df</th>
                    <th>MS</th>
                    <th>F</th>
                    <th>p</th>
                    <th>η²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hot">
                    <td>Position</td>
                    <td>1842.6</td>
                    <td>4</td>
                    <td>460.7</td>
                    <td>8.41</td>
                    <td className="sig">
                      &lt;.001 <span className="sig-pill">sig</span>
                    </td>
                    <td>.063</td>
                  </tr>
                  <tr>
                    <td>Residual</td>
                    <td>27384.1</td>
                    <td>500</td>
                    <td>54.8</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
              <div className="interp-v2">
                <div className="interp-label">
                  <span className="ai">
                    <SparkIcon size={11} />
                  </span>
                  Interpretation · AI generated
                </div>
                <p>
                  <b>Scoring differs significantly by position,</b> F(4, 500) = 8.41, p &lt; .001.
                  The effect is small‑to‑moderate (η² = .063).
                </p>
              </div>
            </div>

            <div className="report-card backdrop-blur-xl backdrop-saturate-150">
              <div className="report-card-h">
                <span className="kind-badge">Assumptions</span>
                <span className="card-title">Assumption checks</span>
              </div>
              <div className="checks-v2">
                <div className="check-row">
                  <span className="name">Shapiro–Wilk</span>
                  <span className="desc">Normality of residuals</span>
                  <span className="badge pass">✓ Pass · p=.21</span>
                </div>
                <div className="check-row">
                  <span className="name">Levene</span>
                  <span className="desc">Homogeneity of variance</span>
                  <span className="badge warn">! Check · p=.04</span>
                </div>
                <div className="check-row">
                  <span className="name">Independence</span>
                  <span className="desc">Observations</span>
                  <span className="badge pass">✓ Pass</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="report-rail backdrop-blur-xl backdrop-saturate-150">
            <div className="rail-sec">
              <div className="rh">Outline</div>
              <div className="rail-link on">ANOVA table</div>
              <div className="rail-link">Assumption checks</div>
              <div className="rail-link">Post‑hoc</div>
              <div className="rail-link">APA citation</div>
            </div>
            <div className="rail-sec">
              <div className="rh">Export</div>
              <div className="rail-btn">Copy APA</div>
              <div className="rail-btn">Download PDF</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function ChartsProductMock() {
  const points = [
    [12, 14, 'hsl(250 90% 60%)'],
    [18, 22, 'hsl(212 80% 48%)'],
    [24, 19, 'hsl(150 50% 40%)'],
    [28, 30, 'hsl(20 80% 55%)'],
    [33, 26, 'hsl(330 60% 52%)'],
    [38, 38, 'hsl(250 90% 60%)'],
    [42, 33, 'hsl(212 80% 48%)'],
    [47, 46, 'hsl(150 50% 40%)'],
    [51, 41, 'hsl(20 80% 55%)'],
    [56, 52, 'hsl(250 90% 60%)'],
    [60, 48, 'hsl(330 60% 52%)'],
    [65, 60, 'hsl(212 80% 48%)'],
    [70, 55, 'hsl(150 50% 40%)'],
    [75, 68, 'hsl(250 90% 60%)'],
    [80, 64, 'hsl(20 80% 55%)'],
    [85, 78, 'hsl(250 90% 60%)'],
    [89, 72, 'hsl(212 80% 48%)'],
  ] as const;

  return (
    <div className="tensr-mock">
      <div className="win" role="img" aria-label="Tensr charts view with scatter plot">
        <WinChrome />
        <div className="ws-main" style={{ height: 440 }}>
          <div className="ws-subtabs">
            <div className="ws-subtab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 3v18" />
              </svg>
              Sheet
            </div>
            <div className="ws-subtab on">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 20h16" />
                <circle cx="8" cy="14" r="1.4" fill="currentColor" />
                <circle cx="13" cy="10" r="1.4" fill="currentColor" />
                <circle cx="17" cy="7" r="1.4" fill="currentColor" />
              </svg>
              Charts
            </div>
            <div className="ws-subtab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="m7 9 3 3-3 3M13 15h4" />
              </svg>
              Notebook
            </div>
          </div>
          <div className="chartwrap">
            <div className="chart-head">
              <div className="t">PTS vs Minutes played</div>
            </div>
            <div className="scatter">
              <div className="gl" style={{ bottom: '25%' }} />
              <div className="gl" style={{ bottom: '50%' }} />
              <div className="gl" style={{ bottom: '75%' }} />
              <div className="gv" style={{ left: '25%' }} />
              <div className="gv" style={{ left: '50%' }} />
              <div className="gv" style={{ left: '75%' }} />
              <div
                className="reg"
                style={{ left: '3%', bottom: '18%', width: '92%', transform: 'rotate(-27deg)' }}
              />
              {points.map(([l, b, bg], i) => (
                <span
                  key={i}
                  className="pt"
                  style={{ left: `${l}%`, bottom: `${b}%`, background: bg }}
                />
              ))}
            </div>
            <div className="chart-legend">
              <span className="lg">
                <span className="sw" style={{ background: 'hsl(250 90% 60%)' }} /> PG
              </span>
              <span className="lg">
                <span className="sw" style={{ background: 'hsl(212 80% 48%)' }} /> SG
              </span>
              <span className="lg">
                <span className="sw" style={{ background: 'hsl(150 50% 40%)' }} /> SF
              </span>
              <span className="lg">
                <span className="sw" style={{ background: 'hsl(20 80% 55%)' }} /> PF
              </span>
              <span className="lg">
                <span className="sw" style={{ background: 'hsl(330 60% 52%)' }} /> C
              </span>
              <span
                className="lg"
                style={{ marginLeft: 'auto', color: 'var(--brand-deep)', fontWeight: 600 }}
              >
                r = 0.847 · regression overlay
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CollabProductMock() {
  return (
    <div className="tensr-mock">
      <div
        className="win showcase-frame"
        role="img"
        aria-label="Tensr collaboration with live comments"
      >
        <WinChrome />
        <AppTitlebar doc="Discussion — scoring by position" />
        <div className="collab-layout">
          <div className="collab-main">
            <div className="collab-toolbar">
              <span className="kind-badge">Shared notebook</span>
              <span className="muted">Last edited 2 min ago</span>
              <div className="av-stack" style={{ marginLeft: 'auto' }}>
                <span className="av s av-1">OL</span>
                <span className="av s av-2">MR</span>
                <span className="av s av-3">JP</span>
                <span className="av s" style={{ background: 'var(--w-fg-3)' }}>
                  +2
                </span>
              </div>
            </div>
            <div className="collab-doc">
              <div className="block-h" style={{ borderBottom: '1px solid var(--w-line)' }}>
                <span className="ix">2</span>
                <span className="bt">Correlation matrix</span>
                <span className="kind">heatmap</span>
              </div>
              <div className="collab-rows" style={{ position: 'relative' }}>
                <div
                  className="cursor-flag"
                  style={{ left: '32%', top: 6, background: 'hsl(212 80% 48%)' }}
                >
                  Maria
                </div>
                <div
                  className="cursor-flag"
                  style={{ left: '64%', top: 42, background: 'hsl(150 50% 40%)' }}
                >
                  Jordan
                </div>
                <div className="collab-line" style={{ width: '88%' }} />
                <div className="collab-line" style={{ width: '74%' }} />
                <div
                  className="collab-line"
                  style={{ width: '81%', background: 'var(--brand-soft)' }}
                />
                <div className="collab-line" style={{ width: '60%' }} />
                <div className="collab-line" style={{ width: '70%' }} />
              </div>
            </div>
            <div className="collab-doc" style={{ marginTop: 14 }}>
              <div className="block-h" style={{ borderBottom: '1px solid var(--w-line)' }}>
                <span className="ix">3</span>
                <span className="bt">APA write‑up</span>
                <span className="kind">export</span>
              </div>
              <div className="apa-preview">
                Scoring differs significantly by position, F(4, 500) = 8.41, p &lt; .001, η² = .063.
              </div>
            </div>
          </div>
          <aside className="collab-rail">
            <div className="rh">Comments</div>
            <div className="comment-bub">
              <span className="av s av-2">MR</span>
              <span className="x">
                <span className="nm">Maria Rivas</span> Should we report ω² here instead? It&apos;s
                the more conservative estimate for this n.{' '}
                <span style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>@Jordan</span>
              </span>
            </div>
            <div className="comment-bub">
              <span className="av s av-3">JP</span>
              <span className="x">
                <span className="nm">Jordan Park</span> Agreed — added both to the report block. ✓
              </span>
            </div>
            <div className="comment-compose">
              <div className="ph">Add a comment…</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const PLUGINS = [
  {
    name: 'Bayesian Toolkit',
    author: 'by stan‑labs',
    lang: 'Python',
    stars: '4.9',
    downloads: '12.4k',
    color: 'hsl(250 90% 60%)',
    cta: 'Get',
    brand: true,
  },
  {
    name: 'Time Series Pro',
    author: 'by forecastr',
    lang: 'R',
    stars: '4.7',
    downloads: '8.1k',
    color: 'hsl(212 80% 48%)',
    cta: '$9/mo',
    brand: false,
  },
  {
    name: 'Geo Analysis',
    author: 'by cartoml',
    lang: 'Python',
    stars: '4.6',
    downloads: '5.3k',
    color: 'hsl(150 50% 40%)',
    cta: 'Get',
    brand: false,
  },
  {
    name: 'Survey Insights',
    author: 'by likert.io',
    lang: 'TS',
    stars: '4.8',
    downloads: '6.7k',
    color: 'hsl(20 80% 55%)',
    cta: 'Get',
    brand: false,
  },
  {
    name: 'Power Calculator',
    author: 'by gpower',
    lang: 'JS',
    stars: '4.5',
    downloads: '4.0k',
    color: 'hsl(330 60% 52%)',
    cta: 'Get',
    brand: false,
  },
];

export function PluginsProductMock() {
  return (
    <div className="tensr-mock">
      <div className="win" role="img" aria-label="Tensr plugin marketplace">
        <WinChrome url="app.tensr.xyz/plugins" />
        <div style={{ height: 440, background: 'var(--w-bg)', overflow: 'hidden' }}>
          <div className="plug-grid">
            {PLUGINS.map(p => (
              <div key={p.name} className="plug-card">
                <div className="ic" style={{ background: p.color }} />
                <div>
                  <div className="nm">{p.name}</div>
                  <div className="au">{p.author}</div>
                </div>
                <div className="meta">
                  <span className="lang">{p.lang}</span>
                  <span className="stars">★ {p.stars}</span>
                  <span>·</span>
                  <span>{p.downloads}</span>
                </div>
                <div className={`get${p.brand ? ' brand' : ''}`}>{p.cta}</div>
              </div>
            ))}
            <div
              className="plug-card"
              style={{ borderStyle: 'dashed', alignItems: 'flex-start', justifyContent: 'center' }}
            >
              <div
                className="ic"
                style={{ background: 'var(--w-surface-3)', color: 'var(--w-fg-3)' }}
              >
                +
              </div>
              <div>
                <div className="nm">Publish your own</div>
                <div className="au">Earn from your toolkit</div>
              </div>
              <div className="get" style={{ marginTop: 'auto' }}>
                Start
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
