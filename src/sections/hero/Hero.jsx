import "./hero.css";
import rhodeLogo from "../../assets/rhode_logo.png";

const heroLogo = rhodeLogo;

const LOGO_GRID_CELL_COUNT = 24;

function LogoGrid() {
  return (
    <div
      className="hero-logo-grid"
      aria-label="Portfolio logo grid"
    >
      {Array.from({ length: LOGO_GRID_CELL_COUNT }).map((_, index) => (
        <div
          className="hero-logo-grid__cell"
          key={index}
        >
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
    <section
      id="home"
      className="hero"
    >
      <main className="hero__content">
        <LogoGrid />
      </main>
    </section>
  );
}