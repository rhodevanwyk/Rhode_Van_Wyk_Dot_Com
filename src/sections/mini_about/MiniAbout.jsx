import "./mini-about.css";
import EarthImg from "../../assets/sa_earf_ill.svg";
import ArrowImg from "../../assets/two_arrow_ill.svg";

export default function MiniAbout() {
  return (
    <section id="about" className="mini-about">
      <div className="mini-about__content">
        {/* LEFT GRAPHIC */}
        <div
          className="mini-about__graphic mini-about__graphic--left"
          aria-hidden="true"
        >
          <img src={ArrowImg} />
        </div>

        {/* ABOUT TEXT */}
        <div className="mini-about__copy">
          <p>
            I am a passionate [your profession] based in [your location]. I
            specialise in creating high-quality, impactful work that bridges the
            gap between complex problems and elegant solutions. I am a
            passionate [your profession] based in [your location]. I specialise
            in creating high-quality, impactful work that bridges the gap
            between complex problems and elegant solutions.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mini-about__actions">
          <a href="#projects" className="mini-about__button">
            VIEW WORK
          </a>

          <a href="#contact" className="mini-about__button">
            CONTACT
          </a>
        </div>

        {/* RIGHT GRAPHIC */}
        <div
          className="mini-about__graphic mini-about__graphic--right"
          aria-hidden="true"
        >
          <img src={EarthImg} />
        </div>
      </div>
    </section>
  );
}
