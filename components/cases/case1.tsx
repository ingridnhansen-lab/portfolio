'use client'

interface CaseProps {
  onBack: () => void
}

export function Case1({ onBack }: CaseProps) {
  return (
    <main className="case-study page-enter" id="case-study-top">
      {/* HEADER */}
      <header className="site-header">
        <a className="wordmark" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>Ingrid Hansen</a>
        <nav>
          <a className="nav-active" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>← Home</a>
        </nav>
      </header>

      {/* 👇 EDITÁ ACÁ EL CONTENIDO DEL CASO 1 */}
      <p className="eyebrow">UX/UI CASE STUDY / 2023</p>
      <h1>Experta App<br /><em>Redesign.</em></h1>
      <p className="case-lede">From complexity to confidence: a senior-friendly UX redesign for insurance.</p>
      
      <img className="case-hero-image" src="URL_IMAGEN_HERO" alt="Experta App redesign" />
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>Zero visibility.<br /><em>High friction.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>A broken app with zero visibility.</li>
            <li>Constrained team (1 developer, no documentation).</li>
            <li>Critical login failures and zero offline document access.</li>
            <li>Confusing internal structure forcing users to call support.</li>
          </ul>
          <p className="case-meta">ROLE · PRODUCT DESIGN<br />TEAM · PRODUCT + ENGINEERING<br />TIMELINE · 8 WEEKS</p>
        </div>
      </section>
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">02 / THE DECISION</p>
          <h2>Quick wins.<br /><em>Task-based UX.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>A phased roadmap of "Quick Wins" alongside a new architecture.</li>
            <li>Usability testing revealed 60% of users set up the app for elderly parents.</li>
            <li>Pivoted to a simplified, task-based hierarchy accessible for all ages.</li>
            <li>Prioritized offline persistence and unified navigation.</li>
          </ul>
        </div>
      </section>
      
      <img className="case-detail-image" src="URL_IMAGEN_SECUNDARIA" alt="Design process" />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>Validated.<br /><em>Measurable.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>Document downloads jumped from 60% to 100% success.</li>
            <li>Agent contact increased from 40% to 80%.</li>
            <li>Password resets improved from 20% to 80%.</li>
          </ul>
          <div className="project-links">
            <a className="back-link" href="https://www.behance.net/..." target="_blank">View full case study on Behance ↗</a>
          </div>
        </div>
      </section>
    </main>
  )
}
