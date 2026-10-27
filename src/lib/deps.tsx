"use client";

import * as React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { toast as F, Toaster as SonnerToaster } from "sonner";
import { create as bm } from "zustand";
import { persist as Cm } from "zustand/middleware";
import { Slot as Lr } from "@radix-ui/react-slot";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkPlus,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  CircleCheck,
  CircleX,
  Circle,
  Download,
  Ear,
  EarOff,
  ExternalLink,
  EyeOff,
  Eye,
  Flame,
  ImageOff,
  Image,
  Info,
  KeyRound,
  Languages,
  Lightbulb,
  ListChecks,
  LoaderCircle,
  Lock,
  MapPin,
  Map as MapIcon,
  MessageCircle,
  Mic,
  NotebookPen,
  OctagonX,
  PenLine,
  Play,
  Plug,
  RotateCcw,
  ScanLine,
  Send,
  Settings2,
  Settings,
  Snail,
  Sparkles,
  Square,
  Star,
  Trash,
  TriangleAlert,
  Trophy,
  Upload,
  UserRound,
  Users,
  Volume2,
  X as XIcon,
} from "lucide-react";

export const v = React;
export const z = jsxRuntime as {
  Fragment: typeof React.Fragment;
  jsx: (type: any, props: any, key?: any) => React.ReactElement;
  jsxs: (type: any, props: any, key?: any) => React.ReactElement;
};

export function B(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Fn = cva;
export { F, bm, Cm, Lr };

export const s = (e: Record<string, () => any>, n?: boolean) => {
  const r: Record<string, any> = {};
  for (const i in e) {
    Object.defineProperty(r, i, { get: e[i], enumerable: true });
  }
  if (!n) {
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" });
  }
  return r;
};

// Progress primitives
export const pd = ProgressPrimitive.Root;
export const hd = ProgressPrimitive.Indicator;

// Dialog / Sheet primitives
export const bs = DialogPrimitive.Root;
export const Ss = DialogPrimitive.Trigger;
export const Es = DialogPrimitive.Portal;
export const Os = DialogPrimitive.Overlay;
export const Ms = DialogPrimitive.Content;
export const zs = DialogPrimitive.Close;
export const Is = DialogPrimitive.Title;
export const Ls = DialogPrimitive.Description;

// Separator & Label primitives
export const Bf = SeparatorPrimitive.Root;
export const $u = LabelPrimitive.Root;

// Tabs primitives
export const im = TabsPrimitive.Root;
export const om = TabsPrimitive.List;
export const cm = TabsPrimitive.Trigger;
export const um = TabsPrimitive.Content;

// Switch primitives
export const Hp = SwitchPrimitive.Root;
export const Wp = SwitchPrimitive.Thumb;

// Slider primitives
export const tp = SliderPrimitive.Root;
export const cp = SliderPrimitive.Track;
export const up = SliderPrimitive.Range;
export const _p = SliderPrimitive.Thumb;

// Select primitives
export const Bd = SelectPrimitive.Root;
export const ff = SelectPrimitive.Group;
export const Wd = SelectPrimitive.Value;
export const Hd = SelectPrimitive.Trigger;
export const Gd = SelectPrimitive.Icon;
export const Jd = SelectPrimitive.Portal;
export const Xd = SelectPrimitive.Content;
export const lf = SelectPrimitive.Viewport;
export const mf = SelectPrimitive.Label;
export const vf = SelectPrimitive.Item;
export const Sf = SelectPrimitive.ItemIndicator;
export const bf = SelectPrimitive.ItemText;
export const wf = SelectPrimitive.ScrollUpButton;
export const Ef = SelectPrimitive.ScrollDownButton;

// Lucide icons mapped to original bundle bindings
export const Ne = ArrowLeft;
export const Fe = ArrowRight;
export const Le = BookmarkPlus;
export const ze = Check;
export const Ve = ChevronDown;
export const Ue = ChevronUp;
export const Ge = ChevronRight;
export const qe = CircleCheck;
export const Ye = CircleX;
export const Ze = Circle;
export const $e = Download;
export const tt = Ear;
export const rt = EarOff;
export const at = ExternalLink;
export const st = EyeOff;
export const lt = Eye;
export const dt = Flame;
export const pt = ImageOff;
export const ht = Image;
export const _t = Info;
export const yt = KeyRound;
export const xt = Languages;
export const Ct = Lightbulb;
export const Tt = ListChecks;
export const Dt = LoaderCircle;
export const kt = Lock;
export const jt = MapPin;
export const Nt = MapIcon;
export const Ft = MessageCircle;
export const Lt = Mic;
export const zt = NotebookPen;
export const Vt = OctagonX;
export const Ut = PenLine;
export const Gt = Play;
export const qt = Plug;
export const Yt = RotateCcw;
export const Zt = ScanLine;
export const $t = Send;
export const tn = Settings2;
export const rn = Settings;
export const on = Snail;
export const cnIcon = Sparkles;
export { Sparkles as cn };
export const un = Square;
export const fn = Star;
export const mn = Trash;
export const gn = TriangleAlert;
export const vn = Trophy;
export const bn = Upload;
export const Sn = UserRound;
export const wn = Users;
export const En = Volume2;
export const On = XIcon;

export const An = (props: any) => {
  return (
    <SonnerToaster
      theme="system"
      className="toaster group"
      icons={{
        success: <qe className="size-4" />,
        info: <_t className="size-4" />,
        warning: <gn className="size-4" />,
        error: <Vt className="size-4" />,
        loading: <Dt className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{ classNames: { toast: "cn-toast" } }}
      {...props}
    />
  );
};
