"use client";
// @ts-nocheck
import { wh } from "@/data/town";

export function Fh(e) {
  let t = [],
    n = new Set();
  for (let r of e.split(`
`)) {
    let e = /^(.*?)\s{2,}([A-Za-z]{2,3}[_-][A-Za-z_-]+)\s+#/.exec(r);
    if (!e) continue;
    let i = (e[1] ?? ``).trim(),
      a = (e[2] ?? ``).replace(`_`, `-`);
    i &&
      /^en-/i.test(a) &&
      !n.has(i) &&
      (n.add(i), t.push({ name: i, lang: a, localService: !0 }));
  }
  return t;
}

export var Ih = [
    `samantha`,
    `ava`,
    `allison`,
    `karen`,
    `moira`,
    `tessa`,
    `zira`,
    `aria`,
    `jenny`,
    `google us english`,
    `nicky`,
    `susan`,
    `fiona`,
    `kate`,
    `serena`,
    `sonia`,
    `libby`,
    `hazel`,
    `google uk english female`,
  ];

export var Lh = [
    `daniel`,
    `alex`,
    `fred`,
    `tom`,
    `guy`,
    `davis`,
    `oliver`,
    `arthur`,
    `google uk english male`,
    `rishi`,
    `aaron`,
    `evan`,
    `nathan`,
    `reed`,
    `ryan`,
    `george`,
    `thomas`,
  ];

export var Rh =
    /compact|eloquence|novelty|bad news|bells|boing|bubbles|cellos|zarvox|trinoids|whisper|wobble|jester|organ|good news|hysterical|superstar|albert|fred|junior|ralph|kathy|grandma|grandpa|rocko|shelley|sandy|flo|eddy|reed|bahh/i;

export var zh = { us: /^en-ca$/i, uk: /^en-(au|ie|nz|za|in|scotland)$/i };

export var Bh = `browser`;

export var Vh = [];

export var Hh = null;

export function Uh() {
  return (
    Hh ||
    ((Hh = (async () => {
      if (typeof fetch > `u`) return Bh;
      try {
        let e = await fetch(`/tts/voices`, { cache: `no-store` });
        if (!e.ok) return Bh;
        let t = Fh(await e.text());
        if (t.length === 0) return Bh;
        ((Vh = t
          .map((e, t) => ({ v: e, i: t }))
          .sort(
            (e, t) =>
              Number(Rh.test(e.v.name)) - Number(Rh.test(t.v.name)) ||
              e.i - t.i,
          )
          .map((e) => e.v)),
          (Bh = `mac`));
      } catch {}
      return Bh;
    })()),
    Hh)
  );
}

export function Wh() {
  return Bh;
}

export function Gh() {
  return typeof speechSynthesis > `u`
    ? []
    : speechSynthesis.getVoices().filter((e) => /^en[-_]/i.test(e.lang));
}

export function Kh() {
  return Bh === `mac` ? Vh : Gh();
}

export function qh(e, t, n, r = `us`) {
  if (e.length === 0) return null;
  if (t.voiceName) {
    let n = e.find((e) => e.name === t.voiceName);
    if (n) return n;
  }
  let i = n === `female` ? Ih : Lh;
  return (
    e
      .map((e, t) => ({ v: e, i: t, s: Jh(e, i, r) }))
      .sort((e, t) => t.s - e.s || e.i - t.i)[0]?.v ?? null
  );
}

export function Jh(e, t, n) {
  let r = e.name.toLowerCase(),
    i = e.lang.replace(`_`, `-`).toLowerCase(),
    a = 0;
  return (
    t.some((e) => r.includes(e)) && (a += 10),
    i === wh[n].toLowerCase() ? (a += 5) : zh[n].test(i) && (a += 3),
    /premium|enhanced|natural|neural|增强|高级/i.test(r) && (a += 2),
    e.localService && (a += 1),
    Rh.test(r) && (a -= 20),
    a
  );
}

export var Yh = 4e3;

export var Xh = 150;

export var Zh = 40;

export var Qh = null;

export var $h = null;

export var eg = null;

export var tg = null;

export var ng = new Set();

export var rg = new Set();

export function ig(e) {
  if (tg !== e) {
    tg = e;
    for (let e of ng) e();
  }
}

export function ag(e) {
  return (ng.add(e), () => ng.delete(e));
}

export function og() {
  return tg;
}

export function sg(e) {
  return (rg.add(e), () => rg.delete(e));
}

export function cg(e) {
  for (let t of rg) t(e);
}

export function lg(e) {
  Qh === e && ((Qh = null), ($h = null), ig(null));
}

export function ug() {
  let e = $h;
  (($h = null), e?.());
}

export var dg = (e) => new Promise((t) => setTimeout(t, e));

export async function fg(e, t, n, r = `narrator`, i = `us`) {
  let a = {};
  (ug(), (Qh = a));
  let o = await Uh();
  Qh === a &&
    (o === `mac` ? await hg(a, e, t, n, r, i) : await gg(a, e, t, n, r, i));
}

export var pg = new Map();

export function mg(e, t, n) {
  let r = `${t}\0${n}\0${e}`,
    i = pg.get(r);
  if (i) return (pg.delete(r), pg.set(r, i), i);
  let a = (async () => {
    let r = await fetch(`/tts`, {
      method: `POST`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({ text: e, voice: t, rate: n }),
    });
    if (!r.ok)
      throw Error(`${r.status} ${(await r.text()).slice(0, 80)}`.trim());
    return URL.createObjectURL(await r.blob());
  })();
  if ((pg.set(r, a), a.catch(() => pg.delete(r)), pg.size > Zh)) {
    let e = pg.keys().next().value;
    e !== void 0 &&
      (pg.get(e)?.then(
        (e) => URL.revokeObjectURL(e),
        () => void 0,
      ),
      pg.delete(e));
  }
  return a;
}

export async function hg(e, t, n, r, i, a) {
  let o = qh(Vh, n, r, a),
    s;
  try {
    s = await mg(t, o?.name ?? ``, n.rate);
  } catch (t) {
    Qh === e && (cg(`server:${t.message}`), lg(e));
    return;
  }
  if (Qh !== e) return;
  let c = new Audio(s);
  await new Promise((t) => {
    let n = !1,
      r = () => {
        n || ((n = !0), lg(e), t());
      };
    (($h = () => {
      (c.pause(), r());
    }),
      (c.onplaying = () => {
        Qh === e && ig(i);
      }),
      (c.onended = r),
      (c.onerror = () => {
        (Qh === e && cg(`audio`), r());
      }),
      c.play().catch((t) => {
        if (Qh !== e) return r();
        if (t.name !== `NotAllowedError`) return (cg(t.name), r());
        cg(`not-allowed`);
        let n = () => {
            (i(), Qh === e && c.play().catch(() => r()));
          },
          i = () => {
            (window.removeEventListener(`pointerdown`, n),
              window.removeEventListener(`keydown`, n));
          };
        (window.addEventListener(`pointerdown`, n),
          window.addEventListener(`keydown`, n),
          ($h = () => {
            (i(), c.pause(), r());
          }));
      }));
  });
}

export async function gg(e, t, n, r, i, a) {
  if (typeof speechSynthesis > `u`) return lg(e);
  if (
    (speechSynthesis.speaking || speechSynthesis.pending) &&
    (speechSynthesis.cancel(), await dg(Xh), Qh !== e)
  )
    return;
  let o = new SpeechSynthesisUtterance(t),
    s = qh(Gh(), n, r, a);
  (s && (o.voice = s),
    (o.lang = s?.lang ?? wh[a]),
    (o.rate = n.rate),
    (eg = o),
    ig(i),
    await new Promise((t) => {
      let n = !1,
        r = 0,
        a = () => {
          n ||
            ((n = !0),
            window.clearTimeout(r),
            eg === o && (eg = null),
            lg(e),
            t());
        };
      (($h = () => {
        (speechSynthesis.cancel(), a());
      }),
        (o.onstart = () => {
          (window.clearTimeout(r), Qh === e && ig(i));
        }),
        (o.onend = a),
        (o.onerror = (t) => {
          (t.error !== `canceled` &&
            t.error !== `interrupted` &&
            Qh === e &&
            cg(t.error),
            a());
        }),
        speechSynthesis.speak(o),
        (r = window.setTimeout(() => {
          if (Qh !== e) return a();
          (speechSynthesis.cancel(), cg(`stuck`), a());
        }, Yh)));
    }));
}

export function _g() {
  (ug(),
    Bh === `browser` &&
      typeof speechSynthesis < `u` &&
      (speechSynthesis.speaking || speechSynthesis.pending) &&
      speechSynthesis.cancel(),
    (Qh = null),
    ig(null));
}

export function vg() {
  return Qh !== null;
}

export function yg(e) {
  Uh().then((t) => {
    if (t === `mac`) return e();
    typeof speechSynthesis < `u` &&
      (speechSynthesis.getVoices().length > 0 && e(),
      (speechSynthesis.onvoiceschanged = () => e()));
  });
}

export function bg() {
  let e = window;
  return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
}

export function xg() {
  return typeof window < `u` && bg() !== null;
}

export var Sg = {
  "not-allowed": `麦克风没授权。点地址栏左边的锁图标，允许使用麦克风`,
  "service-not-allowed": `这个浏览器不让用语音识别，换 Chrome 试试`,
  "audio-capture": `找不到麦克风，检查一下系统设置`,
  network: `语音识别要联网，现在连不上`,
  "no-speech": `没听到声音，再说一次`,
  aborted: ``,
};

export function Cg(e, t) {
  let n = e
      .map((e) => e.map((e) => e.trim()).filter(Boolean))
      .filter((e) => e.length > 0),
    r = t.trim(),
    i = n.reduce((e, t) => Math.max(e, t.length), 1),
    a = [],
    o = (e) => {
      let t = e.replace(/\s+/g, ` `).trim();
      t && !a.includes(t) && a.push(t);
    };
  for (let e = 0; e < i; e++) {
    let t = n.map((t) => t[Math.min(e, t.length - 1)]).join(` `);
    (o(t), r && o(`${t} ${r}`));
  }
  return a;
}

export var wg = class {
  rec = null;
  finals = [];
  interim = ``;
  start(e, t = `en-US`) {
    let n = bg();
    if (!n) return (e.onError(`这个浏览器不支持语音识别，请用 Chrome`), !1);
    _g();
    let r = new n();
    ((r.lang = t),
      (r.continuous = !0),
      (r.interimResults = !0),
      (r.maxAlternatives = 5),
      (this.finals = []),
      (this.interim = ``),
      (r.onaudiostart = () => e.onListening?.()),
      (r.onresult = (t) => {
        let n = [],
          r = ``;
        for (let e = 0; e < t.results.length; e++) {
          let i = t.results[e];
          i.isFinal
            ? n.push(
                Array.from(
                  { length: i.length },
                  (e, t) => i[t]?.transcript ?? ``,
                ),
              )
            : (r += i[0]?.transcript ?? ``);
        }
        ((this.finals = n),
          (this.interim = r),
          e.onInterim(
            `${n.map((e) => e[0]).join(` `)} ${r}`.replace(/\s+/g, ` `).trim(),
          ));
      }),
      (r.onerror = (t) => {
        let n = Sg[t.error] ?? `语音识别出错：${t.error}`;
        n && e.onError(n);
      }),
      (r.onend = () => {
        let t = Cg(this.finals, this.interim);
        (e.onFinal(t[0] ?? ``, t), (this.rec = null), e.onEnd());
      }),
      (this.rec = r));
    try {
      r.start();
    } catch (t) {
      return ((this.rec = null), e.onError(`启动失败：${t.message}`), !1);
    }
    return !0;
  }
  stop() {
    this.rec?.stop();
  }
  abort() {
    (this.rec?.abort(), (this.rec = null));
  }
  get active() {
    return this.rec !== null;
  }
};