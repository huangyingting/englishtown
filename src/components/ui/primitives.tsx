"use client";
// @ts-nocheck
import { $u, B, Bd, Bf, Ef, En, Es, F, Fn, Ft, Gd, Hd, Hp, Is, Jd, Lr, Ls, Lt, Ms, Ne, On, Os, Sf, Ss, Ue, Ve, Wd, Wp, Xd, Zt, _p, bf, bs, cm, cn, cp, ff, fn, hd, im, lf, mf, om, on, pd, tn, tp, tt, um, un, up, v, vf, wf, z, ze, zs } from "@/lib/deps";
import { Im } from "@/lib/llm";
import { Z, nh, th } from "@/lib/store";
import { ch, lh } from "@/lib/router";
import { _g, ag, fg, og, vg } from "@/lib/speech";
import { Sh, _h, gh } from "@/data/town";
import { Yv } from "@/components/town-map";
import { Nh } from "@/data/variety";
import { Ay } from "@/components/views/practice-views";

export var pm = Fn(
  `group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/80`,
        outline: `border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
        ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
        destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
        xs: `h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,
        sm: `h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,
        lg: `h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
        icon: `size-8`,
        "icon-xs": `size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,
        "icon-sm": `size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,
        "icon-lg": `size-9`,
      },
    },
    defaultVariants: { variant: `default`, size: `default` },
  },
);

export function X({
  className: e,
  variant: t = `default`,
  size: n = `default`,
  asChild: r = !1,
  ...i
}) {
  let a = r ? Lr : `button`;
  return (0, z.jsx)(a, {
    "data-slot": `button`,
    "data-variant": t,
    "data-size": n,
    className: B(pm({ variant: t, size: n, className: e })),
    ...i,
  });
}

export function mm({ className: e, value: t, ...n }) {
  return (0, z.jsx)(pd, {
    "data-slot": `progress`,
    className: B(
      `relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted`,
      e,
    ),
    ...n,
    children: (0, z.jsx)(hd, {
      "data-slot": `progress-indicator`,
      className: `size-full flex-1 bg-primary transition-all`,
      style: { transform: `translateX(-${100 - (t || 0)}%)` },
    }),
  });
}

export function Tg({ className: e, size: t = `default`, ...n }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `card`,
    "data-size": t,
    className: B(
      `group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl`,
      e,
    ),
    ...n,
  });
}

export function Eg({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `card-header`,
    className: B(
      `group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)`,
      e,
    ),
    ...t,
  });
}

export function Dg({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `card-title`,
    className: B(
      `font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm`,
      e,
    ),
    ...t,
  });
}

export function Og({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `card-description`,
    className: B(`text-sm text-muted-foreground`, e),
    ...t,
  });
}

export function kg({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `card-content`,
    className: B(`px-(--card-spacing)`, e),
    ...t,
  });
}

export var Ag = Fn(
  `group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground [a]:hover:bg-primary/80`,
        secondary: `bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,
        destructive: `bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,
        outline: `border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,
        ghost: `hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
    },
    defaultVariants: { variant: `default` },
  },
);

export function jg({ className: e, variant: t = `default`, asChild: n = !1, ...r }) {
  let i = n ? Lr : `span`;
  return (0, z.jsx)(i, {
    "data-slot": `badge`,
    "data-variant": t,
    className: B(Ag({ variant: t }), e),
    ...r,
  });
}

export var Mg = Fn(
  `group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: `bg-card text-card-foreground`,
        destructive: `bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current`,
      },
    },
    defaultVariants: { variant: `default` },
  },
);

export function Ng({ className: e, variant: t, ...n }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `alert`,
    role: `alert`,
    className: B(Mg({ variant: t }), e),
    ...n,
  });
}

export function Pg({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `alert-title`,
    className: B(
      `font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground`,
      e,
    ),
    ...t,
  });
}

export function Fg({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `alert-description`,
    className: B(
      `text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4`,
      e,
    ),
    ...t,
  });
}

export function Ig({ n: e, max: t = 3, size: n = `size-4` }) {
  return (0, z.jsx)(`span`, {
    className: `inline-flex gap-0.5`,
    "aria-label": `${e} 星`,
    children: Array.from({ length: t }, (t, r) =>
      (0, z.jsx)(
        fn,
        { className: B(n, r < e ? `fill-amber text-amber` : `text-border`) },
        r,
      ),
    ),
  });
}

export var Lg = { A2: `入门`, B1: `进阶`, B2: `熟练` };

export function Rg({ level: e }) {
  return (0, z.jsxs)(jg, {
    variant: `outline`,
    className: `font-mono`,
    children: [e, ` · `, Lg[e]],
  });
}

export function zg({ className: e }) {
  return (0, z.jsxs)(jg, {
    variant: `secondary`,
    className: B(`gap-1 font-normal`, e),
    children: [(0, z.jsx)(cn, { className: `size-3` }), ` AI 生成，仅供参考`],
  });
}

export function Bg() {
  return Im(Z((e) => e.settings.llm))
    ? null
    : (0, z.jsxs)(Ng, {
        className: `mb-4`,
        children: [
          (0, z.jsx)(tn, {}),
          (0, z.jsx)(Pg, { children: `还没接上 AI 模型` }),
          (0, z.jsxs)(Fg, {
            className: `flex flex-wrap items-center gap-2`,
            children: [
              `NPC 要靠模型回话和纠错。去设置填好地址、密钥、模型名，一分钟搞定。`,
              (0, z.jsx)(X, {
                size: `sm`,
                onClick: () => ch(`/settings`),
                children: `去设置`,
              }),
            ],
          }),
        ],
      });
}

export function Vg({
  text: e,
  gender: t = `female`,
  size: n = `icon-sm`,
  variant: r = `ghost`,
  label: i,
  rate: a,
  who: o,
}) {
  let s = Z((e) => e.settings.voice),
    c = Z((e) => e.settings.variety),
    [l, u] = (0, v.useState)(!1);
  return (
    (0, v.useEffect)(() => {
      if (!l) return;
      let e = setInterval(() => {
        vg() || u(!1);
      }, 300);
      return () => clearInterval(e);
    }, [l]),
    (0, z.jsxs)(X, {
      type: `button`,
      size: n,
      variant: r,
      "aria-label": l ? `停止朗读` : `朗读`,
      onClick: async () => {
        l
          ? (_g(), u(!1))
          : (u(!0), await fg(e, a ? { ...s, rate: a } : s, t, o, c), u(!1));
      },
      children: [l ? (0, z.jsx)(un, {}) : (0, z.jsx)(En, {}), i],
    })
  );
}

export function Hg({ url: e, label: t = `听自己的` }) {
  let [n, r] = (0, v.useState)(!1),
    i = (0, v.useRef)(null),
    a = () => {
      (i.current?.pause(), (i.current = null), r(!1));
    };
  return (
    (0, v.useEffect)(() => a, [e]),
    (0, v.useEffect)(
      () =>
        ag(() => {
          og() && a();
        }),
      [],
    ),
    (0, z.jsxs)(X, {
      type: `button`,
      size: `sm`,
      variant: `outline`,
      "aria-label": n ? `停止播放` : t,
      onClick: () => {
        if (n) return a();
        _g();
        let t = new Audio(e);
        ((i.current = t),
          (t.onended = () => {
            i.current === t && a();
          }),
          (t.onerror = () => {
            i.current === t && a();
          }),
          r(!0),
          t.play().catch(() => {
            i.current === t && a();
          }));
      },
      children: [
        n ? (0, z.jsx)(un, {}) : (0, z.jsx)(tt, {}),
        ` `,
        n ? `停` : t,
      ],
    })
  );
}

export function Ug({ marks: e, className: t }) {
  return (0, z.jsx)(`span`, {
    className: B(`en text-base`, t),
    children: e.map((e, t) =>
      (0, z.jsxs)(
        `span`,
        {
          className: e.hit ? `word-hit` : `word-miss`,
          children: [e.word, ` `],
        },
        t,
      ),
    ),
  });
}

export function Wg({ title: e, sub: t, right: n, fallback: r = `/` }) {
  return (0, z.jsxs)(`div`, {
    className: `mb-4 flex items-start gap-2`,
    children: [
      (0, z.jsx)(X, {
        variant: `ghost`,
        size: `icon-sm`,
        "aria-label": `返回`,
        onClick: () => lh(r),
        children: (0, z.jsx)(Ne, {}),
      }),
      (0, z.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, z.jsx)(`h1`, {
            className: `text-lg font-semibold leading-7`,
            children: e,
          }),
          t &&
            (0, z.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: t,
            }),
        ],
      }),
      n,
    ],
  });
}

export function Gg({ children: e }) {
  return (0, z.jsx)(`div`, {
    className: `rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground`,
    children: e,
  });
}

export function Kg() {
  return (0, z.jsxs)(`span`, {
    className: `inline-flex gap-1 px-1`,
    children: [
      (0, z.jsx)(`span`, {
        className: `typing-dot size-1.5 rounded-full bg-muted-foreground`,
      }),
      (0, z.jsx)(`span`, {
        className: `typing-dot size-1.5 rounded-full bg-muted-foreground`,
      }),
      (0, z.jsx)(`span`, {
        className: `typing-dot size-1.5 rounded-full bg-muted-foreground`,
      }),
    ],
  });
}

export function qg({ compact: e = !1 }) {
  return (0, z.jsxs)(`section`, {
    className: `rounded-2xl border border-primary/15 bg-primary/5 ${e ? `flex items-center gap-4 p-4` : `p-5 text-center`}`,
    "aria-label": `关注开发者猫叔`,
    children: [
      (0, z.jsx)(`a`, {
        href: `/developer-maoshu-qr.jpg`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `inline-block shrink-0 rounded-xl bg-white p-2 shadow-sm`,
        "aria-label": `打开开发者猫叔公众号二维码`,
        children: (0, z.jsx)(`img`, {
          src: `/developer-maoshu-qr.jpg`,
          width: e ? 88 : 156,
          height: e ? 88 : 156,
          alt: `开发者猫叔微信公众号二维码`,
          className: e ? `size-22` : `size-39`,
        }),
      }),
      (0, z.jsxs)(`div`, {
        className: e ? `min-w-0` : `mt-4`,
        children: [
          (0, z.jsxs)(`p`, {
            className: `flex items-center justify-center gap-1.5 text-sm font-semibold text-primary`,
            children: [
              (0, z.jsx)(Zt, { className: `size-4` }),
              ` 扫码关注开发者猫叔`,
            ],
          }),
          (0, z.jsxs)(`p`, {
            className: `mt-2 text-sm leading-6`,
            children: [
              `公众号后台回复 `,
              (0, z.jsx)(`strong`, {
                className: `rounded bg-background px-1.5 py-0.5 font-semibold text-primary`,
                children: `英语学习网站`,
              }),
            ],
          }),
          (0, z.jsx)(`p`, {
            className: `text-sm leading-6 text-muted-foreground`,
            children: `获取邀请码，解锁英语对话`,
          }),
          !e &&
            (0, z.jsxs)(`p`, {
              className: `mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground`,
              children: [
                (0, z.jsx)(Ft, { className: `size-3.5` }),
                ` 手机可长按保存二维码，再到微信识别`,
              ],
            }),
        ],
      }),
    ],
  });
}

export function vv({ className: e, ...t }) {
  return (0, z.jsx)(`textarea`, {
    "data-slot": `textarea`,
    className: B(
      `flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,
      e,
    ),
    ...t,
  });
}

export function yv({ ...e }) {
  return (0, z.jsx)(bs, { "data-slot": `sheet`, ...e });
}

export function bv({ ...e }) {
  return (0, z.jsx)(Ss, { "data-slot": `sheet-trigger`, ...e });
}

export function xv({ ...e }) {
  return (0, z.jsx)(Es, { "data-slot": `sheet-portal`, ...e });
}

export function Sv({ className: e, ...t }) {
  return (0, z.jsx)(Os, {
    "data-slot": `sheet-overlay`,
    className: B(
      `fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e,
    ),
    ...t,
  });
}

export function Cv({
  className: e,
  children: t,
  side: n = `right`,
  showCloseButton: r = !0,
  ...i
}) {
  return (0, z.jsxs)(xv, {
    children: [
      (0, z.jsx)(Sv, {}),
      (0, z.jsxs)(Ms, {
        "data-slot": `sheet-content`,
        "data-side": n,
        className: B(
          `fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10`,
          e,
        ),
        ...i,
        children: [
          t,
          r &&
            (0, z.jsx)(zs, {
              "data-slot": `sheet-close`,
              asChild: !0,
              children: (0, z.jsxs)(X, {
                variant: `ghost`,
                className: `absolute top-3 right-3`,
                size: `icon-sm`,
                children: [
                  (0, z.jsx)(On, {}),
                  (0, z.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`,
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}

export function wv({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `sheet-header`,
    className: B(`flex flex-col gap-0.5 p-4`, e),
    ...t,
  });
}

export function Tv({ className: e, ...t }) {
  return (0, z.jsx)(Is, {
    "data-slot": `sheet-title`,
    className: B(`font-heading text-base font-medium text-foreground`, e),
    ...t,
  });
}

export function Ev({ className: e, ...t }) {
  return (0, z.jsx)(Ls, {
    "data-slot": `sheet-description`,
    className: B(`text-sm text-muted-foreground`, e),
    ...t,
  });
}

export function Dv({ ...e }) {
  return (0, z.jsx)(bs, { "data-slot": `dialog`, ...e });
}

export function Ov({ ...e }) {
  return (0, z.jsx)(Es, { "data-slot": `dialog-portal`, ...e });
}

export function kv({ className: e, ...t }) {
  return (0, z.jsx)(Os, {
    "data-slot": `dialog-overlay`,
    className: B(
      `fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e,
    ),
    ...t,
  });
}

export function Av({ className: e, children: t, showCloseButton: n = !0, ...r }) {
  return (0, z.jsxs)(Ov, {
    children: [
      (0, z.jsx)(kv, {}),
      (0, z.jsxs)(Ms, {
        "data-slot": `dialog-content`,
        className: B(
          `fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e,
        ),
        ...r,
        children: [
          t,
          n &&
            (0, z.jsx)(zs, {
              "data-slot": `dialog-close`,
              asChild: !0,
              children: (0, z.jsxs)(X, {
                variant: `ghost`,
                className: `absolute top-2 right-2`,
                size: `icon-sm`,
                children: [
                  (0, z.jsx)(On, {}),
                  (0, z.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`,
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}

export function jv({ className: e, ...t }) {
  return (0, z.jsx)(`div`, {
    "data-slot": `dialog-header`,
    className: B(`flex flex-col gap-2`, e),
    ...t,
  });
}

export function Mv({ className: e, showCloseButton: t = !1, children: n, ...r }) {
  return (0, z.jsxs)(`div`, {
    "data-slot": `dialog-footer`,
    className: B(
      `-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end`,
      e,
    ),
    ...r,
    children: [
      n,
      t &&
        (0, z.jsx)(zs, {
          asChild: !0,
          children: (0, z.jsx)(X, { variant: `outline`, children: `Close` }),
        }),
    ],
  });
}

export function Nv({ className: e, ...t }) {
  return (0, z.jsx)(Is, {
    "data-slot": `dialog-title`,
    className: B(`font-heading text-base leading-none font-medium`, e),
    ...t,
  });
}

export function Pv({ className: e, ...t }) {
  return (0, z.jsx)(Ls, {
    "data-slot": `dialog-description`,
    className: B(
      `text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground`,
      e,
    ),
    ...t,
  });
}

export function Fv({
  className: e,
  orientation: t = `horizontal`,
  decorative: n = !0,
  ...r
}) {
  return (0, z.jsx)(Bf, {
    "data-slot": `separator`,
    decorative: n,
    orientation: t,
    className: B(
      `shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch`,
      e,
    ),
    ...r,
  });
}

export function ey({ className: e, ...t }) {
  return (0, z.jsx)($u, {
    "data-slot": `label`,
    className: B(
      `flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,
      e,
    ),
    ...t,
  });
}

export function wy({ className: e, orientation: t = `horizontal`, ...n }) {
  return (0, z.jsx)(im, {
    "data-slot": `tabs`,
    "data-orientation": t,
    className: B(`group/tabs flex gap-2 data-horizontal:flex-col`, e),
    ...n,
  });
}

export var Ty = Fn(
  `group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none`,
  {
    variants: {
      variant: { default: `bg-muted`, line: `gap-1 bg-transparent` },
    },
    defaultVariants: { variant: `default` },
  },
);

export function Ey({ className: e, variant: t = `default`, ...n }) {
  return (0, z.jsx)(om, {
    "data-slot": `tabs-list`,
    "data-variant": t,
    className: B(Ty({ variant: t }), e),
    ...n,
  });
}

export function Dy({ className: e, ...t }) {
  return (0, z.jsx)(cm, {
    "data-slot": `tabs-trigger`,
    className: B(
      `relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      `group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent`,
      `data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground`,
      `after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100`,
      e,
    ),
    ...t,
  });
}

export function Oy({ className: e, ...t }) {
  return (0, z.jsx)(um, {
    "data-slot": `tabs-content`,
    className: B(`flex-1 text-sm outline-none`, e),
    ...t,
  });
}

export function ky({ missionId: e }) {
  let t = _h(e),
    n = t ? gh(t.locationId) : void 0,
    r = Z(),
    i = r.settings.voice,
    a = r.settings.variety,
    [o, s] = (0, v.useState)(`shadow`),
    [c, l] = (0, v.useState)(0),
    [u, d] = (0, v.useState)(!1),
    [f, p] = (0, v.useState)(null),
    [m, h] = (0, v.useState)(``),
    [g, _] = (0, v.useState)({}),
    y = Yv();
  if (((0, v.useEffect)(() => () => _g(), []), !t || !n))
    return (0, z.jsx)(Wg, { title: `没有这个关卡` });
  let b = t.shadow,
    x = Nh(b[c], a),
    S = `${o}:${c}`,
    C = u ? { ...i, rate: Math.max(0.5, i.rate - 0.25) } : i,
    w = () => fg(x.en, C, n.npc.voice, n.npc.id, a);
  function T(e) {
    (p(e),
      _((t) => ({ ...t, [S]: Math.max(t[S] ?? 0, e.score) })),
      o === `shadow`
        ? (r.bump(`shadow`),
          r.addSkill({ speak: e.score >= 70 ? 2 : 1, listen: 1 }))
        : (r.bump(`dictation`), r.addSkill({ listen: e.score >= 70 ? 3 : 2 })),
      e.score >= 70 && r.addXp(2),
      r.touchDay(`shadow`),
      Sh(Z.getState()));
  }
  function E() {
    if ((_g(), p(null), h(``), y.clearRecording(), c + 1 < b.length)) l(c + 1);
    else {
      let e = b
          .map((e, t) => g[`${o}:${t}`])
          .filter((e) => typeof e == `number`),
        t = e.length ? Math.round(e.reduce((e, t) => e + t, 0) / e.length) : 0;
      (F.success(`${o === `shadow` ? `跟读` : `听写`}完一轮，平均 ${t} 分`, {
        description: t >= 85 ? `很稳，去挑战下一关吧` : `再来一轮，分数会涨`,
      }),
        l(0));
    }
  }
  function D(e) {
    (_g(),
      y.active && y.stop(),
      y.clearRecording(),
      s(e),
      l(0),
      p(null),
      h(``));
  }
  function O() {
    (p(null), y.clearRecording());
    let e = x.en;
    y.start(
      (t, n) => {
        t.trim() && T(nh(e, n));
      },
      { record: !0 },
    );
  }
  let k = b.filter((e, t) => (g[`${o}:${t}`] ?? -1) >= 0).length;
  return (0, z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, z.jsx)(Wg, {
        title: `${n.emoji} ${t.title} · 跟读与听写`,
        sub: `${b.length} 句本关典型句子，先听，再说或写`,
        fallback: `/l/${n.id}`,
      }),
      (0, z.jsxs)(wy, {
        value: o,
        onValueChange: D,
        children: [
          (0, z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, z.jsxs)(Ey, {
                children: [
                  (0, z.jsx)(Dy, { value: `shadow`, children: `跟读` }),
                  (0, z.jsx)(Dy, { value: `dictation`, children: `听写` }),
                ],
              }),
              (0, z.jsxs)(X, {
                variant: u ? `secondary` : `ghost`,
                size: `sm`,
                className: `ml-auto`,
                onClick: () => d((e) => !e),
                title: `放慢语速`,
                children: [(0, z.jsx)(on, {}), ` `, u ? `慢速中` : `慢一点`],
              }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            className: `mt-3 flex items-center gap-2 text-sm text-muted-foreground`,
            children: [
              (0, z.jsxs)(`span`, { children: [c + 1, ` / `, b.length] }),
              (0, z.jsx)(mm, {
                value: (k / b.length) * 100,
                className: `flex-1`,
              }),
              (0, z.jsxs)(`span`, { children: [`练过 `, k, ` 句`] }),
            ],
          }),
          (0, z.jsx)(Oy, {
            value: `shadow`,
            children: (0, z.jsx)(Tg, {
              children: (0, z.jsxs)(kg, {
                className: `space-y-4 py-6`,
                children: [
                  (0, z.jsxs)(`div`, {
                    className: `text-center`,
                    children: [
                      (0, z.jsx)(`p`, {
                        className: `en text-xl`,
                        children: x.en,
                      }),
                      (0, z.jsx)(`p`, {
                        className: `mt-1 text-sm text-muted-foreground`,
                        children: x.zh,
                      }),
                    ],
                  }),
                  (0, z.jsxs)(`div`, {
                    className: `flex flex-wrap justify-center gap-2`,
                    children: [
                      (0, z.jsxs)(X, {
                        variant: `outline`,
                        onClick: w,
                        children: [(0, z.jsx)(En, {}), ` 听`],
                      }),
                      (0, z.jsxs)(X, {
                        variant: y.active ? `destructive` : `default`,
                        className: B(y.active && y.listening && `mic-live`),
                        disabled: !y.supported,
                        onClick: () => (y.active ? y.stop() : O()),
                        children: [
                          y.active ? (0, z.jsx)(un, {}) : (0, z.jsx)(Lt, {}),
                          ` `,
                          y.active ? `说完了` : `跟着说`,
                        ],
                      }),
                    ],
                  }),
                  !y.supported &&
                    (0, z.jsx)(`p`, {
                      className: `text-center text-xs text-muted-foreground`,
                      children: `这个浏览器不支持语音识别，用 Chrome 打开，或先练听写。`,
                    }),
                  y.active &&
                    (0, z.jsx)(`p`, {
                      className: `text-center text-sm text-muted-foreground`,
                      children: y.listening
                        ? `开麦了，说吧……${y.interim}`
                        : `正在开麦，等这里变成「开麦了」再说`,
                    }),
                  y.error &&
                    (0, z.jsx)(`p`, {
                      className: `text-center text-sm text-destructive`,
                      children: y.error,
                    }),
                  f &&
                    (0, z.jsx)(Ay, {
                      res: f,
                      mode: `shadow`,
                      onNext: E,
                      last: c + 1 >= b.length,
                    }),
                  !y.active &&
                    y.recording &&
                    (0, z.jsx)(`div`, {
                      className: `flex justify-center`,
                      children: (0, z.jsx)(Hg, { url: y.recording.url }),
                    }),
                  !y.active &&
                    y.recordError &&
                    (0, z.jsx)(`p`, {
                      className: `text-center text-xs text-muted-foreground`,
                      children: y.recordError,
                    }),
                ],
              }),
            }),
          }),
          (0, z.jsx)(Oy, {
            value: `dictation`,
            children: (0, z.jsx)(Tg, {
              children: (0, z.jsxs)(kg, {
                className: `space-y-4 py-6`,
                children: [
                  (0, z.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-2`,
                    children: [
                      (0, z.jsxs)(X, {
                        size: `lg`,
                        variant: f ? `outline` : `default`,
                        onClick: w,
                        children: [(0, z.jsx)(En, {}), ` 听一遍`],
                      }),
                      (0, z.jsx)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        children: `听懂了把整句写下来，不确定的词按发音拼`,
                      }),
                    ],
                  }),
                  (0, z.jsx)(vv, {
                    value: m,
                    onChange: (e) => h(e.target.value),
                    rows: 2,
                    disabled: !!f,
                    placeholder: `写下你听到的`,
                    className: `en`,
                    onKeyDown: (e) => {
                      e.key === `Enter` &&
                        !e.shiftKey &&
                        !e.nativeEvent.isComposing &&
                        e.keyCode !== 229 &&
                        (e.preventDefault(), m.trim() && !f && T(th(x.en, m)));
                    },
                  }),
                  f
                    ? (0, z.jsxs)(z.Fragment, {
                        children: [
                          (0, z.jsxs)(`div`, {
                            className: `text-center`,
                            children: [
                              (0, z.jsx)(`p`, {
                                className: `en text-lg`,
                                children: x.en,
                              }),
                              (0, z.jsx)(`p`, {
                                className: `text-sm text-muted-foreground`,
                                children: x.zh,
                              }),
                            ],
                          }),
                          (0, z.jsx)(Ay, {
                            res: f,
                            mode: `dictation`,
                            onNext: E,
                            last: c + 1 >= b.length,
                          }),
                        ],
                      })
                    : (0, z.jsx)(`div`, {
                        className: `flex justify-center`,
                        children: (0, z.jsxs)(X, {
                          disabled: !m.trim(),
                          onClick: () => T(th(x.en, m)),
                          children: [(0, z.jsx)(ze, {}), ` 对答案`],
                        }),
                      }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: `flex gap-2`,
        children: (0, z.jsxs)(X, {
          variant: `outline`,
          onClick: () => ch(`/play/${t.id}`),
          children: [`去和 `, n.npc.name, ` 对话`],
        }),
      }),
    ],
  });
}

export function Ry({ className: e, size: t = `default`, ...n }) {
  return (0, z.jsx)(Hp, {
    "data-slot": `switch`,
    "data-size": t,
    className: B(
      `peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50`,
      e,
    ),
    ...n,
    children: (0, z.jsx)(Wp, {
      "data-slot": `switch-thumb`,
      className: `pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground`,
    }),
  });
}

export function zy({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: i = 100,
  ...a
}) {
  let o = v.useMemo(
    () => (Array.isArray(n) ? n : Array.isArray(t) ? t : [r, i]),
    [n, t, r, i],
  );
  return (0, z.jsxs)(tp, {
    "data-slot": `slider`,
    defaultValue: t,
    value: n,
    min: r,
    max: i,
    className: B(
      `relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col`,
      e,
    ),
    ...a,
    children: [
      (0, z.jsx)(cp, {
        "data-slot": `slider-track`,
        className: `relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1`,
        children: (0, z.jsx)(up, {
          "data-slot": `slider-range`,
          className: `absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full`,
        }),
      }),
      Array.from({ length: o.length }, (e, t) =>
        (0, z.jsx)(
          _p,
          {
            "data-slot": `slider-thumb`,
            className: `relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50`,
          },
          t,
        ),
      ),
    ],
  });
}

export function By({ ...e }) {
  return (0, z.jsx)(Bd, { "data-slot": `select`, ...e });
}

export function Vy({ className: e, ...t }) {
  return (0, z.jsx)(ff, {
    "data-slot": `select-group`,
    className: B(`scroll-my-1 p-1`, e),
    ...t,
  });
}

export function Hy({ ...e }) {
  return (0, z.jsx)(Wd, { "data-slot": `select-value`, ...e });
}

export function Uy({ className: e, size: t = `default`, children: n, ...r }) {
  return (0, z.jsxs)(Hd, {
    "data-slot": `select-trigger`,
    "data-size": t,
    className: B(
      `flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...r,
    children: [
      n,
      (0, z.jsx)(Gd, {
        asChild: !0,
        children: (0, z.jsx)(Ve, {
          className: `pointer-events-none size-4 text-muted-foreground`,
        }),
      }),
    ],
  });
}

export function Wy({
  className: e,
  children: t,
  position: n = `item-aligned`,
  align: r = `center`,
  ...i
}) {
  return (0, z.jsx)(Jd, {
    children: (0, z.jsxs)(Xd, {
      "data-slot": `select-content`,
      "data-align-trigger": n === `item-aligned`,
      className: B(
        `relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
        n === `popper` &&
          `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
        e,
      ),
      position: n,
      align: r,
      ...i,
      children: [
        (0, z.jsx)(qy, {}),
        (0, z.jsx)(lf, {
          "data-position": n,
          className: B(
            `data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)`,
            n === `popper` && ``,
          ),
          children: t,
        }),
        (0, z.jsx)(Jy, {}),
      ],
    }),
  });
}

export function Gy({ className: e, ...t }) {
  return (0, z.jsx)(mf, {
    "data-slot": `select-label`,
    className: B(`px-1.5 py-1 text-xs text-muted-foreground`, e),
    ...t,
  });
}

export function Ky({ className: e, children: t, ...n }) {
  return (0, z.jsxs)(vf, {
    "data-slot": `select-item`,
    className: B(
      `relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,
      e,
    ),
    ...n,
    children: [
      (0, z.jsx)(`span`, {
        className: `pointer-events-none absolute right-2 flex size-4 items-center justify-center`,
        children: (0, z.jsx)(Sf, {
          children: (0, z.jsx)(ze, { className: `pointer-events-none` }),
        }),
      }),
      (0, z.jsx)(bf, { children: t }),
    ],
  });
}

export function qy({ className: e, ...t }) {
  return (0, z.jsx)(wf, {
    "data-slot": `select-scroll-up-button`,
    className: B(
      `z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...t,
    children: (0, z.jsx)(Ue, {}),
  });
}

export function Jy({ className: e, ...t }) {
  return (0, z.jsx)(Ef, {
    "data-slot": `select-scroll-down-button`,
    className: B(
      `z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,
      e,
    ),
    ...t,
    children: (0, z.jsx)(Ve, {}),
  });
}

export var Yy = `english-town-v1`;