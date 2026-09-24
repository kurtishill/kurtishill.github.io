export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot"></span> Senior mobile architect &amp;
          product engineer
        </p>
        <h1>
          I build mobile products <em>engineered for what comes next.</em>
        </h1>
        <p className="hero-intro">
          From product architecture to polished user experiences, I design and
          deliver dependable applications across mobile, backend, and cloud.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
          <a
            className="button button-secondary"
            href="mailto:kurtishill.dev@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-aside" aria-label="Areas of expertise">
        <p className="aside-label">What I bring</p>
        <div className="expertise-item">
          <span>01</span>
          <div>
            <strong>Product thinking</strong>
            <small>Turning real needs into focused experiences</small>
          </div>
        </div>
        <div className="expertise-item">
          <span>02</span>
          <div>
            <strong>Technical direction</strong>
            <small>Architecture that supports the product’s future</small>
          </div>
        </div>
        <div className="expertise-item">
          <span>03</span>
          <div>
            <strong>End-to-end delivery</strong>
            <small>Mobile, backend, cloud, and release</small>
          </div>
        </div>
      </div>
    </section>
  );
}
