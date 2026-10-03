import React from 'react';

export type ViewMode = 'grid' | 'list';

interface ProjectViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const ProjectViewToggle: React.FC<ProjectViewToggleProps> = ({ mode, onChange }) => {
  return (
    <div
      role="group"
      aria-label="Project view mode"
      className="inline-flex items-center p-[3px] rounded-lg bg-[#F0EEE9] border border-[#E4E1DA] select-none"
    >
      {/* List / Vertical View Button [ ▤ ] */}
      <button
        type="button"
        onClick={() => onChange('list')}
        aria-label="List view"
        aria-pressed={mode === 'list'}
        title="Vertical list view"
        className={`relative flex items-center justify-center w-7 h-6 rounded-[5px] transition-all duration-150 cursor-pointer ${
          mode === 'list'
            ? 'bg-white text-[#141414] shadow-[0_1px_2px_rgba(0,0,0,0.08)] font-semibold'
            : 'text-[#7A7873] hover:text-[#141414]'
        }`}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="2" y="3" width="12" height="3" rx="0.75" />
          <rect x="2" y="10" width="12" height="3" rx="0.75" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-[1px] h-3 bg-[#D8D4CA] mx-0.5" />

      {/* Grid View Button [ ▦ ] */}
      <button
        type="button"
        onClick={() => onChange('grid')}
        aria-label="Grid view"
        aria-pressed={mode === 'grid'}
        title="2-column grid view"
        className={`relative flex items-center justify-center w-7 h-6 rounded-[5px] transition-all duration-150 cursor-pointer ${
          mode === 'grid'
            ? 'bg-white text-[#141414] shadow-[0_1px_2px_rgba(0,0,0,0.08)] font-semibold'
            : 'text-[#7A7873] hover:text-[#141414]'
        }`}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="2" y="2" width="5" height="5" rx="0.75" />
          <rect x="9" y="2" width="5" height="5" rx="0.75" />
          <rect x="2" y="9" width="5" height="5" rx="0.75" />
          <rect x="9" y="9" width="5" height="5" rx="0.75" />
        </svg>
      </button>
    </div>
  );
};
