import React, { useState } from 'react';
import { WorldZone } from '../../types/world';
import { PenTool, Sliders, Check } from 'lucide-react';

interface SkillsToolboxProps {
  zone: WorldZone;
}

export const SkillsToolbox: React.FC<SkillsToolboxProps> = () => {
  const [activeTab, setActiveTab] = useState<'tools' | 'bezier'>('tools');
  const [toggleState, setToggleState] = useState(true);

  const skills = [
    { name: 'Design Systems', level: 'Architect', category: 'Systems' },
    { name: 'Figma Auto-Layout & Tokens', level: 'Mastery', category: 'Core' },
    { name: 'Prototyping & Micro-motion', level: 'Framer / CSS', category: 'Interaction' },
    { name: 'Spatial & Canvas UI', level: 'Specialist', category: 'Architecture' },
    { name: 'Design Technologist', level: 'React / TS / SVG', category: 'Engineering' },
    { name: 'UX Research & Journey', level: 'Qual & Quant', category: 'Research' }
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between rounded-xl bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center border border-[#00C48C]/20">
            <PenTool className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              TOOLBOX & VECTOR MECHANICS
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              FRAMEWORK • SYSTEM CAPABILITIES
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md text-[10px] font-mono">
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'tools' ? 'bg-white text-slate-800 shadow-2xs font-semibold' : 'text-slate-500'
            }`}
          >
            Capabilities
          </button>
          <button
            onClick={() => setActiveTab('bezier')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'bezier' ? 'bg-white text-slate-800 shadow-2xs font-semibold' : 'text-slate-500'
            }`}
          >
            Vector Spec
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto">
        {activeTab === 'tools' ? (
          <div className="grid grid-cols-2 gap-3">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/50 hover:bg-emerald-50/30 hover:border-[#00C48C]/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-slate-800 block">
                    {s.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {s.category}
                  </span>
                </div>
                <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 font-medium">
                  {s.level}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Vector Bezier Playground */
          <div className="bg-slate-900 text-white rounded-lg p-4 relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-mono text-slate-400">
              <span>BEZIER CURVATURE GENERATOR</span>
              <span className="text-[#00C48C]">CUBIC BEZIER (0.2, 0.8, 0.2, 1)</span>
            </div>

            {/* SVG Interactive Bezier Demo */}
            <div className="h-28 relative my-2 flex items-center justify-center">
              <svg className="w-full h-full">
                {/* Control lines */}
                <line x1="40" y1="90" x2="110" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="260" y1="20" x2="330" y2="90" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                {/* Curve */}
                <path
                  d="M 40 90 C 110 20, 260 20, 330 90"
                  fill="none"
                  stroke="#00C48C"
                  strokeWidth="3"
                />
                {/* Handles */}
                <circle cx="40" cy="90" r="5" fill="#FFFFFF" stroke="#00C48C" strokeWidth="2" />
                <circle cx="110" cy="20" r="4" fill="#0D99FF" />
                <circle cx="260" cy="20" r="4" fill="#0D99FF" />
                <circle cx="330" cy="90" r="5" fill="#FFFFFF" stroke="#00C48C" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800">
              <span>ANCHOR: P0(40, 90)</span>
              <span>CONTROL: P1(110, 20)</span>
              <span>ANCHOR: P3(330, 90)</span>
            </div>
          </div>
        )}

        {/* Micro-interaction test switch */}
        <div className="mt-3 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-[#00C48C]" />
            <span className="text-[11px] font-medium text-slate-700">
              Interactive Micro-switch Test
            </span>
          </div>
          <button
            onClick={() => setToggleState(!toggleState)}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out flex items-center ${
              toggleState ? 'bg-[#00C48C]' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                toggleState ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
        <span>INSPECTOR SPECIFICATION</span>
        <span className="text-emerald-600 font-semibold flex items-center gap-1">
          <Check className="w-3 h-3" /> VERIFIED HIGH CRAFT
        </span>
      </div>
    </div>
  );
};
