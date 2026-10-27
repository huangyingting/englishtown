"use client";
// @ts-nocheck
import { $m, Gm, Z } from "@/lib/store";
import { _h, dh, gh, hh, yh } from "@/data/town";
import { B, Ft, Ge, Gt, Lt, Ut, Yt, kt, v, z, zt } from "@/lib/deps";
import { Bg, Dg, Eg, Ig, Og, Rg, Tg, Vg, Wg, X, jg, kg, qg } from "@/components/ui/primitives";
import { ch } from "@/lib/router";
import { X_, Y_, Yg, Z_ } from "@/components/avatar";
import { dv, fv } from "@/components/scene-stage";
import { ag, og } from "@/lib/speech";
import { Mh } from "@/data/variety";

export function pv() {
  let e = Z((e) => e.missions),
    t = Z((e) => e.sessions),
    n = Z($m),
    r = Z((e) => e.settings.nickname),
    i = Z((e) => e.notebook),
    a = Object.values(t).filter((e) => !e.finished && e.messages.length > 1),
    o = i.filter((e) => Gm(e.srs)).length,
    s = mv(e),
    c = s ? gh(s.locationId) : void 0,
    l = [
      {
        key: `talk`,
        label: `和 NPC 聊一关`,
        icon: Ft,
        done: n.talk,
        to: s ? `/play/${s.id}` : `/`,
      },
      {
        key: `shadow`,
        label: `跟读或听写几句`,
        icon: Lt,
        done: n.shadow,
        to: s ? `/shadow/${s.id}` : `/`,
      },
      {
        key: `write`,
        label: `写一篇小作文`,
        icon: Ut,
        done: n.write,
        to: s ? `/l/${s.locationId}` : `/`,
      },
      {
        key: `review`,
        label: o ? `复习 ${o} 条错题` : `复习错题本`,
        icon: zt,
        done: n.review,
        to: `/review`,
      },
    ],
    u = l.filter((e) => e.done).length;
  return (0, z.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, z.jsx)(Bg, {}),
      (0, z.jsxs)(`section`, {
        className: `grid gap-4 md:grid-cols-[1.2fr_1fr]`,
        children: [
          (0, z.jsxs)(Tg, {
            children: [
              (0, z.jsx)(Eg, {
                children: (0, z.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, z.jsx)(`button`, {
                      type: `button`,
                      className: `shrink-0 rounded-full`,
                      "aria-label": `换形象`,
                      title: `换形象`,
                      onClick: () => ch(`/settings`),
                      children: (0, z.jsx)(Z_, {
                        size: 44,
                        children: (0, z.jsx)(X_, {
                          mood: u === 4 ? `happy` : `idle`,
                        }),
                      }),
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, z.jsx)(Dg, {
                          children: r ? `${r}，今天练这个` : `今天练这个`,
                        }),
                        (0, z.jsxs)(Og, {
                          children: [`四件小事都做完，额外加 `, 30, ` 经验。`],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, z.jsxs)(kg, {
                className: `space-y-2`,
                children: [
                  l.map((e) =>
                    (0, z.jsxs)(
                      `button`,
                      {
                        className: B(
                          `flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm hover:bg-muted`,
                          e.done && `opacity-60`,
                        ),
                        onClick: () => ch(e.to),
                        children: [
                          (0, z.jsx)(e.icon, {
                            className: B(
                              `size-4`,
                              e.done ? `text-primary` : `text-muted-foreground`,
                            ),
                          }),
                          (0, z.jsx)(`span`, {
                            className: B(`flex-1`, e.done && `line-through`),
                            children: e.label,
                          }),
                          e.done
                            ? (0, z.jsx)(jg, {
                                variant: `secondary`,
                                children: `完成`,
                              })
                            : (0, z.jsx)(Ge, {
                                className: `size-4 text-muted-foreground`,
                              }),
                        ],
                      },
                      e.key,
                    ),
                  ),
                  (0, z.jsxs)(`p`, {
                    className: `pt-1 text-xs text-muted-foreground`,
                    children: [u, `/4 完成`, n.bonus ? `，奖励已到账` : ``],
                  }),
                ],
              }),
            ],
          }),
          (0, z.jsxs)(Tg, {
            children: [
              (0, z.jsxs)(Eg, {
                children: [
                  (0, z.jsx)(Dg, {
                    children: a.length ? `上次聊到一半` : `推荐下一关`,
                  }),
                  (0, z.jsx)(Og, {
                    children: a.length
                      ? `接着聊，NPC 还记得刚才说的`
                      : `按难度从易到难，帮你挑好了`,
                  }),
                ],
              }),
              (0, z.jsxs)(kg, {
                className: `space-y-2`,
                children: [
                  a.slice(0, 3).map((e) => {
                    let t = e.missionId ? _h(e.missionId) : null,
                      n = gh(e.locationId);
                    return (0, z.jsxs)(
                      `div`,
                      {
                        className: `flex items-center gap-2`,
                        children: [
                          n &&
                            (0, z.jsx)(Z_, {
                              size: 32,
                              children: (0, z.jsx)(Y_, {
                                npc: n.npc,
                                blink: !1,
                              }),
                            }),
                          (0, z.jsxs)(X, {
                            variant: `outline`,
                            className: `min-w-0 flex-1 justify-between`,
                            onClick: () =>
                              ch(
                                e.missionId
                                  ? `/play/${e.missionId}`
                                  : `/free/${e.locationId}`,
                              ),
                            children: [
                              (0, z.jsx)(`span`, {
                                className: `truncate`,
                                children: t
                                  ? t.title
                                  : `和 ${n?.npc.name} 闲聊`,
                              }),
                              (0, z.jsx)(Gt, {}),
                            ],
                          }),
                        ],
                      },
                      e.key,
                    );
                  }),
                  !a.length &&
                    s &&
                    c &&
                    (0, z.jsxs)(z.Fragment, {
                      children: [
                        (0, z.jsx)(dv, {
                          loc: c,
                          className: `aspect-[2/1] w-full rounded-lg`,
                        }),
                        (0, z.jsxs)(X, {
                          className: `w-full justify-between`,
                          onClick: () => ch(`/play/${s.id}`),
                          children: [
                            (0, z.jsxs)(`span`, {
                              className: `truncate`,
                              children: [c.emoji, ` `, s.title],
                            }),
                            (0, z.jsxs)(`span`, {
                              className: `flex items-center gap-2 text-xs opacity-80`,
                              children: [s.level, ` `, (0, z.jsx)(Gt, {})],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      dh.map((t) => {
        let n = t.locations.flatMap((e) => e.missions),
          r = n.filter((t) => (e[t.id]?.stars ?? 0) > 0).length;
        return (0, z.jsxs)(
          `section`,
          {
            children: [
              (0, z.jsxs)(`div`, {
                className: `mb-2 flex items-end justify-between`,
                children: [
                  (0, z.jsxs)(`div`, {
                    children: [
                      (0, z.jsxs)(`h2`, {
                        className: `text-base font-semibold`,
                        children: [t.emoji, ` `, t.name],
                      }),
                      (0, z.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: t.blurb,
                      }),
                    ],
                  }),
                  (0, z.jsxs)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: [`通关 `, r, `/`, n.length],
                  }),
                ],
              }),
              (0, z.jsx)(`div`, {
                className: `grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4`,
                children: t.locations.map((t) =>
                  (0, z.jsx)(
                    fv,
                    {
                      loc: t,
                      stars: t.missions.reduce(
                        (t, n) => t + (e[n.id]?.stars ?? 0),
                        0,
                      ),
                    },
                    t.id,
                  ),
                ),
              }),
            ],
          },
          t.id,
        );
      }),
      (0, z.jsx)(`footer`, {
        className: `border-t pt-6`,
        children: (0, z.jsx)(qg, { compact: !0 }),
      }),
    ],
  });
}

export function mv(e) {
  let t = { A2: 0, B1: 1, B2: 2 },
    n = yh().filter((t) => (e[t.id]?.stars ?? 0) === 0);
  return (n.sort((e, n) => t[e.level] - t[n.level]), n[0] ?? null);
}

export function hv({ id: e }) {
  let t = hh(e),
    n = Z((e) => e.missions);
  return t
    ? (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsx)(Wg, { title: `${t.emoji} ${t.name}`, sub: t.blurb }),
          (0, z.jsx)(`div`, {
            className: `grid grid-cols-2 gap-3 sm:grid-cols-3`,
            children: t.locations.map((e) =>
              (0, z.jsx)(
                fv,
                {
                  loc: e,
                  stars: e.missions.reduce(
                    (e, t) => e + (n[t.id]?.stars ?? 0),
                    0,
                  ),
                  sub: e.blurb,
                },
                e.id,
              ),
            ),
          }),
        ],
      })
    : (0, z.jsx)(Wg, { title: `没有这个区` });
}

export function gv() {
  return (0, v.useSyncExternalStore)(ag, og, () => null);
}

export function _v({ id: e }) {
  let t = gh(e),
    n = Z((e) => e.missions),
    r = Z((e) => e.writing),
    i = Z((e) => e.sessions),
    a = Z((e) => e.settings.variety),
    o = gv();
  if (!t) return (0, z.jsx)(Wg, { title: `没有这个地点` });
  let s = t.missions.some((e) => (n[e.id]?.stars ?? 0) > 0),
    c = Yg(t.npc.id);
  return (0, z.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, z.jsx)(Wg, {
        title: `${t.emoji} ${t.name}`,
        sub: t.blurb,
        fallback: `/`,
      }),
      (0, z.jsx)(Bg, {}),
      (0, z.jsx)(Tg, {
        className: `py-0`,
        children: (0, z.jsxs)(`div`, {
          className: `grid sm:grid-cols-[minmax(0,5fr)_6fr]`,
          children: [
            (0, z.jsx)(dv, {
              loc: t,
              className: `aspect-[2/1] w-full sm:aspect-auto sm:h-full sm:min-h-52`,
              talking: o === t.npc.id,
              mood: o === t.npc.id ? `happy` : `idle`,
            }),
            (0, z.jsxs)(`div`, {
              className: `space-y-2 p-4`,
              children: [
                (0, z.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2`,
                  children: [
                    (0, z.jsx)(`span`, {
                      className: `text-base font-medium`,
                      children: t.npc.name,
                    }),
                    (0, z.jsx)(`span`, {
                      className: `text-sm text-muted-foreground`,
                      children: t.npc.role,
                    }),
                    c &&
                      (0, z.jsx)(jg, {
                        variant: `outline`,
                        children: c.tagline,
                      }),
                  ],
                }),
                c &&
                  (0, z.jsx)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    children: c.bio,
                  }),
                c &&
                  (0, z.jsxs)(`p`, {
                    className: `flex flex-wrap items-center gap-1 text-sm`,
                    children: [
                      (0, z.jsxs)(`span`, {
                        className: `en`,
                        children: [`“`, Mh(c.catchphrase, a), `”`],
                      }),
                      (0, z.jsx)(Vg, {
                        text: Mh(c.catchphrase, a),
                        gender: t.npc.voice,
                        size: `icon-xs`,
                        who: t.npc.id,
                      }),
                      (0, z.jsxs)(`span`, {
                        className: `text-xs text-muted-foreground`,
                        children: [`from `, c.from],
                      }),
                    ],
                  }),
                (0, z.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2 pt-1`,
                  children: [
                    (0, z.jsx)(`p`, {
                      className: `min-w-0 flex-1 text-sm text-muted-foreground`,
                      children: s
                        ? `可以随便聊：${t.freeChatTopics.join(`、`)}`
                        : `先通过一关，就能和 TA 随便聊`,
                    }),
                    (0, z.jsxs)(X, {
                      variant: s ? `default` : `outline`,
                      disabled: !s,
                      onClick: () => ch(`/free/${t.id}`),
                      children: [
                        s ? (0, z.jsx)(Ft, {}) : (0, z.jsx)(kt, {}),
                        ` 自由聊天`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, z.jsxs)(`section`, {
        children: [
          (0, z.jsx)(`h2`, {
            className: `mb-2 font-semibold`,
            children: `关卡`,
          }),
          (0, z.jsx)(`div`, {
            className: `space-y-3`,
            children: t.missions.map((e, r) => {
              let a = n[e.id],
                o = r > 0 ? n[t.missions[r - 1].id] : null,
                s = r > 0 && (o?.stars ?? 0) === 0,
                c = i[e.id],
                l = c && !c.finished && c.messages.length > 1;
              return (0, z.jsxs)(
                Tg,
                {
                  className: s ? `opacity-70` : void 0,
                  children: [
                    (0, z.jsxs)(Eg, {
                      children: [
                        (0, z.jsxs)(Dg, {
                          className: `flex items-center gap-2`,
                          children: [
                            e.title,
                            ` `,
                            (0, z.jsx)(Rg, { level: e.level }),
                            a?.stars ? (0, z.jsx)(Ig, { n: a.stars }) : null,
                          ],
                        }),
                        (0, z.jsx)(Og, { children: e.playerRole }),
                      ],
                    }),
                    (0, z.jsxs)(kg, {
                      className: `space-y-3`,
                      children: [
                        (0, z.jsx)(`ul`, {
                          className: `grid gap-1 text-sm sm:grid-cols-2`,
                          children: e.objectives.map((e, t) =>
                            (0, z.jsxs)(
                              `li`,
                              {
                                className: `flex gap-2`,
                                children: [
                                  (0, z.jsxs)(`span`, {
                                    className: `text-muted-foreground`,
                                    children: [t + 1, `.`],
                                  }),
                                  ` `,
                                  e.zh,
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `flex flex-wrap items-center gap-2`,
                          children: [
                            s
                              ? (0, z.jsxs)(jg, {
                                  variant: `outline`,
                                  children: [
                                    (0, z.jsx)(kt, {}),
                                    ` 先通过上一关`,
                                  ],
                                })
                              : (0, z.jsxs)(z.Fragment, {
                                  children: [
                                    (0, z.jsxs)(X, {
                                      onClick: () => ch(`/play/${e.id}`),
                                      children: [
                                        l
                                          ? (0, z.jsx)(Yt, {})
                                          : (0, z.jsx)(Gt, {}),
                                        ` `,
                                        l
                                          ? `继续对话`
                                          : a?.stars
                                            ? `再玩一次`
                                            : `开始对话`,
                                      ],
                                    }),
                                    (0, z.jsxs)(X, {
                                      variant: `outline`,
                                      onClick: () => ch(`/shadow/${e.id}`),
                                      children: [
                                        (0, z.jsx)(Lt, {}),
                                        ` 跟读 · 听写`,
                                      ],
                                    }),
                                  ],
                                }),
                            (0, z.jsxs)(`span`, {
                              className: `ml-auto text-xs text-muted-foreground`,
                              children: [`+`, e.xp, ` 经验`],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      }),
      (0, z.jsxs)(`section`, {
        children: [
          (0, z.jsx)(`h2`, {
            className: `mb-2 font-semibold`,
            children: `写作`,
          }),
          (0, z.jsx)(`div`, {
            className: `grid gap-3 sm:grid-cols-2`,
            children: t.writing.map((e) => {
              let t = r[e.id];
              return (0, z.jsxs)(
                Tg,
                {
                  children: [
                    (0, z.jsxs)(Eg, {
                      children: [
                        (0, z.jsxs)(Dg, {
                          className: `flex items-center gap-2`,
                          children: [
                            e.title,
                            ` `,
                            (0, z.jsx)(Rg, { level: e.level }),
                          ],
                        }),
                        (0, z.jsx)(Og, { children: e.prompt }),
                      ],
                    }),
                    (0, z.jsxs)(kg, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, z.jsxs)(X, {
                          variant: `outline`,
                          onClick: () => ch(`/write/${e.id}`),
                          children: [
                            (0, z.jsx)(Ut, {}),
                            ` `,
                            t ? `再写一次` : `去写`,
                          ],
                        }),
                        t &&
                          (0, z.jsxs)(`span`, {
                            className: `text-xs text-muted-foreground`,
                            children: [`最好成绩 `, t.best, `/20`],
                          }),
                        (0, z.jsxs)(`span`, {
                          className: `ml-auto text-xs text-muted-foreground`,
                          children: [e.words[0], `-`, e.words[1], ` 词`],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      }),
    ],
  });
}