import React from 'react';

export interface ProjectPreviewProps {
  projectId: string;
  videoSrc?: string;
  className?: string;
}

/**
 * Reusable project preview abstraction.
 * If videoSrc is provided, renders the real prototype video.
 * Otherwise, renders an interactive, animated, high-fidelity UI simulation.
 */
export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  projectId,
  videoSrc,
  className = '',
}) => {
  if (videoSrc) {
    return (
      <div className={`w-full h-full relative overflow-hidden bg-[#141414] ${className}`}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full relative overflow-hidden select-none pointer-events-none ${className}`}
    >
      {projectId === 'fortune-leadx' && <FortuneLeadXPreview />}
      {projectId === 'strato-crm' && <StratoCrmPreview />}
      {projectId === 'strato-hrm' && <StratoHrmPreview />}
      {projectId === 'fortune-one-crm' && <FortuneOneCrmPreview />}
      {projectId === 'nikkou-logistics' && <NikkouLogisticsPreview />}
      {projectId === 'sethu' && <SethuPreview />}
      {!['fortune-leadx', 'strato-crm', 'strato-hrm', 'fortune-one-crm', 'nikkou-logistics', 'sethu'].includes(projectId) && (
        <DefaultPreview projectId={projectId} />
      )}
    </div>
  );
};

/* =========================================================================
   1. FORTUNE LEADX: Enterprise CRM & Pipeline Automation
   Palette: Clean enterprise slate, #FD5D07 accents, emerald status, blue analytics
   ========================================================================= */
const FortuneLeadXPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F6F5F2] p-3.5 sm:p-5 flex flex-col justify-between font-sans text-[#1A1A1A]">
      {/* Top Application Header */}
      <div className="bg-white rounded-xl border border-[#E5E2DC] p-2.5 sm:p-3 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Path */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-lg bg-[#FD5D07] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              LX
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#181818] truncate">
                <span>Fortune LeadX</span>
                <span className="text-[#999] font-normal">/</span>
                <span className="text-[#555] font-normal">Sales Pipeline</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono text-[#059669] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              $1.48M Pipeline
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#181818] text-white text-[10px] font-mono font-medium">
              Live
            </span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-2.5 pt-2 border-t border-[#F0ECE6] flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="px-2 py-0.5 rounded bg-[#181818] text-white font-medium">
              All Deals (38)
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F4F2EE] text-[#555] hover:text-[#181818]">
              High Value (&gt;$50k)
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-[#F4F2EE] text-[#555]">
              EMEA Region
            </span>
          </div>
          <span className="text-[#888] shrink-0 font-medium">Win Rate: 92%</span>
        </div>
      </div>

      {/* Main Pipeline Board (3 Columns) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-2.5 flex-1 min-h-0">
        {/* Column 1: Inbound Stage */}
        <div className="bg-[#EFECE6]/80 rounded-xl p-2 sm:p-2.5 flex flex-col min-h-0 border border-[#E3DFD7]">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#DDD8CF] text-[10px] font-mono text-[#666]">
            <span className="font-semibold uppercase text-[#333]">Inbound</span>
            <span className="px-1.5 rounded-full bg-white text-[#555]">14</span>
          </div>
          <div className="space-y-1.5 mt-2 flex-1 overflow-hidden">
            <div className="p-2 rounded-lg bg-white border border-[#E2DED6] shadow-xs">
              <div className="text-[11px] font-semibold text-[#181818] truncate">Vanguard Bio</div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#777] mt-1">
                <span>$42,000</span>
                <span className="text-[#059669] font-medium">Warm</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#E2DED6] shadow-xs opacity-80">
              <div className="text-[11px] font-semibold text-[#181818] truncate">Kinetix Cloud</div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#777] mt-1">
                <span>$28,500</span>
                <span className="text-[#D97706]">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Qualified (Active Highlight Column) */}
        <div className="bg-white rounded-xl p-2 sm:p-2.5 flex flex-col min-h-0 border-2 border-[#FD5D07]/30 shadow-xs relative">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#F0ECE6] text-[10px] font-mono">
            <span className="font-bold uppercase text-[#FD5D07] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD5D07]" />
              Qualified
            </span>
            <span className="px-1.5 rounded-full bg-[#FFF0E8] text-[#FD5D07] font-semibold">9</span>
          </div>
          <div className="space-y-1.5 mt-2 flex-1 overflow-hidden">
            <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#FD5D07]/40 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#FD5D07]" />
              <div className="text-[11px] font-bold text-[#181818] pl-1 truncate">
                Apex Global Systems
              </div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#555] mt-1 pl-1">
                <span className="font-bold text-[#181818]">$125,000/yr</span>
                <span className="px-1.5 py-0.2 rounded bg-[#ECFDF5] text-[#059669] font-semibold">
                  Demo Today
                </span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E5E2DC] shadow-xs">
              <div className="text-[11px] font-semibold text-[#181818] truncate">Hyperion Energy</div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#777] mt-1">
                <span>$68,000</span>
                <span className="text-[#2563EB]">Proposal Sent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Closed Won */}
        <div className="bg-[#EFECE6]/80 rounded-xl p-2 sm:p-2.5 flex flex-col min-h-0 border border-[#E3DFD7]">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#DDD8CF] text-[10px] font-mono text-[#666]">
            <span className="font-semibold uppercase text-[#059669]">Won</span>
            <span className="px-1.5 rounded-full bg-[#ECFDF5] text-[#059669] font-bold">15</span>
          </div>
          <div className="space-y-1.5 mt-2 flex-1 overflow-hidden">
            <div className="p-2 rounded-lg bg-white border border-[#A7F3D0] shadow-xs">
              <div className="text-[11px] font-bold text-[#181818] truncate">Novus Robotics</div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#059669] mt-1">
                <span className="font-bold">$210,000</span>
                <span className="text-[9px] uppercase tracking-wider">Signed ✓</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#A7F3D0] shadow-xs opacity-75">
              <div className="text-[11px] font-semibold text-[#181818] truncate">Luminary Health</div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#059669] mt-1">
                <span>$94,000</span>
                <span className="text-[9px] uppercase tracking-wider">Signed ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Activity Bar */}
      <div className="bg-[#181818] text-white rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono shadow-sm">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
          <span className="text-[#E0E0E0] truncate">
            Lead auto-assigned to Enterprise EMEA • <span className="text-white font-semibold">Apex Global Systems</span>
          </span>
        </div>
        <span className="text-[#888] shrink-0 hidden sm:inline">2m ago</span>
      </div>
    </div>
  );
};

/* =========================================================================
   2. STRATO CRM: Modern Account Intelligence & Pipeline Matrix
   Palette: Sleek neutral/slate, Royal Blue (#2563EB) accents, high data density
   ========================================================================= */
const StratoCrmPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0F141C] p-3.5 sm:p-5 flex flex-col justify-between font-sans text-[#E2E8F0]">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.4)]">
            S
          </div>
          <div>
            <div className="text-[12px] font-bold text-white tracking-tight leading-none">
              Strato CRM
            </div>
            <div className="text-[9.5px] font-mono text-[#64748B] mt-0.5">
              Enterprise Client Workspace
            </div>
          </div>
        </div>

        {/* View Segment Pills */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB] text-white font-medium">
            Active Accounts
          </span>
          <span className="hidden sm:inline px-2 py-1 rounded-md bg-[#1E293B] text-[#94A3B8]">
            Activity Stream
          </span>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-12 gap-3 my-2.5 flex-1 min-h-0">
        {/* Left: Accounts Table (8 cols) */}
        <div className="col-span-12 sm:col-span-8 bg-[#161F2E] rounded-xl border border-[#233147] p-2.5 sm:p-3 flex flex-col justify-between">
          <div>
            {/* Table Header */}
            <div className="grid grid-cols-12 text-[9.5px] font-mono uppercase tracking-wider text-[#64748B] pb-2 border-b border-[#233147]">
              <span className="col-span-5">Company / Tier</span>
              <span className="col-span-4 text-center">Health</span>
              <span className="col-span-3 text-right">ARR</span>
            </div>

            {/* Table Rows */}
            <div className="space-y-1.5 mt-2">
              {/* Row 1 - Active Highlight */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-[#1E2D44] border border-[#3B82F6]/40 text-[11px]">
                <div className="col-span-5 flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0 animate-ping" />
                  <span className="font-semibold text-white truncate">CyberNetix Inc.</span>
                </div>
                <div className="col-span-4 flex items-center justify-center gap-1.5">
                  <div className="w-12 h-1.5 rounded-full bg-[#0F172A] overflow-hidden">
                    <div className="w-[96%] h-full bg-[#10B981] rounded-full" />
                  </div>
                  <span className="text-[9.5px] font-mono text-[#10B981]">98%</span>
                </div>
                <span className="col-span-3 text-right font-mono font-bold text-white text-[10.5px]">
                  $180k
                </span>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-[#131B29] border border-transparent text-[11px] hover:border-[#233147]">
                <div className="col-span-5 flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                  <span className="font-medium text-[#CBD5E1] truncate">OmniHealth Labs</span>
                </div>
                <div className="col-span-4 flex items-center justify-center gap-1.5">
                  <div className="w-12 h-1.5 rounded-full bg-[#0F172A] overflow-hidden">
                    <div className="w-[84%] h-full bg-[#3B82F6] rounded-full" />
                  </div>
                  <span className="text-[9.5px] font-mono text-[#3B82F6]">84%</span>
                </div>
                <span className="col-span-3 text-right font-mono text-[#94A3B8] text-[10.5px]">
                  $95k
                </span>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-[#131B29] border border-transparent text-[11px]">
                <div className="col-span-5 flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                  <span className="font-medium text-[#CBD5E1] truncate">AeroVelo Dynamic</span>
                </div>
                <div className="col-span-4 flex items-center justify-center gap-1.5">
                  <div className="w-12 h-1.5 rounded-full bg-[#0F172A] overflow-hidden">
                    <div className="w-[72%] h-full bg-[#F59E0B] rounded-full" />
                  </div>
                  <span className="text-[9.5px] font-mono text-[#F59E0B]">72%</span>
                </div>
                <span className="col-span-3 text-right font-mono text-[#94A3B8] text-[10.5px]">
                  $64k
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#233147] flex items-center justify-between text-[9.5px] font-mono text-[#64748B]">
            <span>Showing 3 of 42 accounts</span>
            <span className="text-[#38BDF8]">Filter: Tier 1 ★</span>
          </div>
        </div>

        {/* Right: Selected Dossier Inspector (4 cols) */}
        <div className="hidden sm:flex col-span-4 bg-[#141B26] rounded-xl border border-[#233147] p-3 flex-col justify-between">
          <div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-[#3B82F6] font-semibold">
              Live Dossier
            </div>
            <div className="text-[13px] font-bold text-white mt-1">CyberNetix Inc.</div>
            <div className="text-[10px] text-[#94A3B8] mt-0.5">Enterprise Global SLA</div>

            <div className="mt-3 pt-3 border-t border-[#233147] space-y-2 text-[10px]">
              <div className="flex justify-between font-mono">
                <span className="text-[#64748B]">Renewal:</span>
                <span className="text-white font-medium">Nov 2026</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-[#64748B]">Seats:</span>
                <span className="text-white font-medium">240 Active</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-[#64748B]">NPS:</span>
                <span className="text-[#10B981] font-bold">+78</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#1E293B] text-[9.5px] font-mono text-[#94A3B8] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Synced with Slack #deals
          </div>
        </div>
      </div>

      {/* Bottom Status Feed */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pt-2 border-t border-[#1E293B]">
        <div className="flex items-center gap-2">
          <span className="text-[#38BDF8] font-semibold">● SYNC ENGINE:</span>
          <span className="text-[#94A3B8]">Telemetry polling latency 14ms</span>
        </div>
        <span className="text-white font-bold">100% Uptime</span>
      </div>
    </div>
  );
};

/* =========================================================================
   3. STRATO HRM: Workforce & Attendance Telemetry
   Palette: Fresh Emerald (#10B981), soft sage (#ECFDF5), clean modern cards
   ========================================================================= */
const StratoHrmPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F4F9F6] p-3.5 sm:p-5 flex flex-col justify-between font-sans text-[#1B3022]">
      {/* Top Header */}
      <div className="bg-white rounded-xl border border-[#D5E5DC] p-2.5 sm:p-3 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#10B981] text-white font-bold text-xs flex items-center justify-center">
              HR
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#14261C]">Strato HRM</div>
              <div className="text-[9.5px] font-mono text-[#5C7867]">Organization Dashboard</div>
            </div>
          </div>

          {/* Presence Stats */}
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-semibold">
              ● 214 In-Office
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]">
              ● 22 Remote
            </span>
          </div>
        </div>

        {/* Progress Bar of Daily Check-in */}
        <div className="mt-2.5 pt-2 border-t border-[#EDF4F0]">
          <div className="flex justify-between text-[9.5px] font-mono text-[#5C7867] mb-1">
            <span>Daily Check-in Rate</span>
            <span className="font-bold text-[#059669]">96.4% on schedule</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#E5EFE9] overflow-hidden">
            <div className="w-[96.4%] h-full bg-[#10B981] rounded-full transition-all duration-1000" />
          </div>
        </div>
      </div>

      {/* Employee Cards Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 my-2.5 flex-1 min-h-0">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-[#DCE8E0] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold text-[10px] flex items-center justify-center">
                ER
              </div>
              <span className="w-2 h-2 rounded-full bg-[#10B981] ring-2 ring-[#D1FAE5]" />
            </div>
            <div className="text-[11px] font-bold text-[#14261C] mt-1.5 truncate">
              Elena Rostova
            </div>
            <div className="text-[9.5px] text-[#607D6B] truncate">Staff Designer</div>
          </div>
          <div className="pt-2 border-t border-[#F0F6F2] text-[9px] font-mono text-[#059669] font-semibold">
            In-Office • 09:12 AM
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-[#DCE8E0] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#B45309] font-bold text-[10px] flex items-center justify-center">
                MC
              </div>
              <span className="w-2 h-2 rounded-full bg-[#2563EB] ring-2 ring-[#DBEAFE]" />
            </div>
            <div className="text-[11px] font-bold text-[#14261C] mt-1.5 truncate">
              Marcus Chen
            </div>
            <div className="text-[9.5px] text-[#607D6B] truncate">Lead Architect</div>
          </div>
          <div className="pt-2 border-t border-[#F0F6F2] text-[9px] font-mono text-[#2563EB] font-semibold">
            Remote • London HQ
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-[#DCE8E0] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-full bg-[#FCE7F3] text-[#BE185D] font-bold text-[10px] flex items-center justify-center">
                AP
              </div>
              <span className="w-2 h-2 rounded-full bg-[#10B981] ring-2 ring-[#D1FAE5]" />
            </div>
            <div className="text-[11px] font-bold text-[#14261C] mt-1.5 truncate">
              Aisha Patel
            </div>
            <div className="text-[9.5px] text-[#607D6B] truncate">Head of People</div>
          </div>
          <div className="pt-2 border-t border-[#F0F6F2] text-[9px] font-mono text-[#059669] font-semibold">
            In-Office • 08:55 AM
          </div>
        </div>
      </div>

      {/* Bottom Approval Queue Banner */}
      <div className="bg-[#14261C] text-white rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono shadow-xs">
        <div className="flex items-center gap-2 truncate">
          <span className="px-1.5 py-0.5 rounded bg-[#10B981] text-white text-[9px] font-bold">
            LEAVE
          </span>
          <span className="truncate text-[#D5E5DC]">
            Kavya S. requested 2 days PTO (Oct 12–14)
          </span>
        </div>
        <span className="text-[#10B981] font-bold shrink-0">[Approve ✓]</span>
      </div>
    </div>
  );
};

/* =========================================================================
   4. FORTUNE ONE CRM: Luxury Real Estate & Asset Portfolio
   Palette: Architectural Warm Cream (#FAF8F5), Obsidian (#181818), Amber (#D97706)
   ========================================================================= */
const FortuneOneCrmPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F5F2EA] p-3.5 sm:p-5 flex flex-col justify-between font-sans text-[#1D1B16]">
      {/* Top Header */}
      <div className="bg-white rounded-xl border border-[#E3DDD1] p-2.5 sm:p-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#181818] text-[#D97706] font-bold text-xs flex items-center justify-center border border-[#D97706]/40">
              F1
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#181818]">Fortune One CRM</div>
              <div className="text-[9.5px] font-mono text-[#7D7565]">Luxury Asset Registry</div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] font-bold">
              $48.5M Inventory
            </span>
          </div>
        </div>
      </div>

      {/* Property Showcase Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2.5 flex-1 min-h-0">
        {/* Unit Card 1 */}
        <div className="bg-white rounded-xl border border-[#E3DDD1] p-2.5 sm:p-3 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[9px] font-mono text-[#7D7565]">
              <span>TOWER A • 54TH FL</span>
              <span className="px-1.5 py-0.2 rounded bg-[#ECFDF5] text-[#059669] font-bold">
                Available
              </span>
            </div>
            <div className="text-[13px] font-bold text-[#181818] mt-1 truncate">
              The Grand Sky Penthouse
            </div>
            <div className="text-[10px] text-[#7D7565] mt-0.5">
              5,200 sq.ft • 4 Bed / 5 Bath
            </div>
          </div>

          <div className="pt-2 border-t border-[#F2EEE4] flex items-center justify-between">
            <span className="font-mono text-[13px] font-extrabold text-[#D97706]">$4,850,000</span>
            <span className="text-[9.5px] font-mono text-[#7D7565]">6 Inquiries</span>
          </div>
        </div>

        {/* Unit Card 2 */}
        <div className="bg-white rounded-xl border border-[#E3DDD1] p-2.5 sm:p-3 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[9px] font-mono text-[#7D7565]">
              <span>MARINA PROMENADE</span>
              <span className="px-1.5 py-0.2 rounded bg-[#EFF6FF] text-[#2563EB] font-bold">
                Under Offer
              </span>
            </div>
            <div className="text-[13px] font-bold text-[#181818] mt-1 truncate">
              Villa Horizon Azure
            </div>
            <div className="text-[10px] text-[#7D7565] mt-0.5">
              3,850 sq.ft • Private Jetty
            </div>
          </div>

          <div className="pt-2 border-t border-[#F2EEE4] flex items-center justify-between">
            <span className="font-mono text-[13px] font-extrabold text-[#181818]">$3,200,000</span>
            <span className="text-[9.5px] font-mono text-[#059669] font-semibold">Offer Accepted</span>
          </div>
        </div>
      </div>

      {/* Client Match & Inspection Schedule */}
      <div className="bg-[#1F1D18] text-white rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono shadow-xs">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping shrink-0" />
          <span className="truncate text-[#E4DFD3]">
            Investor Match: <span className="text-[#FBBF24] font-bold">98% Affinity</span> for Sky Penthouse
          </span>
        </div>
        <span className="text-[#A39A88] shrink-0 hidden sm:inline">Tour 4:30 PM</span>
      </div>
    </div>
  );
};

/* =========================================================================
   5. NIKKOU LOGISTICS: Cross-Border Freight Telemetry
   Palette: Dark Slate (#0F172A), Cyan Radar (#06B6D4), Neon Emerald (#10B981)
   ========================================================================= */
const NikkouLogisticsPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0F1D] p-3.5 sm:p-5 flex flex-col justify-between font-mono text-[#E2E8F0]">
      {/* Top Command Bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#06B6D4] text-[#0A0F1D] font-bold text-xs flex items-center justify-center">
            NK
          </div>
          <div>
            <div className="text-[11px] font-bold text-white tracking-wider">NIKKOU LOGISTICS</div>
            <div className="text-[9px] text-[#64748B]">GLOBAL FREIGHT TELEMETRY</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9.5px]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#38BDF8] font-bold">LIVE DISPATCH</span>
        </div>
      </div>

      {/* Geospatial Route Line & Waypoints */}
      <div className="bg-[#111927] rounded-xl border border-[#1E293B] p-3 my-2 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[9px] text-[#64748B]">
          <span>AWB #NK-8829-X</span>
          <span className="text-[#38BDF8]">Boeing 777F • Heavy Cargo</span>
        </div>

        {/* Animated Flight Route Track */}
        <div className="my-auto py-2 relative">
          <div className="flex items-center justify-between relative z-10 text-[10px]">
            {/* Origin */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#0A0F1D]" />
              <span className="text-white font-bold mt-1">BLR</span>
              <span className="text-[8px] text-[#64748B]">08:30 IST</span>
            </div>

            {/* Waypoint (Current Position) */}
            <div className="flex flex-col items-center relative">
              <span className="w-4 h-4 rounded-full bg-[#06B6D4] animate-ping absolute" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#06B6D4] border-2 border-white relative z-10" />
              <span className="text-[#38BDF8] font-bold mt-1">SIN</span>
              <span className="text-[8px] text-[#38BDF8]">IN TRANSIT</span>
            </div>

            {/* Destination */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#475569] border-2 border-[#0A0F1D]" />
              <span className="text-[#94A3B8] font-bold mt-1">NRT</span>
              <span className="text-[8px] text-[#64748B]">ETA 16:45 JST</span>
            </div>
          </div>

          {/* Route Line */}
          <div className="absolute top-[15px] left-3 right-3 h-0.5 bg-[#1E293B] z-0">
            <div className="w-[50%] h-full bg-[#06B6D4] relative">
              <div className="absolute right-0 top-[-2px] w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#38BDF8]" />
            </div>
          </div>
        </div>

        {/* Live Cargo Sensor Matrix */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#1E293B] text-[9.5px]">
          <div className="p-1.5 rounded bg-[#0A0F1D] border border-[#1E293B]">
            <span className="text-[#64748B] block text-[8px]">ALTITUDE</span>
            <span className="text-white font-bold">36,000 FT</span>
          </div>
          <div className="p-1.5 rounded bg-[#0A0F1D] border border-[#1E293B]">
            <span className="text-[#64748B] block text-[8px]">COLD-CHAIN</span>
            <span className="text-[#10B981] font-bold">-20.4 °C</span>
          </div>
          <div className="p-1.5 rounded bg-[#0A0F1D] border border-[#1E293B]">
            <span className="text-[#64748B] block text-[8px]">CUSTOMS</span>
            <span className="text-[#38BDF8] font-bold">CLEARED ✓</span>
          </div>
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="flex items-center justify-between text-[9px] text-[#64748B] pt-1">
        <span>RADAR LATENCY: 22MS</span>
        <span className="text-[#10B981]">ALL SENSORS NOMINAL</span>
      </div>
    </div>
  );
};

/* =========================================================================
   6. SETHU: Interactive Academic & Social Learning Space
   Palette: Creative Violet (#8B5CF6), Coral (#F43F5E), Warm Cream, Modern Cards
   ========================================================================= */
const SethuPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FAF5FF] p-3.5 sm:p-5 flex flex-col justify-between font-sans text-[#2E1065]">
      {/* Top Header */}
      <div className="bg-white rounded-xl border border-[#E9D5FF] p-2.5 sm:p-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#8B5CF6] text-white font-bold text-xs flex items-center justify-center">
              S
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#2E1065]">Sethu Learning Studio</div>
              <div className="text-[9.5px] font-mono text-[#7E22CE]">Studio Cohort 06</div>
            </div>
          </div>

          <span className="px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#7C3AED] font-mono text-[9.5px] font-bold">
            Live Critique
          </span>
        </div>
      </div>

      {/* Interactive Module & Critique Card */}
      <div className="bg-white rounded-xl border border-[#E9D5FF] p-3 my-2.5 flex-1 flex flex-col justify-between shadow-xs">
        <div>
          <div className="flex items-center justify-between text-[9px] font-mono text-[#6B21A8]">
            <span>MODULE 04: SPATIAL INTERACTION</span>
            <span className="font-bold text-[#8B5CF6]">84% Completed</span>
          </div>

          {/* Module Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-[#F3E8FF] mt-1.5 overflow-hidden">
            <div className="w-[84%] h-full bg-[#8B5CF6] rounded-full" />
          </div>

          {/* Discussion Post */}
          <div className="mt-3 p-2.5 rounded-lg bg-[#FAF5FF] border border-[#F3E8FF]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#8B5CF6] text-white font-bold text-[9.5px] flex items-center justify-center">
                DM
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-[#2E1065]">Devan M.</span>
                <span className="text-[9px] text-[#7E22CE] ml-1.5">• 4m ago</span>
              </div>
            </div>
            <p className="text-[10.5px] text-[#4C1D95] mt-1 leading-snug">
              &quot;Refined the micro-interaction tokens for tactile feedback on data filters.&quot;
            </p>
          </div>
        </div>

        {/* Peer Feedback Dock */}
        <div className="pt-2 border-t border-[#F3E8FF] flex items-center justify-between text-[9.5px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-[#EDE9FE] text-[#6D28D9] font-medium">
              ★ Mentor Approved
            </span>
            <span className="px-2 py-0.5 rounded bg-[#FFE4E6] text-[#BE123C] font-medium">
              ♥ 14 Upvotes
            </span>
          </div>
          <span className="text-[#7C3AED] font-bold">Review →</span>
        </div>
      </div>

      {/* Bottom Online Peer Dock */}
      <div className="bg-[#2E1065] text-white rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[#E9D5FF]">
            <span className="text-white font-bold">24 cohort peers</span> currently collaborating
          </span>
        </div>
        <span className="text-[#C4B5FD] font-semibold">Join Live Sync</span>
      </div>
    </div>
  );
};

/* =========================================================================
   Default Fallback Preview
   ========================================================================= */
const DefaultPreview: React.FC<{ projectId: string }> = ({ projectId }) => {
  return (
    <div className="w-full h-full bg-[#FAF9F5] p-6 flex flex-col justify-between font-mono text-[#141414]">
      <div className="flex items-center justify-between text-xs text-[#7A7873] border-b border-[#E8E6E1] pb-3">
        <span className="uppercase">Project Prototype</span>
        <span>{projectId}</span>
      </div>
      <div className="my-auto text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-[#141414] text-white font-display text-xl mx-auto flex items-center justify-center font-bold">
          GK
        </div>
        <div className="text-sm font-semibold">{projectId}</div>
      </div>
      <div className="text-[10px] text-[#7A7873] text-center pt-3 border-t border-[#E8E6E1]">
        Interactive Prototype Placeholder
      </div>
    </div>
  );
};
