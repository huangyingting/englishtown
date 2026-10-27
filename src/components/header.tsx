"use client";
// @ts-nocheck
import { Z } from "@/lib/store";
import { ch, oh } from "@/lib/router";
import { B, Nt, Sn, dt, rn, wn, z, zt } from "@/lib/deps";
import { X, mm } from "@/components/ui/primitives";

export function uh({ path: e }) {
  let t = Z((e) => e.xp),
    n = Z((e) => e.streak),
    r = oh(t),
    i = [
      {
        to: `/`,
        label: `地图`,
        icon: Nt,
        active: e === `/` || e.startsWith(`/d/`) || e.startsWith(`/l/`),
      },
      { to: `/town`, label: `居民`, icon: wn, active: e.startsWith(`/town`) },
      {
        to: `/review`,
        label: `错题本`,
        icon: zt,
        active: e.startsWith(`/review`),
      },
      { to: `/me`, label: `我的`, icon: Sn, active: e.startsWith(`/me`) },
    ];
  return (0, z.jsxs)(`header`, {
    className: `sticky top-0 z-20 border-b bg-background/95 backdrop-blur`,
    children: [
      (0, z.jsxs)(`div`, {
        className: `mx-auto flex h-12 max-w-5xl items-center gap-2 px-4`,
        children: [
          (0, z.jsxs)(`button`, {
            className: `flex items-center gap-1 text-base font-semibold`,
            onClick: () => ch(`/`),
            children: [
              (0, z.jsx)(`span`, { "aria-hidden": !0, children: `🏘️` }),
              ` 英语小镇`,
            ],
          }),
          (0, z.jsx)(`nav`, {
            className: `ml-2 hidden gap-1 sm:flex`,
            children: i.map((e) =>
              (0, z.jsxs)(
                X,
                {
                  variant: e.active ? `secondary` : `ghost`,
                  size: `sm`,
                  onClick: () => ch(e.to),
                  children: [(0, z.jsx)(e.icon, {}), ` `, e.label],
                },
                e.to,
              ),
            ),
          }),
          (0, z.jsxs)(`div`, {
            className: `ml-auto flex items-center gap-2`,
            children: [
              (0, z.jsxs)(`button`, {
                className: `hidden items-center gap-2 sm:flex`,
                onClick: () => ch(`/me`),
                title: `${r.cur}/${r.need} 经验`,
                children: [
                  (0, z.jsxs)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: [`Lv.`, r.level, ` `, r.title],
                  }),
                  (0, z.jsx)(mm, {
                    value: (r.cur / r.need) * 100,
                    className: `w-20`,
                  }),
                ],
              }),
              (0, z.jsxs)(`span`, {
                className: B(
                  `flex items-center gap-0.5 text-sm`,
                  n > 0 ? `text-amber-foreground` : `text-muted-foreground`,
                ),
                title: `连续学习天数`,
                children: [
                  (0, z.jsx)(dt, {
                    className: B(`size-4`, n > 0 && `fill-amber text-amber`),
                  }),
                  ` `,
                  n,
                ],
              }),
              (0, z.jsx)(X, {
                variant: `ghost`,
                size: `icon-sm`,
                "aria-label": `设置`,
                onClick: () => ch(`/settings`),
                children: (0, z.jsx)(rn, {}),
              }),
            ],
          }),
        ],
      }),
      (0, z.jsx)(`nav`, {
        className: `flex border-t sm:hidden`,
        children: i.map((e) =>
          (0, z.jsxs)(
            `button`,
            {
              className: B(
                `flex flex-1 items-center justify-center gap-1 py-2 text-sm`,
                e.active ? `text-primary` : `text-muted-foreground`,
              ),
              onClick: () => ch(e.to),
              children: [
                (0, z.jsx)(e.icon, { className: `size-4` }),
                ` `,
                e.label,
              ],
            },
            e.to,
          ),
        ),
      }),
    ],
  });
}