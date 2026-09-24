import { Brand } from "./brand";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#about">About</a>
        <a className="nav-contact" href="#contact">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
