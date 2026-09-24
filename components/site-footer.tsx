import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer>
      <Brand />
      <p>Mobile architect &amp; product engineer</p>
      <div className="footer-links">
        <a
          href="https://github.com/kurtishill"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/kurt-hill212"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      <small>© 2026 Kurt Hill</small>
    </footer>
  );
}
