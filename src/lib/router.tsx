"use client";
// @ts-nocheck
import { ah } from "@/lib/store";
import { v } from "@/lib/deps";

export function oh(e) {
  let t = 1,
    n = e,
    r = 100;
  for (; n >= r && t < 40;) ((n -= r), t++, (r = 100 + (t - 1) * 120));
  let i = ah[Math.min(t - 1, ah.length - 1)];
  return { level: t, title: i, cur: n, need: r };
}

export function sh() {
  let [e, t] = (0, v.useState)(() =>
    typeof window < `u` ? window.location.hash : ``
  );
  (0, v.useEffect)(() => {
    t(window.location.hash);
    let e = () => {
      (t(window.location.hash), window.scrollTo({ top: 0 }));
    };
    return (
      window.addEventListener(`hashchange`, e),
      () => window.removeEventListener(`hashchange`, e)
    );
  }, []);
  let n = e.replace(/^#/, ``) || `/`;
  return {
    path: n,
    parts: n.split(`/`).filter(Boolean).map(decodeURIComponent),
  };
}

export function ch(e) {
  window.location.hash = e;
}

export function lh(e = `/`) {
  window.history.length > 1 ? window.history.back() : ch(e);
}