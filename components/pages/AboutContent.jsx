import Link from "next/link";
import Image from "next/image";

export default function AboutContent() {
  return (
    <>
      <main id="main">
          <section className="page-hero page-hero--about" aria-labelledby="about-title">
            <div className="wrap">
              <div className="page-hero__grid">
                <div className="page-hero__copy">
                  <p className="eyebrow reveal">About AfriYouth</p>
                  <h1 className="h1 reveal" id="about-title">We connect the dots that <em>change systems.</em></h1>
                </div>
                <div className="page-hero__aside reveal">
                  <p className="lede">A youth-centred research, policy and innovation lab working to make evidence useful, institutions more responsive and young people impossible to ignore.</p>
                  <div className="page-hero__meta">
                    <span className="chip">Kigali · Rwanda</span>
                    <span className="chip">Pan-African outlook</span>
                    <span className="chip">Youth-led</span>
                  </div>
                </div>
              </div>
      
              <div className="about-hero__media reveal">
                <figure>
                  <Image src="/assets/img/collaboration.webp" width={1400} height={934} sizes="(max-width: 960px) 60vw, 68vw" alt="Three colleagues in conversation around a table with laptops" priority />
                  <figcaption className="about-hero__caption"><span>The work is collective</span><span>Field note / 02</span></figcaption>
                </figure>
                <figure>
                  <Image src="/assets/img/design.webp" width={1400} height={900} sizes="(max-width: 960px) 32vw, 24vw" alt="A hands-on creative workshop with young people painting and making together" />
                  <figcaption className="about-hero__caption"><span>Make room for the new</span><span>Kigali</span></figcaption>
                </figure>
              </div>
            </div>
          </section>
      
          <section className="manifesto" aria-labelledby="manifesto-title">
            <div className="wrap manifesto__grid">
              <aside className="manifesto__side reveal">
                <p className="eyebrow">Why we exist</p>
                <p className="note">A different kind of institution for a different kind of challenge.</p>
                <div className="manifesto__rule"></div>
              </aside>
              <div>
                <h2 className="manifesto__statement reveal" id="manifesto-title">Africa doesn’t need another pipeline of ideas that stop at the pilot. It needs <em>the infrastructure</em> to move good ideas into policy, practice and enterprise.</h2>
                <div className="manifesto__foot reveal">
                  <p>Too often, research sits on shelves, young people are consulted but not entrusted, and promising innovations never reach the systems they were built to change. We exist to close those gaps.</p>
                  <p>Our work begins where disciplines end.</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="purpose section--tight" aria-label="Our mission and vision">
            <div className="wrap purpose__grid">
              <article className="purpose-card reveal">
                <span className="purpose-card__num">01 / Mission</span>
                <h2 className="h3">Empower Africa’s youth to generate evidence, shape policy and build solutions that matter.</h2>
                <p>We do this through research, human-centred design and entrepreneurship — creating the conditions for young people to lead change, not simply inherit it.</p>
                <svg className="purpose-card__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M24 3v42M3 24h42M9 9l30 30M39 9 9 39" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="24" cy="24" r="7" fill="currentColor"/>
                </svg>
              </article>
              <article className="purpose-card purpose-card--dark reveal" style={{ '--delay': '.1s' }}>
                <span className="purpose-card__num">02 / Vision</span>
                <h2 className="h3">An Africa where young people shape the systems they live in.</h2>
                <p>We work toward a continent where evidence, innovation and entrepreneurship are used by empowered young people to address complex challenges and drive inclusive, sustainable transformation.</p>
                <svg className="purpose-card__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M24 5v38M5 24h38" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="24" cy="24" r="6" fill="currentColor"/>
                </svg>
              </article>
            </div>
          </section>
      
          <section className="approach section on-dark" aria-labelledby="approach-title">
            <div className="wrap">
              <div className="approach__head">
                <div>
                  <p className="eyebrow eyebrow--light reveal">Our approach</p>
                  <h2 className="h2 reveal" id="approach-title">Change is not a straight line. Neither are we.</h2>
                </div>
                <p className="lede reveal">We combine the rigour of research, the empathy of design and the momentum of enterprise — moving between them as the question demands.</p>
              </div>
              <div className="approach__path">
                <div className="approach__step reveal">
                  <span className="approach__num">01</span>
                  <h3>Listen</h3>
                  <p>We start with the people closest to the problem and the evidence around it.</p>
                </div>
                <div className="approach__step reveal" style={{ '--delay': '.06s' }}>
                  <span className="approach__num">02</span>
                  <h3>Frame</h3>
                  <p>We turn messy questions into a shared, useful definition of the challenge.</p>
                </div>
                <div className="approach__step reveal" style={{ '--delay': '.12s' }}>
                  <span className="approach__num">03</span>
                  <h3>Prototype</h3>
                  <p>We test services, policies and ventures in small, honest ways.</p>
                </div>
                <div className="approach__step reveal" style={{ '--delay': '.18s' }}>
                  <span className="approach__num">04</span>
                  <h3>Influence</h3>
                  <p>We connect evidence and people to decisions, institutions and resources.</p>
                </div>
                <div className="approach__step reveal" style={{ '--delay': '.24s' }}>
                  <span className="approach__num">05</span>
                  <h3>Learn</h3>
                  <p>We measure what changes, adapt and build the capability to sustain it.</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="values section" aria-labelledby="values-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">What we hold close</p>
                  <h2 className="h2 reveal" id="values-title">Principles before polish.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>These are not wall posters. They are the tests we use when the work gets difficult.</p>
                </div>
              </div>
              <div className="values__grid reveal">
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">01</span><span className="value-card__dot"></span></div>
                  <h3>Youth empowerment</h3>
                  <p>Young people are co-authors of the work, not the subjects of it.</p>
                </article>
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">02</span><span className="value-card__dot"></span></div>
                  <h3>Human-centred design</h3>
                  <p>We design with the people who live the consequences.</p>
                </article>
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">03</span><span className="value-card__dot"></span></div>
                  <h3>Innovation with intent</h3>
                  <p>New approaches need rigour, imagination and the courage to be wrong in public.</p>
                </article>
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">04</span><span className="value-card__dot"></span></div>
                  <h3>Leadership that multiplies</h3>
                  <p>We grow the confidence, judgement and networks of the next generation.</p>
                </article>
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">05</span><span className="value-card__dot"></span></div>
                  <h3>Sustainability by design</h3>
                  <p>We build for the long term — in the environment, the institutions and the team.</p>
                </article>
                <article className="value-card">
                  <div className="value-card__top"><span className="value-card__num">06</span><span className="value-card__dot"></span></div>
                  <h3>Global impact, local roots</h3>
                  <p>Local questions, continental relevance, global ambition.</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="collective section" aria-labelledby="collective-title">
            <div className="wrap collective__grid">
              <figure className="collective__media reveal">
                <Image src="/assets/img/programme.webp" width={1400} height={900} sizes="(max-width: 900px) 75vw, 40vw" alt="A multidisciplinary team working together in a bright meeting space" />
                <figcaption className="collective__stamp">Made of<br />many minds</figcaption>
              </figure>
              <div className="collective__copy">
                <p className="eyebrow reveal">How we’re built</p>
                <h2 className="h2 reveal" id="collective-title">Small core. Wide network.</h2>
                <p className="lede reveal">AfriYouth brings together researchers, policy actors, designers, entrepreneurs and foresight practitioners. Some sit in the core team; many join through projects, fellowships and partnerships.</p>
                <ul className="role-list reveal">
                  <li><span>Researchers &amp; data storytellers</span><span>Evidence</span></li>
                  <li><span>Policy &amp; systems thinkers</span><span>Influence</span></li>
                  <li><span>Designers &amp; facilitators</span><span>Experience</span></li>
                  <li><span>Entrepreneurs &amp; venture builders</span><span>Enterprise</span></li>
                  <li><span>Foresight &amp; learning specialists</span><span>Anticipation</span></li>
                  <li><span>Youth leaders &amp; community organisers</span><span>Leadership</span></li>
                </ul>
                <Link className="text-link reveal" href="/contact?topic=network">Join our network <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="about-cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Work with us</p>
                <h2 className="h2" id="about-cta-title">We’re looking for questions, partners and people who want to move.</h2>
                <p>If you share our belief that Africa’s next chapter will be shaped by its young people, let’s find the right way to work together.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/contact">Start a conversation <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/work">Explore our work</Link>
              </div>
            </div>
            <div className="cta-band__ring" aria-hidden="true"></div>
            <svg className="cta-band__star" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
              <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z"/>
            </svg>
          </section>
        </main>
    </>
  );
}
