import React, { useEffect, useState } from 'react';
import {
    CONTACT_INFO, HERO, STATS, PUBLICATIONS, RESEARCH, PROJECTS,
    EDUCATION, TEACHING, LEADERSHIP, SKILLS, HOBBIES,
} from './constants';
import type { Entry, Publication } from './types';

const NAV = [
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
];

const pad = (n: number) => String(n).padStart(2, '0');

const Wordmark: React.FC = () => (
    <a className="wordmark" href="#top" aria-label="Back to top">
        colin<span className="accent">.</span>hong
    </a>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="eyebrow"><span className="eyebrow-rule" aria-hidden="true" />{children}</span>
);

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="bullets">
        {items.map((b, i) => (
            <li key={i}><span className="dash" aria-hidden="true" />{b}</li>
        ))}
    </ul>
);

const EntryRow: React.FC<{ entry: Entry }> = ({ entry }) => (
    <article className="row reveal">
        <div className="row-meta">
            <div className="row-period">
                {entry.current && <span className="live" aria-hidden="true"><span /></span>}
                {entry.period}
            </div>
            {entry.tag && <div className="row-tag">{entry.tag}</div>}
        </div>
        <div>
            <h3 className="row-title">
                {entry.title}
                {entry.org && <span className="row-org"> · {entry.org}</span>}
            </h3>
            {entry.summary && <p className="row-summary">{entry.summary}</p>}
            {entry.bullets && <Bullets items={entry.bullets} />}
            {entry.groups?.map((g) => (
                <div className="group" key={g.heading}>
                    <h4 className="group-heading">{g.heading}</h4>
                    <Bullets items={g.bullets} />
                </div>
            ))}
        </div>
    </article>
);

const PublicationRow: React.FC<{ pub: Publication }> = ({ pub }) => (
    <article className="row reveal">
        <div className="row-meta">
            <div className="row-period">{pub.venue}</div>
            <div className="row-tag">{pub.year}</div>
            {pub.note && <div className="row-tag accent">{pub.note}</div>}
        </div>
        <div>
            <h3 className="row-title">{pub.title}</h3>
            <p className="authors">
                {pub.authors.map((a, i) => (
                    <React.Fragment key={a}>
                        {i > 0 && ', '}
                        {a === CONTACT_INFO.name ? <strong>{a}</strong> : a}
                    </React.Fragment>
                ))}
            </p>
            <div className="pub-links">
                {pub.links.map((l) => (
                    <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <span aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        </div>
    </article>
);

const SectionHead: React.FC<{ id: string; eyebrow: string; title: string; lede?: string }> = ({ id, eyebrow, title, lede }) => (
    <div className="section-head reveal">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={`${id}-title`}>{title}</h2>
        {lede && <p className="lede">{lede}</p>}
    </div>
);

const SubHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="subhead reveal"><Eyebrow>{children}</Eyebrow></div>
);

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<string>(() => document.documentElement.dataset.theme || 'dark');
    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
        setTheme(next);
    };
    return (
        <button type="button" className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    );
};

const App: React.FC = () => {
    const [active, setActive] = useState<string>('');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPhoto, setShowPhoto] = useState(true);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the nav item for the section currently in view.
    useEffect(() => {
        const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
            { rootMargin: '-35% 0px -60% 0px' },
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    // Fade content in as it enters the viewport.
    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            }),
            { rootMargin: '0px 0px -8% 0px' },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>

            <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
                <nav className="wrap nav" aria-label="Primary">
                    <Wordmark />
                    <div className="nav-links">
                        {NAV.map((n, i) => (
                            <a key={n.id} href={`#${n.id}`} className={`nav-link${active === n.id ? ' is-active' : ''}`}
                                aria-current={active === n.id ? 'true' : undefined}>
                                <span className="nav-num">{pad(i + 1)}</span>{n.label}
                            </a>
                        ))}
                    </div>
                    <div className="nav-actions">
                        <ThemeToggle />
                        <a className="btn nav-cta" href={`mailto:${CONTACT_INFO.email}`}>Get in touch</a>
                        <button type="button" className={`menu-btn${menuOpen ? ' is-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((o) => !o)}>
                            <span /><span /><span />
                        </button>
                    </div>
                </nav>
                <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
                    <div>
                        <div className="mobile-menu-inner">
                            {NAV.map((n, i) => (
                                <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
                                    <span className="nav-num">{pad(i + 1)}</span>{n.label}
                                </a>
                            ))}
                            <a className="btn" href={`mailto:${CONTACT_INFO.email}`} tabIndex={menuOpen ? 0 : -1}>Get in touch</a>
                        </div>
                    </div>
                </div>
            </header>

            <main id="main" tabIndex={-1}>
                <section id="top" className="wrap hero">
                    <div className="hero-text">
                        <Eyebrow>{HERO.eyebrow}</Eyebrow>
                        <h1>{HERO.headline}</h1>
                        <p className="hero-summary">{HERO.summary}</p>
                        <div className="hero-actions">
                            <a className="btn btn-solid" href="#publications">Read the papers</a>
                            <a className="btn" href={CONTACT_INFO.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                        </div>
                    </div>
                    {showPhoto && (
                        <img className="hero-photo" src="/profile.png" alt="Portrait of Colin Hong" width={176} height={176}
                            onError={() => setShowPhoto(false)} />
                    )}
                </section>

                <div className="wrap">
                    <dl className="stats">
                        {STATS.map((s) => (
                            <div key={s.label} className="stat">
                                <dt>{s.label}</dt>
                                <dd>{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <section id="research" className="wrap section" aria-labelledby="research-title">
                    <SectionHead id="research" eyebrow="research" title="Making agent serving faster and cheaper."
                        lede="Runtime KV-cache and context management for high-throughput, energy-efficient LLM agent serving." />
                    <div className="rows">{RESEARCH.map((e) => <EntryRow key={e.title + e.period} entry={e} />)}</div>
                </section>

                <section id="publications" className="wrap section" aria-labelledby="publications-title">
                    <SectionHead id="publications" eyebrow="publications" title="Papers." />
                    <div className="rows">{PUBLICATIONS.map((p) => <PublicationRow key={p.title} pub={p} />)}</div>
                </section>

                <section id="projects" className="wrap section" aria-labelledby="projects-title">
                    <SectionHead id="projects" eyebrow="selected projects & industry" title="Things built outside the lab." />
                    <div className="rows">{PROJECTS.map((e) => <EntryRow key={e.title + e.period} entry={e} />)}</div>
                </section>

                <section id="about" className="wrap section" aria-labelledby="about-title">
                    <SectionHead id="about" eyebrow="about" title="Education, teaching, and everything else." />

                    <SubHead>education</SubHead>
                    <div className="rows">{EDUCATION.map((e) => <EntryRow key={e.title} entry={e} />)}</div>

                    <SubHead>teaching</SubHead>
                    <div className="rows">{TEACHING.map((e) => <EntryRow key={e.title} entry={e} />)}</div>

                    <SubHead>leadership & community</SubHead>
                    <div className="rows">{LEADERSHIP.map((e) => <EntryRow key={e.org} entry={e} />)}</div>

                    <div className="split">
                        <div className="reveal">
                            <Eyebrow>skills</Eyebrow>
                            <dl className="skills">
                                {SKILLS.map((s) => (
                                    <div key={s.label}>
                                        <dt>{s.label}</dt>
                                        <dd>{s.items.join(' · ')}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="reveal">
                            <Eyebrow>off the clock</Eyebrow>
                            <ul className="chips">
                                {HOBBIES.map((h) => <li key={h}>{h}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="wrap closing reveal">
                    <h2>Working on LLM or agent serving?</h2>
                    <p>I am always glad to compare notes on inference systems, KV-cache management, and efficient AI.</p>
                    <a className="btn btn-solid" href={`mailto:${CONTACT_INFO.email}`}>Get in touch</a>
                </section>
            </main>

            <footer className="site-footer">
                <div className="wrap footer-top">
                    <div>
                        <Wordmark />
                        <p>{CONTACT_INFO.role}, {CONTACT_INFO.location}</p>
                    </div>
                    <nav aria-label="Footer" className="footer-links">
                        {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
                    </nav>
                    <div className="footer-links">
                        <a href={CONTACT_INFO.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={`mailto:${CONTACT_INFO.email}`}>Email</a>
                    </div>
                </div>
                <div className="wrap footer-bottom">
                    <span>© {new Date().getFullYear()} Colin Hong</span>
                    <span>Built with React and TypeScript.</span>
                </div>
            </footer>
        </>
    );
};

export default App;
