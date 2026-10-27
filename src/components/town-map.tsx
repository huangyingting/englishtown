"use client";
// @ts-nocheck
import { Th, wh } from "@/data/town";
import { Z } from "@/lib/store";
import { B, v, z } from "@/lib/deps";
import { wg, xg } from "@/lib/speech";
import { lv, rv, uv } from "@/components/scene-stage";
import { Y_ } from "@/components/avatar";

export var Iv = {
  A2: `Use simple everyday words and short sentences (max 12 words each). No idioms. One question at a time.`,
  B1: `Use natural everyday English, 1-2 sentences per reply, a few common idioms are fine.`,
  B2: `Use fluent, natural English with idioms and nuance, 2-3 sentences per reply, like a real native speaker.`,
};

export function Lv(e, t, n, r = `us`) {
  let i = e.npc,
    a = t?.level ?? `B1`,
    o = t
      ? t.objectives.map((e, t) => `${t}. ${e.en}`).join(`
`)
      : `(none — this is free conversation)`,
    s = t?.twist
      ? `\nComplication to introduce ONCE at a natural moment (do not repeat it): ${t.twist}`
      : ``,
    c = t
      ? t.scene
      : `Casual free chat at the ${e.nameEn}. Keep it friendly and keep asking the learner questions. Good topics: ${e.freeChatTopics.join(`; `)}.`;
  return `You are ${i.name}, a ${i.roleEn}, in a role-play game that helps Chinese adults practise English.
Persona: ${i.persona}
Scene: ${c}${s}
Language level target: ${a}. ${Iv[a]}
English variety: ${Th[r].speak}

Learner objectives (0-based):
${o}
Objectives already achieved in earlier turns: [${n.join(`, `)}]

After EVERY learner message, reply with ONLY one JSON object (no prose, no code fence):
{
  "reply": "your next line as ${i.name}, English only, in character",
  "reply_zh": "faithful Chinese translation of reply",
  "feedback": {
    "ok": true or false,
    "corrected": "the learner's message with minimal corrections (identical if ok)",
    "issues": [{"type": "grammar|word|spelling|naturalness|politeness", "wrong": "exact fragment", "right": "fixed fragment", "why_zh": "一句中文解释，≤30字"}],
    "better": "a more natural native way to say the same thing, or empty string if theirs is already natural",
    "note_zh": "一句中文鼓励或提醒，≤30字"
  },
  "objectives_done": [all 0-based indices achieved so far, including earlier ones],
  "hint_zh": "if the learner is stuck, off-track or wrote Chinese: a Chinese hint of what to say next; else empty",
  "hint_en": "an example English sentence the learner could say next (always fill this)",
  "finished": true or false
}

Rules:
- "reply" must be English only. Never correct the learner inside "reply"; corrections go only in "feedback". Stay in character.
- If the learner writes Chinese or mostly Chinese: in "reply" react in character as someone who does not speak Chinese (e.g. "Sorry, I didn't catch that — could you say it in English?"), set ok=false with no issues, and put the English version of what they probably meant into hint_en.
- Mark an objective done only when the learner themselves actually did it in English. Be fair, not strict about wording.
- Keep the conversation moving: answer, then ask or prompt. Do not do the learner's job for them.
- ${t ? `When ALL objectives are done, wrap up the conversation naturally in "reply" and set finished=true. Otherwise finished=false.` : `finished is always false in free conversation.`}
- Fix only real errors. Do not nitpick casual style, contractions, or missing periods. Capitalisation of "i" counts as an error.
- ${Th[r].grade}`;
}

export function Rv(e, t, n, r, i = `us`) {
  let a = r.length
    ? r.map((e) => `- "${e.wrong}" → "${e.right}" (${e.why_zh})`).join(`
`)
    : `(the learner made no mistakes)`;
  return `[[QUIZ]] You write a short review quiz for a Chinese adult learning English (level ${t.level}), based on the role-play they just finished at the ${e.nameEn} with ${e.npc.name}.

Grammar focus of this mission: ${t.grammar.title} — ${t.grammar.explain.join(`；`)}
Transcript:
${n}

Learner's mistakes in this conversation:
${a}

Reply with ONLY a JSON object:
{
  "listening": [3 items: {"audio": "an English sentence of 8-16 words that ${e.npc.name} said or would say in this scene", "question_zh": "中文问题", "options": ["3 Chinese options"], "answer": index, "explain_zh": "≤30字解释"}],
  "grammar": [4 items: {"sentence": "English sentence with one blank written as ___", "options": ["3 options"], "answer": index, "explain_zh": "≤30字"}; at least 2 items must target the learner's own mistakes above if any exist, the rest target the grammar focus],
  "vocab": [3 items: {"phrase": "a useful English word or phrase from this scene", "question_zh": "这个表达什么意思？", "options": ["3 Chinese options"], "answer": index}]
}
Options must be plausible; shuffle answer positions; no duplicate questions. All English in the quiz must be ${Th[i].name}.`;
}

export function zv(e, t, n = `us`) {
  return `[[WRITING]] You are an experienced English writing coach for Chinese adults. Grade the learner's ${e.type} below.

Task (in Chinese, given to the learner): ${e.prompt}
Required points: ${e.mustInclude.map((e, t) => `${t + 1}. ${e}`).join(` `)}
Target level: ${e.level}. Suggested length: ${e.words[0]}-${e.words[1]} words.
English variety: ${Th[n].name}. Write "corrected" and "upgraded" in ${Th[n].name}. ${Th[n].grade}

Learner's text:
"""
${t}
"""

Reply with ONLY a JSON object:
{
  "scores": {"task": 0-5, "grammar": 0-5, "vocab": 0-5, "tone": 0-5},
  "overall_zh": "两句中文总评：先说最大的优点，再说最该改的一点",
  "issues": [{"type": "grammar|word|spelling|naturalness|tone", "wrong": "exact fragment", "right": "fixed fragment", "why_zh": "≤30字"}],
  "corrected": "the learner's text with minimal corrections, keep their voice",
  "upgraded": "a polished version a native speaker at one level higher would write, same content and length",
  "checklist": [one item per required point: {"item_zh": "the required point", "met": true or false}]
}
Scoring: task = did they cover the required points and purpose; grammar = accuracy; vocab = range and precision; tone = appropriate register for the audience. Be encouraging but honest. List at most 8 issues, most important first.`;
}

export function Bv(e, t, n) {
  return `[[CHECK]] A learner is correcting their own earlier mistake.
Original (wrong): "${e}"
Reference correction: "${t}"
Learner's new attempt: "${n}"
Is the learner's attempt grammatically correct and does it fix the original problem? Different wording is fine if it is correct and natural.
Reply with ONLY JSON: {"correct": true or false, "note_zh": "一句中文说明，≤30字"}`;
}

export var Vv = null;

export function Hv() {
  if (typeof window > `u`) return null;
  let e = window.AudioContext ?? window.webkitAudioContext;
  return e
    ? ((Vv ??= new e()),
      Vv.state === `suspended` && Vv.resume().catch(() => void 0),
      Vv)
    : null;
}

export var Uv = {
  send: { type: `triangle`, gain: 0.05, notes: [[660, 0.07, 0]] },
  receive: {
    type: `sine`,
    gain: 0.06,
    notes: [
      [587, 0.08, 0],
      [784, 0.12, 0.09],
    ],
  },
  done: {
    type: `sine`,
    gain: 0.07,
    notes: [
      [523, 0.1, 0],
      [659, 0.1, 0.1],
      [784, 0.18, 0.2],
    ],
  },
  finish: {
    type: `triangle`,
    gain: 0.07,
    notes: [
      [523, 0.12, 0],
      [659, 0.12, 0.12],
      [784, 0.12, 0.24],
      [1047, 0.4, 0.36],
    ],
  },
  error: {
    type: `square`,
    gain: 0.03,
    notes: [
      [220, 0.12, 0],
      [185, 0.18, 0.12],
    ],
  },
};

export function Wv(e) {
  if (!Z.getState().settings.sfx) return;
  let t = Hv();
  if (!t) return;
  let n = t.currentTime + 0.01,
    r = Uv[e];
  for (let [e, i, a] of r.notes) {
    let o = t.createOscillator(),
      s = t.createGain();
    ((o.type = r.type),
      o.frequency.setValueAtTime(e, n + a),
      s.gain.setValueAtTime(1e-4, n + a),
      s.gain.exponentialRampToValueAtTime(r.gain, n + a + 0.015),
      s.gain.exponentialRampToValueAtTime(1e-4, n + a + i),
      o.connect(s).connect(t.destination),
      o.start(n + a),
      o.stop(n + a + i + 0.02));
  }
}

export function Gv() {
  return (
    typeof MediaRecorder < `u` &&
    typeof navigator < `u` &&
    typeof navigator.mediaDevices?.getUserMedia == `function`
  );
}

export var Kv = [`audio/webm;codecs=opus`, `audio/webm`, `audio/mp4`];

export function qv(e) {
  for (let t of e.getTracks()) t.stop();
}

export var Jv = class {
  result;
  error = ``;
  settle = () => void 0;
  settled = !1;
  recorder = null;
  chunks = [];
  startedAt = 0;
  ended = !1;
  wanted = !0;
  constructor() {
    this.result = new Promise((e) => {
      this.settle = e;
    });
  }
  async start() {
    let e;
    try {
      e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (e) {
      this.fail(e);
      return;
    }
    if (this.ended) {
      (qv(e), this.finish(null));
      return;
    }
    let t;
    try {
      let n = Kv.find((e) => MediaRecorder.isTypeSupported(e));
      t = new MediaRecorder(e, n ? { mimeType: n } : void 0);
    } catch (t) {
      (qv(e), this.fail(t));
      return;
    }
    ((this.recorder = t),
      (t.ondataavailable = (e) => {
        e.data.size > 0 && this.chunks.push(e.data);
      }),
      (t.onerror = () => {
        (qv(e), (this.error = `录音中途断了`), this.finish(null));
      }),
      (t.onstop = () => {
        qv(e);
        let n = new Blob(this.chunks, { type: t.mimeType });
        if (!this.wanted || n.size === 0) return this.finish(null);
        this.finish({
          blob: n,
          url: URL.createObjectURL(n),
          ms: Date.now() - this.startedAt,
        });
      }),
      (this.startedAt = Date.now()),
      t.start());
  }
  stop() {
    this.ended ||
      ((this.ended = !0),
      this.recorder &&
        this.recorder.state !== `inactive` &&
        this.recorder.stop());
  }
  discard() {
    ((this.wanted = !1), this.stop());
  }
  fail(e) {
    let t = e?.name ?? ``;
    ((this.error =
      t === `NotAllowedError`
        ? `麦克风没授权，这次没录上`
        : t === `NotFoundError`
          ? `找不到麦克风，这次没录上`
          : `没录上：${t || String(e)}`),
      this.finish(null));
  }
  finish(e) {
    this.settled || ((this.settled = !0), this.settle(e));
  }
};

export function Yv() {
  let e = (0, v.useRef)(null),
    t = (0, v.useRef)(null),
    [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(!1),
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    [u, d] = (0, v.useState)(null),
    [f, p] = (0, v.useState)(``),
    m = xg();
  return (
    (0, v.useEffect)(
      () => () => {
        (e.current?.abort(), t.current?.discard(), (t.current = null));
      },
      [],
    ),
    (0, v.useEffect)(
      () => () => {
        u && URL.revokeObjectURL(u.url);
      },
      [u],
    ),
    {
      supported: m,
      active: n,
      listening: i,
      interim: o,
      error: c,
      recording: u,
      recordError: f,
      start: (0, v.useCallback)((n, i = {}) => {
        (l(``), s(``), a(!1), d(null), p(``));
        let o = new wg();
        e.current = o;
        let c = null;
        if (i.record && Gv()) {
          let e = new Jv();
          ((c = e),
            (t.current = e),
            e.result.then((n) => {
              t.current === e
                ? ((t.current = null), d(n), p(e.error))
                : n && URL.revokeObjectURL(n.url);
            }),
            e.start());
        }
        (r(!0),
          o.start(
            {
              onListening: () => a(!0),
              onInterim: s,
              onFinal: n,
              onError: l,
              onEnd: () => {
                (c?.stop(), r(!1), a(!1), s(``));
              },
            },
            wh[Z.getState().settings.variety],
          ) || (r(!1), c?.discard(), (t.current = null)));
      }, []),
      stop: (0, v.useCallback)(() => {
        (e.current?.stop(), t.current?.stop());
      }, []),
      clearRecording: (0, v.useCallback)(() => d(null), []),
    }
  );
}

export var Xv = () =>
  typeof matchMedia < `u` &&
  matchMedia(`(prefers-reduced-motion: reduce)`).matches;

export function Zv(e, t, n = 55) {
  let [r, i] = (0, v.useState)(() => (t && !Xv() ? 0 : e.length));
  (0, v.useEffect)(() => {
    if (!t || Xv()) {
      i(e.length);
      return;
    }
    i(0);
    let r = Math.max(1, Math.round(n / 50)),
      a = 0,
      o = setInterval(() => {
        ((a = Math.min(e.length, a + r)),
          i(a),
          a >= e.length && clearInterval(o));
      }, 20);
    return () => clearInterval(o);
  }, [e, t, n]);
  let a = e.slice(0, Math.min(r, e.length));
  return { shown: a, running: t && a.length < e.length };
}

export function Qv({
  loc: e,
  mood: t,
  talking: n,
  bubble: r,
  bubbleKey: i,
  caption: a,
  className: o,
}) {
  let s = rv(e.id);
  return (0, z.jsxs)(`div`, {
    className: B(
      `relative mx-auto aspect-[2/1] overflow-hidden bg-muted shadow-sm sm:rounded-xl`,
      o,
    ),
    style: { width: `min(100%, 720px, 76dvh)` },
    children: [
      (0, z.jsx)(lv, { spec: s, className: `absolute inset-0 h-full w-full` }),
      (0, z.jsx)(`div`, {
        className: `breathe absolute bottom-0 left-[3%] aspect-square h-[90%]`,
        children: (0, z.jsx)(Y_, {
          npc: e.npc,
          mood: t,
          talking: n,
          className: `h-full w-full`,
        }),
      }),
      (0, z.jsx)(uv, { spec: s, className: `absolute inset-0 h-full w-full` }),
      (0, z.jsxs)(`div`, {
        className: `absolute bottom-2 left-2 rounded-full bg-background/85 px-2 py-0.5 text-xs shadow-sm backdrop-blur`,
        children: [
          e.npc.name,
          ` `,
          (0, z.jsxs)(`span`, {
            className: `text-muted-foreground`,
            children: [`· `, e.npc.role],
          }),
        ],
      }),
      r != null &&
        (0, z.jsx)(
          `div`,
          {
            className: `bubble-in absolute left-[46%] right-2 top-[18%] max-h-[70%] overflow-y-auto rounded-2xl rounded-tl-sm bg-background/95 px-3 py-2 text-sm shadow-md backdrop-blur sm:text-[15px]`,
            children: r,
          },
          i,
        ),
      a &&
        (0, z.jsx)(
          `div`,
          {
            className: `pop absolute bottom-2 right-2 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground shadow`,
            children: a,
          },
          a,
        ),
    ],
  });
}

export function $v({ className: e, type: t, ...n }) {
  return (0, z.jsx)(`input`, {
    type: t,
    "data-slot": `input`,
    className: B(
      `h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,
      e,
    ),
    ...n,
  });
}