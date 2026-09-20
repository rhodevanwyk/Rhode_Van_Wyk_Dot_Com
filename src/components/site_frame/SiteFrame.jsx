import "./site-frame.css";

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


/* =========================================================
   TOP / BOTTOM NAVIGATION
   ========================================================= */

function NavigationBar({ items, position }) {
  return (
    <nav
      className={`site-navigation site-navigation--${position}`}
      aria-label={`${position} navigation`}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`site-navigation__item site-navigation__item--${item.variant}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}


/* =========================================================
   SOCIAL RAIL
   ========================================================= */

function SocialRail({ side }) {
  return (
    <aside
      className={`site-social-rail site-social-rail--${side}`}
      aria-label={`${side} social links`}
    >
      <div className="site-social-rail__links">
        {socialLinks[side].map((social, index) => (
          <a
            key={`${social.label}-${index}`}
            className="site-social-link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            <img
              src={social.icon}
              alt={`${social.label} icon`}
              className="site-social-link__icon"
            />
          </a>
        ))}
      </div>
    </aside>
  );
}


/* =========================================================
   SITE FRAME
   ========================================================= */

export default function SiteFrame() {
  return (
    <>
      <NavigationBar
        items={topNavigation}
        position="top"
      />

      <SocialRail side="left" />

      <SocialRail side="right" />

      <NavigationBar
        items={bottomNavigation}
        position="bottom"
      />
    </>
  );
}