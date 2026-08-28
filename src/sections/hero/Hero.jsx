import "./hero.css";
import rhodeLogo from "../../assets/rhode_logo.png";

const heroLogo = rhodeLogo;

const topNavigation = [
  { label: "HOME", href: "#home", variant: "purple" },
  { label: "ABOUT", href: "#about", variant: "yellow" },
  { label: "PROJECTS", href: "#projects", variant: "purple" },
  { label: "SKILLS", href: "#skills", variant: "yellow" },
];

const bottomNavigation = [
  { label: "PIECES", href: "#art", variant: "purple" },
  { label: "CAREER", href: "#career", variant: "yellow" },
  { label: "CONTACT", href: "#contact", variant: "purple" },
  { label: "FOOTER", href: "#footer", variant: "yellow" },
];

const socialLinks = {
  left: [
    {
      label: "Instagram",
      href: "https://instagram.com/",
      icon: "/assets/icons/instagram.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "/assets/icons/github.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "/assets/icons/github.svg",
    },
  ],
  right: [
    {
      label: "TikTok",
      href: "https://tiktok.com/",
      icon: "/assets/icons/tiktok.svg",
    },
    {
      label: "Behance",
      href: "https://behance.net/",
      icon: "/assets/icons/behance.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "/assets/icons/github.svg",
    },
  ],
};

function NavigationBar({ items, position }) {
  return (
    <nav
      className={`hero-navigation hero-navigation--${position}`}
      aria-label={`${position} navigation`}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`hero-navigation__item hero-navigation__item--${item.variant}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function SocialRail({ side }) {
  return (
    <aside
      className={`hero-social-rail hero-social-rail--${side}`}
      aria-label={`${side} social links`}
    >
      <div className="hero-social-rail__links">
        {socialLinks[side].map((social, index) => (
          <a
            key={`${social.label}-${index}`}
            className="hero-social-link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            <img
              src={social.icon}
              alt={`${social.label} icon`}
              className="hero-social-link__icon"
            />
          </a>
        ))}
      </div>
    </aside>
  );
}

const LOGO_GRID_CELL_COUNT = 24;

function LogoGrid() {
  return (
    <div className="hero-logo-grid" aria-label="Portfolio logo grid">
      {Array.from({ length: LOGO_GRID_CELL_COUNT }).map((_, index) => (
        <div className="hero-logo-grid__cell" key={index}>
          <img
            src={heroLogo}
            alt="Rhode logo"
            className="hero-logo-grid__image"
          />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <NavigationBar items={topNavigation} position="top" />

      <SocialRail side="left" />
      <SocialRail side="right" />

      <main className="hero__content">
        <LogoGrid />
      </main>

      <NavigationBar items={bottomNavigation} position="bottom" />
    </section>
  );
}
