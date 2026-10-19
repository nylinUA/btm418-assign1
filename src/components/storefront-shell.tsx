import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart, User, Heart, Globe, Menu, Gamepad2, Film, Music, Puzzle, Shirt, Monitor, Plug, BookOpen, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/surugaya-logo.webp";

const BASE = "https://www.suruga-ya.com";
export const CATS = [
  { name: "Video Games", icon: Gamepad2, id: 2, subs: ["Nintendo Switch", "PlayStation", "Retro Consoles", "Accessories"] },
  { name: "Movies / Television", icon: Film, id: 3, subs: ["Blu-ray", "DVD", "Anime", "Drama"] },
  { name: "Music", icon: Music, id: 4, subs: ["J-Pop", "Anime Songs", "Vinyl", "Imports"] },
  { name: "Toy / Hobby", icon: Puzzle, id: 5, subs: ["Figures", "Plastic Models", "Trading Cards"] },
  { name: "Merch & Fashion", icon: Shirt, id: 10, subs: ["Acrylic Stands", "Badges", "Apparel"] },
  { name: "PC", icon: Monitor, id: 6, subs: ["PC Games", "Software", "Peripherals"] },
  { name: "Electric Appliances", icon: Plug, id: 8, subs: ["Audio", "Cameras", "Gadgets"] },
  { name: "Books", icon: BookOpen, id: 7, subs: ["Manga", "Artbooks", "Magazines"] },
  { name: "Doujin", icon: PenTool, id: 11, subs: ["Doujinshi", "Doujin Games", "Doujin Music"] },
];

export function StorefrontHeader() {
  return (
    <header className="bg-header text-header-foreground">
      <div className="border-b border-header-foreground/10">
        <div className="mx-auto flex h-8 max-w-[1320px] items-center justify-between px-6 text-xs text-header-muted">
          <span>Japan's largest specialty retailer for games, anime & hobby — shipping to 100+ countries</span>
          <div className="flex items-center gap-5">
            <Link className="hover:text-header-foreground" to="/about-us">About Us</Link>
            <a className="hover:text-header-foreground" href="#">Shipping Info</a>
            <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> English · CAD</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center gap-8 px-6">
        <Link to="/" aria-label="Suruga-ya home" className="flex shrink-0 items-center rounded-md bg-card px-4 py-2.5">
          <img src={logoAsset} alt="Suruga-ya" className="h-10 w-auto" />
        </Link>
        <form className="flex h-11 flex-1 overflow-hidden rounded bg-card" onSubmit={(e) => e.preventDefault()}>
          <select className="border-r border-border bg-muted px-3 text-sm text-foreground outline-none">
            <option>All Categories</option>
            {CATS.map((c) => <option key={c.id}>{c.name}</option>)}
          </select>
          <input className="flex-1 px-4 text-sm text-foreground outline-none" placeholder="Search by title, character, JAN code or product number…" />
          <Button type="submit" className="h-full rounded-none px-6">
            <Search className="h-4 w-4" /> Search
          </Button>
        </form>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="flex items-center gap-2 hover:text-primary"><User className="h-5 w-5" /><span className="leading-tight"><span className="block text-[11px] text-header-muted">Hello, sign in</span>Account</span></a>
          <a href="#" className="flex items-center gap-2 hover:text-primary"><Heart className="h-5 w-5" />Wishlist</a>
          <a href="#" className="relative flex items-center gap-2 hover:text-primary"><ShoppingCart className="h-5 w-5" />Cart<span className="absolute -left-2 -top-2 rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">0</span></a>
        </nav>
      </div>
      <div className="bg-nav">
        <div className="mx-auto flex h-10 max-w-[1320px] items-center gap-1 px-6 text-sm">
          <span className="mr-3 flex items-center gap-2 font-semibold"><Menu className="h-4 w-4" />All Departments</span>
          {CATS.slice(0, 8).map((c) => (
            <a key={c.id} href={`${BASE}/en/category/${c.id}`} className="rounded px-3 py-1.5 text-header-muted hover:bg-header-foreground/10 hover:text-header-foreground">{c.name}</a>
          ))}
          <a href="#" className="ml-auto font-semibold text-header-foreground underline">Today's Deals</a>
        </div>
      </div>
    </header>
  );
}


export function StorefrontFooter() {
  return (
      <footer className="mt-10 bg-header text-header-muted">
        <div className="mx-auto grid max-w-[1320px] grid-cols-5 gap-8 px-6 py-10 text-sm">
          <div className="col-span-2">
            <div className="font-display text-xl font-extrabold text-header-foreground">SURUGA<span className="text-header-muted">-YA</span></div>
            <p className="mt-2 max-w-sm">Specialist retailer of Japanese games, anime, music, books and hobby goods since 1972.</p>
          </div>
          {[
            ["Shopping", ["How to Order", "Payment Methods", "Shipping Rates", "Returns"]],
            ["Account", ["Sign in", "Order History", "Wishlist", "Address Book"]],
            ["Company", ["About Suruga-ya", "Careers", "Terms of Use", "Privacy Policy"]],
          ].map(([h, l]) => (
            <div key={h as string}>
              <div className="mb-3 font-semibold text-header-foreground">{h as string}</div>
              <ul className="space-y-2">{(l as string[]).map((x) => <li key={x}><>{x === "About Suruga-ya" ? <Link to="/about-us" className="hover:text-header-foreground">About Us</Link> : <a href="#" className="hover:text-header-foreground">{x}</a>}</></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="border-t border-header-foreground/10 py-4 text-center text-xs leading-relaxed">
          This is an unofficial Suruga-ya website that is unrelated to the official one. This website is for educational learning purposes only.
        </div>
      </footer>
  );
}
