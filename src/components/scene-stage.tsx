"use client";
// @ts-nocheck
import { B, z } from "@/lib/deps";
import { Y_ } from "@/components/avatar";
import { ch } from "@/lib/router";
import { Ig, Rg } from "@/components/ui/primitives";

export var Q_ = new Map(
    [
      {
        locationId: `cafe`,
        kind: `counter`,
        sign: `Bluebird Coffee`,
        palette: { wall: `#f3e2c7`, floor: `#8a5a3c`, accent: `#2f7d6d` },
        props: [`☕`, `🥐`, `🪴`],
      },
      {
        locationId: `restaurant`,
        kind: `counter`,
        sign: `Rosa's`,
        palette: { wall: `#f6d9c3`, floor: `#6b3e2e`, accent: `#c0392b` },
        props: [`🍝`, `🍷`, `🕯️`],
      },
      {
        locationId: `airport`,
        kind: `counter`,
        sign: `Check-in · Gate B12`,
        palette: { wall: `#dfe8f2`, floor: `#9aa7b5`, accent: `#1f5fa8` },
        props: [`✈️`, `🧳`, `🛫`],
      },
      {
        locationId: `hotel`,
        kind: `counter`,
        sign: `Front Desk`,
        palette: { wall: `#efe4d2`, floor: `#7a2e2e`, accent: `#b08d3c` },
        props: [`🔑`, `🛎️`, `💐`],
      },
      {
        locationId: `clinic`,
        kind: `clinic`,
        sign: `Walk-in Clinic`,
        palette: { wall: `#eaf4f1`, floor: `#bfd4cf`, accent: `#2a9d8f` },
        props: [`🩺`, `💊`, `🧴`],
      },
      {
        locationId: `apartment`,
        kind: `room`,
        sign: `Apt 3B`,
        palette: { wall: `#f1e9dc`, floor: `#9c7a55`, accent: `#6c8e5a` },
        props: [`🛋️`, `🪴`, `🖼️`],
      },
      {
        locationId: `shop`,
        kind: `counter`,
        sign: `Harbor Threads`,
        palette: { wall: `#f8e1e7`, floor: `#5c4b51`, accent: `#d84a7a` },
        props: [`👗`, `👕`, `🧢`],
      },
      {
        locationId: `street`,
        kind: `outdoor`,
        sign: `Maple St`,
        palette: { wall: `#bfe3f7`, floor: `#8f8f8f`, accent: `#3f8f4a` },
        props: [`🌳`, `🐕`, `🚏`],
      },
      {
        locationId: `bank`,
        kind: `counter`,
        sign: `First Harbor Bank`,
        palette: { wall: `#e8ecef`, floor: `#5a6b7a`, accent: `#1b4d7a` },
        props: [`💳`, `🏧`, `📄`],
      },
      {
        locationId: `interview`,
        kind: `office`,
        sign: `Brightline Analytics`,
        palette: { wall: `#eef1f5`, floor: `#8c96a3`, accent: `#4a6fa5` },
        props: [`📋`, `🪴`, `💼`],
      },
      {
        locationId: `office`,
        kind: `office`,
        sign: `Brightline · Eng`,
        palette: { wall: `#f4f1ea`, floor: `#9d8f7c`, accent: `#3b7a57` },
        props: [`🖥️`, `☕`, `📈`],
      },
      {
        locationId: `meeting`,
        kind: `meeting`,
        sign: `Q3 Roadmap`,
        palette: { wall: `#f1f3f6`, floor: `#7f8a99`, accent: `#d9822b` },
        props: [`📊`, `🗓️`, `🖊️`],
      },
      {
        locationId: `client`,
        kind: `call`,
        sign: `Harbor Home · London`,
        palette: { wall: `#1f2937`, floor: `#111827`, accent: `#22c55e` },
        props: [`🎧`, `🏠`, `🇬🇧`],
      },
      {
        locationId: `breakroom`,
        kind: `counter`,
        sign: `Break Room`,
        palette: { wall: `#fdf0d5`, floor: `#a9865b`, accent: `#e07a5f` },
        props: [`🍩`, `☕`, `🧃`],
      },
      {
        locationId: `conference`,
        kind: `hall`,
        sign: `SaaS Connect 2026`,
        palette: { wall: `#2b2d42`, floor: `#3d405b`, accent: `#ef476f` },
        props: [`🎤`, `🎟️`, `🥂`],
      },
      {
        locationId: `professor`,
        kind: `office`,
        sign: `Econ 101 · Office Hours`,
        palette: { wall: `#efe6d3`, floor: `#7b5a3a`, accent: `#8d5524` },
        props: [`📚`, `🌍`, `🏺`],
      },
      {
        locationId: `library`,
        kind: `counter`,
        sign: `Reference Desk`,
        palette: { wall: `#e9e4d8`, floor: `#6f5b45`, accent: `#5b7b6a` },
        props: [`📚`, `🔖`, `🧑‍💻`],
      },
      {
        locationId: `dorm`,
        kind: `room`,
        sign: `Room 214`,
        palette: { wall: `#e4ecf7`, floor: `#8b8fa3`, accent: `#e76f51` },
        props: [`🎮`, `🛏️`, `🍕`],
      },
      {
        locationId: `group`,
        kind: `classroom`,
        sign: `Project plan`,
        palette: { wall: `#f6f1e6`, floor: `#a28b6c`, accent: `#2a9d8f` },
        props: [`💻`, `📝`, `🧋`],
      },
      {
        locationId: `advisor`,
        kind: `office`,
        sign: `Advising Office`,
        palette: { wall: `#f2eee9`, floor: `#8a7f73`, accent: `#7b5ea7` },
        props: [`🗂️`, `🎓`, `🪴`],
      },
      {
        locationId: `club`,
        kind: `hall`,
        sign: `Club Fair`,
        palette: { wall: `#fff3cd`, floor: `#c9a66b`, accent: `#f4a261` },
        props: [`🎬`, `🍿`, `🎈`],
      },
      {
        locationId: `seminar`,
        kind: `classroom`,
        sign: `Writing Seminar`,
        palette: { wall: `#eef3ee`, floor: `#8d9b8d`, accent: `#264653` },
        props: [`✍️`, `📖`, `🧠`],
      },
    ].map((e) => [e.locationId, e]),
  );

export var $_ = (e) => Q_.get(e);

export var ev = 290;

export var tv = `'Geist Variable', ui-sans-serif, system-ui, sans-serif`;

export function $(e, t) {
  let n = e.replace(`#`, ``);
  n.length === 3 &&
    (n = n
      .split(``)
      .map((e) => e + e)
      .join(``));
  let r = parseInt(n, 16),
    i = (e) => {
      let n = (r >> e) & 255,
        i = t >= 0 ? n + (255 - n) * t : n * (1 + t);
      return Math.round(Math.max(0, Math.min(255, i)));
    };
  return `#${((i(16) << 16) | (i(8) << 8) | i(0)).toString(16).padStart(6, `0`)}`;
}

export var nv = {
    locationId: `_`,
    kind: `counter`,
    sign: `English Town`,
    palette: { wall: `#efe7d9`, floor: `#8a6a4a`, accent: `#2f7d6d` },
    props: [`🏘️`, `☕`],
  };

export var rv = (e) => $_(e) ?? nv;

export function iv({ x: e, y: t, size: n = 44, children: r, opacity: i }) {
  return (0, z.jsx)(`text`, {
    x: e,
    y: t,
    fontSize: n,
    textAnchor: `middle`,
    dominantBaseline: `middle`,
    opacity: i,
    children: r,
  });
}

export function av({
  x: e,
  y: t,
  w: n,
  h: r,
  text: i,
  fill: a,
  color: o,
  size: s = 24,
  rx: c = 8,
}) {
  return (0, z.jsxs)(`g`, {
    children: [
      (0, z.jsx)(`rect`, { x: e, y: t, width: n, height: r, rx: c, fill: a }),
      (0, z.jsx)(`text`, {
        x: e + n / 2,
        y: t + r / 2 + 1,
        fontFamily: tv,
        fontSize: s,
        fontWeight: 600,
        fill: o,
        textAnchor: `middle`,
        dominantBaseline: `middle`,
        textLength: Math.min(n - 24, i.length * s * 0.58),
        lengthAdjust: `spacingAndGlyphs`,
        children: i,
      }),
    ],
  });
}

export function ov({ x: e, y: t, w: n, h: r, frame: i }) {
  return (0, z.jsxs)(`g`, {
    children: [
      (0, z.jsx)(`rect`, { x: e, y: t, width: n, height: r, fill: `#dcefff` }),
      (0, z.jsx)(`rect`, {
        x: e,
        y: t + r * 0.62,
        width: n,
        height: r * 0.38,
        fill: `#b9dcb0`,
        opacity: 0.6,
      }),
      (0, z.jsx)(`ellipse`, {
        cx: e + n * 0.3,
        cy: t + r * 0.3,
        rx: n * 0.14,
        ry: r * 0.08,
        fill: `#fff`,
        opacity: 0.9,
      }),
      (0, z.jsx)(`ellipse`, {
        cx: e + n * 0.42,
        cy: t + r * 0.26,
        rx: n * 0.1,
        ry: r * 0.07,
        fill: `#fff`,
        opacity: 0.9,
      }),
      (0, z.jsx)(`rect`, {
        x: e,
        y: t,
        width: n,
        height: r,
        fill: `none`,
        stroke: i,
        strokeWidth: 10,
      }),
      (0, z.jsx)(`rect`, {
        x: e + n / 2 - 4,
        y: t,
        width: 8,
        height: r,
        fill: i,
      }),
      (0, z.jsx)(`rect`, {
        x: e,
        y: t + r / 2 - 4,
        width: n,
        height: 8,
        fill: i,
      }),
    ],
  });
}

export function sv({ spec: e }) {
  let { wall: t, floor: n, accent: r } = e.palette,
    [i = `✨`, a = `✨`, o = `✨`] = e.props,
    s = $(t, -0.35);
  switch (e.kind) {
    case `counter`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 40,
            y: 104,
            width: 250,
            height: 8,
            fill: $(n, -0.1),
          }),
          (0, z.jsx)(`rect`, {
            x: 40,
            y: 184,
            width: 250,
            height: 8,
            fill: $(n, -0.1),
          }),
          (0, z.jsx)(iv, { x: 80, y: 82, children: i }),
          (0, z.jsx)(iv, { x: 170, y: 82, children: a }),
          (0, z.jsx)(iv, { x: 250, y: 84, size: 36, children: o }),
          (0, z.jsx)(iv, { x: 100, y: 164, size: 36, children: o }),
          (0, z.jsx)(iv, { x: 230, y: 164, size: 36, children: i }),
          (0, z.jsx)(av, {
            x: 440,
            y: 14,
            w: 300,
            h: 46,
            text: e.sign,
            fill: $(r, -0.25),
            color: `#fff`,
          }),
          [0, 1, 2, 3].map((e) =>
            (0, z.jsx)(
              `rect`,
              {
                x: 460,
                y: 124 + e * 24,
                width: e % 2 ? 160 : 230,
                height: 8,
                rx: 4,
                fill: s,
                opacity: 0.45,
              },
              e,
            ),
          ),
          [410, 772].map((e) =>
            (0, z.jsxs)(
              `g`,
              {
                children: [
                  (0, z.jsx)(`rect`, {
                    x: e - 1,
                    y: 0,
                    width: 2,
                    height: 34,
                    fill: s,
                  }),
                  (0, z.jsx)(`path`, {
                    d: `M${e - 26} 34 h52 l-10 24 h-32 z`,
                    fill: $(r, -0.1),
                  }),
                  (0, z.jsx)(`ellipse`, {
                    cx: e,
                    cy: 62,
                    rx: 24,
                    ry: 9,
                    fill: `#fff7d6`,
                    opacity: 0.7,
                  }),
                ],
              },
              e,
            ),
          ),
        ],
      });
    case `office`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 40,
            y: 48,
            width: 250,
            height: 242,
            fill: $(n, -0.05),
          }),
          [0, 1, 2].map((e) =>
            (0, z.jsxs)(
              `g`,
              {
                children: [
                  [54, 46, 38, 50, 42, 54, 46].map((n, i) =>
                    (0, z.jsx)(
                      `rect`,
                      {
                        x: 56 + i * 32,
                        y: 120 + e * 74 - n,
                        width: 22,
                        height: n,
                        rx: 2,
                        fill:
                          i % 3 == 0 ? r : i % 3 == 1 ? $(r, 0.45) : $(t, -0.5),
                        opacity: 0.9,
                      },
                      i,
                    ),
                  ),
                  (0, z.jsx)(`rect`, {
                    x: 50,
                    y: 120 + e * 74,
                    width: 230,
                    height: 6,
                    fill: $(n, -0.3),
                  }),
                ],
              },
              e,
            ),
          ),
          (0, z.jsx)(ov, { x: 480, y: 76, w: 250, h: 160, frame: $(t, -0.3) }),
          (0, z.jsx)(av, {
            x: 500,
            y: 26,
            w: 230,
            h: 38,
            text: e.sign,
            fill: $(r, -0.2),
            color: `#fff`,
            size: 18,
            rx: 6,
          }),
          (0, z.jsx)(iv, { x: 420, y: 262, size: 48, children: a }),
        ],
      });
    case `meeting`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 120,
            y: 34,
            width: 560,
            height: 248,
            rx: 6,
            fill: `#fff`,
            stroke: s,
            strokeWidth: 6,
          }),
          (0, z.jsx)(`text`, {
            x: 440,
            y: 66,
            fontFamily: tv,
            fontSize: 26,
            fontWeight: 600,
            fill: $(r, -0.3),
            children: e.sign,
          }),
          [50, 80, 68, 110, 128, 150].map((e, t) =>
            (0, z.jsx)(
              `rect`,
              {
                x: 440 + t * 36,
                y: 250 - e,
                width: 24,
                height: e,
                fill: t % 2 ? r : $(r, 0.4),
              },
              t,
            ),
          ),
          (0, z.jsx)(`path`, {
            d: `M150 226 L230 190 L300 206 L380 140 L430 162`,
            fill: `none`,
            stroke: $(r, -0.2),
            strokeWidth: 6,
            strokeLinecap: `round`,
          }),
          (0, z.jsx)(iv, { x: 720, y: 60, size: 30, children: a }),
          (0, z.jsx)(iv, { x: 60, y: 266, size: 40, children: o }),
        ],
      });
    case `classroom`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 70,
            y: 44,
            width: 660,
            height: 226,
            rx: 6,
            fill: `#fbfbf8`,
            stroke: $(n, -0.1),
            strokeWidth: 10,
          }),
          (0, z.jsx)(`text`, {
            x: 400,
            y: 72,
            fontFamily: tv,
            fontSize: 28,
            fontWeight: 500,
            fontStyle: `italic`,
            fill: $(r, -0.15),
            children: e.sign,
          }),
          [0, 1, 2, 3].map((e) =>
            (0, z.jsx)(
              `path`,
              {
                d: `M${420 + (e % 2) * 20} ${136 + e * 30} q 40 -14 80 0 t 80 0`,
                fill: `none`,
                stroke: $(r, 0.2),
                strokeWidth: 4,
                strokeLinecap: `round`,
                opacity: 0.8,
              },
              e,
            ),
          ),
          (0, z.jsx)(`circle`, {
            cx: 760,
            cy: 70,
            r: 16,
            fill: `#fff`,
            stroke: s,
            strokeWidth: 3,
          }),
          (0, z.jsx)(`path`, {
            d: `M760 60 v10 h7`,
            fill: `none`,
            stroke: s,
            strokeWidth: 2.5,
          }),
          (0, z.jsx)(iv, { x: 600, y: 232, size: 38, children: a }),
          (0, z.jsx)(iv, { x: 680, y: 232, size: 38, children: o }),
        ],
      });
    case `outdoor`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`circle`, { cx: 660, cy: 58, r: 32, fill: `#fff1b8` }),
          [110, 150, 80, 180, 124, 98, 144].map((e, n) =>
            (0, z.jsx)(
              `rect`,
              {
                x: n * 120 - 20,
                y: ev - e,
                width: 100,
                height: e,
                fill: $(t, -0.25),
              },
              n,
            ),
          ),
          [90, 330, 720].map((e, t) =>
            (0, z.jsxs)(
              `g`,
              {
                children: [
                  (0, z.jsx)(`rect`, {
                    x: e - 7,
                    y: 222,
                    width: 14,
                    height: 70,
                    fill: `#7a5230`,
                  }),
                  (0, z.jsx)(`circle`, {
                    cx: e,
                    cy: 204,
                    r: 44 + t * 5,
                    fill: $(r, t === 1 ? 0.15 : -0.05),
                  }),
                  (0, z.jsx)(`circle`, {
                    cx: e - 18,
                    cy: 222,
                    r: 28,
                    fill: $(r, 0.1),
                  }),
                ],
              },
              e,
            ),
          ),
          (0, z.jsx)(`rect`, {
            x: 560,
            y: 132,
            width: 6,
            height: 160,
            fill: `#4b5563`,
          }),
          (0, z.jsx)(av, {
            x: 500,
            y: 112,
            w: 160,
            h: 38,
            text: e.sign,
            fill: `#2e6b3a`,
            color: `#fff`,
            size: 20,
            rx: 4,
          }),
          (0, z.jsx)(`rect`, {
            x: 180,
            y: 142,
            width: 6,
            height: 150,
            fill: `#4b5563`,
          }),
          (0, z.jsx)(`circle`, { cx: 183, cy: 138, r: 12, fill: `#fff6c7` }),
          (0, z.jsx)(iv, { x: 430, y: 262, size: 44, children: o }),
        ],
      });
    case `room`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(ov, { x: 490, y: 52, w: 220, h: 166, frame: $(t, -0.3) }),
          (0, z.jsx)(`rect`, {
            x: 470,
            y: 42,
            width: 40,
            height: 196,
            fill: r,
            opacity: 0.9,
          }),
          (0, z.jsx)(`rect`, {
            x: 690,
            y: 42,
            width: 40,
            height: 196,
            fill: r,
            opacity: 0.9,
          }),
          (0, z.jsx)(`rect`, {
            x: 60,
            y: 56,
            width: 150,
            height: 150,
            rx: 4,
            fill: $(t, 0.4),
            stroke: $(n, -0.1),
            strokeWidth: 8,
          }),
          (0, z.jsx)(iv, { x: 135, y: 132, size: 64, children: o }),
          (0, z.jsx)(`rect`, {
            x: 40,
            y: 236,
            width: 320,
            height: 8,
            fill: $(n, -0.1),
          }),
          (0, z.jsx)(iv, { x: 90, y: 214, size: 38, children: a }),
          (0, z.jsx)(iv, { x: 300, y: 214, size: 38, children: i }),
          (0, z.jsx)(av, {
            x: 540,
            y: 8,
            w: 140,
            h: 34,
            text: e.sign,
            fill: $(t, -0.55),
            color: `#fff`,
            size: 18,
            rx: 6,
          }),
        ],
      });
    case `hall`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`polygon`, {
            points: `0,0 160,0 420,290 120,290`,
            fill: `#fff`,
            opacity: 0.07,
          }),
          (0, z.jsx)(`polygon`, {
            points: `800,0 640,0 380,290 680,290`,
            fill: `#fff`,
            opacity: 0.07,
          }),
          (0, z.jsx)(av, {
            x: 400,
            y: 12,
            w: 380,
            h: 54,
            text: e.sign,
            fill: r,
            color: `#fff`,
            size: 26,
            rx: 10,
          }),
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) =>
            (0, z.jsx)(
              `polygon`,
              {
                points: `${130 + e * 56},100 ${180 + e * 56},100 ${155 + e * 56},134`,
                fill: e % 2 ? $(r, 0.3) : `#fff`,
                opacity: 0.85,
              },
              e,
            ),
          ),
          (0, z.jsx)(iv, { x: 70, y: 200, size: 40, children: a }),
          (0, z.jsx)(iv, { x: 720, y: 180, size: 44, children: o }),
          (0, z.jsx)(iv, { x: 620, y: 258, size: 34, children: i }),
          [0, 1, 2, 3, 4, 5, 6, 7].map((e) =>
            (0, z.jsx)(
              `circle`,
              { cx: 470 + e * 44, cy: 290, r: 18, fill: s, opacity: 0.5 },
              e,
            ),
          ),
        ],
      });
    case `clinic`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 380,
            y: 66,
            width: 160,
            height: 204,
            rx: 4,
            fill: `#fff`,
            stroke: $(t, -0.3),
            strokeWidth: 6,
          }),
          (0, z.jsx)(`rect`, {
            x: 380,
            y: 166,
            width: 160,
            height: 4,
            fill: $(t, -0.3),
          }),
          (0, z.jsx)(`rect`, { x: 445, y: 96, width: 30, height: 10, fill: r }),
          (0, z.jsx)(`rect`, { x: 455, y: 86, width: 10, height: 30, fill: r }),
          (0, z.jsx)(iv, { x: 420, y: 230, size: 36, children: a }),
          (0, z.jsx)(iv, { x: 500, y: 230, size: 36, children: o }),
          (0, z.jsx)(`rect`, {
            x: 580,
            y: 60,
            width: 150,
            height: 170,
            fill: `#fff`,
            stroke: $(t, -0.3),
            strokeWidth: 4,
          }),
          [`E`, `F P`, `T O Z`, `L P E D`, `P E C F D`].map((e, t) =>
            (0, z.jsx)(
              `text`,
              {
                x: 655,
                y: 96 + t * 30,
                fontFamily: tv,
                fontSize: 36 - t * 6,
                fontWeight: 700,
                fill: `#222`,
                textAnchor: `middle`,
                children: e,
              },
              e,
            ),
          ),
          (0, z.jsx)(av, {
            x: 560,
            y: 14,
            w: 190,
            h: 38,
            text: e.sign,
            fill: r,
            color: `#fff`,
            size: 20,
            rx: 6,
          }),
        ],
      });
    case `call`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 60,
            y: 20,
            width: 680,
            height: 360,
            rx: 16,
            fill: `#0f172a`,
            stroke: `#334155`,
            strokeWidth: 3,
          }),
          (0, z.jsx)(`rect`, {
            x: 60,
            y: 20,
            width: 680,
            height: 36,
            rx: 16,
            fill: `#1e293b`,
          }),
          (0, z.jsx)(`rect`, {
            x: 60,
            y: 40,
            width: 680,
            height: 16,
            fill: `#1e293b`,
          }),
          (0, z.jsx)(`circle`, { cx: 88, cy: 38, r: 6, fill: `#ef4444` }),
          (0, z.jsx)(`circle`, { cx: 108, cy: 38, r: 6, fill: `#f59e0b` }),
          (0, z.jsx)(`circle`, { cx: 128, cy: 38, r: 6, fill: `#22c55e` }),
          (0, z.jsx)(`text`, {
            x: 560,
            y: 44,
            fontFamily: tv,
            fontSize: 18,
            fontWeight: 600,
            fill: `#cbd5e1`,
            textAnchor: `middle`,
            children: e.sign,
          }),
          (0, z.jsx)(`rect`, {
            x: 66,
            y: 60,
            width: 668,
            height: 314,
            rx: 10,
            fill: `#d7e1ea`,
          }),
          (0, z.jsx)(`rect`, {
            x: 66,
            y: 60,
            width: 668,
            height: 314,
            rx: 10,
            fill: `url(#callfade)`,
          }),
          (0, z.jsx)(ov, { x: 470, y: 92, w: 200, h: 130, frame: `#9aa8b5` }),
          (0, z.jsx)(iv, { x: 140, y: 270, size: 44, children: a }),
          (0, z.jsx)(`rect`, {
            x: 610,
            y: 68,
            width: 110,
            height: 26,
            rx: 13,
            fill: `#ef4444`,
            opacity: 0.9,
          }),
          (0, z.jsx)(`text`, {
            x: 665,
            y: 86,
            fontFamily: tv,
            fontSize: 14,
            fontWeight: 700,
            fill: `#fff`,
            textAnchor: `middle`,
            children: `● REC 00:12`,
          }),
        ],
      });
  }
}

export function cv({ spec: e }) {
  let { floor: t, accent: n } = e.palette,
    [r = `✨`] = e.props;
  switch (e.kind) {
    case `counter`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 262,
            width: 800,
            height: 138,
            fill: $(t, 0.08),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 258,
            width: 800,
            height: 12,
            fill: $(t, 0.4),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 270,
            width: 800,
            height: 5,
            fill: n,
            opacity: 0.7,
          }),
          (0, z.jsx)(iv, { x: 620, y: 244, size: 46, children: r }),
          (0, z.jsx)(`rect`, {
            x: 690,
            y: 216,
            width: 70,
            height: 44,
            rx: 6,
            fill: $(t, -0.4),
          }),
          (0, z.jsx)(`rect`, {
            x: 700,
            y: 224,
            width: 50,
            height: 14,
            rx: 3,
            fill: `#cfe8d5`,
          }),
        ],
      });
    case `office`:
    case `meeting`:
    case `classroom`:
    case `clinic`: {
      let n = e.kind === `clinic`;
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 288,
            width: 800,
            height: 112,
            fill: n ? `#f4f7f6` : $(t, 0.18),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 284,
            width: 800,
            height: 10,
            fill: n ? `#fff` : $(t, 0.45),
          }),
          (0, z.jsx)(iv, { x: 600, y: 268, size: 46, children: r }),
          (0, z.jsx)(`rect`, {
            x: 660,
            y: 252,
            width: 90,
            height: 12,
            rx: 3,
            fill: `#fff`,
            opacity: 0.9,
          }),
          (0, z.jsx)(`rect`, {
            x: 668,
            y: 238,
            width: 74,
            height: 10,
            rx: 3,
            fill: `#fff`,
            opacity: 0.9,
          }),
        ],
      });
    }
    case `room`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 312,
            width: 800,
            height: 88,
            rx: 14,
            fill: $(t, 0.15),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 308,
            width: 800,
            height: 10,
            fill: $(t, 0.4),
          }),
          (0, z.jsx)(iv, { x: 620, y: 292, size: 44, children: r }),
        ],
      });
    case `outdoor`:
      return (0, z.jsxs)(`g`, {
        children: [
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) =>
            (0, z.jsx)(
              `circle`,
              {
                cx: e * 100 + 20,
                cy: 312,
                r: 42,
                fill: $(n, e % 2 ? -0.15 : 0.02),
              },
              e,
            ),
          ),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 330,
            width: 800,
            height: 70,
            fill: $(n, -0.2),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 356,
            width: 800,
            height: 44,
            fill: `#9ca3af`,
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 352,
            width: 800,
            height: 6,
            fill: `#e5e7eb`,
          }),
        ],
      });
    case `hall`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 300,
            width: 800,
            height: 100,
            fill: $(t, 0.1),
          }),
          (0, z.jsx)(`rect`, {
            x: 0,
            y: 294,
            width: 800,
            height: 8,
            fill: $(t, 0.5),
          }),
          (0, z.jsx)(`rect`, {
            x: 130,
            y: 250,
            width: 180,
            height: 150,
            rx: 8,
            fill: $(n, -0.35),
          }),
          (0, z.jsx)(`rect`, {
            x: 140,
            y: 242,
            width: 160,
            height: 14,
            rx: 4,
            fill: $(n, 0.2),
          }),
          (0, z.jsx)(iv, { x: 220, y: 232, size: 38, children: r }),
        ],
      });
    case `call`:
      return (0, z.jsxs)(`g`, {
        children: [
          (0, z.jsx)(`rect`, {
            x: 66,
            y: 330,
            width: 668,
            height: 44,
            rx: 10,
            fill: `#0b1220`,
            opacity: 0.92,
          }),
          [-60, 0, 60].map((e, t) =>
            (0, z.jsx)(
              `circle`,
              {
                cx: 400 + e,
                cy: 352,
                r: 15,
                fill: t === 2 ? `#ef4444` : `#334155`,
              },
              e,
            ),
          ),
          (0, z.jsx)(`rect`, {
            x: 333,
            y: 346,
            width: 14,
            height: 12,
            rx: 3,
            fill: `#cbd5e1`,
          }),
          (0, z.jsx)(`rect`, {
            x: 394,
            y: 345,
            width: 12,
            height: 14,
            rx: 3,
            fill: `#cbd5e1`,
          }),
          (0, z.jsx)(`rect`, {
            x: 450,
            y: 348,
            width: 20,
            height: 8,
            rx: 4,
            fill: `#fff`,
          }),
        ],
      });
  }
}

export function lv({ spec: e, className: t }) {
  let { wall: n, floor: r } = e.palette,
    i = `wall-${e.locationId}`,
    a = `vig-${e.locationId}`,
    o = e.kind === `outdoor` ? `#9ca3af` : r;
  return (0, z.jsxs)(`svg`, {
    viewBox: `0 0 800 400`,
    preserveAspectRatio: `xMidYMid slice`,
    className: t,
    "aria-hidden": !0,
    children: [
      (0, z.jsxs)(`defs`, {
        children: [
          (0, z.jsxs)(`linearGradient`, {
            id: i,
            x1: `0`,
            y1: `0`,
            x2: `0`,
            y2: `1`,
            children: [
              (0, z.jsx)(`stop`, { offset: `0`, stopColor: $(n, 0.3) }),
              (0, z.jsx)(`stop`, { offset: `1`, stopColor: n }),
            ],
          }),
          (0, z.jsxs)(`radialGradient`, {
            id: a,
            cx: `0.5`,
            cy: `0.55`,
            r: `0.8`,
            children: [
              (0, z.jsx)(`stop`, {
                offset: `0.55`,
                stopColor: `#000`,
                stopOpacity: `0`,
              }),
              (0, z.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#000`,
                stopOpacity:
                  e.kind === `hall` || e.kind === `call` ? 0.45 : 0.16,
              }),
            ],
          }),
          (0, z.jsxs)(`linearGradient`, {
            id: `callfade`,
            x1: `0`,
            y1: `0`,
            x2: `0`,
            y2: `1`,
            children: [
              (0, z.jsx)(`stop`, {
                offset: `0`,
                stopColor: `#fff`,
                stopOpacity: `0.35`,
              }),
              (0, z.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#8fa3b5`,
                stopOpacity: `0.35`,
              }),
            ],
          }),
        ],
      }),
      (0, z.jsx)(`rect`, { width: 800, height: 400, fill: `url(#${i})` }),
      (0, z.jsx)(sv, { spec: e }),
      e.kind !== `call` &&
        (0, z.jsxs)(`g`, {
          children: [
            (0, z.jsx)(`rect`, { y: ev, width: 800, height: 110, fill: o }),
            (0, z.jsx)(`rect`, {
              y: 286,
              width: 800,
              height: 5,
              fill: $(o, -0.35),
            }),
          ],
        }),
      (0, z.jsx)(`rect`, { width: 800, height: 400, fill: `url(#${a})` }),
    ],
  });
}

export function uv({ spec: e, className: t }) {
  return (0, z.jsx)(`svg`, {
    viewBox: `0 0 800 400`,
    preserveAspectRatio: `xMidYMid slice`,
    className: B(`pointer-events-none`, t),
    "aria-hidden": !0,
    children: (0, z.jsx)(cv, { spec: e }),
  });
}

export function dv({
  loc: e,
  className: t,
  mood: n = `idle`,
  talking: r = !1,
  children: i,
}) {
  let a = rv(e.id);
  return (0, z.jsxs)(`div`, {
    className: B(`relative overflow-hidden bg-muted`, t),
    children: [
      (0, z.jsx)(lv, { spec: a, className: `absolute inset-0 h-full w-full` }),
      (0, z.jsx)(`div`, {
        className: `absolute bottom-0 left-[4%] aspect-square h-[88%]`,
        children: (0, z.jsx)(Y_, {
          npc: e.npc,
          mood: n,
          talking: r,
          blink: !1,
          className: `h-full w-full`,
        }),
      }),
      (0, z.jsx)(uv, { spec: a, className: `absolute inset-0 h-full w-full` }),
      i,
    ],
  });
}

export function fv({ loc: e, stars: t, sub: n }) {
  return (0, z.jsxs)(`button`, {
    className: `overflow-hidden rounded-xl border bg-card text-left transition hover:border-primary hover:shadow-sm`,
    onClick: () => ch(`/l/${e.id}`),
    children: [
      (0, z.jsx)(dv, {
        loc: e,
        className: `aspect-[2/1] w-full`,
        children: (0, z.jsx)(`span`, {
          className: `absolute right-2 top-2 rounded-full bg-background/80 px-1.5 py-0.5 text-sm leading-none backdrop-blur`,
          "aria-hidden": !0,
          children: e.emoji,
        }),
      }),
      (0, z.jsxs)(`div`, {
        className: `p-3`,
        children: [
          (0, z.jsx)(`div`, { className: `font-medium`, children: e.name }),
          (0, z.jsx)(`div`, {
            className: `truncate text-xs text-muted-foreground`,
            children: n ?? `${e.npc.name} · ${e.npc.role}`,
          }),
          (0, z.jsxs)(`div`, {
            className: `mt-2 flex items-center justify-between`,
            children: [
              (0, z.jsx)(Ig, {
                n: t,
                max: e.missions.length * 3,
                size: `size-3`,
              }),
              (0, z.jsx)(Rg, { level: e.missions[0]?.level ?? `A2` }),
            ],
          }),
        ],
      }),
    ],
  });
}