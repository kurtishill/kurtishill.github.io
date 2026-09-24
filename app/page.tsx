import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
