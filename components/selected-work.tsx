export function SelectedWork() {
  return (
    <section className="section work" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Complex products, made clear.</h2>
        </div>
        <p>
          Two examples of how I combine product judgment, system design, and
          hands-on engineering to create software that can keep evolving.
        </p>
      </div>

      <article className="case-study case-golf">
        <div className="case-copy">
          <div className="case-meta">
            <span>01</span>
            <span>Mobile architecture · Scoring systems</span>
          </div>
          <h3>Social Golf Gaming App</h3>
          <p className="case-lead">
            A ground-up architectural transformation of a production golf
            platform.
          </p>
          <p>
            I redesigned a tightly coupled Flutter and Firebase application into
            a layered, testable system—while the product remained in active use.
            The new foundation made features safer to build, easier to reason
            about, and ready for a much broader range of game formats.
          </p>
          <ul className="results" aria-label="Project highlights">
            <li>
              <strong>80%+</strong>
              <span>
                UI-bound business logic moved into clear domain layers
              </span>
            </li>
            <li>
              <strong>7</strong>
              <span>
                Distinct golf game formats supported by one extensible engine
              </span>
            </li>
          </ul>
          <div className="tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>TypeScript</span>
            <span>Firebase</span>
            <span>GCP</span>
          </div>
        </div>
        <div className="case-visual" aria-hidden="true">
          <div className="scorecard-shell">
            <div className="scorecard-top">
              <span>ROUND IN PROGRESS</span>
              <b>16</b>
            </div>
            <div className="hole-label">CURRENT HOLE</div>
            <div className="hole-number">12</div>
            <div className="hole-stats">
              <span>
                <small>PAR</small>4
              </span>
              <span>
                <small>YARDS</small>418
              </span>
              <span>
                <small>HCP</small>3
              </span>
            </div>
            <div className="players">
              <span>
                <i>KH</i>
                <b>+1</b>
              </span>
              <span>
                <i>JM</i>
                <b>E</b>
              </span>
              <span>
                <i>RS</i>
                <b>−2</b>
              </span>
            </div>
          </div>
          <span className="visual-note note-one">Normalized scorecard</span>
          <span className="visual-note note-two">Game-agnostic engine</span>
        </div>
      </article>

      <article className="case-study case-cse">
        <div className="case-copy">
          <div className="case-meta">
            <span>02</span>
            <span>Product engineering · Platform ownership</span>
          </div>
          <h3>Health &amp; Wellness App</h3>
          <p className="case-lead">
            Full-stack ownership of a consumer wellness app used every day.
          </p>
          <p>
            As lead Flutter architect, I guided the application across recipes,
            macro tracking, meal planning, shopping, workouts, and commerce. My
            work spanned user experience, application architecture, native
            integrations, and the Firebase and Google Cloud systems behind it.
          </p>
          <ul className="results" aria-label="Project highlights">
            <li>
              <strong>iOS + Android</strong>
              <span>One cohesive product experience across both platforms</span>
            </li>
            <li>
              <strong>End to end</strong>
              <span>
                Architecture, implementation, cloud systems, and release
              </span>
            </li>
          </ul>
          <div className="tags">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Cloud Functions</span>
            <span>GCP</span>
            <span>Shopify</span>
          </div>
        </div>
        <div className="case-visual wellness-visual" aria-hidden="true">
          <div className="phone phone-back">
            <div className="phone-status"></div>
            <p>Good morning</p>
            <h4>Your day</h4>
            <div className="macro-ring">
              <span>72%</span>
            </div>
            <div className="macro-bars">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="phone phone-front">
            <div className="phone-status"></div>
            <p>Meal plan</p>
            <h4>Wednesday</h4>
            <div className="meal-photo"></div>
            <b>Chicken avocado bowl</b>
            <small>Balanced · 32g protein</small>
            <div className="meal-row">
              <i></i>
              <span></span>
            </div>
            <div className="meal-row">
              <i></i>
              <span></span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
