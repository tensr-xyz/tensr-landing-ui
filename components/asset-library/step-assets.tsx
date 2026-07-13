'use client';

import { useEffect, useState, type ReactNode } from 'react';

const LOOP_MS = 3600;

function LoopRestart({ children }: { children: ReactNode }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick(t => t + 1), LOOP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div key={tick} className="step-asset-loop">
      {children}
    </div>
  );
}

function WinChrome({ status, live = false }: { status: string; live?: boolean }) {
  return (
    <div className="step-asset-bar">
      <div className="step-asset-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="step-asset-status">
        {live ? <span className="step-asset-live" /> : null}
        {status}
      </div>
    </div>
  );
}

/** Sheet loading — homepage step 01 (detect) */
export function SheetLoadingAsset() {
  return (
    <div className="step-visual-frame step-asset p-0">
      <WinChrome status="505 rows · 15 cols" />
      <LoopRestart>
        <div className="sheet anim-sheet">
          <table>
            <thead>
              <tr>
                <th className="idx">#</th>
                <th>Player</th>
                <th>Pos</th>
                <th>MP</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="idx">1</td>
                <td>Bam Adebayo</td>
                <td>
                  <span className="posbadge">C</span>
                </td>
                <td className="num">34.0</td>
                <td className="num">19.3</td>
              </tr>
              <tr>
                <td className="idx">2</td>
                <td>Santi Aldama</td>
                <td>
                  <span className="posbadge">PF</span>
                </td>
                <td className="num">26.4</td>
                <td className="num">10.7</td>
              </tr>
              <tr>
                <td className="idx">3</td>
                <td>Giannis Antetokounmpo</td>
                <td>
                  <span className="posbadge">PF</span>
                </td>
                <td className="num">35.2</td>
                <td className="num">30.4</td>
              </tr>
              <tr>
                <td className="idx">4</td>
                <td>Ochai Agbaji</td>
                <td>
                  <span className="posbadge">SG</span>
                </td>
                <td className="num">21.0</td>
                <td className="num">5.8</td>
              </tr>
              <tr>
                <td className="idx">5</td>
                <td>Precious Achiuwa</td>
                <td>
                  <span className="posbadge">C</span>
                </td>
                <td className="num">20.7</td>
                <td className="num">7.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LoopRestart>
      <div className="step-fade" aria-hidden="true" />
    </div>
  );
}

/** Agent replying — homepage step 02 (understand) */
export function AgentReplyAsset() {
  return (
    <div className="step-visual-frame step-asset step-asset-indigo p-0">
      <WinChrome status="Tensr Agent" live />
      <LoopRestart>
        <div className="anim-chat">
          <div className="chat-bubble user" style={{ background: '#6D66F6' }}>
            Which position scores the most per 36 minutes?
          </div>
          <div className="typing-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="chat-bubble agent">
            Centers lead at 24.1 pts/36 — driven by efficiency near the rim, not volume.
          </div>
        </div>
      </LoopRestart>
      <div className="step-fade" aria-hidden="true" />
    </div>
  );
}

/** Report generating — homepage step 03 (resolve) */
export function ReportGeneratingAsset() {
  return (
    <div className="step-visual-frame step-asset p-0">
      <WinChrome status="One-way ANOVA — PTS by position" />
      <LoopRestart>
        <div className="anim-report">
          <div className="gen-label">
            <span className="spin" /> Running analysis…
          </div>
          <table className="report-table">
            <thead>
              <tr>
                <th>Source</th>
                <th className="num">SS</th>
                <th className="num">df</th>
                <th className="num">F</th>
                <th className="num">p</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Position</td>
                <td className="num">1842.6</td>
                <td className="num">4</td>
                <td className="num">9.41</td>
                <td className="num">&lt;.001</td>
              </tr>
              <tr>
                <td>Residual</td>
                <td className="num">27340.1</td>
                <td className="num">500</td>
                <td className="num">—</td>
                <td className="num">—</td>
              </tr>
              <tr>
                <td>R²</td>
                <td className="num">0.442</td>
                <td className="num">—</td>
                <td className="num">—</td>
                <td className="num">—</td>
              </tr>
            </tbody>
          </table>
          <div className="apa-box">
            Scoring differs significantly by position, F(4, 500) = 9.41, p &lt; .001.
          </div>
        </div>
      </LoopRestart>
      <div className="step-fade" aria-hidden="true" />
    </div>
  );
}

export function StepVisual({ type }: { type: 'detect' | 'understand' | 'resolve' }) {
  if (type === 'detect') return <SheetLoadingAsset />;
  if (type === 'understand') return <AgentReplyAsset />;
  return <ReportGeneratingAsset />;
}
