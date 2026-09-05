'use client'

interface CaseProps {
  onBack: () => void
}

export function Case2({ onBack }: CaseProps) {
  return (
    <main className="case-study page-enter" id="case-study-top">
      <header className="site-header">
        <a className="wordmark" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>Ingrid Hansen</a>
        <nav>
          <a className="nav-active" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>← Home</a>
        </nav>
      </header>

      {/* 👇 EDITÁ ACÁ EL CONTENIDO DEL CASO 2 */}
      <p className="eyebrow">PRODUCT DESIGN / 2024</p>
      <h1>Systems that<br /><em>connect.</em></h1>
      <p className="case-lede">Turning scattered needs into a shared, usable direction.</p>
      
      <img className="case-hero-image" src="URL_IMAGEN_HERO" alt="Systems design" />
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>Scattered systems.<br /><em>Unified vision.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>The team had multiple design systems scattered across products.</li>
            <li>Maintenance and consistency were impossible.</li>
            <li>We needed a unified approach that would work for all products.</li>
          </ul>
          <p className="case-meta">ROLE · PRODUCT DESIGN<br />TEAM · PRODUCT + ENGINEERING<br />TIMELINE · 6 WEEKS</p>
        </div>
      </section>
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">02 / THE DECISION</p>
          <h2>Design the<br /><em>connective tissue.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>Led project to unify all design systems into a single, scalable library.</li>
            <li>Focused on component reusability and clear documentation.</li>
            <li>Created a governance model allowing teams to contribute.</li>
          </ul>
        </div>
      </section>
      
      <img className="case-detail-image" src="URL_IMAGEN_SECUNDARIA" alt="Design system" />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>Clarity that<br /><em>scales.</em></h2>
        </div>
        <div>
          <ul className="case-list">
            <li>Unified design system now used by 4 products.</li>
            <li>Reduced design debt by 60%.</li>
            <li>Sped up product delivery by 30%.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
