"use client";
// @ts-nocheck
import { Sh, _h, gh, vh } from "@/data/town";
import { Gm, Km, Z, eh } from "@/lib/store";
import { B, F, Fe, On, Yt, Ze, cn, lt, mn, qe, v, z, ze } from "@/lib/deps";
import { Bg, Dg, Eg, Gg, Kg, Rg, Tg, Ug, Vg, Wg, X, jg, kg, mm, vv, zg } from "@/components/ui/primitives";
import { Bm, Fm, Im } from "@/lib/llm";
import { Bv, zv } from "@/components/town-map";
import { Mh, Ph } from "@/data/variety";
import { ch } from "@/lib/router";

export var vy = {
    email: `邮件`,
    message: `消息`,
    review: `点评`,
    post: `帖子`,
    note: `便条`,
    essay: `短文`,
  };

export var yy = [
    { key: `task`, label: `任务完成` },
    { key: `grammar`, label: `语法` },
    { key: `vocab`, label: `词汇` },
    { key: `tone`, label: `语气` },
  ];

export var by = (e) => e.trim().split(/\s+/).filter(Boolean).length;

export var xy = (e) =>
    typeof e == `number` && Number.isFinite(e)
      ? Math.max(0, Math.min(5, Math.round(e)))
      : 0;

export function Sy(e, t) {
  let n = e.scores ?? {};
  return {
    scores: {
      task: xy(n.task),
      grammar: xy(n.grammar),
      vocab: xy(n.vocab),
      tone: xy(n.tone),
    },
    overall_zh: typeof e.overall_zh == `string` ? e.overall_zh : ``,
    issues: Array.isArray(e.issues)
      ? e.issues
          .filter(
            (e) =>
              e && typeof e.wrong == `string` && typeof e.right == `string`,
          )
          .map((e) => ({
            type: String(e.type ?? `grammar`),
            wrong: e.wrong,
            right: e.right,
            why_zh: String(e.why_zh ?? ``),
          }))
      : [],
    corrected:
      typeof e.corrected == `string` && e.corrected.trim() ? e.corrected : t,
    upgraded: typeof e.upgraded == `string` ? e.upgraded : ``,
    checklist: Array.isArray(e.checklist)
      ? e.checklist
          .filter((e) => e && typeof e.item_zh == `string`)
          .map((e) => ({ item_zh: e.item_zh, met: e.met === !0 }))
      : [],
  };
}

export function Cy({ taskId: e }) {
  let t = vh(e),
    n = t ? gh(t.locationId) : void 0,
    r = Z((e) => e.settings.llm),
    i = Z((e) => e.settings.variety),
    a = Z((t) => t.writing[e]),
    o = Z(),
    s = `et-draft-${e}`,
    [c, l] = (0, v.useState)(() => {
      try {
        return localStorage.getItem(s) ?? ``;
      } catch {
        return ``;
      }
    }),
    [u, d] = (0, v.useState)(null),
    [f, p] = (0, v.useState)(!1),
    [m, h] = (0, v.useState)(``),
    [g, _] = (0, v.useState)(!1),
    y = (0, v.useRef)(null);
  if (
    ((0, v.useEffect)(() => {
      try {
        c ? localStorage.setItem(s, c) : localStorage.removeItem(s);
      } catch {}
    }, [c, s]),
    (0, v.useEffect)(() => () => y.current?.abort(), []),
    !t || !n)
  )
    return (0, z.jsx)(Wg, { title: `没有这道写作题` });
  let b = by(c),
    [x, S] = t.words;
  async function C() {
    if (!t || b < 10 || f) return;
    (p(!0), h(``));
    let e = new AbortController();
    y.current = e;
    try {
      let n = Sy(
          await Bm(
            r,
            [
              { role: `system`, content: zv(t, c, i) },
              { role: `user`, content: c },
            ],
            { signal: e.signal, maxTokens: 2e3 },
          ),
          c,
        ),
        a = n.scores.task + n.scores.grammar + n.scores.vocab + n.scores.tone,
        s = Math.max(10, a * 2);
      (o.recordWriting(t.id, a),
        o.addXp(s),
        o.addSkill({ write: 4 + Math.round(a / 4), grammar: 1 }),
        o.touchDay(`write`));
      let l = n.issues.length
        ? o.addNotebook(
            n.issues.map((e) => ({
              kind: `fix`,
              wrong: e.wrong,
              right: e.right,
              why: e.why_zh,
              type: e.type,
              source: t.id,
            })),
          )
        : 0;
      (Sh(Z.getState()),
        d(n),
        F.success(`批改好了：${a}/20，+${s} 经验`, {
          description: l ? `${l} 处修改记进了错题本` : void 0,
        }));
    } catch (e) {
      (e instanceof Fm && e.kind === `abort`) ||
        h((e instanceof Fm, e.message));
    } finally {
      p(!1);
    }
  }
  let w = u
    ? u.scores.task + u.scores.grammar + u.scores.vocab + u.scores.tone
    : 0;
  return (0, z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, z.jsx)(Wg, {
        title: `${n.emoji} ${t.title}`,
        sub: (0, z.jsxs)(`span`, {
          className: `flex flex-wrap items-center gap-2`,
          children: [
            vy[t.type] ?? t.type,
            ` · 建议 `,
            x,
            `-`,
            S,
            ` 词 `,
            (0, z.jsx)(Rg, { level: t.level }),
            a &&
              (0, z.jsxs)(`span`, { children: [`最好成绩 `, a.best, `/20`] }),
          ],
        }),
        fallback: `/l/${n.id}`,
      }),
      (0, z.jsx)(Bg, {}),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsx)(Eg, { children: (0, z.jsx)(Dg, { children: `题目` }) }),
          (0, z.jsxs)(kg, {
            className: `space-y-3 text-sm`,
            children: [
              (0, z.jsx)(`p`, { children: t.prompt }),
              (0, z.jsxs)(`div`, {
                children: [
                  (0, z.jsx)(`div`, {
                    className: `mb-1 font-medium`,
                    children: `要写到`,
                  }),
                  (0, z.jsx)(`ul`, {
                    className: `list-inside list-decimal text-muted-foreground`,
                    children: t.mustInclude.map((e) =>
                      (0, z.jsx)(`li`, { children: e }, e),
                    ),
                  }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                children: [
                  (0, z.jsx)(`div`, {
                    className: `mb-1 font-medium`,
                    children: `可以用的句式`,
                  }),
                  (0, z.jsx)(`ul`, {
                    className: `space-y-1`,
                    children: Ph(t.tips, i).map((e) =>
                      (0, z.jsxs)(
                        `li`,
                        {
                          className: `flex items-start gap-1`,
                          children: [
                            (0, z.jsx)(Vg, { text: e.en, size: `icon-xs` }),
                            (0, z.jsxs)(`span`, {
                              children: [
                                (0, z.jsx)(`span`, {
                                  className: `en`,
                                  children: e.en,
                                }),
                                ` `,
                                (0, z.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: e.zh,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.en,
                      ),
                    ),
                  }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                children: [
                  (0, z.jsxs)(X, {
                    variant: `ghost`,
                    size: `xs`,
                    onClick: () => _((e) => !e),
                    children: [
                      (0, z.jsx)(lt, {}),
                      ` `,
                      g ? `收起范文` : `先自己写，写完再看范文`,
                    ],
                  }),
                  g &&
                    (0, z.jsxs)(`p`, {
                      className: `en mt-1 rounded-lg bg-muted p-3 text-sm`,
                      children: [
                        Mh(t.sample, i),
                        ` `,
                        (0, z.jsx)(Vg, {
                          text: Mh(t.sample, i),
                          size: `icon-xs`,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsx)(Eg, {
            children: (0, z.jsxs)(Dg, {
              className: `flex items-center justify-between`,
              children: [
                `你的稿子`,
                (0, z.jsxs)(`span`, {
                  className: B(
                    `text-xs font-normal`,
                    b < x || b > S ? `text-muted-foreground` : `text-primary`,
                  ),
                  children: [
                    b,
                    ` 词`,
                    b < x
                      ? `，还差 ${x - b}`
                      : b > S
                        ? `，超了 ${b - S}`
                        : ` ✓`,
                  ],
                }),
              ],
            }),
          }),
          (0, z.jsxs)(kg, {
            className: `space-y-3`,
            children: [
              (0, z.jsx)(vv, {
                value: c,
                onChange: (e) => l(e.target.value),
                rows: 8,
                placeholder: `直接用英语写，想到什么写什么，AI 会帮你改`,
                className: `en min-h-40`,
                disabled: f,
                spellCheck: !0,
              }),
              m &&
                (0, z.jsxs)(`div`, {
                  className: `rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-sm`,
                  children: [
                    (0, z.jsx)(`div`, {
                      className: `font-medium text-destructive`,
                      children: `没批改成`,
                    }),
                    (0, z.jsx)(`p`, {
                      className: `text-muted-foreground`,
                      children: m,
                    }),
                  ],
                }),
              (0, z.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2`,
                children: [
                  (0, z.jsxs)(X, {
                    onClick: C,
                    disabled: !Im(r) || b < 10 || f,
                    children: [
                      f ? (0, z.jsx)(Kg, {}) : (0, z.jsx)(cn, {}),
                      ` `,
                      f ? `批改中` : u ? `改好了，再交一次` : `交给 AI 批改`,
                    ],
                  }),
                  f &&
                    (0, z.jsx)(X, {
                      variant: `ghost`,
                      size: `sm`,
                      onClick: () => y.current?.abort(),
                      children: `取消`,
                    }),
                  b < 10 &&
                    !f &&
                    (0, z.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: `至少写 10 个词`,
                    }),
                  c &&
                    !f &&
                    (0, z.jsxs)(X, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `ml-auto`,
                      onClick: () => {
                        (l(``), d(null));
                      },
                      children: [(0, z.jsx)(Yt, {}), ` 清空重写`],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      u &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsxs)(Tg, {
              children: [
                (0, z.jsx)(Eg, {
                  children: (0, z.jsxs)(Dg, {
                    className: `flex items-center gap-2`,
                    children: [`批改结果 `, w, `/20 `, (0, z.jsx)(zg, {})],
                  }),
                }),
                (0, z.jsxs)(kg, {
                  className: `space-y-4 text-sm`,
                  children: [
                    (0, z.jsx)(`div`, {
                      className: `grid gap-2 sm:grid-cols-2`,
                      children: yy.map((e) =>
                        (0, z.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, z.jsx)(`span`, {
                                className: `w-16 text-muted-foreground`,
                                children: e.label,
                              }),
                              (0, z.jsx)(mm, {
                                value: (u.scores[e.key] / 5) * 100,
                                className: `flex-1`,
                              }),
                              (0, z.jsxs)(`span`, {
                                className: `w-8 text-right`,
                                children: [u.scores[e.key], `/5`],
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                    u.overall_zh && (0, z.jsx)(`p`, { children: u.overall_zh }),
                    u.checklist.length > 0 &&
                      (0, z.jsx)(`ul`, {
                        className: `space-y-1`,
                        children: u.checklist.map((e, t) =>
                          (0, z.jsxs)(
                            `li`,
                            {
                              className: `flex items-center gap-2`,
                              children: [
                                e.met
                                  ? (0, z.jsx)(qe, {
                                      className: `size-4 text-primary`,
                                    })
                                  : (0, z.jsx)(Ze, {
                                      className: `size-4 text-border`,
                                    }),
                                (0, z.jsx)(`span`, {
                                  className: B(
                                    !e.met && `text-muted-foreground`,
                                  ),
                                  children: e.item_zh,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
            u.issues.length > 0 &&
              (0, z.jsxs)(Tg, {
                children: [
                  (0, z.jsx)(Eg, {
                    children: (0, z.jsx)(Dg, { children: `要改的地方` }),
                  }),
                  (0, z.jsxs)(kg, {
                    children: [
                      (0, z.jsx)(`ul`, {
                        className: `space-y-2 text-sm`,
                        children: u.issues.map((e, t) =>
                          (0, z.jsxs)(
                            `li`,
                            {
                              className: `rounded-lg border p-2`,
                              children: [
                                (0, z.jsxs)(`div`, {
                                  children: [
                                    (0, z.jsx)(`span`, {
                                      className: `en line-through text-muted-foreground`,
                                      children: e.wrong,
                                    }),
                                    ` → `,
                                    (0, z.jsx)(`span`, {
                                      className: `en`,
                                      children: e.right,
                                    }),
                                    (0, z.jsx)(Vg, {
                                      text: e.right,
                                      size: `icon-xs`,
                                    }),
                                  ],
                                }),
                                e.why_zh &&
                                  (0, z.jsx)(`div`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: e.why_zh,
                                  }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, z.jsx)(`p`, {
                        className: `mt-2 text-xs text-muted-foreground`,
                        children: `这些修改已记进错题本。`,
                      }),
                    ],
                  }),
                ],
              }),
            (0, z.jsxs)(Tg, {
              children: [
                (0, z.jsx)(Eg, {
                  children: (0, z.jsxs)(Dg, {
                    className: `flex items-center gap-2`,
                    children: [
                      `改过的版本 `,
                      (0, z.jsx)(Vg, { text: u.corrected, size: `icon-xs` }),
                    ],
                  }),
                }),
                (0, z.jsx)(kg, {
                  children: (0, z.jsx)(`p`, {
                    className: `en whitespace-pre-wrap text-sm`,
                    children: u.corrected,
                  }),
                }),
              ],
            }),
            u.upgraded &&
              (0, z.jsxs)(Tg, {
                children: [
                  (0, z.jsx)(Eg, {
                    children: (0, z.jsxs)(Dg, {
                      className: `flex items-center gap-2`,
                      children: [
                        `再高一级的写法 `,
                        (0, z.jsx)(Vg, { text: u.upgraded, size: `icon-xs` }),
                      ],
                    }),
                  }),
                  (0, z.jsxs)(kg, {
                    children: [
                      (0, z.jsx)(`p`, {
                        className: `en whitespace-pre-wrap text-sm`,
                        children: u.upgraded,
                      }),
                      (0, z.jsx)(`p`, {
                        className: `mt-2 text-xs text-muted-foreground`,
                        children: `同样的内容，母语者会这么写。挑两句读出来，记住用法。`,
                      }),
                    ],
                  }),
                ],
              }),
            (0, z.jsxs)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: [
                (0, z.jsxs)(X, {
                  variant: `outline`,
                  onClick: () => ch(`/l/${n.id}`),
                  children: [`回到`, n.name],
                }),
                (0, z.jsx)(X, {
                  variant: `outline`,
                  onClick: () => ch(`/review`),
                  children: `去错题本`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}

export function Ay({ res: e, mode: t, onNext: n, last: r }) {
  let i =
    e.score >= 85
      ? `很准`
      : e.score >= 70
        ? `不错，标红的词再说清楚`
        : t === `shadow`
          ? `机器只听出了标绿的词，再说一次试试`
          : `再听一遍，照着标红的词练`;
  return (0, z.jsxs)(`div`, {
    className: `space-y-2 rounded-lg bg-muted p-3`,
    children: [
      (0, z.jsxs)(`div`, {
        className: `flex items-center gap-2 text-sm`,
        children: [
          (0, z.jsx)(`span`, {
            className: B(
              `text-2xl font-semibold`,
              e.score >= 70 ? `text-primary` : `text-destructive`,
            ),
            children: e.score,
          }),
          (0, z.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: i,
          }),
          (0, z.jsxs)(X, {
            size: `sm`,
            className: `ml-auto`,
            onClick: n,
            children: [r ? `完成这轮` : `下一句`, ` `, (0, z.jsx)(Fe, {})],
          }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: `text-center`,
        children: (0, z.jsx)(Ug, { marks: e.target }),
      }),
      t === `shadow`
        ? (0, z.jsxs)(`p`, {
            className: `text-center text-xs text-muted-foreground`,
            children: [
              `听成了：`,
              (0, z.jsx)(Ug, { marks: e.spoken, className: `text-sm` }),
            ],
          })
        : e.extra.length > 0 &&
          (0, z.jsxs)(`p`, {
            className: `text-center text-xs text-muted-foreground`,
            children: [`多写了：`, e.extra.join(` `)],
          }),
    ],
  });
}

export var jy = {
  grammar: `语法`,
  word: `用词`,
  spelling: `拼写`,
  naturalness: `地道`,
  politeness: `礼貌`,
  tone: `语气`,
};

export function My(e) {
  if (Km(e.srs)) return `已掌握`;
  let t = Math.ceil((e.srs.due - Date.now()) / 864e5);
  return t <= 0 ? `今天复习` : `${t} 天后`;
}

export function Ny(e) {
  return (
    _h(e)?.title ?? vh(e)?.title ?? (e.startsWith(`free:`) ? `自由聊天` : ``)
  );
}

export var Py = (e, t) => eh(e).join(` `) === eh(t).join(` `);

export function Fy() {
  let e = Z((e) => e.notebook),
    [t, n] = (0, v.useState)(`due`),
    [r, i] = (0, v.useState)(null),
    a = (0, v.useMemo)(() => e.filter((e) => Gm(e.srs) && !Km(e.srs)), [e]),
    o = (t === `due` ? a : e).slice().sort((e, t) => e.srs.due - t.srs.due);
  return r
    ? (0, z.jsx)(Ly, { ids: r, onExit: () => i(null) })
    : (0, z.jsxs)(`div`, {
        className: `space-y-4`,
        children: [
          (0, z.jsx)(Wg, {
            title: `错题本`,
            sub: e.length
              ? `共 ${e.length} 条，${a.length} 条今天该复习`
              : `对话和写作里的纠错会自动记在这里`,
            right:
              a.length > 0
                ? (0, z.jsxs)(X, {
                    onClick: () => i(a.map((e) => e.id)),
                    children: [`开始复习（`, a.length, `）`],
                  })
                : e.length > 0
                  ? (0, z.jsx)(X, {
                      variant: `outline`,
                      onClick: () =>
                        i(e.filter((e) => !Km(e.srs)).map((e) => e.id)),
                      disabled: e.every((e) => Km(e.srs)),
                      children: `全部练一遍`,
                    })
                  : null,
          }),
          e.length === 0
            ? (0, z.jsx)(Gg, {
                children: `还没有错题。去找个 NPC 聊几句，说错的地方会记在这里。`,
              })
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsxs)(`div`, {
                    className: `flex gap-1`,
                    children: [
                      (0, z.jsxs)(X, {
                        variant: t === `due` ? `secondary` : `ghost`,
                        size: `sm`,
                        onClick: () => n(`due`),
                        children: [`到期 `, a.length],
                      }),
                      (0, z.jsxs)(X, {
                        variant: t === `all` ? `secondary` : `ghost`,
                        size: `sm`,
                        onClick: () => n(`all`),
                        children: [`全部 `, e.length],
                      }),
                    ],
                  }),
                  o.length === 0 &&
                    (0, z.jsx)(Gg, {
                      children: `今天的都复习完了，明天再来。`,
                    }),
                  (0, z.jsx)(`ul`, {
                    className: `space-y-2`,
                    children: o.map((e) => (0, z.jsx)(Iy, { n: e }, e.id)),
                  }),
                ],
              }),
        ],
      });
}

export function Iy({ n: e }) {
  let t = Z((e) => e.removeNotebook),
    n = Ny(e.source);
  return (0, z.jsx)(`li`, {
    className: `rounded-lg border p-3 text-sm`,
    children: (0, z.jsxs)(`div`, {
      className: `flex items-start gap-2`,
      children: [
        (0, z.jsxs)(`div`, {
          className: `min-w-0 flex-1`,
          children: [
            (0, z.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-1`,
              children: [
                (0, z.jsx)(`span`, {
                  className: `en line-through text-muted-foreground`,
                  children: e.wrong,
                }),
                (0, z.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `→`,
                }),
                (0, z.jsx)(`span`, { className: `en`, children: e.right }),
                (0, z.jsx)(Vg, { text: e.right, size: `icon-xs` }),
              ],
            }),
            e.why &&
              (0, z.jsx)(`div`, {
                className: `text-xs text-muted-foreground`,
                children: e.why,
              }),
            (0, z.jsxs)(`div`, {
              className: `mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground`,
              children: [
                (0, z.jsx)(jg, {
                  variant: `outline`,
                  children:
                    e.kind === `better` ? `更地道` : (jy[e.type] ?? e.type),
                }),
                n && (0, z.jsxs)(`span`, { children: [`来自「`, n, `」`] }),
                (0, z.jsxs)(`span`, { children: [`· `, My(e)] }),
                e.srs.hits + e.srs.misses > 0 &&
                  (0, z.jsxs)(`span`, {
                    children: [`· 对 `, e.srs.hits, ` 错 `, e.srs.misses],
                  }),
              ],
            }),
          ],
        }),
        (0, z.jsx)(X, {
          variant: `ghost`,
          size: `icon-xs`,
          "aria-label": `删除这条`,
          onClick: () => t(e.id),
          children: (0, z.jsx)(mn, {}),
        }),
      ],
    }),
  });
}

export function Ly({ ids: e, onExit: t }) {
  let n = Z((e) => e.notebook),
    r = Z((e) => e.settings.llm),
    i = Z(),
    [a, o] = (0, v.useState)(0),
    [s, c] = (0, v.useState)(``),
    [l, u] = (0, v.useState)(null),
    [d, f] = (0, v.useState)(!1),
    [p, m] = (0, v.useState)(!1),
    [h, g] = (0, v.useState)({ right: 0, wrong: 0 }),
    _ = e.map((e) => n.find((t) => t.id === e)).filter((e) => !!e),
    y = _[a];
  if (!y)
    return (0, z.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, z.jsx)(Wg, { title: `复习完成`, fallback: `/review` }),
        (0, z.jsx)(Tg, {
          children: (0, z.jsxs)(kg, {
            className: `space-y-3 py-6 text-center`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `text-3xl font-semibold`,
                children: [
                  h.right,
                  (0, z.jsxs)(`span`, {
                    className: `text-base text-muted-foreground`,
                    children: [` / `, h.right + h.wrong],
                  }),
                ],
              }),
              (0, z.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `答对的往后推几天再考，答错的明天再来。`,
              }),
              (0, z.jsx)(X, { onClick: t, children: `回错题本` }),
            ],
          }),
        }),
      ],
    });
  function b(e, t = ``) {
    l ||
      (i.reviewNotebook(y.id, e),
      e && (i.addXp(2), i.addSkill({ grammar: 2 })),
      i.touchDay(`review`),
      Sh(Z.getState()),
      g((t) => ({ right: t.right + +!!e, wrong: t.wrong + +!e })),
      u({ correct: e, note: t }));
  }
  function x() {
    let e = s.trim();
    e && (Py(e, y.right) ? b(!0, `和参考答案一样`) : f(!0));
  }
  async function S() {
    m(!0);
    try {
      let e = await Bm(
        r,
        [
          { role: `system`, content: Bv(y.wrong, y.right, s) },
          { role: `user`, content: s },
        ],
        { maxTokens: 200 },
      );
      b(e.correct === !0, typeof e.note_zh == `string` ? e.note_zh : ``);
    } catch (e) {
      F.error((e instanceof Fm, e.message));
    } finally {
      m(!1);
    }
  }
  function C() {
    (c(``), u(null), f(!1), o(a + 1));
  }
  return (0, z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, z.jsx)(Wg, {
        title: `复习`,
        sub: `第 ${a + 1} / ${_.length} 条`,
        fallback: `/review`,
        right: (0, z.jsxs)(X, {
          variant: `ghost`,
          size: `sm`,
          onClick: t,
          children: [(0, z.jsx)(On, {}), ` 退出`],
        }),
      }),
      (0, z.jsx)(mm, { value: (a / _.length) * 100 }),
      (0, z.jsx)(Tg, {
        children: (0, z.jsxs)(kg, {
          className: `space-y-4 py-6`,
          children: [
            (0, z.jsxs)(`div`, {
              children: [
                (0, z.jsx)(`div`, {
                  className: `text-xs text-muted-foreground`,
                  children:
                    y.kind === `better`
                      ? `当时你这么说，试着说得更地道：`
                      : `当时你这么说，哪里不对？改过来：`,
                }),
                (0, z.jsx)(`p`, {
                  className: `en mt-1 text-lg`,
                  children: y.wrong,
                }),
                y.why &&
                  y.kind === `fix` &&
                  !l &&
                  (0, z.jsxs)(`details`, {
                    className: `mt-1 text-xs text-muted-foreground`,
                    children: [
                      (0, z.jsx)(`summary`, {
                        className: `cursor-pointer`,
                        children: `看提示`,
                      }),
                      y.why,
                    ],
                  }),
              ],
            }),
            l
              ? (0, z.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: B(
                        `text-sm font-medium`,
                        l.correct ? `text-primary` : `text-destructive`,
                      ),
                      children: [
                        l.correct ? `对了 +2` : `记住这个`,
                        l.note &&
                          (0, z.jsxs)(`span`, {
                            className: `ml-1 font-normal text-muted-foreground`,
                            children: [`· `, l.note],
                          }),
                        l.note.includes(`AI`) || d
                          ? (0, z.jsx)(zg, { className: `ml-2` })
                          : null,
                      ],
                    }),
                    s &&
                      (0, z.jsxs)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: [
                          `你写：`,
                          (0, z.jsx)(`span`, {
                            className: `en text-foreground`,
                            children: s,
                          }),
                        ],
                      }),
                    (0, z.jsxs)(`p`, {
                      className: `en text-lg`,
                      children: [
                        y.right,
                        ` `,
                        (0, z.jsx)(Vg, { text: y.right, size: `icon-xs` }),
                      ],
                    }),
                    y.why &&
                      (0, z.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: y.why,
                      }),
                    (0, z.jsxs)(X, {
                      onClick: C,
                      children: [
                        a + 1 >= _.length ? `看结果` : `下一条`,
                        ` `,
                        (0, z.jsx)(Fe, {}),
                      ],
                    }),
                  ],
                })
              : (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)(vv, {
                      value: s,
                      onChange: (e) => {
                        (c(e.target.value), f(!1));
                      },
                      rows: 2,
                      className: `en`,
                      placeholder: `写出正确的说法`,
                      onKeyDown: (e) => {
                        e.key === `Enter` &&
                          !e.shiftKey &&
                          !e.nativeEvent.isComposing &&
                          e.keyCode !== 229 &&
                          (e.preventDefault(), x());
                      },
                    }),
                    d
                      ? (0, z.jsxs)(`div`, {
                          className: `space-y-2 rounded-lg bg-muted p-3 text-sm`,
                          children: [
                            (0, z.jsx)(`p`, {
                              children: `和参考答案不一样。换种说法也可能是对的，你来定，或让 AI 判。`,
                            }),
                            (0, z.jsxs)(`div`, {
                              className: `flex flex-wrap gap-2`,
                              children: [
                                Im(r) &&
                                  (0, z.jsxs)(X, {
                                    size: `sm`,
                                    onClick: S,
                                    disabled: p,
                                    children: [
                                      (0, z.jsx)(cn, {}),
                                      ` `,
                                      p ? `判断中…` : `让 AI 判一下`,
                                    ],
                                  }),
                                (0, z.jsx)(X, {
                                  size: `sm`,
                                  variant: `outline`,
                                  onClick: () => b(!0, `你自己判的对`),
                                  disabled: p,
                                  children: `我是对的`,
                                }),
                                (0, z.jsx)(X, {
                                  size: `sm`,
                                  variant: `outline`,
                                  onClick: () => b(!1, ``),
                                  disabled: p,
                                  children: `我错了`,
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, z.jsxs)(`div`, {
                          className: `flex flex-wrap gap-2`,
                          children: [
                            (0, z.jsxs)(X, {
                              onClick: x,
                              disabled: !s.trim(),
                              children: [(0, z.jsx)(ze, {}), ` 检查`],
                            }),
                            (0, z.jsxs)(X, {
                              variant: `ghost`,
                              onClick: () => b(!1, `直接看了答案`),
                              children: [(0, z.jsx)(lt, {}), ` 不会，看答案`],
                            }),
                          ],
                        }),
                  ],
                }),
          ],
        }),
      }),
    ],
  });
}