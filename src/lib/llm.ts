"use client";
// @ts-nocheck

export var wm =function wm(e) {
  let t = e.trim(),
    n = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  n && (t = n[1].trim());
  try {
    return JSON.parse(t);
  } catch {}
  let r = t.indexOf(`{`),
    i = t.lastIndexOf(`}`);
  if (r >= 0 && i > r) {
    let e = t.slice(r, i + 1);
    try {
      return JSON.parse(e);
    } catch {
      let t = e.replace(/,\s*([}\]])/g, `$1`).replace(/[\u0000-\u001f]+/g, ` `);
      return JSON.parse(t);
    }
  }
  throw Error(`模型没有返回 JSON`);
};

export function Tm(e) {
  let t = e.find((e) => e.role === `system`)?.content ?? ``,
    n = e.filter((e) => e.role === `user`),
    r = n[n.length - 1]?.content ?? ``,
    i;
  return (
    (i = t.includes(`[[QUIZ]]`)
      ? Om()
      : t.includes(`[[WRITING]]`)
        ? km(r)
        : t.includes(`[[CHECK]]`)
          ? { correct: /right/i.test(r), note_zh: `假引擎：含 right 就算对` }
          : Dm(r, n.length, Em(t))),
    new Promise((e) => setTimeout(() => e(JSON.stringify(i)), 300))
  );
}

export function Em(e) {
  return (
    e.split(`Learner objectives (0-based):`)[1]?.split(`

`)[0] ?? ``
  )
    .split(
      `
`,
    )
    .filter((e) => /^\d+\. /.test(e.trim())).length;
}

export function Dm(e, t, n) {
  let r = /\bi want\b/i.test(e),
    i = /[一-鿿]/.test(e),
    a =
      t >= 3
        ? Array.from({ length: n }, (e, t) => t)
        : Array.from({ length: Math.min(t, n) }, (e, t) => t);
  return {
    reply: i
      ? `Sorry, I don't speak Chinese. Could you say that in English?`
      : t >= 3
        ? `Perfect, you're all set. Have a great day!`
        : `Sure thing! Anything else? (fake turn ${t})`,
    reply_zh: i
      ? `抱歉我不会中文，能用英语说吗？`
      : t >= 3
        ? `好了都办妥了，祝你今天愉快！`
        : `没问题！还要别的吗？（假回合 ${t}）`,
    feedback: {
      ok: !r && !i,
      corrected: r ? e.replace(/\bi want\b/i, `I'd like`) : e,
      issues: r
        ? [
            {
              type: `politeness`,
              wrong: `I want`,
              right: `I'd like`,
              why_zh: `点单用 I'd like 更礼貌`,
            },
          ]
        : [],
      better: r ? `Could I get a latte with oat milk, please?` : ``,
      note_zh: i ? `试着用英语说，哪怕只有几个词` : `说得不错，继续`,
    },
    objectives_done: i ? [] : a,
    hint_zh: i ? `可以说：我想要一杯燕麦奶拿铁` : ``,
    hint_en: i ? `I'd like a latte with oat milk, please.` : ``,
    finished: !i && t >= 3,
  };
}

export function Om() {
  return {
    listening: [
      {
        audio: `Would you like that for here or to go?`,
        question_zh: `店员在问什么？`,
        options: [`堂食还是带走`, `要不要加糖`, `现金还是刷卡`],
        answer: 0,
        explain_zh: `for here or to go = 堂食还是带走`,
      },
      {
        audio: `The WiFi password is on the receipt.`,
        question_zh: `WiFi 密码在哪？`,
        options: [`墙上`, `小票上`, `菜单上`],
        answer: 1,
        explain_zh: `receipt = 小票`,
      },
    ],
    grammar: [
      {
        sentence: `___ I get a medium latte, please?`,
        options: [`Can`, `Could`, `Do`],
        answer: 1,
        explain_zh: `Could 更礼貌`,
      },
      {
        sentence: `I'd like a latte ___ oat milk.`,
        options: [`with`, `by`, `of`],
        answer: 0,
        explain_zh: `加什么奶用 with`,
      },
    ],
    vocab: [
      {
        phrase: `to go`,
        question_zh: `这个表达什么意思？`,
        options: [`带走`, `堂食`, `出发`],
        answer: 0,
      },
    ],
  };
}

export function km(e) {
  let t = e.split(/\s+/).filter(Boolean).length;
  return {
    scores: { task: 4, grammar: 3, vocab: 3, tone: 4 },
    overall_zh: `假引擎批改：共 ${t} 个词，结构完整。`,
    issues: [
      { wrong: `very good`, right: `excellent`, why_zh: `词汇可以更具体` },
    ],
    corrected: e,
    upgraded: e + ` (upgraded by fake engine)`,
    checklist: [
      { item_zh: `说清喝了什么`, met: !0 },
      { item_zh: `夸店员`, met: t > 5 },
    ],
  };
}

export var Am = {
  deepseek: {
    label: `DeepSeek`,
    group: `国内服务`,
    baseUrl: `https://api.deepseek.com/v1`,
    model: `deepseek-flash`,
    note: `在 DeepSeek 开放平台创建密钥，充值后按用量使用。`,
    keyUrl: `https://platform.deepseek.com/api_keys`,
    docsUrl: `https://api-docs.deepseek.com/zh-cn/`,
    models: [`deepseek-flash`, `deepseek-v4-pro`],
  },
  qwen: {
    label: `通义千问 · 阿里云百炼`,
    group: `国内服务`,
    baseUrl: `https://dashscope.aliyuncs.com/compatible-mode/v1`,
    model: `qwen-plus`,
    note: `默认使用北京地域的按量计费接口，API Key 需来自同一地域。也可填控制台提供的业务空间专属地址。`,
    keyUrl: `https://bailian.console.aliyun.com/?tab=globalset#/api-key`,
    docsUrl: `https://help.aliyun.com/zh/model-studio/compatibility-of-openai-with-dashscope`,
    models: [`qwen-plus`, `qwen3.8-max`],
  },
  doubao: {
    label: `豆包 · 火山方舟`,
    group: `国内服务`,
    baseUrl: `https://ark.cn-beijing.volces.com/api/v3`,
    model: `doubao-seed-2-1-pro-260915`,
    note: `先在方舟开通模型，再填写 Model ID 或你创建的 ep- 开头推理接入点 ID。`,
    keyUrl: `https://ark.volcengine.com/region:cn-beijing/apikey`,
    docsUrl: `https://docs.volcengine.com/docs/ark/integrate-third-party-tools`,
  },
  siliconflow: {
    label: `硅基流动 · SiliconFlow`,
    group: `国内服务`,
    baseUrl: `https://api.siliconflow.cn/v1`,
    model: `deepseek-ai/DeepSeek-V4-Flash`,
    note: `一个密钥可调用平台内的多种模型，模型名请从硅基流动控制台复制。`,
    keyUrl: `https://cloud.siliconflow.cn/account/ak`,
    docsUrl: `https://docs.siliconflow.cn/docs/api/chat-completions-post`,
    models: [`deepseek-ai/DeepSeek-V4-Flash`],
  },
  zhipu: {
    label: `智谱 · GLM`,
    group: `国内服务`,
    baseUrl: `https://open.bigmodel.cn/api/paas/v4`,
    model: `glm-5.3`,
    note: `使用智谱开放平台的通用 API Key 和按量计费接口。`,
    keyUrl: `https://bigmodel.cn/usercenter/proj-mgmt/apikeys`,
    docsUrl: `https://docs.bigmodel.cn/cn/guide/develop/openai/introduction`,
    models: [`glm-5.3`, `glm-5.3-flash`],
  },
  moonshot: {
    label: `Kimi · 月之暗面`,
    group: `国内服务`,
    baseUrl: `https://api.moonshot.cn/v1`,
    model: `kimi-k2.6`,
    note: `使用 Kimi 国内开放平台的 API Key，网页版会员与 API 额度分别计费。`,
    keyUrl: `https://platform.moonshot.cn/console/api-keys`,
    docsUrl: `https://platform.moonshot.cn/docs/api/chat`,
    models: [`kimi-k2.6`],
  },
  openrouter: {
    label: `OpenRouter · Claude / GPT / Gemini`,
    group: `国际服务`,
    baseUrl: `https://openrouter.ai/api/v1`,
    model: `anthropic/claude-sonnet-4-6`,
    note: `用 OpenRouter 的密钥调用 Claude、GPT、Gemini 等模型；这里填写平台模型 ID。`,
    keyUrl: `https://openrouter.ai/keys`,
    docsUrl: `https://openrouter.ai/models`,
    models: [`anthropic/claude-sonnet-4-6`],
  },
  openai: {
    label: `OpenAI · GPT`,
    group: `国际服务`,
    baseUrl: `https://api.openai.com/v1`,
    model: `gpt-4.1`,
    note: `使用 OpenAI API 平台的密钥；ChatGPT 订阅与 API 额度分别计费。`,
    keyUrl: `https://platform.openai.com/api-keys`,
    docsUrl: `https://developers.openai.com/api/docs/models`,
    models: [`gpt-4.1`, `gpt-5.4`],
  },
  gemini: {
    label: `Google · Gemini`,
    group: `国际服务`,
    baseUrl: `https://generativelanguage.googleapis.com/v1beta/openai`,
    model: `gemini-3.8-flash`,
    note: `在 Google AI Studio 创建 Gemini API Key，使用其 OpenAI 兼容接口。`,
    keyUrl: `https://aistudio.google.com/apikey`,
    docsUrl: `https://ai.google.dev/gemini-api/docs/openai`,
    models: [`gemini-3.8-flash`],
  },
  groq: {
    label: `Groq · Llama`,
    group: `国际服务`,
    baseUrl: `https://api.groq.com/openai/v1`,
    model: `llama-3.3-70b-versatile`,
    note: `在 GroqCloud 创建密钥，可用模型和调用限额以控制台为准。`,
    keyUrl: `https://console.groq.com/keys`,
    docsUrl: `https://console.groq.com/docs/quickstart`,
    models: [`llama-3.3-70b-versatile`],
  },
  mistral: {
    label: `Mistral AI`,
    group: `国际服务`,
    baseUrl: `https://api.mistral.ai/v1`,
    model: `mistral-large-latest`,
    note: `在 Mistral Studio 创建 API Key，模型权限和额度以账户为准。`,
    keyUrl: `https://console.mistral.ai/api-keys`,
    docsUrl: `https://docs.mistral.ai/getting-started/quickstarts/developer/first-api-request`,
    models: [`mistral-large-latest`],
  },
  gateway: {
    label: `自家 new-api 网关`,
    group: `其他接口`,
    baseUrl: `http://127.0.0.1:3001/v1`,
    model: `anthropic/claude-sonnet-4-6`,
    note: `在你的网关「令牌」页创建密钥。线上使用时需将地址改为公网 HTTPS 网关，本机地址仅供本地开发。`,
  },
  custom: {
    label: `自定义 · OpenAI 兼容接口`,
    group: `其他接口`,
    baseUrl: ``,
    model: ``,
    note: `填写服务商提供的 HTTPS 接口地址、API Key 和模型 ID；支持 Chat Completions 格式。`,
  },
};

export function jm(e) {
  return e
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, ``)
    .trim()
    .replace(/^["'`“”‘’]+|["'`“”‘’]+$/g, ``)
    .trim()
    .replace(/^Bearer\s+/i, ``)
    .trim()
    .replace(/^["'`“”‘’]+|["'`“”‘’]+$/g, ``)
    .trim();
}

export function Mm(e) {
  let t = jm(e);
  return t
    ? /[•●…*＊]/.test(t)
      ? `这里填的是隐藏后的密钥。请从服务商官网复制完整 API Key，不要复制圆点或星号。`
      : /[^\x21-\x7e]/.test(t)
        ? `API Key 中含有中文、全角符号、空格或换行。请从服务商官网重新复制完整密钥，只粘贴密钥本身。`
        : null
    : `请填写服务商官网创建的完整 API Key`;
}

export function Nm(e) {
  let t;
  try {
    t = new URL(e.trim());
  } catch {
    throw Error(
      `接口地址格式不正确，请填写服务商提供的完整 http:// 或 https:// 地址`,
    );
  }
  if (
    ![`http:`, `https:`].includes(t.protocol) ||
    t.username ||
    t.password ||
    t.search ||
    t.hash
  )
    throw Error(
      `接口地址请只填写服务商的 http:// 或 https:// 基础地址，不要带账号、密码、查询参数或 # 后缀`,
    );
  return (
    (t.pathname =
      t.pathname.replace(/\/+$/, ``).replace(/\/chat\/completions$/, ``) +
      `/chat/completions`),
    t.href
  );
}

export var Pm = {
    preset: `deepseek`,
    baseUrl: Am.deepseek.baseUrl,
    apiKey: ``,
    model: Am.deepseek.model,
    viaProxy: !0,
  };

export var Fm = class extends Error {
    kind;
    constructor(e, t) {
      (super(e), (this.name = `LlmError`), (this.kind = t));
    }
  };

export function Im(e) {
  return (
    e.preset === `fake` ||
    !!(e.baseUrl.trim() && e.apiKey.trim() && e.model.trim())
  );
}

export function Lm(e, t) {
  let n = t.maxTokens ?? 1200;
  if (e.preset === `openai` && /^(gpt-5|o\d)/.test(e.model))
    return {
      max_completion_tokens: Math.max(n, 4096),
      reasoning_effort: `low`,
    };
  let r = { temperature: t.temperature ?? 0.7, max_tokens: n };
  return (
    e.preset === `openai` &&
      (delete r.max_tokens, (r.max_completion_tokens = n)),
    ((e.preset === `deepseek` && /^deepseek-(flash|v4)/.test(e.model)) ||
      (e.preset === `doubao` &&
        (/^doubao-seed-2-/.test(e.model) || e.model.startsWith(`ep-`))) ||
      (e.preset === `zhipu` &&
        /^glm-(4\.[567]|5(?:\.[012])?(?:-|$))/.test(e.model))) &&
      (r.thinking = { type: `disabled` }),
    e.preset === `zhipu` &&
      /^glm-5\.3/.test(e.model) &&
      ((r.thinking = { type: `enabled` }),
      (r.reasoning_effort = `low`),
      (r.max_tokens = Math.max(n, 4096))),
    (e.preset === `qwen` || e.preset === `siliconflow`) &&
      (r.enable_thinking = !1),
    e.preset === `moonshot` &&
      e.model === `kimi-k2.6` &&
      ((r.thinking = { type: `disabled` }), (r.temperature = 0.6)),
    e.preset === `gemini` &&
      ((r.reasoning_effort =
        e.model.startsWith(`gemini-2.5-`) && !e.model.includes(`pro`)
          ? `none`
          : `low`),
      (r.max_tokens = Math.max(n, 4096))),
    r
  );
}

export async function Rm(e, t, n = {}) {
  if (e.preset === `fake`) return Tm(t);
  if (!Im(e))
    throw new Fm(`还没填模型地址、密钥或模型名，去「设置」填好再来`, `config`);
  let r = Mm(e.apiKey);
  if (r) throw new Fm(r, `config`);
  let i = jm(e.apiKey),
    a;
  try {
    a = Nm(e.baseUrl);
  } catch (e) {
    throw new Fm(e.message, `config`);
  }
  let o = JSON.stringify({
      model: e.model.trim(),
      messages: t,
      ...Lm(e, n),
      stream: !1,
    }),
    s = new AbortController(),
    c = setTimeout(
      () => s.abort(new DOMException(`timeout`, `AbortError`)),
      n.timeoutMs ?? 9e4,
    );
  n.signal?.addEventListener(`abort`, () => s.abort());
  let l;
  try {
    l = await fetch(`/llm-proxy`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,
        authorization: `Bearer ${i}`,
        "x-upstream-url": a,
        "x-upstream-extra": JSON.stringify(zm(e)),
      },
      body: o,
      signal: s.signal,
    });
  } catch (e) {
    throw (
      clearTimeout(c),
      e.name === `AbortError`
        ? n.signal?.aborted
          ? new Fm(`已取消`, `abort`)
          : new Fm(
              `模型 90 秒没回话，可能是网络或网关卡住了，再试一次`,
              `network`,
            )
        : /ISO-8859-1|ByteString|headers.*(?:invalid|character)|invalid.*header/i.test(
              e.message,
            )
          ? new Fm(
              `模型配置中含有不能发送的特殊字符，请到设置重新复制 API Key 并检查接口地址`,
              `config`,
            )
          : new Fm(
              `暂时无法连接同站转发服务，请检查当前网络或稍后重试`,
              `network`,
            )
    );
  } finally {
    clearTimeout(c);
  }
  let u = await l.text();
  if (!l.ok) {
    let e = u.slice(0, 300);
    try {
      let t = JSON.parse(u);
      e = t?.error?.message ?? t?.message ?? e;
    } catch {}
    if (l.status === 403)
      try {
        if (JSON.parse(u).code === `INVITE_REQUIRED`)
          throw new Fm(`体验资格已失效，请重新进入对话并输入邀请码`, `auth`);
      } catch (e) {
        if (e instanceof Fm) throw e;
      }
    throw l.status === 401 || l.status === 403
      ? new Fm(`密钥被拒绝（${l.status}）：${e}`, `auth`)
      : l.status === 404
        ? new Fm(`地址或模型名不对（404）：${e}`, `config`)
        : l.status === 429
          ? new Fm(`上游限流（429）：${e}`, `upstream`)
          : new Fm(`上游报错（${l.status}）：${e}`, `upstream`);
  }
  let d;
  try {
    d = JSON.parse(u);
  } catch {
    throw new Fm(`上游返回的不是 JSON，可能地址指到了网页`, `parse`);
  }
  let f = d.choices?.[0]?.message?.content,
    p =
      typeof f == `string`
        ? f
        : Array.isArray(f)
          ? f.map((e) => e.text ?? ``).join(``)
          : void 0;
  if (p?.trim()) return p;
  throw p === void 0
    ? new Fm(`上游返回里没有 choices[0].message.content`, `parse`)
    : new Fm(`模型没有返回正文，请尝试其他模型或稍后重试`, `parse`);
}

export function zm(e) {
  return e.preset === `openrouter` ? { "x-title": `English Town` } : {};
}

export async function Bm(e, t, n = {}) {
  let r = await Rm(e, t, { temperature: 0.6, ...n });
  try {
    return wm(r);
  } catch {
    let i = await Rm(
      e,
      [
        ...t,
        { role: `assistant`, content: r },
        {
          role: `user`,
          content: `Your reply was not valid JSON. Reply again with ONLY the JSON object, no prose, no code fence.`,
        },
      ],
      { ...n, temperature: 0.2 },
    );
    try {
      return wm(i);
    } catch {
      throw new Fm(`模型两次都没返回合法 JSON，换个模型或稍后再试`, `parse`);
    }
  }
}

export async function Vm(e) {
  return (
    await Rm(e, [{ role: `user`, content: `Reply with the single word OK.` }], {
      maxTokens: 64,
      timeoutMs: 3e4,
    })
  ).trim();
}