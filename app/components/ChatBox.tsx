"use client";

import { useState } from "react";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  className: string;
};

const contactItems: ContactItem[] = [
  {
    label: "Zalo",
    value: "売りたい品の写真を送信",
    href: "https://zalo.me/0901234567",
    className: "bg-sky-500 hover:bg-sky-600",
  },
  {
    label: "WhatsApp",
    value: "+84 901 234 567",
    href: "https://wa.me/84901234567",
    className: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    label: "Email",
    value: "thumua@docunhat.vn",
    href: "mailto:thumua@docunhat.vn",
    className: "bg-violet-500 hover:bg-violet-600",
  },
  {
    label: "電話",
    value: "0901 234 567",
    href: "tel:0901234567",
    className: "bg-amber-500 hover:bg-amber-600",
  },
];

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen ? (
        <div className="w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/95 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
          <div className="flex items-start justify-between bg-slate-900 px-5 py-4 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                クイック相談
              </p>
              <h3 className="mt-2 text-lg font-semibold">当日見積り対応</h3>
              <p className="mt-1 text-sm text-slate-300">
                中古品やスクラップの写真を送っていただければ、すぐに概算見積をご案内します。
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-white transition hover:bg-white/20"
              aria-label="Collapse chat box"
            >
              -
            </button>
          </div>

          <div className="space-y-3 p-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`block rounded-2xl px-4 py-3 text-white transition ${item.className}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-85">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_0%,#fb7185_100%)] text-sm font-bold text-white shadow-[0_18px_40px_-18px_rgba(190,24,93,0.6)] transition hover:scale-105"
        aria-label={isOpen ? "Close chat box" : "Open chat box"}
      >
        相談
      </button>
    </div>
  );
}
