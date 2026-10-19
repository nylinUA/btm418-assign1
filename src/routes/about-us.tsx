import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Globe,
  ChevronRight,
  Building2,
  ShoppingBag,
  Cpu,
  Store,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
});

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-end border-b-2 border-foreground pb-2">
      <h2 className="font-display text-lg font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded border border-border bg-card p-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

const BUSINESS_LINES = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Operates suruga-ya.jp (Japan) and suruga-ya.com (international) — one of the largest online marketplaces for second-hand anime, games, music, books, and hobby goods.",
  },
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Owns and franchises comprehensive hobby and media reuse stores across Japan, including flagship locations in Akihabara, Shinjuku, Osaka Nipponbashi, and the home-base main store in Shizuoka.",
  },
  {
    icon: Cpu,
    title: "B2B Solutions",
    desc: "Provides cloud-based POS systems and market-price database solutions tailored for the Japanese reuse and second-hand retail industry.",
  },
];

const OFFICES = [
  { label: "Head Office", detail: "5-4 Tenmacho, Aoi-ku, Shizuoka City, Shizuoka Prefecture 420-0858, Japan" },
  { label: "Tokyo Branch", detail: "Akihabara, Chiyoda-ku, Tokyo, Japan" },
  { label: "Osaka Branch", detail: "Naniwa-ku, Osaka City, Osaka, Japan" },
];

export default function AboutUs() {
  return (
    <main className="mx-auto max-w-[1320px] space-y-10 px-6 py-8">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">About Us</span>
      </nav>

      {/* Hero banner */}
      <div className="relative overflow-hidden rounded border border-border bg-gradient-to-br from-header via-nav to-primary px-10 py-14 text-header-foreground">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[36px] border-header-foreground/10" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border-[24px] border-header-foreground/10" />
        <div className="relative">
          <span className="mb-3 inline-block rounded bg-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
            Since 1998
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight">
            Japan's Largest Specialty<br />Reuse Retailer
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-header-muted">
            SURUGA-YA Inc. connects people worldwide with millions of pre-owned games,
            anime, music, books, and hobby goods — giving beloved items a second life.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-[1fr_320px] gap-8">

        {/* Left: main content */}
        <div className="space-y-10">

          {/* Company overview */}
          <section>
            <SectionHead title="About Suruga-ya" />
            <div className="space-y-3 text-sm leading-relaxed text-foreground">
              <p>
                <strong>SURUGA-YA Inc.</strong> (株式会社駿河屋) is Japan's leading comprehensive
                hobby and media reuse retailer. The company launched its internet mail-order site
                <em> suruga-ya.jp</em> in April 1998 and has grown into a multi-channel retailer
                spanning e-commerce, physical stores, and B2B technology solutions.
              </p>
              <p>
                Rooted in the philosophy that <em>"Customer is our first priority,"</em> Suruga-ya
                champions a circular economy — items no longer needed by one person find their way
                to another who values them. With millions of listings across video games, anime
                merchandise, Blu-ray, music, trading cards, figures, and doujin works, the platform
                serves collectors and enthusiasts in over 100 countries.
              </p>
              <p>
                International customers shop via <strong>suruga-ya.com</strong>, with English
                support, multi-currency checkout, and worldwide shipping.
              </p>
            </div>
          </section>

          {/* Business lines */}
          <section>
            <SectionHead title="What We Do" />
            <div className="grid grid-cols-3 gap-4">
              {BUSINESS_LINES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded border border-border bg-card p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mb-2 font-display text-sm font-bold">{title}</div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Offices */}
          <section>
            <SectionHead title="Our Locations" />
            <div className="overflow-hidden rounded border border-border bg-card">
              {OFFICES.map(({ label, detail }, i) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 px-5 py-4 ${i < OFFICES.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-sm">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="flex gap-3 rounded border border-border bg-muted/60 px-4 py-3 text-xs text-muted-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <p>
              This is an <strong>unofficial educational website</strong> created for BTM 418 at the
              University of Alberta. It is not affiliated with, endorsed by, or operated by
              SURUGA-YA Inc. All company information is sourced from publicly available materials.
              For official inquiries, visit{" "}
              <a
                href="https://www.suruga-ya.com"
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                suruga-ya.com
              </a>.
            </p>
          </div>
        </div>

        {/* Right rail: contact info */}
        <aside className="space-y-4">
          <div className="rounded border border-border bg-card">
            <h3 className="border-b border-border px-4 py-3 font-display text-sm font-bold uppercase tracking-wide">
              Contact &amp; Support
            </h3>
            <div className="space-y-px p-3">
              <InfoCard icon={Mail} label="Email Support">
                <a
                  href="https://www.suruga-ya.com/en/contact-us"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit an inquiry →
                </a>
                <div className="mt-0.5 text-muted-foreground">reference@suruga-ya.com</div>
              </InfoCard>

              <div className="py-1" />

              <InfoCard icon={Phone} label="Phone (Global Support)">
                <span className="font-mono">+81-54-333-9131</span>
                <div className="mt-0.5 text-muted-foreground">Fax: +81-54-251-3220</div>
              </InfoCard>

              <div className="py-1" />

              <InfoCard icon={MessageCircle} label="LINE Chat">
                <span className="font-mono">@689laiwc</span>
                <div className="mt-0.5 text-muted-foreground">Japanese &amp; English</div>
              </InfoCard>

              <div className="py-1" />

              <InfoCard icon={Globe} label="Languages Supported">
                English and Japanese only
              </InfoCard>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded border border-border bg-card">
            <h3 className="border-b border-border px-4 py-3 font-display text-sm font-bold uppercase tracking-wide">
              Support Hours <span className="font-normal text-muted-foreground">(JST / UTC+9)</span>
            </h3>
            <div className="p-4 text-sm">
              <div className="mb-3">
                <div className="mb-1 flex items-center gap-2 font-semibold">
                  <Clock className="h-4 w-4 text-primary" /> Phone &amp; Email
                </div>
                <div className="ml-6 space-y-1 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Weekdays</span>
                    <span>10:30 – 19:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends &amp; Holidays</span>
                    <span>10:30 – 18:00</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="mb-1 flex items-center gap-2 font-semibold">
                  <MessageCircle className="h-4 w-4 text-primary" /> LINE Chat
                </div>
                <div className="ml-6 space-y-1 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Weekdays</span>
                    <span>10:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends &amp; Holidays</span>
                    <span>10:00 – 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="rounded border border-border bg-card">
            <h3 className="border-b border-border px-4 py-3 font-display text-sm font-bold uppercase tracking-wide">
              Official Links
            </h3>
            <ul className="divide-y divide-border">
              {[
                ["International Store", "https://www.suruga-ya.com/en"],
                ["Contact / Inquiry Form", "https://www.suruga-ya.com/en/contact-us"],
                ["Shipping Information", "https://www.suruga-ya.com/en/shipping"],
                ["Q&A / FAQ", "https://www.suruga-ya.com/en/faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {label}
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
