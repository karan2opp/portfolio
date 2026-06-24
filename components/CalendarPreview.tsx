"use client";
// Built by Dhirender Choudhary
import React, { useState } from 'react';
import { GitHubCalendar, type Activity } from 'react-github-calendar';

type TipData = { x: number; y: number; count: number; date: string } | null;
export default function CalendarPreview() {
  const [tip, setTip] = useState<TipData>(null);
  const blockSize = 16;
  const blockMargin = 5;
  const radius = (0 / 50) * (blockSize / 2);
  const shapeRadius = radius;
  return (
    <section id="contributions" className="py-20 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto overflow-x-auto overflow-y-hidden pb-4">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[#e8ff47]" />
            <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">Github</span>
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-none text-white tracking-tight">
            Contributions
          </h2>
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl w-full mt-4 overflow-x-auto">
            <div className="p-4 md:p-8 min-w-max flex justify-center mx-auto">
              <GitHubCalendar
                username="karan2opp"
                theme={{ dark: ['#161616', '#4d5518', '#818f28', '#b4c737', '#e8ff47'] }}
              blockSize={blockSize}
              blockMargin={blockMargin}
              labels={{
                totalCount: '{{count}} contributions in {{year}}',
              }}
              renderBlock={(block: any, activity: any) => {
                const { x, y, width, height, ...restProps } = block.props;
                const nx = Number(x);
                const ny = Number(y);
                const s = Number(width);
                let shapeElement;
                shapeElement = <rect {...restProps} x={nx} y={ny} width={s} height={s} rx={shapeRadius} ry={shapeRadius} />;
                return React.cloneElement(shapeElement, {
                  onMouseEnter: (e: React.MouseEvent<SVGElement>) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    setTip({
                      x: r.left + r.width / 2,
                      y: r.top - 8,
                      count: activity.count,
                      date: activity.date,
                    });
                  },
                  onMouseLeave: () => setTip(null)
                });
              }}
              />
            </div>
          </div>
          {tip && (
            <div style={{ position: 'fixed', left: tip.x + 'px', top: tip.y + 'px', transform: 'translate(-50%, -100%)', background: '#e8ff47', color: '#0a0a0a', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', pointerEvents: 'none', zIndex: 1000, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)' }}>
              {tip.count} contributions on {tip.date}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
