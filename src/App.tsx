import { useMemo, useState, type ReactNode } from "react";
import {
  Anchor,
  ArrowUpRight,
  Compass,
  Cross,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Send,
  ShipWheel,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const logoPath = `${import.meta.env.BASE_URL}Untitled%20Project%20-%20RichText.png`;
const heroImageUrl =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=3840&q=90";

const navItems = [
  ["Home", "home"],
  ["Collection", "collection"],
  ["Navigation Map", "navigation-map"],
  ["Story", "story"],
  ["Contact", "contact"],
] as const;

const products = [
  {
    name: "Obsidian Crest Hoodie",
    type: "Hoodies",
    desc: "Heavyweight brushed cotton with chrome crest embroidery.",
    price: "$210",
    cut: "clip-sail",
  },
  {
    name: "Harbor Black Jacket",
    type: "Jackets",
    desc: "Structured shell, hidden hardware, storm-collar silhouette.",
    price: "$420",
    cut: "rounded-none",
  },
  {
    name: "Compass Line Tee",
    type: "T-shirts",
    desc: "Dense off-white cotton with tonal route graphics.",
    price: "$115",
    cut: "rounded-full",
  },
  {
    name: "Deep Route Cargo",
    type: "Pants",
    desc: "Wide black cargo trouser with map-tape finishing.",
    price: "$260",
    cut: "rounded-sm",
  },
  {
    name: "Chrome Anchor Chain",
    type: "Accessories",
    desc: "Polished steel pendant with aged marine engraving.",
    price: "$170",
    cut: "rounded-full",
  },
] as const;

const regions = [
  {
    id: "europe",
    name: "Europe",
    path: "M392 138 L492 116 L548 175 L518 246 L430 258 L374 206 Z",
    message: "Winter capsule available through selected gothic houses.",
    collection: "Harbor Black, Obsidian Crest, Chrome Anchor",
  },
  {
    id: "africa",
    name: "Africa",
    path: "M416 268 L516 270 L562 370 L512 526 L402 498 L360 374 Z",
    message: "Direct delivery routes open from Lagos to the coastlines.",
    collection: "Compass Line, Deep Route Cargo, Limited Crest",
  },
  {
    id: "americas",
    name: "Americas",
    path: "M124 142 L238 92 L318 178 L274 292 L318 418 L238 546 L164 470 L188 338 L96 270 Z",
    message: "Atlantic dispatch active for private drops and lookbook orders.",
    collection: "Storm Jacket, Crest Hoodie, Anchor Chain",
  },
  {
    id: "asia",
    name: "Asia",
    path: "M564 156 L748 118 L852 232 L810 382 L646 362 L552 278 Z",
    message: "Eastern route in preview with limited accessories first.",
    collection: "Chrome Anchor, Compass Line Tee",
  },
] as const;

type Region = (typeof regions)[number];

const lookbook = [
  "Nocturne Harbor",
  "Steel Cross",
  "Underdeck Ritual",
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[1]);

  return (
    <div className="noise min-h-screen overflow-hidden bg-obsidian text-mist">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Collection />
        <Story />
        <NavigationMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        <Lookbook />
        <PremiumDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="MYLORD home">
          <img src={logoPath} alt="MYLORD logo" className="h-11 w-11 object-contain" />
          <span className="font-display text-lg font-bold tracking-[0.32em] text-mist">MYLORD</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, target]) => (
            <a
              key={target}
              href={`#${target}`}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-chrome/70 transition hover:text-mist"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-white/[0.03] text-mist lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-white/10 bg-charcoal px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navItems.map(([label, target]) => (
              <a
                key={target}
                href={`#${target}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-semibold uppercase tracking-[0.22em] text-chrome"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black-depth px-5 pt-28 sm:px-8">
      <img
        src={heroImageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-58"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.96)_0%,rgba(5,5,5,.78)_42%,rgba(5,5,5,.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(244,241,234,.2),transparent_24rem),linear-gradient(180deg,rgba(5,5,5,.45)_0%,rgba(5,5,5,.16)_48%,rgba(5,5,5,.92)_100%)]" />
      <CompassField />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.34em] text-chrome/70">
            <Cross size={16} /> Coordinates of power
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-normal text-mist sm:text-7xl lg:text-8xl">
            Dark wear for the <span className="metal-text">unclaimed</span> route.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-chrome/76 sm:text-lg">
            A cinematic clothing house forged in shadow, chrome, courage, and salt air.
            Limited silhouettes for those who move like a signal through the underground.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-3 bg-mist px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-chrome"
            >
              Explore Collection <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a
              href="#navigation-map"
              className="inline-flex items-center justify-center gap-3 border border-chrome/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-mist transition hover:border-mist hover:bg-white/[0.05]"
            >
              Enter the World <Compass size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <div className="absolute inset-8 rounded-full border border-chrome/15" />
          <div className="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-chrome/20" />
          <div className="absolute inset-16 rotate-45 border border-chrome/10" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-72 w-72 place-items-center rounded-full border border-white/12 bg-black/42 shadow-chrome backdrop-blur-sm sm:h-96 sm:w-96">
              <img src={logoPath} alt="MYLORD crest" className="h-48 w-48 object-contain drop-shadow-[0_0_34px_rgba(244,241,234,.22)] sm:h-64 sm:w-64" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CompassField() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="route" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#f4f1ea" stopOpacity=".42" />
            <stop offset="1" stopColor="#7a7f83" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <path d="M0 610 C260 410 460 720 760 430 S1080 270 1200 130" fill="none" stroke="url(#route)" strokeWidth="1" />
        <path d="M120 120 L1040 670 M210 690 L970 90 M610 0 L610 800" stroke="#c9ced2" strokeOpacity=".08" strokeWidth="1" />
        <circle cx="610" cy="392" r="185" fill="none" stroke="#c9ced2" strokeOpacity=".08" />
        <circle cx="610" cy="392" r="68" fill="none" stroke="#c9ced2" strokeOpacity=".12" />
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-chrome/60">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold uppercase leading-tight text-mist sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-sm leading-7 text-chrome/70 sm:text-base">{children}</p>}
    </div>
  );
}

function Collection() {
  return (
    <section id="collection" className="relative bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Limited clothing objects" title="Collection under shadow">
          Streetwear forms refined as fashion artifacts: severe, durable, marine-coded, and intentionally scarce.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group border border-white/10 bg-white/[0.025] p-4 transition duration-500 hover:-translate-y-2 hover:border-chrome/40 hover:bg-white/[0.055]"
            >
              <div className="product-surface relative mb-5 aspect-[4/5] overflow-hidden">
                <div className={`absolute left-1/2 top-1/2 h-40 w-32 -translate-x-1/2 -translate-y-1/2 bg-metal-line opacity-90 ${product.cut}`} />
                <div className="absolute inset-x-6 bottom-6 h-px bg-chrome/30" />
                <img src={logoPath} alt="" className="absolute right-4 top-4 h-8 w-8 object-contain opacity-45" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-lead">{product.type}</p>
              <h3 className="mt-3 min-h-14 font-display text-xl font-bold leading-tight text-mist">{product.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-chrome/70">{product.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-bold text-mist">{product.price}</span>
                <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-chrome transition group-hover:text-mist">
                  View Details <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative border-y border-white/10 bg-iron px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-chrome/60">Brand story</p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-mist sm:text-6xl">
            A house for those who navigate without permission.
          </h2>
        </div>
        <div className="grid gap-7 text-base leading-8 text-chrome/75 sm:text-lg">
          <p>
            MYLORD is imagined as a signal from below deck: disciplined, elegant, and impossible to place.
            The mark carries the force of a cross, a blade, a sail, and a coordinate. It belongs to people
            who understand identity as armor and movement as destiny.
          </p>
          <p>
            Each collection is built around restraint: black surfaces, chrome accents, severe silhouettes,
            and symbols that feel discovered rather than decorated. The result is international streetwear
            with the hush of a private fashion house.
          </p>
        </div>
      </div>
    </section>
  );
}

function NavigationMap({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: Region;
  setSelectedRegion: (region: Region) => void;
}) {
  const coordinates = useMemo(() => "06.5244 N / 03.3792 E / BLACK ROUTE 01", []);

  return (
    <section id="navigation-map" className="map-grid bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Navigation map" title="Routes of release">
          Select a territory to reveal availability, dispatch language, and the collection currently crossing that route.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative overflow-hidden border border-chrome/15 bg-black/50 p-3 shadow-chrome sm:p-6">
            <svg viewBox="0 0 960 620" className="h-[360px] w-full sm:h-[520px]" role="img" aria-label="Interactive dark world map">
              <rect width="960" height="620" fill="rgba(5,5,5,.88)" />
              <path d="M48 140 C226 70 358 172 514 120 S778 42 928 150" fill="none" stroke="#c9ced2" strokeOpacity=".15" />
              <path d="M70 464 C258 334 388 442 520 342 S756 280 890 394" fill="none" stroke="#c9ced2" strokeOpacity=".13" strokeDasharray="8 12" />
              {[120, 240, 360, 480, 600, 720, 840].map((x) => (
                <line key={x} x1={x} x2={x} y1="34" y2="586" stroke="#c9ced2" strokeOpacity=".06" />
              ))}
              {[100, 200, 300, 400, 500].map((y) => (
                <line key={y} x1="40" x2="920" y1={y} y2={y} stroke="#c9ced2" strokeOpacity=".06" />
              ))}
              {regions.map((region) => {
                const active = region.id === selectedRegion.id;
                return (
                  <motion.path
                    key={region.id}
                    d={region.path}
                    onClick={() => setSelectedRegion(region)}
                    whileHover={{ scale: 1.015 }}
                    className="cursor-pointer transition"
                    fill={active ? "rgba(244,241,234,.28)" : "rgba(122,127,131,.13)"}
                    stroke={active ? "#f4f1ea" : "#7a7f83"}
                    strokeWidth={active ? 2.5 : 1.25}
                  />
                );
              })}
            </svg>
            <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-chrome/55">
              <MapPin size={13} /> {coordinates}
            </div>
          </div>
          <motion.aside
            key={selectedRegion.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            className="border border-chrome/15 bg-white/[0.035] p-7"
          >
            <Compass className="mb-8 text-chrome" size={34} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-lead">Selected region</p>
            <h3 className="mt-3 font-display text-4xl font-bold uppercase text-mist">{selectedRegion.name}</h3>
            <p className="mt-6 text-base leading-8 text-chrome/75">{selectedRegion.message}</p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lead">Available collection</p>
              <p className="mt-3 text-sm leading-7 text-mist">{selectedRegion.collection}</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Lookbook" title="Cinematic silhouettes">
          Large-format scenes for a wardrobe that feels discovered in smoke, steel, and harbor light.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {lookbook.map((title, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.09 }}
              className="group relative min-h-[440px] overflow-hidden border border-white/10 bg-black"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(244,241,234,.18),transparent_28%),linear-gradient(180deg,rgba(26,28,30,.94),rgba(0,0,0,.96))]" />
              <div className="absolute inset-x-12 top-14 h-[62%] border border-chrome/15 bg-white/[0.03] transition duration-700 group-hover:scale-105" />
              <div className="absolute left-1/2 top-24 h-72 w-36 -translate-x-1/2 bg-metal-line opacity-80 clip-sail" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-7 pt-28">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-lead">Scene 0{index + 1}</p>
                <h3 className="font-display text-3xl font-bold uppercase text-mist">{title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumDetails() {
  const values = [
    ["Dark elegance", Cross],
    ["Premium fabrics", Sparkles],
    ["Strong identity", ShipWheel],
    ["Marine symbolism", Anchor],
    ["Limited collections", Compass],
    ["International vision", MapPin],
  ] as const;

  return (
    <section className="border-y border-white/10 bg-iron px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Premium details" title="Designed as a code">
          Every finish serves the same language: controlled darkness, sharp silver, and meaning carried quietly.
        </SectionHeading>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([label, Icon]) => (
            <div key={label} className="bg-iron p-8 transition hover:bg-white/[0.045]">
              <Icon className="mb-7 text-chrome" size={30} />
              <h3 className="font-display text-2xl font-bold uppercase text-mist">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border border-chrome/15 bg-white/[0.035] p-7 shadow-chrome sm:p-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-chrome/60">Private dispatch</p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-mist sm:text-5xl">
            Join the first route.
          </h2>
          <p className="mt-5 text-base leading-8 text-chrome/72">
            Receive collection signals, delivery notices, and private lookbook drops before the public tide turns.
          </p>
        </div>
        <div className="self-end">
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@domain.com"
              className="min-h-14 border border-white/15 bg-black/40 px-5 text-sm text-mist outline-none transition placeholder:text-lead focus:border-chrome/60"
            />
            <button
              type="button"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-mist px-6 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-chrome"
            >
              Subscribe <Mail size={17} />
            </button>
          </form>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/" className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-chrome transition hover:border-mist hover:text-mist">
              WhatsApp Contact
            </a>
            {[Instagram, Globe2, Send].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                className="grid h-11 w-11 place-items-center border border-white/15 text-chrome transition hover:border-mist hover:text-mist"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <img src={logoPath} alt="MYLORD logo" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-display text-lg font-bold tracking-[0.3em] text-mist">MYLORD</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-lead">06.5244 N / 03.3792 E / Sea route black</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.22em] text-chrome/65">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} className="transition hover:text-mist">
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-lead">© 2026 MYLORD. Limited by design.</p>
      </div>
    </footer>
  );
}

export default App;
