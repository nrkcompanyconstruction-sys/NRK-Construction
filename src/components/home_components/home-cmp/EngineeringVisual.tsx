'use client'

import React from 'react'

const stars = [
  [58, 56, 1.1, 0.48], [118, 88, 0.8, 0.38], [186, 48, 1.2, 0.42],
  [302, 78, 0.9, 0.52], [412, 42, 1.1, 0.36], [526, 92, 0.8, 0.46],
  [642, 54, 1.3, 0.42], [748, 84, 0.9, 0.44], [846, 46, 1.1, 0.36],
  [958, 82, 0.8, 0.48], [1084, 52, 1.2, 0.40], [1146, 112, 0.9, 0.36],
]

const windowRows = [0, 1, 2, 3]
const windowCols = [0, 1, 2]
const substationUnits = [0, 1, 2, 3]
const roadMarkers = [110, 250, 390, 530, 670, 810, 950, 1090]

const styles = `
  @keyframes ev-drift { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-10px,0); } }
  @keyframes ev-pulse { 0%,100% { opacity: .58; } 50% { opacity: 1; } }
  @keyframes ev-softPulse { 0%,100% { opacity: .28; } 50% { opacity: .68; } }
  @keyframes ev-flow { from { stroke-dashoffset: 92; } to { stroke-dashoffset: 0; } }
  @keyframes ev-road { from { stroke-dashoffset: 120; } to { stroke-dashoffset: 0; } }
  @keyframes ev-scan { 0% { transform: translateY(-90px); opacity: 0; } 12% { opacity: .16; } 88% { opacity: .08; } 100% { transform: translateY(650px); opacity: 0; } }
  @keyframes ev-crane { 0%,100% { transform: translateX(0); } 50% { transform: translateX(46px); } }
  @keyframes ev-hook { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
  @keyframes ev-window { 0%,100% { opacity: .34; } 50% { opacity: .76; } }
  @keyframes ev-dash { from { stroke-dashoffset: 42; } to { stroke-dashoffset: 0; } }
  .ev-drift { animation: ev-drift 6s ease-in-out infinite; }
  .ev-pulse { animation: ev-pulse 2.8s ease-in-out infinite; }
  .ev-softPulse { animation: ev-softPulse 4.2s ease-in-out infinite; }
  .ev-flow { animation: ev-flow 3.4s linear infinite; }
  .ev-road { animation: ev-road 2.8s linear infinite; }
  .ev-scan { animation: ev-scan 9s linear infinite; }
  .ev-crane { animation: ev-crane 8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
  .ev-hook { animation: ev-hook 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
  .ev-window { animation: ev-window 4s ease-in-out infinite; }
  .ev-dash { animation: ev-dash 2.7s linear infinite; }
`

const EngineeringVisual = () => (
  <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#06111f]">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <svg
      viewBox="0 0 1200 620"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Animated civil construction and electrical infrastructure landscape"
    >
      <defs>
        <linearGradient id="ev-sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#030712" />
          <stop offset="42%" stopColor="#07182a" />
          <stop offset="100%" stopColor="#102032" />
        </linearGradient>
        <linearGradient id="ev-ground" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#172535" />
          <stop offset="100%" stopColor="#07111d" />
        </linearGradient>
        <linearGradient id="ev-roadFill" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#192636" />
          <stop offset="50%" stopColor="#263346" />
          <stop offset="100%" stopColor="#192636" />
        </linearGradient>
        <linearGradient id="ev-orangeLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
          <stop offset="18%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="82%" stopColor="#f59e0b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ev-building" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#20344a" />
          <stop offset="100%" stopColor="#0d1827" />
        </linearGradient>
        <linearGradient id="ev-powerhouse" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#263a54" />
          <stop offset="48%" stopColor="#152740" />
          <stop offset="100%" stopColor="#0b1422" />
        </linearGradient>
        <radialGradient id="ev-blueGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ev-orangeGlow" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <pattern id="ev-grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M42 0H0V42" fill="none" stroke="#24415f" strokeWidth="0.5" opacity="0.55" />
        </pattern>
        <filter id="ev-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="620" fill="url(#ev-sky)" />
      <rect width="1200" height="620" fill="url(#ev-grid)" opacity="0.54" />
      <ellipse cx="755" cy="210" rx="330" ry="150" fill="url(#ev-blueGlow)" className="ev-softPulse" />
      <ellipse cx="970" cy="430" rx="220" ry="120" fill="url(#ev-orangeGlow)" className="ev-softPulse" style={{ animationDelay: '1.4s' }} />
      <ellipse cx="350" cy="460" rx="260" ry="120" fill="#0ea5e9" opacity="0.08" />

      {stars.map(([cx, cy, r, opacity], index) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#ffffff" opacity={opacity} className="ev-pulse" style={{ animationDelay: `${index * 0.28}s` }} />
      ))}

      <path d="M70 178 C245 112 380 214 552 146 C718 82 844 178 1018 114 C1092 88 1146 96 1190 116" fill="none" stroke="#5ea7df" strokeWidth="1.4" opacity="0.38" strokeDasharray="10 10" className="ev-flow" />
      <path d="M34 234 C230 182 362 258 548 206 C720 158 864 224 1060 176 C1118 162 1164 164 1204 178" fill="none" stroke="#f97316" strokeWidth="1.1" opacity="0.32" strokeDasharray="8 12" className="ev-flow" style={{ animationDelay: '1.1s' }} />

      <g opacity="0.82">
        <line x1="68" y1="150" x2="26" y2="438" stroke="#31445b" strokeWidth="4" />
        <line x1="78" y1="150" x2="124" y2="438" stroke="#31445b" strokeWidth="4" />
        <line x1="30" y1="385" x2="122" y2="385" stroke="#31445b" strokeWidth="3" />
        <line x1="42" y1="286" x2="108" y2="340" stroke="#26394f" strokeWidth="2" />
        <line x1="108" y1="286" x2="42" y2="340" stroke="#26394f" strokeWidth="2" />
        <line x1="12" y1="196" x2="138" y2="196" stroke="#31445b" strokeWidth="3" />
        <line x1="32" y1="232" x2="118" y2="232" stroke="#31445b" strokeWidth="2.4" />
        <path d="M73 132 L58 166 H88 Z" fill="#26394f" />
        <circle cx="73" cy="128" r="6" fill="#f97316" filter="url(#ev-glow)" className="ev-pulse" />
      </g>

      <g opacity="0.78">
        <line x1="1062" y1="132" x2="1014" y2="432" stroke="#31445b" strokeWidth="4" />
        <line x1="1074" y1="132" x2="1122" y2="432" stroke="#31445b" strokeWidth="4" />
        <line x1="1018" y1="386" x2="1118" y2="386" stroke="#31445b" strokeWidth="3" />
        <line x1="1030" y1="284" x2="1108" y2="342" stroke="#26394f" strokeWidth="2" />
        <line x1="1108" y1="284" x2="1030" y2="342" stroke="#26394f" strokeWidth="2" />
        <line x1="1000" y1="184" x2="1138" y2="184" stroke="#31445b" strokeWidth="3" />
        <line x1="1024" y1="222" x2="1114" y2="222" stroke="#31445b" strokeWidth="2.4" />
        <path d="M1068 114 L1053 148 H1083 Z" fill="#26394f" />
        <circle cx="1068" cy="110" r="6" fill="#38bdf8" filter="url(#ev-glow)" className="ev-pulse" style={{ animationDelay: '1.6s' }} />
      </g>

      <g>
        <rect x="0" y="456" width="1200" height="164" fill="url(#ev-ground)" />
        <path d="M0 476 C230 446 360 500 565 468 C785 432 970 474 1200 444 V542 H0 Z" fill="url(#ev-roadFill)" />
        <path d="M0 504 C235 476 372 526 570 494 C790 460 980 500 1200 470" fill="none" stroke="url(#ev-orangeLine)" strokeWidth="4" strokeDasharray="40 26" className="ev-road" />
        <path d="M0 466 C250 438 384 492 574 462 C812 425 1005 464 1200 438" fill="none" stroke="#9fb1c5" strokeWidth="1.2" opacity="0.28" />
        <path d="M0 540 C236 512 380 560 584 530 C814 496 996 528 1200 500" fill="none" stroke="#0b1522" strokeWidth="18" opacity="0.7" />
        {roadMarkers.map((cx) => (
          <circle key={cx} cx={cx} cy="501" r="3" fill="#f59e0b" opacity="0.48" />
        ))}
      </g>

      <g transform="translate(142 282)">
        <rect x="0" y="82" width="92" height="104" fill="url(#ev-building)" />
        <rect x="8" y="60" width="76" height="26" fill="#17283d" />
        <rect x="-4" y="74" width="100" height="10" fill="#263a54" />
        {windowRows.map((row) => windowCols.map((col) => (
          <rect
            key={`a-${row}-${col}`}
            x={16 + col * 24}
            y={96 + row * 19}
            width="12"
            height="9"
            rx="1"
            fill={col === 1 ? '#f59e0b' : '#67e8f9'}
            opacity="0.38"
            className="ev-window"
            style={{ animationDelay: `${(row + col) * 0.35}s` }}
          />
        )))}
        <rect x="35" y="158" width="23" height="28" fill="#050b14" />
      </g>

      <g transform="translate(252 248)">
        <rect x="0" y="36" width="122" height="222" fill="url(#ev-building)" />
        <rect x="-5" y="28" width="132" height="12" fill="#263a54" />
        <rect x="32" y="6" width="52" height="27" fill="#17283d" />
        {windowRows.map((row) => [0, 1, 2, 3].map((col) => (
          <rect
            key={`b-${row}-${col}`}
            x={15 + col * 27}
            y={56 + row * 32}
            width="15"
            height="13"
            rx="1"
            fill={row % 2 ? '#60a5fa' : '#fbbf24'}
            opacity="0.3"
            className="ev-window"
            style={{ animationDelay: `${(row * 0.4) + (col * 0.22)}s` }}
          />
        )))}
        <rect x="42" y="208" width="34" height="50" rx="2" fill="#050b14" />
        <rect x="41" y="204" width="36" height="6" rx="1" fill="#f97316" opacity="0.38" />
      </g>

      <g transform="translate(424 166)">
        <rect x="0" y="96" width="220" height="292" rx="2" fill="url(#ev-powerhouse)" />
        <rect x="-8" y="86" width="236" height="13" rx="2" fill="#2c4058" />
        <rect x="52" y="36" width="114" height="62" fill="#182a40" />
        <rect x="47" y="26" width="124" height="12" fill="#2c4058" />
        <rect x="18" y="16" width="27" height="82" rx="2" fill="#122237" />
        <rect x="176" y="36" width="24" height="62" rx="2" fill="#122237" />
        <ellipse cx="31" cy="7" rx="17" ry="8" fill="#90a4bc" opacity="0.12" className="ev-drift" />
        <ellipse cx="188" cy="28" rx="13" ry="6" fill="#90a4bc" opacity="0.12" className="ev-drift" style={{ animationDelay: '1.2s' }} />
        <rect x="38" y="130" width="144" height="58" rx="3" fill="#071320" stroke="#28415c" />
        <circle cx="110" cy="159" r="23" fill="#07111d" stroke="#38bdf8" strokeWidth="2" opacity="0.82" />
        <path d="M110 136 L118 160 L94 152 L126 152 L102 160 Z" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.8" className="ev-dash" strokeDasharray="8 6" />
        <text x="84" y="204" fontSize="12" fill="#f97316" fontFamily="monospace" fontWeight="700" opacity="0.9">POWERHOUSE</text>
        {[0, 1, 2].map((col) => (
          <g key={col} transform={`translate(${36 + col * 58} 230)`}>
            <rect width="38" height="70" rx="2" fill="#0a1523" stroke="#263b52" />
            <rect x="6" y="9" width="26" height="14" rx="1" fill="#60a5fa" opacity="0.22" className="ev-window" style={{ animationDelay: `${col * 0.5}s` }} />
            <rect x="6" y="32" width="26" height="7" rx="1" fill="#f97316" opacity="0.28" />
            <rect x="6" y="48" width="26" height="7" rx="1" fill="#f97316" opacity="0.2" />
          </g>
        ))}
        <rect x="83" y="330" width="54" height="58" rx="2" fill="#050b14" />
        <rect x="80" y="325" width="60" height="8" rx="1" fill="#f97316" opacity="0.34" />
      </g>

      <g transform="translate(720 306)">
        <rect x="0" y="34" width="322" height="116" rx="4" fill="#071320" opacity="0.66" stroke="#36506a" strokeDasharray="10 8" />
        <rect x="18" y="16" width="260" height="8" rx="3" fill="#38bdf8" opacity="0.58" filter="url(#ev-glow)" />
        <path d="M24 16V52 M93 16V52 M162 16V52 M231 16V52" stroke="#61aee8" strokeWidth="2" opacity="0.65" />
        {substationUnits.map((unit) => (
          <g key={unit} transform={`translate(${20 + unit * 70} 54)`}>
            <rect width="48" height="58" rx="3" fill="#102033" stroke="#2b435b" />
            <rect x="5" y="-12" width="9" height="13" rx="2" fill="#334b64" />
            <rect x="20" y="-12" width="9" height="13" rx="2" fill="#334b64" />
            <rect x="35" y="-12" width="9" height="13" rx="2" fill="#334b64" />
            {[8, 16, 24, 32, 40].map((x) => (
              <line key={x} x1={x} y1="8" x2={x} y2="50" stroke="#31465e" strokeWidth="2" />
            ))}
            <text x="13" y="35" fontSize="10" fill="#60a5fa" fontFamily="monospace" opacity="0.78">{`T${unit + 1}`}</text>
          </g>
        ))}
        <rect x="230" y="86" width="68" height="58" rx="3" fill="#102033" stroke="#2b435b" />
        <rect x="242" y="101" width="18" height="13" rx="1" fill="#60a5fa" opacity="0.22" className="ev-window" />
        <rect x="270" y="101" width="18" height="13" rx="1" fill="#f59e0b" opacity="0.28" className="ev-window" style={{ animationDelay: '1.2s' }} />
        <text x="244" y="134" fontSize="10" fill="#f97316" fontFamily="monospace" fontWeight="700" opacity="0.86">GIS</text>
        <circle cx="96" cy="20" r="13" fill="#38bdf8" opacity="0.13" className="ev-pulse" />
        <circle cx="236" cy="20" r="13" fill="#f97316" opacity="0.12" className="ev-pulse" style={{ animationDelay: '1.1s' }} />
      </g>

      <g transform="translate(650 254)" opacity="0.82">
        <g className="ev-crane">
          <line x1="0" y1="0" x2="178" y2="-42" stroke="#455c75" strokeWidth="5" />
          <line x1="28" y1="-7" x2="60" y2="-15" stroke="#f97316" strokeWidth="2" opacity="0.62" />
          <line x1="82" y1="-20" x2="116" y2="-28" stroke="#f97316" strokeWidth="2" opacity="0.52" />
          <line x1="148" y1="-35" x2="148" y2="22" stroke="#455c75" strokeWidth="2" strokeDasharray="5 5" className="ev-dash" />
          <g className="ev-hook">
            <path d="M139 22 H157 V36 H139 Z" fill="#f97316" opacity="0.68" />
            <path d="M148 36 C148 48 162 44 159 54" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.72" />
          </g>
        </g>
        <line x1="0" y1="0" x2="0" y2="206" stroke="#455c75" strokeWidth="6" />
        <line x1="-26" y1="206" x2="36" y2="206" stroke="#455c75" strokeWidth="7" />
        <line x1="-20" y1="44" x2="20" y2="84" stroke="#30445a" strokeWidth="2" />
        <line x1="20" y1="44" x2="-20" y2="84" stroke="#30445a" strokeWidth="2" />
        <line x1="-20" y1="112" x2="20" y2="152" stroke="#30445a" strokeWidth="2" />
        <line x1="20" y1="112" x2="-20" y2="152" stroke="#30445a" strokeWidth="2" />
      </g>

      <g opacity="0.48">
        <circle cx="594" cy="340" r="138" fill="none" stroke="#7dd3fc" strokeWidth="0.8" strokeDasharray="8 12" className="ev-dash" />
        <circle cx="594" cy="340" r="86" fill="none" stroke="#f97316" strokeWidth="0.7" strokeDasharray="7 14" className="ev-dash" style={{ animationDelay: '1s' }} />
        <path d="M456 340H732 M594 202V478" stroke="#7dd3fc" strokeWidth="0.5" opacity="0.46" />
        <path d="M76 488 H214 M76 488 V432 M78 432 H132" stroke="#f97316" strokeWidth="1.2" strokeDasharray="8 8" className="ev-dash" />
        <path d="M1012 294 H1138 M1138 294 V376" stroke="#7dd3fc" strokeWidth="1.2" strokeDasharray="8 8" className="ev-dash" style={{ animationDelay: '0.8s' }} />
      </g>

      <g>
        <rect x="58" y="66" width="184" height="84" rx="6" fill="#03101d" opacity="0.74" stroke="#28425b" />
        <rect x="58" y="66" width="5" height="84" rx="2" fill="#f97316" opacity="0.78" />
        <text x="78" y="92" fontSize="11" fill="#7dd3fc" fontFamily="monospace" letterSpacing="1.4">SYSTEM STATUS</text>
        <circle cx="82" cy="116" r="5" fill="#22c55e" filter="url(#ev-glow)" className="ev-pulse" />
        <text x="94" y="120" fontSize="12" fill="#22c55e" fontFamily="monospace" fontWeight="700">ONLINE</text>
        <text x="78" y="139" fontSize="10" fill="#9fb1c5" fontFamily="monospace">132 kV GRID  |  RCC ROUTE</text>
      </g>

      <g transform="translate(934 76)">
        <rect width="206" height="84" rx="6" fill="#03101d" opacity="0.72" stroke="#28425b" />
        <rect x="14" y="16" width="56" height="6" rx="2" fill="#60a5fa" opacity="0.42" />
        <rect x="14" y="33" width="118" height="6" rx="2" fill="#f97316" opacity="0.48" />
        <rect x="14" y="50" width="156" height="6" rx="2" fill="#60a5fa" opacity="0.28" />
        <text x="14" y="74" fontSize="10" fill="#9fb1c5" fontFamily="monospace">AIS  GIS  GSS  CIVIL</text>
      </g>

      <rect x="0" y="0" width="1200" height="620" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
      <rect x="0" y="0" width="1200" height="90" fill="#60a5fa" opacity="0.08" className="ev-scan" />
      <rect width="1200" height="620" fill="url(#ev-sky)" opacity="0.02" />
    </svg>
  </div>
)

export default EngineeringVisual
