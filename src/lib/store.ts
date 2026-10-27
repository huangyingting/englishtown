"use client";
// @ts-nocheck
import { Pm } from "@/lib/llm";
import { Cm, bm } from "@/lib/deps";

export var Hm = [1, 3, 7, 14, 30];

export function Um(e = Date.now()) {
  return { stage: 0, due: e, hits: 0, misses: 0 };
}

export function Wm(e, t, n = Date.now()) {
  let r = 864e5;
  if (t) {
    let t = Math.min(e.stage + 1, Hm.length);
    return {
      stage: t,
      due: n + Hm[t - 1] * r,
      hits: e.hits + 1,
      misses: e.misses,
    };
  }
  return { stage: 0, due: n + r, hits: e.hits, misses: e.misses + 1 };
}

export function Gm(e, t = Date.now()) {
  return e.due <= t;
}

export function Km(e) {
  return e.stage >= Hm.length;
}

export function qm(e = new Date()) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`;
}

export function Jm(e, t) {
  let [n, r, i] = e.split(`-`).map(Number),
    [a, o, s] = t.split(`-`).map(Number),
    c = Date.UTC(n, r - 1, i),
    l = Date.UTC(a, o - 1, s);
  return Math.round((l - c) / 864e5);
}

export function Ym(e, t, n = qm()) {
  if (!e) return { last: n, streak: 1 };
  let r = Jm(e, n);
  return r === 0
    ? { last: e, streak: t }
    : r === 1
      ? { last: n, streak: t + 1 }
      : { last: n, streak: 1 };
}

export var Xm = { talk: !1, shadow: !1, write: !1, review: !1, bonus: !1 };

export var Zm = () => ({
    settings: {
      llm: Pm,
      voice: { voiceName: ``, rate: 0.95 },
      variety: `us`,
      autoPlay: !0,
      blindMode: !0,
      showZh: !1,
      nickname: ``,
      stage: !0,
      sfx: !0,
      avatar: `p1`,
    },
    xp: 0,
    streak: 0,
    lastDay: null,
    daily: {},
    missions: {},
    writing: {},
    skills: { listen: 0, speak: 0, read: 0, write: 0, grammar: 0 },
    totals: {
      turns: 0,
      corrections: 0,
      shadow: 0,
      dictation: 0,
      quizzes: 0,
      writings: 0,
      reviews: 0,
      missionsDone: 0,
    },
    achievements: [],
    notebook: [],
    sessions: {},
    lastUnlocked: null,
  });

export var Z = bm()(
    Cm(
      (e, t) => ({
        ...Zm(),
        setSettings: (t) => e((e) => ({ settings: { ...e.settings, ...t } })),
        setLlm: (t) =>
          e((e) => ({
            settings: { ...e.settings, llm: { ...e.settings.llm, ...t } },
          })),
        setVoice: (t) =>
          e((e) => ({
            settings: { ...e.settings, voice: { ...e.settings.voice, ...t } },
          })),
        touchDay: (t) =>
          e((e) => {
            let n = qm(),
              { last: r, streak: i } = Ym(e.lastDay, e.streak, n),
              a = { ...(e.daily[n] ?? Xm), [t]: !0 },
              o = e.xp;
            return (
              !a.bonus &&
                a.talk &&
                a.shadow &&
                a.write &&
                a.review &&
                ((a.bonus = !0), (o += 30)),
              { lastDay: r, streak: i, daily: { ...e.daily, [n]: a }, xp: o }
            );
          }),
        addXp: (t) => e((e) => ({ xp: e.xp + t })),
        addSkill: (t) =>
          e((e) => {
            let n = { ...e.skills };
            for (let [e, r] of Object.entries(t)) n[e] += r ?? 0;
            return { skills: n };
          }),
        bump: (t, n = 1) =>
          e((e) => ({ totals: { ...e.totals, [t]: e.totals[t] + n } })),
        upsertSession: (t) =>
          e((e) => ({ sessions: { ...e.sessions, [t.key]: t } })),
        clearSession: (t) =>
          e((e) => {
            let n = { ...e.sessions };
            return (delete n[t], { sessions: n });
          }),
        finishMission: (t, n, r, i) =>
          e((e) => {
            let a = e.missions[t],
              o = !a || a.stars === 0;
            return {
              xp: e.xp + i,
              missions: {
                ...e.missions,
                [t]: {
                  stars: Math.max(a?.stars ?? 0, n),
                  plays: (a?.plays ?? 0) + 1,
                  bestIssues: a ? Math.min(a.bestIssues, r) : r,
                  lastAt: Date.now(),
                },
              },
              totals: {
                ...e.totals,
                missionsDone: e.totals.missionsDone + (o && n > 0 ? 1 : 0),
              },
            };
          }),
        recordWriting: (t, n) =>
          e((e) => {
            let r = e.writing[t];
            return {
              writing: {
                ...e.writing,
                [t]: {
                  best: Math.max(r?.best ?? 0, n),
                  plays: (r?.plays ?? 0) + 1,
                  lastAt: Date.now(),
                },
              },
              totals: { ...e.totals, writings: e.totals.writings + 1 },
            };
          }),
        addNotebook: (n) => {
          let r = t(),
            i = new Set(
              r.notebook.map((e) => `${e.wrong}→${e.right}`.toLowerCase()),
            ),
            a = n
              .filter(
                (e) =>
                  e.wrong.trim() &&
                  e.right.trim() &&
                  e.wrong.trim().toLowerCase() !== e.right.trim().toLowerCase(),
              )
              .filter((e) => {
                let t = `${e.wrong}→${e.right}`.toLowerCase();
                return !i.has(t) && (i.add(t), !0);
              })
              .map((e) => ({
                ...e,
                id: Qm(),
                createdAt: Date.now(),
                srs: Um(),
              }));
          return (
            a.length &&
              e({
                notebook: [...a, ...r.notebook],
                totals: {
                  ...r.totals,
                  corrections: r.totals.corrections + a.length,
                },
              }),
            a.length
          );
        },
        reviewNotebook: (t, n) =>
          e((e) => ({
            notebook: e.notebook.map((e) =>
              e.id === t ? { ...e, srs: Wm(e.srs, n) } : e,
            ),
            totals: { ...e.totals, reviews: e.totals.reviews + 1 },
          })),
        removeNotebook: (t) =>
          e((e) => ({ notebook: e.notebook.filter((e) => e.id !== t) })),
        unlock: (t) =>
          e((e) =>
            e.achievements.includes(t)
              ? {}
              : { achievements: [...e.achievements, t], lastUnlocked: t },
          ),
        ackUnlock: () => e({ lastUnlocked: null }),
        resetAll: () => e({ ...Zm(), settings: t().settings }),
      }),
      {
        name: `english-town-v1`,
        version: 2,
        migrate: (e) => {
          let t = e ?? {};
          return {
            ...t,
            settings: { ...(t.settings ?? Zm().settings), blindMode: !0 },
          };
        },
        merge: (e, t) => {
          let n = e ?? {},
            r = n.settings ?? {};
          return {
            ...t,
            ...n,
            settings: {
              ...t.settings,
              ...r,
              llm: { ...t.settings.llm, ...(r.llm ?? {}) },
              voice: { ...t.settings.voice, ...(r.voice ?? {}) },
            },
          };
        },
      },
    ),
  );

export function Qm() {
  return (
    Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4)
  );
}

export function $m(e) {
  return e.daily[qm()] ?? Xm;
}

export function eh(e) {
  return e
    .toLowerCase()
    .replace(/[’‘]/g, `'`)
    .replace(/[^a-z0-9'\s]/g, ` `)
    .split(/\s+/)
    .filter(Boolean);
}

export function th(e, t) {
  let n = eh(e),
    r = eh(t),
    i = n.length,
    a = r.length;
  if (i === 0)
    return {
      score: 0,
      target: [],
      extra: r,
      spoken: r.map((e) => ({ word: e, hit: !1 })),
      heard: t.trim(),
    };
  let o = Array.from({ length: i + 1 }, () => Array(a + 1).fill(0));
  for (let e = i - 1; e >= 0; e--)
    for (let t = a - 1; t >= 0; t--)
      o[e][t] = rh(n[e], r[t])
        ? o[e + 1][t + 1] + 1
        : Math.max(o[e + 1][t], o[e][t + 1]);
  let s = Array(i).fill(!1),
    c = Array(a).fill(!1),
    l = 0,
    u = 0;
  for (; l < i && u < a;)
    rh(n[l], r[u])
      ? ((s[l] = !0), (c[u] = !0), l++, u++)
      : o[l + 1][u] >= o[l][u + 1]
        ? l++
        : u++;
  let d = s.filter(Boolean).length;
  return {
    score: Math.round((d / i) * 100),
    target: n.map((e, t) => ({ word: e, hit: s[t] })),
    extra: r.filter((e, t) => !c[t]),
    spoken: r.map((e, t) => ({ word: e, hit: c[t] })),
    heard: t.trim(),
  };
}

export function nh(e, t) {
  let n = null;
  for (let r of t) {
    let t = th(e, r);
    (!n || t.score > n.score) && (n = t);
  }
  return n ?? th(e, ``);
}

export function rh(e, t) {
  if (e === t || e.replace(/'/g, ``) === t.replace(/'/g, ``)) return !0;
  let n = {
    zero: `0`,
    one: `1`,
    two: `2`,
    three: `3`,
    four: `4`,
    five: `5`,
    six: `6`,
    seven: `7`,
    eight: `8`,
    nine: `9`,
    ten: `10`,
  };
  return (n[e] ?? e) === (n[t] ?? t);
}

export function ih(e, t, n, r) {
  if (t === 0 || r === 0) return 0;
  if (e < t) return e === 0 ? 0 : e * 2 >= t ? 2 : 1;
  let i = n / Math.max(r, 1);
  return i <= 0.34 ? 3 : i <= 1 ? 2 : 1;
}

export var ah = [
  `初来乍到`,
  `小镇居民`,
  `生活能手`,
  `职场新人`,
  `沟通高手`,
  `校园达人`,
  `小镇名人`,
  `英语老炮`,
];