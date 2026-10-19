import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  ChevronRight,
  ChevronLeft,
  Film,
  Music,
  Gamepad2,
  Monitor,
  Plug,
  BookOpen,
  Shirt,
  Puzzle,
  PenTool,
  Truck,
  ShieldCheck,
  Globe,
  Headphones,
  Menu,
} from "lucide-react";
import { CATS } from "@/components/storefront-shell";

const BASE = "https://www.suruga-ya.com";
const JPY_PER_CAD = 110;
const HERO = [
  { img: `${BASE}/sites/default/files/2026-08/commatome0905_main_pc_en.jpg`, title: "Buy More & Save", sub: "Stack discounts on multi-item orders" },
  { img: `${BASE}/sites/default/files/2026-08/freeship-0905-_main_pc_en.jpg`, title: "Free Shipping Campaign", sub: "Limited-time worldwide shipping offer" },
  { img: `${BASE}/sites/default/files/2024-10/honten-announcement-main-en-pc.jpg`, title: "Main Store Announcement", sub: "News from Suruga-ya Honten" },
  { img: `${BASE}/sites/default/files/2023-12/comfukubukuro_main_pc.jpg`, title: "Lucky Bags", sub: "Curated mystery bundles" },
];
const FEATURES = [
  { img: `${BASE}/sites/default/files/2024-12/comtop_pc_en.jpg`, title: "Katsumi Collection" },
  { img: `${BASE}/sites/default/files/2025-11/pokemon_comtop_pc_en.jpg`, title: "Pokémon Goods" },
  { img: `${BASE}/sites/default/files/2024-09/ghibli_comtop_pc_en.jpg`, title: "Ghibli Store" },
  { img: `${BASE}/sites/default/files/2025-11/sailormoon_comtop_pc_en.jpg`, title: "Sailor Moon" },
];
const SHELVES = [
  {
    name: "Movies / Television", id: 3, items: [
      ["Cinnamon and Yasuda Ken's Yurudoki ☆ Cooking Vol. 1", 151132929, 4280],
      ["Drama Series W: Sunflowers Disappearing in the Rain DVD-Box", 136016879, 9800],
      ["Taiga Drama Gunshi Kanbei Complete Collection", 136018651, 24500],
      ["FIBA Basketball World Cup '94 Dream Team II", 951034033, 1980],
      ["Tokyo Camouflage Hour Blu-ray Box", 436002847, 12800],
      ["Stage WIND BREAKER Aniplex Online Special DISC", 151133780, 3600],
    ],
  },
  {
    name: "Music", id: 4, items: [
      ["Ty Segall / Goodbye Bread", 221126284, 1450],
      ["Fumiya Fujii / ANNIVERSARY BEST \"25/35\" (Blu-spec CD2)", 220246964, 3280],
      ["Christopher Hogwood / Vivaldi: Concertos [Import]", 216020877, 880],
      ["Ryo Mizutsuki 25th Anniversary Album \"Flowing Around\"", 340016037, 2200],
      ["Eiko Seyama / Machiko Irie / The Autumn of Blindness", 230049462, 1100],
      ["The Confessions / All The Time [Import]", 211080258, 760],
    ],
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suruga-ya — Japanese Games, Anime, Music & Collectibles" },
      { name: "description", content: "Shop millions of used and new Japanese games, anime, music, figures and collectibles from Suruga-ya, shipped worldwide." },
      { property: "og:title", content: "Suruga-ya — Japanese Games, Anime & Collectibles" },
      { property: "og:description", content: "Millions of Japanese games, anime, music and hobby items shipped worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Img({ alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative flex flex-col items-start justify-end overflow-hidden bg-gradient-to-br from-header via-nav to-primary p-8 text-header-foreground ${className}`}>
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border-[28px] border-header-foreground/10" />
      <span className="mb-2 rounded bg-primary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">Suruga-ya</span>
      <span className="font-display text-3xl font-extrabold leading-tight">{alt}</span>
    </div>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative overflow-hidden rounded border border-border bg-card">
      <div className="flex h-full transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
        {HERO.map((h) => (
          <Img key={h.img} src={h.img} alt={h.title} className="h-full min-h-[380px] w-full shrink-0 pb-24" />
        ))}
      </div>
      <button onClick={() => setI((i - 1 + HERO.length) % HERO.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow hover:bg-card" aria-label="Previous"><ChevronLeft className="h-4 w-4" /></button>
      <button onClick={() => setI((i + 1) % HERO.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow hover:bg-card" aria-label="Next"><ChevronRight className="h-4 w-4" /></button>
      <div className="absolute bottom-0 left-0 right-0 flex border-t border-border bg-card/95">
        {HERO.map((h, k) => (
          <button key={h.title} onClick={() => setI(k)} className={`flex-1 border-t-2 px-4 py-2.5 text-left transition ${k === i ? "border-primary" : "border-transparent hover:bg-muted"}`}>
            <div className="text-xs font-semibold">{h.title}</div>
            <div className="truncate text-[11px] text-muted-foreground">{h.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="rounded border border-border bg-card">
      <h3 className="border-b border-border px-4 py-3 font-display text-sm font-bold uppercase tracking-wide">Shop by Category</h3>
      <ul className="py-1">
        {CATS.map((c) => (
          <li key={c.id} className="group relative">
            <a href={`${BASE}/en/category/${c.id}`} className="flex items-center gap-3 px-4 py-2 hover:bg-accent hover:text-accent-foreground">
              <c.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="flex-1">{c.name}</span>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
            <div className="invisible absolute left-full top-0 z-20 w-56 rounded border border-border bg-popover p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <div className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{c.name}</div>
              {c.subs.map((s) => <a key={s} href="#" className="block rounded px-2 py-1.5 hover:bg-muted">{s}</a>)}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function RightRail() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded border border-border bg-card p-4">
        <div className="font-display text-base font-bold">Welcome to Suruga-ya</div>
        <p className="mt-1 text-muted-foreground">Sign in for order tracking, wishlists and member offers.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="rounded bg-primary py-2 font-medium text-primary-foreground hover:bg-primary/90">Sign in</button>
          <button className="rounded border border-input py-2 font-medium hover:bg-muted">Register</button>
        </div>
      </div>
      <div className="flex-1 rounded border border-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-sm font-bold uppercase tracking-wide">Notices</span>
          <a href="#" className="text-xs text-primary">All</a>
        </div>
        <ul className="divide-y divide-border">
          {[
            ["Oct 17", "Free Shipping Campaign now live"],
            ["Oct 17", "Buy More & Save — extra discounts"],
            ["Oct 10", "Holiday shipping cut-off dates"],
            ["Sep 28", "Update to payment methods"],
          ].map(([d, t]) => (
            <li key={t} className="flex gap-3 py-2"><span className="w-12 shrink-0 text-xs text-muted-foreground">{d}</span><a href="#" className="hover:text-primary">{t}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionHead({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between border-b-2 border-foreground pb-2">
      <h2 className="font-display text-lg font-bold tracking-tight">{title}</h2>
      {href && <a href={href} className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">View all <ChevronRight className="h-3 w-3" /></a>}
    </div>
  );
}

function Shelf({ s }: { s: (typeof SHELVES)[number] }) {
  const cat = CATS.find((c) => c.id === s.id);
  if (!cat) return null;
  return (
    <section>
      <SectionHead title={`New Arrivals · ${s.name}`} href={`${BASE}/en/category/${s.id}`} />
      <div className="grid grid-cols-6 gap-4">
        {s.items.map(([title, id, price]) => (
          <a key={id} href={`${BASE}/en/product/${id}`} className="group rounded border border-border bg-card p-3 transition hover:border-primary hover:shadow-md">
            <div className="mb-3 flex aspect-square items-center justify-center rounded bg-muted">
              <cat.icon className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <div className="line-clamp-2 h-9 text-[13px] leading-snug group-hover:text-primary">{title}</div>
            <div className="mt-2 flex items-baseline justify-between">
              <div>
                <span className="font-display text-base font-bold text-primary">¥{price.toLocaleString()}</span>
                <div className="text-[11px] text-muted-foreground">≈ CA${(price / JPY_PER_CAD).toFixed(2)}</div>
              </div>
              <span className="text-[11px] text-success">In stock</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <main className="mx-auto max-w-[1320px] space-y-8 px-6 py-6">
        <div className="grid grid-cols-[240px_1fr_260px] gap-4">
          <Sidebar />
          <Hero />
          <RightRail />
        </div>

        <div className="grid grid-cols-4 divide-x divide-border rounded border border-border bg-card">
          {[
            [Truck, "Worldwide Shipping", "Delivered to 100+ countries"],
            [ShieldCheck, "Inspected Quality", "Every used item checked"],
            [Globe, "Multi-currency", "Pay in your local currency"],
            [Headphones, "English Support", "Help center & live contact"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Truck;
            return (
              <div key={t as string} className="flex items-center gap-3 px-5 py-4">
                <I className="h-6 w-6 text-primary" />
                <div><div className="font-semibold">{t as string}</div><div className="text-xs text-muted-foreground">{d as string}</div></div>
              </div>
            );
          })}
        </div>

        <section>
          <SectionHead title="Featured Stores" />
          <div className="grid grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <a key={f.title} href="#" className="group overflow-hidden rounded border border-border bg-card">
                <Img src={f.img} alt={f.title} className="aspect-[16/9] w-full transition duration-500 group-hover:scale-105" />
                <div className="flex items-center justify-between px-3 py-2 font-medium">{f.title}<ChevronRight className="h-4 w-4 text-muted-foreground" /></div>
              </a>
            ))}
          </div>
        </section>

        {SHELVES.map((s) => <Shelf key={s.id} s={s} />)}
      </main>


    </>
  );
}
