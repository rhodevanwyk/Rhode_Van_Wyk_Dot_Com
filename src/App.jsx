import Hero from "./sections/hero/Hero.jsx";
import MiniAbout from "./sections/mini_about/MiniAbout.jsx";

import SiteFrame from "./components/site_frame/SiteFrame.jsx";

export default function Home() {
  return (
    <>
      <SiteFrame />

      <main>
        <Hero />
        <MiniAbout />
      </main>
    </>
  );
}