import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Mail, ArrowRight } from 'lucide-react';

interface IdentityRailProps {
  onNavigate: (route: string) => void;
}

export const IdentityRail: React.FC<IdentityRailProps> = ({ onNavigate }) => {
  const metadataRows = [
    {
      label: 'Location',
      value: 'Bengaluru, India',
    },
    {
      label: 'Timezone',
      value: 'IST (UTC+05:30)',
      secondary: null,
    },
    {
      label: 'Experience',
      value: '4 roles / 2023–Present',
    },
    {
      label: 'Current Org',
      value: 'The Fortune Group',
    },
  ];

  const focusAreas = [
    'SaaS',
    'CRM',
    'Design Systems',
  ];

  const tooling = [
    'Figma',
    'Design Systems',
    'React',
    'TypeScript',
  ];

  return (
    <aside
      className="
        w-full
        lg:w-[365px]
        lg:min-w-[365px]
        shrink-0
        h-auto
        lg:h-screen
        lg:sticky
        lg:top-0
        bg-white
        border-b
        lg:border-b-0
        lg:border-r
        border-[#E6E6E6]
        flex
        flex-col
        overflow-hidden
        select-none
        z-20
      "
    >
      {/* =========================================================
          IDENTITY CONTENT
      ========================================================= */}
      <div
        className="
          px-5
          sm:px-7
          lg:px-[14px]
          pt-8
          lg:pt-9
        "
      >
        {/* ---------------------------------------------------------
            PROFILE
        --------------------------------------------------------- */}
        <div className="flex items-center gap-3 pb-5">
          {/* Avatar */}
          <div
            className="
              w-[62px]
              h-[62px]
              shrink-0
              rounded-[17px]
              bg-[#F4F2EE]
              border
              border-[#DCD9D3]
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-[52px]
                h-[52px]
                rounded-[14px]
                bg-[#171717]
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-[20px]
                tracking-[-0.05em]
              "
            >
              GK
            </div>
          </div>

          {/* Name + Status */}
          <div className="min-w-0">
            <h2
              className="
                text-[15px]
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#171717]
              "
            >
              Gowtham K (GK)
            </h2>

            <div className="flex items-center gap-2 mt-[7px]">
              <span className="relative flex h-[9px] w-[9px] shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25B86A] opacity-25" />
                <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#24B86A]" />
              </span>

              <span
                className="
                  text-[12px]
                  leading-none
                  text-[#555]
                "
              >
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------
            DESCRIPTION
        --------------------------------------------------------- */}
        <div
          className="
            border-t
            border-[#E7E7E7]
            pt-5
            pb-5
          "
        >
          <p
            className="
              text-[13px]
              leading-[1.68]
              tracking-[-0.005em]
              text-[#414141]
            "
          >
            Product & interaction designer focused on{' '}
            <strong className="font-semibold text-[#171717]">
              SaaS, CRM, and design systems
            </strong>
            . Turning complex data-dense logic into calm, tactile digital
            interfaces.
          </p>
        </div>

        {/* ---------------------------------------------------------
            BASIC METADATA
        --------------------------------------------------------- */}
        <div className="border-t border-[#E7E7E7]">
          {metadataRows.map((row) => (
            <div
              key={row.label}
              className="
                min-h-[45px]
                border-b
                border-[#E7E7E7]
                grid
                grid-cols-[84px_minmax(0,1fr)]
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[11px]
                  text-[#6B6B6B]
                  leading-none
                "
              >
                {row.label}
              </span>

              <span
                className="
                  min-w-0
                  text-[12px]
                  font-medium
                  text-[#181818]
                  leading-[1.3]
                  truncate
                "
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------------
            FOCUS
        --------------------------------------------------------- */}
        <div
          className="
            min-h-[82px]
            border-b
            border-[#E7E7E7]
            grid
            grid-cols-[84px_minmax(0,1fr)]
            gap-3
            py-3
          "
        >
          <span
            className="
              text-[11px]
              text-[#6B6B6B]
              pt-[5px]
            "
          >
            Focus
          </span>

          <div className="flex flex-wrap gap-[6px] content-start">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="
                  inline-flex
                  items-center
                  min-h-[25px]
                  px-[9px]
                  rounded-full
                  border
                  border-[#DFDFDF]
                  bg-[#FAFAFA]
                  text-[11px]
                  text-[#333]
                  leading-none
                  whitespace-nowrap
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------
            TOOLING
        --------------------------------------------------------- */}
        <div
          className="
            min-h-[82px]
            border-b
            border-[#E7E7E7]
            grid
            grid-cols-[84px_minmax(0,1fr)]
            gap-3
            py-3
          "
        >
          <span
            className="
              text-[11px]
              text-[#6B6B6B]
              pt-[5px]
            "
          >
            Tooling
          </span>

          <div className="flex flex-wrap gap-[6px] content-start">
            {tooling.map((item) => (
              <span
                key={item}
                className="
                  inline-flex
                  items-center
                  min-h-[25px]
                  px-[9px]
                  rounded-full
                  border
                  border-[#DFDFDF]
                  bg-[#FAFAFA]
                  text-[11px]
                  text-[#333]
                  leading-none
                  whitespace-nowrap
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM CONTACT AREA
          Anchored to bottom of the full-height rail.
      ========================================================= */}
      <div
        className="
          mt-auto
          px-5
          sm:px-7
          lg:px-[14px]
          pb-8
          lg:pb-9
          pt-6
        "
      >
        <div
          className="
            border-t
            border-[#E7E7E7]
            pt-5
          "
        >
          {/* Section label */}
          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-[#777]
              mb-3
            "
          >
            Direct Channel
          </div>

          {/* Email */}
          <a
            href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry`}
            className="
              w-full
              min-h-[42px]
              px-4
              rounded-full
              bg-[#171717]
              text-white
              flex
              items-center
              justify-between
              gap-3
              transition-colors
              duration-200
              hover:bg-[#FD5D07]
              group
            "
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-[15px] h-[15px] shrink-0" />

              <span
                className="
                  text-[11px]
                  font-medium
                  truncate
                "
              >
                {PROFILE_DATA.email}
              </span>
            </div>

            <ArrowRight
              className="
                w-[15px]
                h-[15px]
                shrink-0
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </a>

          {/* Explore Works */}
          <button
            onClick={() => onNavigate('works')}
            className="
              w-full
              h-[38px]
              mt-2
              px-4
              rounded-full
              bg-white
              border
              border-[#DDDDDD]
              text-[#222]
              flex
              items-center
              justify-between
              cursor-pointer
              transition-all
              duration-200
              hover:border-[#171717]
              group
            "
          >
            <span className="text-[11px] font-medium">
              Explore Works
            </span>

            <ArrowRight
              className="
                w-[14px]
                h-[14px]
                text-[#777]
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </aside>
  );
};
