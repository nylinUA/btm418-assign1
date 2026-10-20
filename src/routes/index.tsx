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
  TrendingUp,
  Tv,
  Tag,
  History,
} from "lucide-react";
import { CATS } from "@/components/storefront-shell";

const BASE = "https://www.suruga-ya.com";
const JPY_PER_CAD = 110;

type Condition = "Brand New" | "Like New" | "Very Good" | "Minor Scratches" | "Box Damaged";

function ConditionBadge({ condition }: { condition: Condition }) {
  const styles: Record<Condition, string> = {
    "Brand New":
      "border-emerald-300 bg-emerald-100 text-emerald-900 dark:border-emerald-700/60 dark:bg-emerald-950/80 dark:text-emerald-200",
    "Like New":
      "border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-700/60 dark:bg-blue-950/80 dark:text-blue-200",
    "Very Good":
      "border-indigo-300 bg-indigo-100 text-indigo-900 dark:border-indigo-700/60 dark:bg-indigo-950/80 dark:text-indigo-200",
    "Minor Scratches":
      "border-amber-300 bg-amber-100 text-amber-950 dark:border-amber-700/60 dark:bg-amber-950/80 dark:text-amber-200",
    "Box Damaged":
      "border-orange-300 bg-orange-100 text-orange-950 dark:border-orange-700/60 dark:bg-orange-950/80 dark:text-orange-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold leading-none shadow-xs ${styles[condition] || "border-border bg-muted text-foreground"}`}
    >
      {condition}
    </span>
  );
}

interface ShelfItem {
  title: string;
  id: number;
  catId: number;
  price: number;
  originalPrice?: number;
  condition: Condition;
}

interface ShelfData {
  id: string;
  title: string;
  tag: string;
  icon: typeof TrendingUp;
  catId: number;
  items: ShelfItem[];
}

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

const SHELVES: ShelfData[] = [
  {
    id: "trending-items",
    title: "Trending Items",
    tag: "Popular Now",
    icon: TrendingUp,
    catId: 2,
    items: [
      { title: "The Legend of Zelda: Tears of the Kingdom Collector's Edition", id: 220512831, catId: 2, price: 11800, condition: "Like New" },
      { title: "Nendoroid Frieren: Beyond Journey's End #2348", id: 151299842, catId: 5, price: 6400, condition: "Brand New" },
      { title: "Pokémon Card Game Scarlet & Violet: 151 Enhanced Booster Box", id: 136098231, catId: 5, price: 14500, condition: "Brand New" },
      { title: "Neon Genesis Evangelion: 3.0+1.01 Thrice Upon a Time [4K UHD BD]", id: 436009812, catId: 3, price: 8200, condition: "Like New" },
      { title: "Persona 3 Reload Limited Box (PlayStation 5 Edition)", id: 221004921, catId: 2, price: 13200, condition: "Minor Scratches" },
      { title: "Chainsaw Man - Makima 1/7 Scale Pre-painted PVC Figure", id: 151199340, catId: 5, price: 18900, condition: "Very Good" },
    ],
  },
  {
    id: "currently-airing",
    title: "Currently Airing",
    tag: "Fall Season Anime",
    icon: Tv,
    catId: 3,
    items: [
      { title: "Solo Leveling - Sung Jinwoo ARTFX J 1/8 Scale Figure", id: 151322901, catId: 5, price: 16800, condition: "Brand New" },
      { title: "Delicious in Dungeon (Dungeon Meshi) Official Adventurer's Guide", id: 171092834, catId: 7, price: 2100, condition: "Like New" },
      { title: "Demon Slayer: Kimetsu no Yaiba - Hashira Training Arc Theme Single", id: 221088421, catId: 4, price: 3400, condition: "Brand New" },
      { title: "Kaiju No. 8 - S.H.Figuarts Action Figure (Bandai Spirits)", id: 151334812, catId: 5, price: 6200, condition: "Like New" },
      { title: "Oshi no Ko Character Song Vol. 3 with Exclusive Bonus Acrylic Stand", id: 220993412, catId: 4, price: 2400, condition: "Minor Scratches" },
      { title: "My Hero Academia Final Season Acrylic Diorama - Deku & Shigaraki", id: 181044231, catId: 10, price: 3100, condition: "Like New" },
    ],
  },
  {
    id: "price-drops",
    title: "Price Drops",
    tag: "Special Offers",
    icon: Tag,
    catId: 2,
    items: [
      { title: "Final Fantasy VII Rebirth Deluxe Edition (PlayStation 5)", id: 220551982, catId: 2, price: 7200, originalPrice: 9800, condition: "Like New" },
      { title: "Bocchi the Rock! Complete Season 1 Limited Blu-ray Box Set", id: 436021942, catId: 3, price: 15400, originalPrice: 19800, condition: "Minor Scratches" },
      { title: "Super Mario RPG Remake (Nintendo Switch Japanese Ver.)", id: 220491823, catId: 2, price: 3980, originalPrice: 5400, condition: "Very Good" },
      { title: "NieR:Automata Ver1.1a 2B (YoRHa No.2 Type B) 1/7 Scale Figure", id: 151244910, catId: 5, price: 12500, originalPrice: 16000, condition: "Box Damaged" },
      { title: "Spy x Family Code: White Limited Edition Steelbook [Blu-ray]", id: 436099120, catId: 3, price: 4900, originalPrice: 6800, condition: "Like New" },
      { title: "Hatsune Miku Vintage Dress Ver. 1/7 Scale PVC Figure", id: 151088492, catId: 5, price: 9800, originalPrice: 13500, condition: "Minor Scratches" },
    ],
  },
  {
    id: "recently-viewed",
    title: "Recently Viewed",
    tag: "Your Browsing History",
    icon: History,
    catId: 2,
    items: [
      { title: "Nintendo Switch OLED Model White System (Japanese Region Free)", id: 220993012, catId: 2, price: 32800, condition: "Like New" },
      { title: "Studio Ghibli 7-inch Vinyl Soundtrack Box (Limited 4-Disc LP Set)", id: 221039841, catId: 4, price: 22000, condition: "Brand New" },
      { title: "Jujutsu Kaisen Season 2: Shibuya Incident Special Edition Blu-ray", id: 436033819, catId: 3, price: 5600, condition: "Like New" },
      { title: "One Piece Card Game: Romance Dawn [OP-01] Japanese Booster Box", id: 136081290, catId: 5, price: 18500, condition: "Brand New" },
      { title: "Super Famicom (SFC) Console System - Boxed Complete Japanese Set", id: 220199401, catId: 2, price: 6800, condition: "Minor Scratches" },
      { title: "Ghost in the Shell: Stand Alone Complex Solid State Society Blu-ray", id: 436011928, catId: 3, price: 4200, condition: "Very Good" },
    ],
  },
];

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
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border-[28px] border-header-foreground/10" aria-hidden="true" />
      <span className="mb-2 rounded bg-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">Suruga-ya Campaign</span>
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
    <div className="relative overflow-hidden rounded border border-border bg-card" aria-roledescription="carousel" aria-label="Featured Promotions">
      <div className="flex h-full transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
        {HERO.map((h, idx) => (
          <div key={h.img} className="h-full min-h-[380px] w-full shrink-0 pb-24" aria-roledescription="slide" aria-label={`${idx + 1} of ${HERO.length}: ${h.title}`}>
            <Img src={h.img} alt={h.title} className="h-full w-full" />
          </div>
        ))}
      </div>
      <button
        onClick={() => setI((i - 1 + HERO.length) % HERO.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow transition-colors hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        onClick={() => setI((i + 1) % HERO.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow transition-colors hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex border-t border-border bg-card/95" role="tablist" aria-label="Promotion slides">
        {HERO.map((h, k) => (
          <button
            key={h.title}
            role="tab"
            aria-selected={k === i}
            aria-label={`Slide ${k + 1}: ${h.title}`}
            onClick={() => setI(k)}
            className={`flex-1 border-t-2 px-4 py-2.5 text-left transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${k === i ? "border-primary font-semibold" : "border-transparent hover:bg-muted"}`}
          >
            <div className="text-xs font-semibold text-foreground">{h.title}</div>
            <div className="truncate text-[11px] text-muted-foreground">{h.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="rounded border border-border bg-card" aria-label="Product categories sidebar">
      <h2 className="border-b border-border px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-foreground">Shop by Category</h2>
      <ul className="py-1">
        {CATS.map((c) => (
          <li key={c.id} className="group relative">
            <a href={`${BASE}/en/category/${c.id}`} className="flex items-center gap-3 px-4 py-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset">
              <c.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" aria-hidden="true" />
              <span className="flex-1">{c.name}</span>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </a>
            <div className="invisible absolute left-full top-0 z-20 w-56 rounded border border-border bg-popover p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100" role="region" aria-label={`${c.name} subcategories`}>
              <div className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{c.name}</div>
              {c.subs.map((s) => <a key={s} href="#" className="block rounded px-2 py-1.5 hover:bg-muted focus:outline-none focus:ring-1 focus:ring-primary">{s}</a>)}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function RightRail() {
  return (
    <aside className="flex flex-col gap-4" aria-label="Customer notices and sign in">
      <div className="rounded border border-border bg-card p-4">
        <h2 className="font-display text-base font-bold text-foreground">Welcome to Suruga-ya</h2>
        <p className="mt-1 text-muted-foreground">Sign in for order tracking, wishlists and member offers.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="rounded bg-primary py-2 font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Sign in</button>
          <button className="rounded border border-input py-2 font-medium text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Register</button>
        </div>
      </div>
      <div className="flex-1 rounded border border-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">Notices</h2>
          <a href="#" className="text-xs font-semibold text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary">All</a>
        </div>
        <ul className="divide-y divide-border">
          {[
            ["Oct 17", "Free Shipping Campaign now live"],
            ["Oct 17", "Buy More & Save — extra discounts"],
            ["Oct 10", "Holiday shipping cut-off dates"],
            ["Sep 28", "Update to payment methods"],
          ].map(([d, t]) => (
            <li key={t} className="flex gap-3 py-2">
              <span className="w-12 shrink-0 text-xs font-medium text-muted-foreground">{d}</span>
              <a href="#" className="text-foreground hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary">{t}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function SectionHead({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between border-b-2 border-foreground pb-2">
      <h2 className="font-display text-lg font-bold tracking-tight text-foreground">{title}</h2>
      {href && (
        <a href={href} className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary">
          View all <ChevronRight className="h-3 w-3" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Shelf({ s }: { s: ShelfData }) {
  const fallbackCat = CATS[0]!;
  return (
    <section aria-labelledby={`shelf-title-${s.id}`}>
      <div className="mb-3 flex items-end justify-between border-b-2 border-foreground pb-2">
        <div className="flex items-center gap-2">
          {s.icon && <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />}
          <h2 id={`shelf-title-${s.id}`} className="font-display text-lg font-bold tracking-tight text-foreground">
            {s.title}
          </h2>
          {s.tag && (
            <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {s.tag}
            </span>
          )}
        </div>
        <a
          href={`${BASE}/en/category/${s.catId}`}
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary"
        >
          View all <ChevronRight className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {s.items.map((item) => {
          const cat = CATS.find((c) => c.id === item.catId) ?? fallbackCat;
          const discountPercent = item.originalPrice
            ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
            : null;

          return (
            <a
              key={item.id}
              href={`${BASE}/en/product/${item.id}`}
              aria-label={`${item.title}, Condition: ${item.condition}, Price: ¥${item.price.toLocaleString()}${item.originalPrice ? `, was ¥${item.originalPrice.toLocaleString()}` : ""}, approximately CA$${(item.price / JPY_PER_CAD).toFixed(2)}, In stock`}
              className="group relative flex flex-col justify-between rounded border border-border bg-card p-3 transition hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div>
                <div className="relative mb-3 flex aspect-square items-center justify-center rounded bg-muted">
                  <cat.icon className="h-10 w-10 text-muted-foreground/60" aria-hidden="true" />
                  <div className="absolute left-2 top-2">
                    <ConditionBadge condition={item.condition} />
                  </div>
                  {discountPercent && (
                    <span className="absolute right-2 top-2 rounded bg-destructive px-1.5 py-0.5 text-[10px] font-bold text-destructive-foreground">
                      -{discountPercent}%
                    </span>
                  )}
                </div>
                <div className="line-clamp-2 h-9 text-[13px] leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </div>
              </div>
              <div className="mt-2 border-t border-border/50 pt-2 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-base font-bold text-primary">
                      ¥{item.price.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[11px] font-medium text-muted-foreground line-through">
                        ¥{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-medium text-muted-foreground">
                    ≈ CA${(item.price / JPY_PER_CAD).toFixed(2)}
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-success">In stock</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <main id="main-content" className="mx-auto max-w-[1320px] space-y-8 px-6 py-6" tabIndex={-1}>
        {/* WCAG 1.3.1 / 2.4.6: Level-one heading for the landing page */}
        <h1 className="sr-only">Suruga-ya — Japanese Specialty Games, Anime, Music &amp; Collectibles Storefront</h1>

        <div className="grid grid-cols-[240px_1fr_260px] gap-4">
          <Sidebar />
          <Hero />
          <RightRail />
        </div>

        <section aria-label="Store benefits and guarantees">
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
                  <I className="h-6 w-6 text-primary" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">{t as string}</div>
                    <div className="text-xs text-muted-foreground">{d as string}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="featured-stores-heading">
          <div className="mb-3 flex items-end justify-between border-b-2 border-foreground pb-2">
            <h2 id="featured-stores-heading" className="font-display text-lg font-bold tracking-tight text-foreground">
              Featured Stores
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <a
                key={f.title}
                href="#"
                className="group overflow-hidden rounded border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Img src={f.img} alt={f.title} className="aspect-[16/9] w-full transition duration-500 group-hover:scale-105" />
                <div className="flex items-center justify-between px-3 py-2 font-medium text-foreground">
                  {f.title}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {SHELVES.map((s) => <Shelf key={s.id} s={s} />)}
      </main>
    </>
  );
}
