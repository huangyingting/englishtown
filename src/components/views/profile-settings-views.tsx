"use client";
// @ts-nocheck
import { Z, ah } from "@/lib/store";
import { $e, An, B, En, F, at, bn, dt, jt, lt, mn, qt, st, v, yt, z } from "@/lib/deps";
import { Kh, Wh, fg, sg, yg } from "@/lib/speech";
import { Am, Fm, Mm, Vm, jm } from "@/lib/llm";
import { Av, By, Dg, Dv, Eg, Gy, Hy, Ig, Ky, Mv, Nv, Og, Pv, Ry, Tg, Uy, Vg, Vy, Wg, Wy, X, Yy, ey, jg, jv, kg, ky, mm, qg, zy } from "@/components/ui/primitives";
import { ch, oh, sh } from "@/lib/router";
import { $v } from "@/components/town-map";
import { Ch, dh, xh } from "@/data/town";
import { V_, X_, Yg, Z_, q_ } from "@/components/avatar";
import { _v, gv, hv, pv } from "@/components/views/home-view";
import { Mh } from "@/data/variety";
import { dv } from "@/components/scene-stage";
import { _y, my, oy } from "@/components/views/chat-view";
import { Cy, Fy } from "@/components/views/practice-views";
import { uh } from "@/components/header";

export function Xy() {
  let e = Z((e) => e.settings),
    t = Z((e) => e.setSettings),
    n = Z((e) => e.setLlm),
    r = Z((e) => e.setVoice),
    i = Z((e) => e.resetAll),
    { llm: a, voice: o } = e,
    [s, c] = (0, v.useState)(!1),
    [l, u] = (0, v.useState)(!1),
    [d, f] = (0, v.useState)(!1),
    [p, m] = (0, v.useState)(() => Kh()),
    [h, g] = (0, v.useState)(() => Wh()),
    [_, y] = (0, v.useState)(!1),
    b = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    yg(() => {
      (m(Kh()), g(Wh()));
    });
  }, []);
  function x(e) {
    let t = e;
    if (t === `fake`) {
      n({ preset: t });
      return;
    }
    let r = Am[t];
    (n({
      preset: t,
      baseUrl: r.baseUrl,
      model: r.model,
      apiKey: t === a.preset ? a.apiKey : ``,
    }),
      c(!1));
  }
  async function S() {
    u(!0);
    try {
      let e = await Vm(a);
      F.success(`接上了，模型回：${e.slice(0, 40)}`);
    } catch (e) {
      F.error((e instanceof Fm, e.message), { duration: 8e3 });
    } finally {
      u(!1);
    }
  }
  function C() {
    let e = localStorage.getItem(Yy);
    if (!e) return F.error(`还没有可导出的进度`);
    let t = JSON.parse(e);
    t?.state?.settings?.llm &&
      (t.state.settings.llm = { ...t.state.settings.llm, apiKey: `` });
    let n = new Blob([JSON.stringify(t, null, 2)], {
        type: `application/json`,
      }),
      r = document.createElement(`a`);
    ((r.href = URL.createObjectURL(n)),
      (r.download = `english-town-${new Date().toISOString().slice(0, 10)}.json`),
      r.click(),
      URL.revokeObjectURL(r.href));
  }
  async function w() {
    f(!0);
    try {
      if (
        !(
          await fetch(`/api/logout`, {
            method: `POST`,
            credentials: `same-origin`,
          })
        ).ok
      )
        throw Error(`暂时无法清除验证状态，请稍后重试`);
      (F.success(`已清除邀请码验证状态`, {
        description: `下次进入对话时需要重新输入邀请码。API Key 和学习进度保留。`,
      }),
        ch(`/`));
    } catch (e) {
      F.error(e instanceof Error ? e.message : `网络连接失败`);
    } finally {
      f(!1);
    }
  }
  async function T(e) {
    if (e)
      try {
        let t = JSON.parse(await e.text());
        if (
          !t ||
          typeof t != `object` ||
          !t.state ||
          typeof t.state.xp != `number`
        )
          throw Error(`不是英语小镇的备份文件`);
        ((t.state.settings = {
          ...t.state.settings,
          llm: { ...t.state.settings?.llm, apiKey: a.apiKey },
        }),
          localStorage.setItem(Yy, JSON.stringify(t)),
          F.success(`导入成功，刷新页面`),
          setTimeout(() => window.location.reload(), 600));
      } catch (e) {
        F.error(`导入失败：${e.message}`);
      }
  }
  let E = a.preset === `fake` ? void 0 : Am[a.preset],
    D = E?.note ?? `演示用的假 NPC，不是 AI，只能看界面`,
    O = a.apiKey ? Mm(a.apiKey) : null;
  return (0, z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, z.jsx)(Wg, {
        title: `设置`,
        sub: `填写你自己的 API Key，密钥保存在当前浏览器，不随学习进度导出`,
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsxs)(Eg, {
            children: [
              (0, z.jsx)(Dg, { children: `我的 API Key 与模型` }),
              (0, z.jsx)(Og, {
                children: `NPC 回话、纠错、出题、批改都使用你配置的模型，用量由服务商按你的账户计费。`,
              }),
            ],
          }),
          (0, z.jsxs)(kg, {
            className: `space-y-4`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                  (0, z.jsx)(ey, {
                    htmlFor: `llm-provider`,
                    children: `服务商`,
                  }),
                  (0, z.jsxs)(By, {
                    value: a.preset,
                    onValueChange: x,
                    children: [
                      (0, z.jsx)(Uy, {
                        id: `llm-provider`,
                        className: `w-full`,
                        children: (0, z.jsx)(Hy, {}),
                      }),
                      (0, z.jsxs)(Wy, {
                        children: [
                          [`国内服务`, `国际服务`, `其他接口`].map((e) =>
                            (0, z.jsxs)(
                              Vy,
                              {
                                children: [
                                  (0, z.jsx)(Gy, { children: e }),
                                  Object.keys(Am)
                                    .filter((t) => Am[t].group === e)
                                    .map((e) =>
                                      (0, z.jsx)(
                                        Ky,
                                        { value: e, children: Am[e].label },
                                        e,
                                      ),
                                    ),
                                ],
                              },
                              e,
                            ),
                          ),
                          a.preset === `fake` &&
                            (0, z.jsx)(Ky, {
                              value: `fake`,
                              children: `演示（假 NPC，不是 AI）`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: D,
                  }),
                ],
              }),
              a.preset !== `fake` &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    E?.keyUrl
                      ? (0, z.jsxs)(`div`, {
                          className: `rounded-xl border border-primary/15 bg-primary/5 p-4 space-y-3`,
                          children: [
                            (0, z.jsxs)(`div`, {
                              className: `flex flex-wrap items-center justify-between gap-3`,
                              children: [
                                (0, z.jsxs)(`div`, {
                                  className: `space-y-1`,
                                  children: [
                                    (0, z.jsxs)(`p`, {
                                      className: `text-sm font-medium flex items-center gap-2`,
                                      children: [
                                        (0, z.jsx)(yt, {
                                          className: `size-4 text-primary`,
                                        }),
                                        `还没有 API Key？`,
                                      ],
                                    }),
                                    (0, z.jsxs)(`p`, {
                                      className: `text-xs text-muted-foreground`,
                                      children: [
                                        `前往 `,
                                        E.label.split(` · `)[0],
                                        ` 官方平台创建。`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, z.jsx)(X, {
                                  asChild: !0,
                                  variant: `outline`,
                                  size: `sm`,
                                  className: `bg-background`,
                                  children: (0, z.jsxs)(`a`, {
                                    href: E.keyUrl,
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    children: [
                                      `获取 API Key `,
                                      (0, z.jsx)(at, {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, z.jsxs)(`p`, {
                              className: `text-xs leading-relaxed text-muted-foreground`,
                              children: [
                                `登录官网 → 创建 API Key → 复制到下方，再点「测试连接」。`,
                                E.docsUrl &&
                                  (0, z.jsxs)(z.Fragment, {
                                    children: [
                                      ` `,
                                      (0, z.jsx)(`a`, {
                                        href: E.docsUrl,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                        className: `text-primary underline underline-offset-4`,
                                        children: `查看官方接入说明`,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        })
                      : (0, z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: `API Key 请在你使用的服务商或网关后台创建，接口地址和模型名也由该平台提供。`,
                        }),
                    (0, z.jsxs)(`div`, {
                      className: `grid gap-2`,
                      children: [
                        (0, z.jsx)(ey, {
                          htmlFor: `baseUrl`,
                          children: `接口地址`,
                        }),
                        (0, z.jsx)($v, {
                          id: `baseUrl`,
                          value: a.baseUrl,
                          onChange: (e) => n({ baseUrl: e.target.value }),
                          placeholder: `https://…/v1`,
                          className: `font-mono`,
                          spellCheck: !1,
                        }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `grid gap-2`,
                      children: [
                        (0, z.jsx)(ey, {
                          htmlFor: `apiKey`,
                          children: `自己的 API Key`,
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `flex gap-2`,
                          children: [
                            (0, z.jsx)($v, {
                              id: `apiKey`,
                              type: s ? `text` : `password`,
                              value: a.apiKey,
                              onChange: (e) => n({ apiKey: e.target.value }),
                              onBlur: () => n({ apiKey: jm(a.apiKey) }),
                              "aria-invalid": !!O,
                              "aria-describedby": O
                                ? `api-key-error`
                                : `api-key-help`,
                              placeholder: `粘贴官网创建的完整 API Key`,
                              className: `font-mono`,
                              autoComplete: `off`,
                              autoCapitalize: `none`,
                              autoCorrect: `off`,
                              spellCheck: !1,
                            }),
                            (0, z.jsx)(X, {
                              type: `button`,
                              variant: `outline`,
                              size: `icon`,
                              "aria-label": s ? `隐藏密钥` : `显示密钥`,
                              onClick: () => c((e) => !e),
                              children: s
                                ? (0, z.jsx)(st, {})
                                : (0, z.jsx)(lt, {}),
                            }),
                          ],
                        }),
                        O &&
                          (0, z.jsx)(`p`, {
                            id: `api-key-error`,
                            role: `alert`,
                            className: `text-xs text-destructive`,
                            children: O,
                          }),
                        (0, z.jsx)(`p`, {
                          id: `api-key-help`,
                          className: `text-xs text-muted-foreground`,
                          children: `粘贴官网创建的完整密钥，不要粘贴隐藏后的圆点或说明文字。每家服务商使用各自的密钥。`,
                        }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `grid gap-2`,
                      children: [
                        (0, z.jsx)(ey, {
                          htmlFor: `model`,
                          children: `模型名`,
                        }),
                        (0, z.jsx)($v, {
                          id: `model`,
                          value: a.model,
                          onChange: (e) => n({ model: e.target.value }),
                          placeholder: `anthropic/claude-sonnet-4-6`,
                          className: `font-mono`,
                          spellCheck: !1,
                        }),
                        E?.models &&
                          (0, z.jsx)(`div`, {
                            className: `flex flex-wrap gap-1.5`,
                            children: E.models.map((e) =>
                              (0, z.jsx)(
                                X,
                                {
                                  type: `button`,
                                  size: `xs`,
                                  variant:
                                    a.model === e ? `secondary` : `outline`,
                                  onClick: () => n({ model: e }),
                                  className: `max-w-full h-auto min-h-6 whitespace-normal break-all text-left font-mono`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        (0, z.jsxs)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: [
                            E?.models
                              ? `可点击上方模型快捷填入，也可手动填写平台支持的其他模型。`
                              : `填写你已开通的模型 ID，以服务商控制台显示的名称为准。`,
                            `纠错结果仍需结合实际判断。`,
                          ],
                        }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-4`,
                      children: [
                        (0, z.jsxs)(`div`, {
                          children: [
                            (0, z.jsx)(ey, {
                              htmlFor: `viaProxy`,
                              children: `使用同站转发`,
                            }),
                            (0, z.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: `线上版通过同站转发连接模型；密钥仅用于当前请求，不保存到服务端。`,
                            }),
                          ],
                        }),
                        (0, z.jsx)(Ry, {
                          id: `viaProxy`,
                          checked: !0,
                          disabled: !0,
                          onCheckedChange: (e) => n({ viaProxy: e }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, z.jsxs)(X, {
                onClick: S,
                disabled: l,
                children: [(0, z.jsx)(qt, {}), ` `, l ? `测试中…` : `测试连接`],
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, z.jsx)(qg, { compact: !0 }),
          (0, z.jsxs)(X, {
            variant: `outline`,
            size: `sm`,
            onClick: w,
            disabled: d,
            children: [
              (0, z.jsx)(yt, {}),
              ` `,
              d ? `处理中…` : `重新验证邀请码`,
            ],
          }),
          (0, z.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: `仅清除当前浏览器的体验资格，保留 API Key 和学习进度。`,
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsxs)(Eg, {
            children: [
              (0, z.jsx)(Dg, { children: `声音` }),
              (0, z.jsx)(Og, {
                children:
                  h === `mac`
                    ? `声音来自 Mac 自带的朗读引擎，不花钱。想更自然，去系统设置下载增强版声线。`
                    : `用浏览器自带的朗读，不花钱。Mac 上 Samantha、Daniel 这类声线最自然。`,
              }),
            ],
          }),
          (0, z.jsxs)(kg, {
            className: `space-y-4`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                  (0, z.jsx)(ey, { children: `口音与用词` }),
                  (0, z.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [`us`, `uk`].map((n) =>
                      (0, z.jsxs)(
                        X,
                        {
                          type: `button`,
                          size: `sm`,
                          variant: e.variety === n ? `default` : `outline`,
                          onClick: () => t({ variety: n }),
                          children: [
                            n === `us` ? `🇺🇸` : `🇬🇧`,
                            ` `,
                            Ch[n],
                            `英语`,
                          ],
                        },
                        n,
                      ),
                    ),
                  }),
                  (0, z.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: `NPC 的用词、拼写、常用表达、朗读声线和语音识别都跟着换。你用另一种也不算错。`,
                  }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                  (0, z.jsx)(ey, { children: `声线` }),
                  (0, z.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, z.jsxs)(By, {
                        value: o.voiceName || `__auto`,
                        onValueChange: (e) =>
                          r({ voiceName: e === `__auto` ? `` : e }),
                        children: [
                          (0, z.jsx)(Uy, {
                            className: `w-full`,
                            children: (0, z.jsx)(Hy, {}),
                          }),
                          (0, z.jsxs)(Wy, {
                            children: [
                              (0, z.jsx)(Ky, {
                                value: `__auto`,
                                children: `自动（按 NPC 性别和口音挑）`,
                              }),
                              p.map((e) =>
                                (0, z.jsxs)(
                                  Ky,
                                  {
                                    value: e.name,
                                    children: [e.name, ` · `, e.lang],
                                  },
                                  e.name,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, z.jsx)(Vg, {
                        text:
                          e.variety === `uk`
                            ? `Hello there! Welcome to English Town. Fancy a cup of tea? Lovely to see you.`
                            : `Hi there! Welcome to English Town. What can I get you today?`,
                        size: `sm`,
                        variant: `outline`,
                        label: `试听`,
                      }),
                    ],
                  }),
                  p.length === 0 &&
                    (0, z.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `没找到英文声线。系统设置里装一个英文语音，或换 Chrome。`,
                    }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                  (0, z.jsxs)(ey, { children: [`语速 `, o.rate.toFixed(2)] }),
                  (0, z.jsx)(zy, {
                    value: [o.rate],
                    min: 0.7,
                    max: 1.2,
                    step: 0.05,
                    onValueChange: (e) => r({ rate: e[0] }),
                  }),
                ],
              }),
              (0, z.jsx)(Zy, {
                label: `NPC 说话自动朗读`,
                desc: `关了就只在点小喇叭时读`,
                checked: e.autoPlay,
                onChange: (e) => t({ autoPlay: e }),
              }),
              (0, z.jsx)(Zy, {
                label: `盲听模式`,
                desc: `NPC 的话先只放声音，点一下才显示文字，练听力`,
                checked: e.blindMode,
                onChange: (e) => t({ blindMode: e }),
              }),
              (0, z.jsx)(Zy, {
                label: `显示中文翻译`,
                desc: `NPC 台词下面跟一行中文。建议听懂了就关`,
                checked: e.showZh,
                onChange: (e) => t({ showZh: e }),
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsxs)(Eg, {
            children: [
              (0, z.jsx)(Dg, { children: `形象与氛围` }),
              (0, z.jsx)(Og, {
                children: `选一个代表你的形象，聊天时会出现在你的话旁边。`,
              }),
            ],
          }),
          (0, z.jsxs)(kg, {
            className: `space-y-4`,
            children: [
              (0, z.jsx)(`div`, {
                className: `grid grid-cols-4 gap-2 sm:grid-cols-8`,
                children: V_.map((n) => {
                  let r = e.avatar === n.id;
                  return (0, z.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      "aria-label": n.label,
                      "aria-pressed": r,
                      className: B(
                        `flex flex-col items-center gap-1 rounded-lg border p-1.5 text-xs transition hover:border-primary`,
                        r && `border-primary bg-primary/5 ring-1 ring-primary`,
                      ),
                      onClick: () => t({ avatar: n.id }),
                      children: [
                        (0, z.jsx)(q_, {
                          look: n.look,
                          mood: r ? `happy` : `idle`,
                          blink: !1,
                          className: `aspect-square w-full`,
                        }),
                        (0, z.jsx)(`span`, {
                          className: `w-full truncate text-center`,
                          children: n.label,
                        }),
                      ],
                    },
                    n.id,
                  );
                }),
              }),
              (0, z.jsx)(Zy, {
                label: `舞台画面`,
                desc: `对话页上方显示场景和人物；关了就是纯聊天`,
                checked: e.stage,
                onChange: (e) => t({ stage: e }),
              }),
              (0, z.jsx)(Zy, {
                label: `提示音`,
                desc: `发送、回话、完成目标时的小音效`,
                checked: e.sfx,
                onChange: (e) => t({ sfx: e }),
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsxs)(Eg, {
            children: [
              (0, z.jsx)(Dg, { children: `数据` }),
              (0, z.jsx)(Og, {
                children: `进度都在本机浏览器里。换电脑或清浏览器前先导出。`,
              }),
            ],
          }),
          (0, z.jsxs)(kg, {
            className: `space-y-4`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                  (0, z.jsx)(ey, { htmlFor: `nick`, children: `昵称` }),
                  (0, z.jsx)($v, {
                    id: `nick`,
                    value: e.nickname,
                    onChange: (e) => t({ nickname: e.target.value }),
                    placeholder: `小镇居民`,
                    maxLength: 20,
                  }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [
                  (0, z.jsxs)(X, {
                    variant: `outline`,
                    onClick: C,
                    children: [(0, z.jsx)($e, {}), ` 导出进度`],
                  }),
                  (0, z.jsxs)(X, {
                    variant: `outline`,
                    onClick: () => b.current?.click(),
                    children: [(0, z.jsx)(bn, {}), ` 导入进度`],
                  }),
                  (0, z.jsx)(`input`, {
                    ref: b,
                    type: `file`,
                    accept: `application/json`,
                    className: `hidden`,
                    onChange: (e) => T(e.target.files?.[0]),
                  }),
                  (0, z.jsxs)(X, {
                    variant: `ghost`,
                    className: `text-destructive`,
                    onClick: () => y(!0),
                    children: [(0, z.jsx)(mn, {}), ` 清空进度`],
                  }),
                ],
              }),
              (0, z.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: `导出的文件不含密钥。`,
              }),
            ],
          }),
        ],
      }),
      (0, z.jsx)(Dv, {
        open: _,
        onOpenChange: y,
        children: (0, z.jsxs)(Av, {
          children: [
            (0, z.jsxs)(jv, {
              children: [
                (0, z.jsx)(Nv, { children: `清空全部进度？` }),
                (0, z.jsx)(Pv, {
                  children: `经验、星级、错题本、成就都会删掉，设置保留。删了找不回来。`,
                }),
              ],
            }),
            (0, z.jsxs)(Mv, {
              children: [
                (0, z.jsx)(X, {
                  variant: `outline`,
                  onClick: () => y(!1),
                  children: `再想想`,
                }),
                (0, z.jsx)(X, {
                  variant: `destructive`,
                  onClick: () => {
                    (i(), y(!1), F.success(`已清空`));
                  },
                  children: `清空`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}

export function Zy({ label: e, desc: t, checked: n, onChange: r }) {
  return (0, z.jsxs)(`div`, {
    className: `flex items-center justify-between gap-4`,
    children: [
      (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsx)(ey, { children: e }),
          (0, z.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: t,
          }),
        ],
      }),
      (0, z.jsx)(Ry, { checked: n, onCheckedChange: r }),
    ],
  });
}

export var Qy = [
  { key: `listen`, label: `听` },
  { key: `speak`, label: `说` },
  { key: `read`, label: `读` },
  { key: `write`, label: `写` },
  { key: `grammar`, label: `语法` },
];

export function $y({ skills: e, size: t = 180 }) {
  let n = Math.max(50, ...Qy.map((t) => e[t.key])),
    r = t / 2,
    i = t / 2 - 24,
    a = (e, t) => {
      let n = -Math.PI / 2 + (e * 2 * Math.PI) / Qy.length;
      return [r + i * t * Math.cos(n), r + i * t * Math.sin(n)];
    },
    o = (e) => Qy.map((t, n) => a(n, e).join(`,`)).join(` `),
    s = Qy.map((t, r) => a(r, Math.max(0.04, e[t.key] / n)).join(`,`)).join(
      ` `,
    );
  return (0, z.jsxs)(`svg`, {
    width: t,
    height: t,
    viewBox: `0 0 ${t} ${t}`,
    role: `img`,
    "aria-label": `五维能力`,
    children: [
      [0.25, 0.5, 0.75, 1].map((e) =>
        (0, z.jsx)(
          `polygon`,
          {
            points: o(e),
            fill: `none`,
            stroke: `var(--border)`,
            strokeWidth: 1,
          },
          e,
        ),
      ),
      Qy.map((e, t) => {
        let [n, i] = a(t, 1);
        return (0, z.jsx)(
          `line`,
          {
            x1: r,
            y1: r,
            x2: n,
            y2: i,
            stroke: `var(--border)`,
            strokeWidth: 1,
          },
          t,
        );
      }),
      (0, z.jsx)(`polygon`, {
        points: s,
        fill: `color-mix(in oklch, var(--primary) 25%, transparent)`,
        stroke: `var(--primary)`,
        strokeWidth: 2,
      }),
      Qy.map((t, n) => {
        let [r, i] = a(n, 1.2);
        return (0, z.jsxs)(
          `text`,
          {
            x: r,
            y: i,
            textAnchor: `middle`,
            dominantBaseline: `middle`,
            fontSize: 12,
            fill: `var(--muted-foreground)`,
            children: [t.label, ` `, e[t.key]],
          },
          t.key,
        );
      }),
    ],
  });
}

export function eb() {
  let e = Z(),
    t = oh(e.xp),
    n = ah[Math.min(t.level, ah.length - 1)],
    r = [
      { label: `对话轮数`, v: e.totals.turns },
      { label: `通关`, v: e.totals.missionsDone },
      { label: `纠错`, v: e.totals.corrections },
      { label: `复习`, v: e.totals.reviews },
      { label: `跟读`, v: e.totals.shadow },
      { label: `听写`, v: e.totals.dictation },
      { label: `小测`, v: e.totals.quizzes },
      { label: `写作`, v: e.totals.writings },
    ],
    i = xh.filter((t) => e.achievements.includes(t.id)).length;
  return (0, z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, z.jsx)(Wg, {
        title: e.settings.nickname
          ? `${e.settings.nickname} 的小镇档案`
          : `我的小镇档案`,
      }),
      (0, z.jsxs)(`div`, {
        className: `grid gap-4 sm:grid-cols-2`,
        children: [
          (0, z.jsx)(Tg, {
            children: (0, z.jsxs)(kg, {
              className: `flex items-center gap-4 py-5`,
              children: [
                (0, z.jsxs)(`button`, {
                  type: `button`,
                  className: `flex shrink-0 flex-col items-center gap-1 text-xs text-muted-foreground`,
                  title: `换形象`,
                  onClick: () => ch(`/settings`),
                  children: [
                    (0, z.jsx)(Z_, {
                      size: 72,
                      children: (0, z.jsx)(X_, {
                        mood: e.streak > 0 ? `happy` : `idle`,
                      }),
                    }),
                    `换形象`,
                  ],
                }),
                (0, z.jsxs)(`div`, {
                  className: `min-w-0 flex-1 space-y-3`,
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: `flex items-baseline gap-2`,
                      children: [
                        (0, z.jsxs)(`span`, {
                          className: `text-3xl font-semibold`,
                          children: [`Lv.`, t.level],
                        }),
                        (0, z.jsx)(`span`, {
                          className: `text-lg`,
                          children: t.title,
                        }),
                        (0, z.jsxs)(`span`, {
                          className: B(
                            `ml-auto flex items-center gap-1 text-sm`,
                            e.streak > 0
                              ? `text-amber-foreground`
                              : `text-muted-foreground`,
                          ),
                          children: [
                            (0, z.jsx)(dt, {
                              className: B(
                                `size-4`,
                                e.streak > 0 && `fill-amber text-amber`,
                              ),
                            }),
                            ` 连续 `,
                            e.streak,
                            ` 天`,
                          ],
                        }),
                      ],
                    }),
                    (0, z.jsx)(mm, { value: (t.cur / t.need) * 100 }),
                    (0, z.jsxs)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: [
                        t.cur,
                        `/`,
                        t.need,
                        ` 经验，再 `,
                        t.need - t.cur,
                        ` 升到「`,
                        n,
                        `」 · 累计 `,
                        e.xp,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, z.jsx)(Tg, {
            children: (0, z.jsx)(kg, {
              className: `flex items-center justify-center py-3`,
              children: (0, z.jsx)($y, { skills: e.skills, size: 200 }),
            }),
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsx)(Eg, { children: (0, z.jsx)(Dg, { children: `数据` }) }),
          (0, z.jsx)(kg, {
            children: (0, z.jsx)(`div`, {
              className: `grid grid-cols-4 gap-3 text-center sm:grid-cols-8`,
              children: r.map((e) =>
                (0, z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, z.jsx)(`div`, {
                        className: `text-xl font-semibold`,
                        children: e.v,
                      }),
                      (0, z.jsx)(`div`, {
                        className: `text-xs text-muted-foreground`,
                        children: e.label,
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsx)(Eg, {
            children: (0, z.jsx)(Dg, { children: `各区进度` }),
          }),
          (0, z.jsx)(kg, {
            className: `space-y-3`,
            children: dh.map((t) => {
              let n = t.locations.flatMap((e) => e.missions),
                r = n.reduce((t, n) => t + (e.missions[n.id]?.stars ?? 0), 0),
                i = n.filter((t) => (e.missions[t.id]?.stars ?? 0) > 0).length;
              return (0, z.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-3 text-sm`,
                  children: [
                    (0, z.jsxs)(`span`, {
                      className: `w-20 shrink-0`,
                      children: [t.emoji, ` `, t.name],
                    }),
                    (0, z.jsx)(mm, {
                      value: (r / (n.length * 3)) * 100,
                      className: `flex-1`,
                    }),
                    (0, z.jsxs)(`span`, {
                      className: `w-28 text-right text-muted-foreground`,
                      children: [
                        i,
                        `/`,
                        n.length,
                        ` 关 · `,
                        (0, z.jsx)(Ig, { n: 1, max: 1, size: `size-3` }),
                        ` `,
                        r,
                        `/`,
                        n.length * 3,
                      ],
                    }),
                  ],
                },
                t.id,
              );
            }),
          }),
        ],
      }),
      (0, z.jsxs)(Tg, {
        children: [
          (0, z.jsx)(Eg, {
            children: (0, z.jsxs)(Dg, {
              children: [`成就 `, i, `/`, xh.length],
            }),
          }),
          (0, z.jsx)(kg, {
            children: (0, z.jsx)(`div`, {
              className: `grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4`,
              children: xh.map((t) => {
                let n = e.achievements.includes(t.id);
                return (0, z.jsxs)(
                  `div`,
                  {
                    className: B(
                      `flex items-center gap-2 rounded-lg border p-2 text-sm`,
                      !n && `opacity-50 grayscale`,
                    ),
                    children: [
                      (0, z.jsx)(`span`, {
                        className: `text-xl`,
                        children: t.emoji,
                      }),
                      (0, z.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [
                          (0, z.jsx)(`div`, {
                            className: `truncate font-medium`,
                            children: t.title,
                          }),
                          (0, z.jsx)(`div`, {
                            className: `truncate text-xs text-muted-foreground`,
                            children: t.desc,
                          }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                );
              }),
            }),
          }),
        ],
      }),
    ],
  });
}

export function tb() {
  let e = Z((e) => e.settings.voice),
    t = Z((e) => e.settings.variety),
    n = Z((e) => e.missions),
    r = gv(),
    [i, a] = (0, v.useState)(null),
    o = (0, v.useRef)(0);
  (0, v.useEffect)(() => () => window.clearTimeout(o.current), []);
  function s(n, r) {
    (window.clearTimeout(o.current),
      a(n.id),
      (o.current = window.setTimeout(() => a(null), 1600)),
      fg(Mh(r, t), e, n.voice, n.id, t));
  }
  let c = dh.reduce((e, t) => e + t.locations.length, 0);
  return (0, z.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, z.jsx)(Wg, {
        title: `小镇居民`,
        sub: `${c} 位街坊。点人物听口头禅，「去找 TA」就能开聊。`,
      }),
      dh.map((e) =>
        (0, z.jsxs)(
          `section`,
          {
            children: [
              (0, z.jsxs)(`h2`, {
                className: `mb-2 text-base font-semibold`,
                children: [e.emoji, ` `, e.name],
              }),
              (0, z.jsx)(`div`, {
                className: `grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,
                children: e.locations.map((e) => {
                  let a = Yg(e.npc.id),
                    o = e.missions.filter(
                      (e) => (n[e.id]?.stars ?? 0) > 0,
                    ).length,
                    c = r === e.npc.id;
                  return (0, z.jsxs)(
                    `div`,
                    {
                      className: `overflow-hidden rounded-xl border bg-card`,
                      children: [
                        (0, z.jsx)(`button`, {
                          type: `button`,
                          className: `block w-full text-left`,
                          "aria-label": `听 ${e.npc.name} 说话`,
                          onClick: () => a && s(e.npc, a.catchphrase),
                          children: (0, z.jsx)(dv, {
                            loc: e,
                            className: `aspect-[2/1] w-full`,
                            mood:
                              i === e.npc.id ? `wink` : c ? `happy` : `idle`,
                            talking: c,
                          }),
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `space-y-1.5 p-3`,
                          children: [
                            (0, z.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, z.jsx)(`span`, {
                                  className: `font-medium`,
                                  children: e.npc.name,
                                }),
                                (0, z.jsxs)(`span`, {
                                  className: `truncate text-sm text-muted-foreground`,
                                  children: [e.npc.role, ` · `, e.name],
                                }),
                                (0, z.jsxs)(jg, {
                                  variant: o ? `secondary` : `outline`,
                                  className: `ml-auto shrink-0 font-normal`,
                                  children: [
                                    `通关 `,
                                    o,
                                    `/`,
                                    e.missions.length,
                                  ],
                                }),
                              ],
                            }),
                            a &&
                              (0, z.jsxs)(`p`, {
                                className: `text-xs text-muted-foreground`,
                                children: [a.tagline, ` · from `, a.from],
                              }),
                            a &&
                              (0, z.jsx)(`p`, {
                                className: `text-sm`,
                                children: a.bio,
                              }),
                            a &&
                              (0, z.jsxs)(`p`, {
                                className: `en text-sm text-muted-foreground`,
                                children: [`“`, Mh(a.catchphrase, t), `”`],
                              }),
                            (0, z.jsxs)(`div`, {
                              className: `flex gap-2 pt-1`,
                              children: [
                                (0, z.jsxs)(X, {
                                  size: `sm`,
                                  onClick: () => ch(`/l/${e.id}`),
                                  children: [(0, z.jsx)(jt, {}), ` 去找 TA`],
                                }),
                                a &&
                                  (0, z.jsxs)(X, {
                                    size: `sm`,
                                    variant: `ghost`,
                                    onClick: () => s(e.npc, a.catchphrase),
                                    children: [(0, z.jsx)(En, {}), ` 听口头禅`],
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
          },
          e.id,
        ),
      ),
      (0, z.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `人物形象基于 Avataaars（Pablo Stanley 设计），由 DiceBear 渲染。`,
      }),
    ],
  });
}

export function nb() {
  let { path: e, parts: t } = sh(),
    n = Z((e) => e.lastUnlocked),
    r = Z((e) => e.ackUnlock),
    i = Z((e) => e.setLlm);
  ((0, v.useEffect)(() => {
    if (!n) return;
    let e = xh.find((e) => e.id === n);
    (e && F.success(`成就解锁：${e.emoji} ${e.title}`, { description: e.desc }),
      r());
  }, [n, r]),
    (0, v.useEffect)(() => {
      (yg(() => void 0),
        new URLSearchParams(window.location.search).get(`demo`) === `1` &&
          (i({ preset: `fake` }),
          F.warning(`演示模式：NPC 是假的，不是 AI`, {
            id: `demo`,
            duration: 6e3,
          })));
    }, [i]),
    (0, v.useEffect)(
      () =>
        sg((e) => {
          let t =
            e === `stuck`
              ? `朗读 4 秒没出声。刷新页面试试，还不行就完全退出 Chrome 再打开`
              : e === `not-allowed`
                ? `浏览器要你先点一下页面，才允许出声。点任意地方就会接着放`
                : e === `audio`
                  ? `拿到了音频，但浏览器放不出来`
                  : e.startsWith(`server:`)
                    ? `本机朗读服务没回应（${e.slice(7)}）。看看终端里的服务还在不在`
                    : `朗读失败：${e}`;
          F.error(t, { id: `tts`, duration: 8e3 });
        }),
      [],
    ));
  let [a, o] = t,
    s;
  return (
    (s = a
      ? a === `d` && o
        ? (0, z.jsx)(hv, { id: o })
        : a === `l` && o
          ? (0, z.jsx)(_v, { id: o })
          : a === `play` && o
            ? (0, z.jsx)(oy, { missionId: o }, o)
            : a === `free` && o
              ? (0, z.jsx)(oy, { locationId: o }, `free:` + o)
              : a === `result` && o
                ? (0, z.jsx)(my, { missionId: o })
                : a === `quiz` && o
                  ? (0, z.jsx)(_y, { missionId: o }, o)
                  : a === `write` && o
                    ? (0, z.jsx)(Cy, { taskId: o }, o)
                    : a === `shadow` && o
                      ? (0, z.jsx)(ky, { missionId: o }, o)
                      : a === `town`
                        ? (0, z.jsx)(tb, {})
                        : a === `review`
                          ? (0, z.jsx)(Fy, {})
                          : a === `settings`
                            ? (0, z.jsx)(Xy, {})
                            : a === `me`
                              ? (0, z.jsx)(eb, {})
                              : (0, z.jsx)(pv, {})
      : (0, z.jsx)(pv, {})),
    (0, z.jsxs)(`div`, {
      className: `min-h-dvh`,
      children: [
        (0, z.jsx)(uh, { path: e }),
        (0, z.jsx)(`main`, {
          className:
            a === `play` || a === `free`
              ? `mx-auto max-w-5xl`
              : `mx-auto max-w-5xl px-4 py-4`,
          children: s,
        }),
        (0, z.jsx)(An, { position: `top-center`, richColors: !0 }),
      ],
    })
  );
}
export { nb as EnglishTownApp };
