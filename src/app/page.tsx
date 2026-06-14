import SmokeCanvas from "@/components/SmokeCanvas";
import Enhancers from "@/components/Enhancers";

const HERO_WORDS = "From digital strategy to real results.".split(" ");

const MARQUEE_A = [
  "Slide Decks",
  "Copywriting",
  "Brand Graphics",
  "Brand Migration",
  "Package Design",
  "Branding",
];
const MARQUEE_B = [
  "Optimization",
  "Brand Landing Pages",
  "Social Media",
  "Icons",
  "Brand Visibility",
  "Brand Integrations",
];

function TagIcon() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function ArrowUR() {
  return (
    <span className="ic" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav" id="nav">
        <div className="nav-inner">
          <a className="logo" href="#hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/bAfw2IYj1tWmsuxIkh9mzKcTs.svg"
              alt="Virtual Gravity"
            />
          </a>
          <nav className="nav-links">
            <a href="#hero" className="active">
              Home
            </a>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Join Us
            <ArrowUR />
          </a>
          <button
            className="nav-burger"
            id="burger"
            type="button"
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#process">How It Works</a>
        <a href="#contact">Contact</a>
        <a href="#contact">Join Us</a>
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <SmokeCanvas />
        </div>
        <div className="grain"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            {HERO_WORDS.map((w, i) => (
              <span key={i}>
                <span className="w" style={{ animationDelay: `${i * 0.08}s` }}>
                  {w}
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="sub">
            We build fast, scalable products that help you launch, automate and
            grow. Websites, apps, AI agents and full business systems crafted for
            real results
          </p>
          <div className="hero-buttons">
            <a className="btn" href="#contact">
              Get Started Now
              <ArrowUR />
            </a>
            <a className="btn ghost" href="tel:+963980490761">
              Call Us
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <p>Scroll down</p>
          <span className="line"></span>
          <span className="scroll-dot"></span>
          <span className="line"></span>
          <p>to see more</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <div className="proj-grid">
          <div className="proj-col" data-speed="0.10">
            <div className="proj-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/zN4RJ3nslsSJ2xe3cKdsXvWj3U.png"
                alt="project"
              />
            </div>
            <div className="proj-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/k3rU3jqoeCGb9xAqVP7CJY9rpms.png"
                alt="project"
              />
            </div>
          </div>
          <div className="proj-col mid" data-speed="-0.06">
            <div className="proj-img" style={{ aspectRatio: "1.06" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/Jw23fO3CvC6JG33FVWXjcRrKMQU.png"
                alt="VG"
              />
            </div>
            <div className="proj-img" style={{ aspectRatio: "1.06" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/kS0nBwB7pKnWC3vlQzLBRwPVKYA.jpg"
                alt="project"
              />
            </div>
          </div>
          <div className="proj-col" data-speed="0.14">
            <div className="proj-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/jhAX8N0CiPp2XzziBrQFARN6Vcs.png"
                alt="project"
              />
            </div>
            <div className="proj-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/70gswiGX4sqmrWOvWrAcdgcjeM.png"
                alt="project"
              />
            </div>
          </div>
        </div>
        <div className="proj-cta" data-reveal>
          <a className="btn" href="#contact">
            Get Started Now
            <ArrowUR />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec about" id="about">
        <div className="sec-inner about-grid">
          <div className="about-info">
            <h2 className="h2" data-reveal>Inside Virtual Gravity</h2>
            <p className="lead" data-reveal>
              A multidisciplinary team driven by technology, efficiency and
              results. We build solutions that help businesses launch faster and
              scale smarter.
            </p>
            <div className="pills" data-reveal>
              <div className="pill">
                <p>Full-Stack Development</p>
              </div>
              <div className="pill">
                <p>Mobile App Engineering</p>
              </div>
              <div className="pill">
                <p>UX Design</p>
              </div>
              <div className="pill">
                <p>Branding</p>
              </div>
              <div className="pill">
                <p>Efficient Team Collaboration</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="exp-grid">
              <div className="exp" data-reveal>
                <p>Quality You Can Measure</p>
              </div>
              <div className="exp" data-reveal>
                <p>Solutions That Last</p>
              </div>
              <div className="exp" data-reveal>
                <p>A Team You Can Trust</p>
              </div>
            </div>
          </div>
          <div className="about-img" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/kS0nBwB7pKnWC3vlQzLBRwPVKYA.jpg"
              alt="team"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec process" id="process">
        <div className="sec-inner process-grid">
          <div className="process-img" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/djbcRHCD89IflJ1okJAa1J65cuM.png"
              alt="process"
            />
          </div>
          <div className="process-right">
            <div className="eyebrow" data-reveal>
              <span className="dot">
                <i></i>
              </span>
              <span>Design process</span>
            </div>
            <h2 className="h2" data-reveal>Process</h2>
            <p className="lead" data-reveal>
              crafting bold visuals that inspire and elevate brands with thought
              process.
            </p>
            <a className="btn" href="#contact" style={{ alignSelf: "flex-start" }}>
              Get Started
            </a>
            <div className="steps">
              <div className="step" data-reveal>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14a5 5 0 1 0-6.18 0c.51.4.84 1 .9 1.66h4.38a2 2 0 0 1 .9-1.66Z" />
                </svg>
                <div>
                  <h3>Define Your Vision</h3>
                </div>
                <div className="sdiv"></div>
                <p>
                  Find the perfect plan tailored to your needs, offering the
                  right balance of features, flexibility, and value to help you
                  achieve your goals effortlessly.
                </p>
                <div className="badge">
                  <p>1</p>
                </div>
              </div>
              <div className="step" data-reveal>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 18v-6" />
                  <path d="M8 15h8" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
                <div>
                  <h3>Submit Your Request</h3>
                </div>
                <div className="sdiv"></div>
                <p>
                  Easily submit your requirements through our private portal,
                  ensuring a seamless process where your vision is understood,
                  refined, and brought to life with precision and creativity.
                </p>
                <div className="badge">
                  <p>2</p>
                </div>
              </div>
              <div className="step" data-reveal>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 11 3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <h3>Project Executed</h3>
                </div>
                <div className="sdiv"></div>
                <p>
                  At Virtual Gravity, we ensure your project is executed with
                  precision and delivered on time. With our attention to detail
                  and commitment to quality, we bring your vision to life on
                  schedule and beyond expectations.
                </p>
                <div className="badge">
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec services" id="services">
        <div className="sec-inner">
          <div className="services-top">
            <div className="services-left">
              <div className="eyebrow" data-reveal>
                <span className="dot">
                  <i></i>
                </span>
                <span>Our Services</span>
              </div>
              <h2 className="h2" data-reveal>Services</h2>
              <p className="lead" data-reveal>
                From sleek websites to smart AI solutions, we deliver tech-driven
                services that help businesses grow faster and smarter.
              </p>
              <div className="pills" data-reveal>
                <div className="pill">
                  <p>Web Development</p>
                </div>
                <div className="pill">
                  <p>App Development</p>
                </div>
                <div className="pill">
                  <p>Digital Marketing</p>
                </div>
                <div className="pill">
                  <p>Social Media Management</p>
                </div>
                <div className="pill">
                  <p>Business Systems &amp; Solutions</p>
                </div>
              </div>
              <div className="divider"></div>
              <a
                className="btn"
                href="#contact"
                style={{ alignSelf: "flex-start" }}
              >
                Get Started Now
              </a>
            </div>
            <div className="services-hero-img" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/4PkmsorrStxIRIPmuHvP9uRFx0.png"
                alt="services"
              />
            </div>
          </div>

          <div className="bento">
            <div className="bento-col">
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                  <h4>Web Development</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  We build fast, responsive websites optimized to convert
                  visitors into loyal customers. Every design delivers
                  performance and impact
                </p>
              </div>
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                  </svg>
                  <h4>Digital Marketing</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  We design smart, data-driven campaigns that increase
                  visibility, engage audiences, and drive real business growth
                </p>
              </div>
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                  <h4>AI Agents</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  Our intelligent AI agents automate repetitive tasks, provide
                  actionable insights, and enhance your workflow efficiency
                  effortlessly
                </p>
              </div>
            </div>
            <div className="bento-col">
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <h4>App Development</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  From concept to launch, we create apps that engage users, keep
                  them returning, and deliver seamless experiences across all
                  devices
                </p>
              </div>
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                  </svg>
                  <h4>Social Media Management</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  We manage your social channels with creativity and strategy,
                  building a strong presence that connects with your audience
                </p>
              </div>
              <div className="card" data-reveal>
                <div className="top">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                  <h4>Business Systems &amp; Solutions</h4>
                </div>
                <div className="cdiv"></div>
                <p>
                  We develop custom business systems tailored to your needs, and
                  helping your company scale with confidence
                </p>
              </div>
            </div>
          </div>

          <div className="marquees" data-reveal>
            <div className="marquee a">
              {[...MARQUEE_A, ...MARQUEE_A].map((t, i) => (
                <div className="tag" key={i}>
                  <TagIcon />
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <div className="marquee b">
              {[...MARQUEE_B, ...MARQUEE_B].map((t, i) => (
                <div className="tag" key={i}>
                  <TagIcon />
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-bg">
          <SmokeCanvas />
        </div>
        <div className="footer-inner">
          <h3>
            Curious about what we can create together? Let&apos;s bring something
            extraordinary to life!
          </h3>
          <div className="footer-cta" data-reveal>
            <a className="btn" href="#contact">
              Get Started
            </a>
            <a
              className="btn"
              href="https://wa.me/963980490761"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on WhatsApp
            </a>
            <a className="btn" href="tel:+963980490761">
              Make a call
            </a>
          </div>
          <p className="footer-apply">
            Interested in working with us as part of our team? Apply and{" "}
            <a href="#contact">join us.</a>
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/share/1BahtBHRq7/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <span className="sep"></span>
            <a
              href="https://www.linkedin.com/company/virtualgravityco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.2H6v7.2h2.34ZM7.17 10.1a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72ZM18 18.34v-3.94c0-2.1-.45-3.72-2.9-3.72-1.18 0-1.97.65-2.3 1.26h-.03v-1.07H10.5v7.47h2.34v-3.7c0-.97.18-1.92 1.39-1.92 1.18 0 1.2 1.12 1.2 1.98v3.64H18Z" />
              </svg>
            </a>
            <span className="sep"></span>
            <a
              href="https://www.instagram.com/virtualgravityco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <div className="lang">
            <a href="#">EN</a>
            <span className="sep"></span>
            <a href="#">AR</a>
          </div>
          <div className="footer-meta">
            <a href="mailto:info@virtual-gravity.net">info@virtual-gravity.net</a>
            <span>All rights reserved, ©2025</span>
          </div>
        </div>
      </footer>

      <Enhancers />
    </>
  );
}
