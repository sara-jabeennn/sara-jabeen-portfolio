"use client";

import { motion, useReducedMotion } from "framer-motion";

// Inline SVG (not <img>) so the theme's CSS variables can drive its colors
// and it flips correctly between light/dark - converted 1:1 from
// public/visuals/quickaid-mesh.svg (her source of truth, geometry untouched).
// <title>/<desc> text is reused verbatim, not rewritten - it was already
// accurate.
//
// Color mapping (2026-07-19), replacing every hardcoded hex:
//   #1e1e2e (box fill)              -> var(--card)              [surface]
//   #f0ede8 (Gateway title text)    -> var(--primary-foreground) [see note]
//   #a8a4b8 (secondary/dim text)    -> var(--muted-foreground)
//   #68647a (faint mesh lines)      -> var(--muted-foreground) @ 0.5 opacity
//   #C97B96 (route/victim accent)   -> var(--primary)            [text-safe wine]
//   #B189A8 (relay accent)          -> var(--chart-2)            [text-safe plum]
//   #8B3D55 (Gateway box fill)      -> var(--primary), not --color-wine
//   #e8dce2 (Gateway secondary text)-> var(--primary-foreground)
//
// Note on Gateway: the deep-wine constant (--color-wine, #8B3D55 in both
// themes) would break light-mode text contrast - light mode's foreground is
// dark (#1A1A1A), which reads poorly on a medium-dark wine fill. Using the
// theme-aware var(--primary)/var(--primary-foreground) pair instead reuses
// the same verified-AA button pairing from globals.css in both themes:
// dark 6.13:1, light 6.46:1. All other pairs reuse ratios already verified
// this session: primary/card dark 5.4:1, chart-2/card dark 4.75:1,
// muted-foreground/card dark 5.91:1; light equivalents 7.25:1/10.79:1/5.7:1.
// See CLAUDE.md for the full ratio table.
const NODES = {
  victim: { cx: 85, cy: 198 },
  relayB: { cx: 245, cy: 198 },
  relayD: { cx: 405, cy: 145 },
  gateway: { cx: 575, cy: 198 },
};

const PACKET_DURATION = 4.5;

export function MeshDiagram() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 680 415"
      width="100%"
      role="img"
      aria-labelledby="qaTitle qaDesc"
    >
      <title id="qaTitle">QuickAid Bluetooth mesh routing and relay privacy</title>
      <desc id="qaDesc">
        An SOS from a victim device with no cellular signal hops through
        nearby phones acting as relay nodes. Several routes exist; Dijkstra&apos;s
        algorithm selects the fewest-hop path to a device that still has
        connectivity. Relays forward the encrypted payload without decrypting
        or storing it.
      </desc>

      <defs>
        <marker
          id="qaArrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Non-chosen connections - dim throughout */}
      <g stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.5" fill="none">
        <line x1="140" y1="198" x2="188" y2="92" />
        <line x1="140" y1="198" x2="188" y2="304" />
        <line x1="300" y1="92" x2="348" y2="145" />
        <line x1="300" y1="198" x2="348" y2="257" />
        <line x1="300" y1="304" x2="348" y2="257" />
        <line x1="460" y1="257" x2="518" y2="206" />
      </g>

      {/* Dijkstra's fewest-hop route - bold throughout */}
      <g stroke="var(--primary)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <line x1="140" y1="198" x2="188" y2="198" />
        <line x1="300" y1="198" x2="348" y2="145" />
        <line x1="460" y1="145" x2="514" y2="190" markerEnd="url(#qaArrow)" />
      </g>

      {!prefersReducedMotion && (
        <motion.circle
          r={5}
          fill="var(--primary)"
          initial={{ cx: NODES.victim.cx, cy: NODES.victim.cy }}
          animate={{
            cx: [
              NODES.victim.cx,
              NODES.relayB.cx,
              NODES.relayB.cx,
              NODES.relayD.cx,
              NODES.relayD.cx,
              NODES.gateway.cx,
            ],
            cy: [
              NODES.victim.cy,
              NODES.relayB.cy,
              NODES.relayB.cy,
              NODES.relayD.cy,
              NODES.relayD.cy,
              NODES.gateway.cy,
            ],
          }}
          transition={{
            duration: PACKET_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.28, 0.33, 0.61, 0.66, 1],
          }}
        />
      )}

      {!prefersReducedMotion &&
        [
          { ...NODES.victim, delay: 0 },
          { ...NODES.relayB, delay: (0.3 * PACKET_DURATION) },
          { ...NODES.relayD, delay: (0.635 * PACKET_DURATION) },
          { ...NODES.gateway, delay: 0.01 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={8}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1.6, 1.6] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: PACKET_DURATION - 0.6,
              delay: node.delay,
              ease: "easeOut",
            }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        ))}

      {/* Victim device */}
      <g>
        <rect
          x="30"
          y="170"
          width="110"
          height="56"
          rx="10"
          fill="var(--card)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <text
          x="85"
          y="190"
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize="14"
          fontWeight="500"
          fill="var(--primary)"
        >
          Victim device
        </text>
        <text
          x="85"
          y="209"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--muted-foreground)"
        >
          SOS · no signal
        </text>
      </g>

      {/* Relay nodes */}
      <g fill="var(--card)" stroke="var(--chart-2)" strokeWidth="1">
        <rect x="190" y="64" width="110" height="56" rx="10" />
        <rect x="190" y="170" width="110" height="56" rx="10" />
        <rect x="190" y="276" width="110" height="56" rx="10" />
        <rect x="350" y="117" width="110" height="56" rx="10" />
        <rect x="350" y="229" width="110" height="56" rx="10" />
      </g>

      <g
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="13"
        fontWeight="500"
        fill="var(--chart-2)"
      >
        <text x="245" y="88">Relay A</text>
        <text x="245" y="194">Relay B</text>
        <text x="245" y="300">Relay C</text>
        <text x="405" y="141">Relay D</text>
        <text x="405" y="253">Relay E</text>
      </g>

      <g
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="var(--muted-foreground)"
      >
        <text x="245" y="107">no storage</text>
        <text x="245" y="213">no storage</text>
        <text x="245" y="319">no storage</text>
        <text x="405" y="160">no storage</text>
        <text x="405" y="272">no storage</text>
      </g>

      {/* Gateway - the one node with connectivity */}
      <g>
        <rect
          x="520"
          y="170"
          width="110"
          height="56"
          rx="10"
          fill="var(--primary)"
          stroke="var(--primary)"
          strokeWidth="1"
        />
        <text
          x="575"
          y="190"
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize="14"
          fontWeight="500"
          fill="var(--primary-foreground)"
        >
          Gateway
        </text>
        <text
          x="575"
          y="209"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--primary-foreground)"
        >
          has connectivity
        </text>
      </g>

      <g
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="12"
        fill="var(--muted-foreground)"
      >
        <text x="340" y="372">
          Bold route = fewest hops, chosen by Dijkstra&apos;s shortest path
        </text>
        <text x="340" y="392">
          Payload stays encrypted end to end — relays forward it, never read or retain it
        </text>
      </g>
    </svg>
  );
}
