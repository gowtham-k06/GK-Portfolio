import React from 'react';
import { ConnectorLink, WorldZone, ZoneId } from '../../types/world';

interface ConnectorsLayerProps {
  connectors: ConnectorLink[];
  zones: WorldZone[];
  hoveredZoneId: ZoneId | null;
  activeZoneId: ZoneId | null;
  onSelectZone: (zoneId: ZoneId) => void;
}

export const ConnectorsLayer: React.FC<ConnectorsLayerProps> = ({
  connectors,
  zones,
  hoveredZoneId,
  activeZoneId,
  onSelectZone
}) => {
  const zoneMap = new Map<ZoneId, WorldZone>();
  zones.forEach(z => zoneMap.set(z.id, z));

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
      style={{ zIndex: 5 }}
    >
      <defs>
        {/* Animated gradient for highlighted connector */}
        <linearGradient id="active-connector-flow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D99FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#7B61FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0D99FF" stopOpacity="0.9" />
        </linearGradient>

        <filter id="connector-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#0D99FF" floodOpacity="0.35" />
        </filter>
      </defs>

      {connectors.map(conn => {
        const fromZone = zoneMap.get(conn.from);
        const toZone = zoneMap.get(conn.to);
        if (!fromZone || !toZone) return null;

        const isHighlighted =
          hoveredZoneId === conn.from ||
          hoveredZoneId === conn.to ||
          activeZoneId === conn.from ||
          activeZoneId === conn.to;

        // Coordinates
        const x1 = fromZone.x;
        const y1 = fromZone.y;
        const x2 = toZone.x;
        const y2 = toZone.y;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const dist = Math.hypot(dx, dy) || 1;

        // Normal vector for curve
        const nx = -dy / dist;
        const ny = dx / dist;
        const curveAmount = (conn.curvature ?? 0.2) * Math.min(dist * 0.4, 180);

        const cx1 = x1 + dx * 0.3 + nx * curveAmount;
        const cy1 = y1 + dy * 0.3 + ny * curveAmount;
        const cx2 = x1 + dx * 0.7 + nx * curveAmount;
        const cy2 = y1 + dy * 0.7 + ny * curveAmount;

        const pathData = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

        // Midpoint for label
        const midX = 0.125 * x1 + 0.375 * cx1 + 0.375 * cx2 + 0.125 * x2;
        const midY = 0.125 * y1 + 0.375 * cy1 + 0.375 * cy2 + 0.125 * y2;

        return (
          <g
            key={conn.id}
            className="transition-all duration-300"
            style={{ opacity: isHighlighted ? 1 : 0.45 }}
          >
            {/* Background halo path when hovered */}
            {isHighlighted && (
              <path
                d={pathData}
                fill="none"
                stroke="#0D99FF"
                strokeWidth="7"
                strokeOpacity="0.18"
                strokeLinecap="round"
              />
            )}

            {/* Core Connector Path */}
            <path
              d={pathData}
              fill="none"
              stroke={isHighlighted ? 'url(#active-connector-flow)' : 'rgba(30, 41, 59, 0.3)'}
              strokeWidth={isHighlighted ? 2.5 : 1.5}
              strokeDasharray={
                conn.style === 'dotted'
                  ? '3 6'
                  : conn.style === 'dashed' || isHighlighted
                  ? '7 5'
                  : 'none'
              }
              strokeLinecap="round"
              className={isHighlighted ? 'animate-[dash_20s_linear_infinite]' : ''}
              filter={isHighlighted ? 'url(#connector-glow)' : undefined}
            />

            {/* Anchor point at origin */}
            <circle
              cx={x1}
              cy={y1}
              r={isHighlighted ? 5 : 3.5}
              fill={isHighlighted ? '#0D99FF' : '#94A3B8'}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Anchor point at destination */}
            <circle
              cx={x2}
              cy={y2}
              r={isHighlighted ? 6 : 4}
              fill={isHighlighted ? toZone.accentColor : '#64748B'}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Connector Label Pill */}
            {conn.label && (
              <g
                transform={`translate(${midX}, ${midY})`}
                className="pointer-events-auto cursor-pointer"
                onClick={() => onSelectZone(conn.to)}
              >
                <rect
                  x="-55"
                  y="-11"
                  width="110"
                  height="22"
                  rx="11"
                  fill={isHighlighted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.92)'}
                  stroke={isHighlighted ? toZone.accentColor : 'rgba(15, 23, 42, 0.12)'}
                  strokeWidth={isHighlighted ? 1.5 : 1}
                  className="shadow-sm"
                />
                <text
                  x="0"
                  y="3.5"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  fontWeight="600"
                  fill={isHighlighted ? '#0F172A' : '#64748B'}
                  letterSpacing="0.04em"
                >
                  {conn.label}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};
