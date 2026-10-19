import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ChevronRight,
  Building2,
  ShoppingBag,
  Cpu,
  Store,
  AlertCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
});

const DEMO_BASE_URL = "https://nylinua.github.io/btm418-assign1/";

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
    desc: "Operates online marketplaces for second-hand anime, games, music, books, and hobby goods.",
  },
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Owns and franchises comprehensive hobby and media reuse stores across Japan, including flagship locations in Akihabara, Shinjuku, Osaka Nipponbashi, and Shizuoka.",
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

function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orderNumber: "",
    inquiryType: "Order Status / Change an order",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      orderNumber: "",
      inquiryType: "Order Status / Change an order",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="rounded border border-border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-display text-base font-bold text-foreground">
          Send an Inquiry
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Have questions about an order or product? Fill out the form below.
        </p>
      </div>

      {submitted ? (
        <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
          <h4 className="font-display text-base font-semibold text-emerald-950 dark:text-emerald-200">
            Inquiry Sent Successfully
          </h4>
          <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
            Thank you for contacting us! This demo form has received your message for
            <strong> {formData.email}</strong>.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label htmlFor="fullName" className="font-semibold text-foreground">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Taro Yamada"
                className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label htmlFor="email" className="font-semibold text-foreground">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Inquiry Type */}
            <div className="space-y-1">
              <label htmlFor="inquiryType" className="font-semibold text-foreground">
                Inquiry Type <span className="text-destructive">*</span>
              </label>
              <select
                id="inquiryType"
                required
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Order Status / Change an order">Order Status / Change an Order</option>
                <option value="Delivery / Shipping Information">Delivery / Shipping Information</option>
                <option value="Product / Stock Availability">Product / Stock Availability</option>
                <option value="Payment / Refund Issue">Payment / Refund Issue</option>
                <option value="Account / Login Support">Account / Login Support</option>
                <option value="Other / General Questions">Other / General Questions</option>
              </select>
            </div>

            {/* Order Number (Optional) */}
            <div className="space-y-1">
              <label htmlFor="orderNumber" className="font-semibold text-foreground">
                Order Number <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <input
                id="orderNumber"
                type="text"
                value={formData.orderNumber}
                onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                placeholder="e.g. SRG-123456"
                className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Message / Inquiry Content */}
          <div className="space-y-1">
            <label htmlFor="message" className="font-semibold text-foreground">
              Contents of Inquiry <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your inquiry in detail..."
              className="w-full rounded border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Send className="h-3.5 w-3.5" />
            Send Inquiry
          </button>
        </form>
      )}
    </div>
  );
}

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
            Connecting people worldwide with pre-owned games, anime, music, books, and hobby goods — giving beloved items a second life.
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
                hobby and media reuse retailer. Launched in April 1998, it has grown into a multi-channel retailer
                spanning e-commerce, physical stores, and B2B technology solutions.
              </p>
              <p>
                Rooted in the philosophy that <em>"Customer is our first priority,"</em> Suruga-ya
                champions a circular economy — items no longer needed by one person find their way
                to another who values them. With millions of listings across video games, anime
                merchandise, Blu-ray, music, trading cards, figures, and doujin works, the platform
                serves collectors and enthusiasts worldwide.
              </p>
              <p>
                International customers can explore products directly on this educational website demo.
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

          {/* Contact / Inquiry Form Section */}
          <section>
            <SectionHead title="Contact Us / Inquiry Form" />
            <InquiryForm />
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
              SURUGA-YA Inc. For project details, visit{" "}
              <a
                href={DEMO_BASE_URL}
                className="underline hover:text-primary"
              >
                nylinua.github.io/btm418-assign1/
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
                  href="#inquiry-form"
                  className="text-primary hover:underline"
                >
                  Submit an inquiry ↓
                </a>
                <div className="mt-0.5 text-muted-foreground">demo@nylinua.github.io</div>
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
              Demo Links
            </h3>
            <ul className="divide-y divide-border">
              {[
                ["Demo Homepage", DEMO_BASE_URL],
                ["Contact / Inquiry Form", DEMO_BASE_URL],
                ["Shipping Information", DEMO_BASE_URL],
                ["Q&A / FAQ", DEMO_BASE_URL],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
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