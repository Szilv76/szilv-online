export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-kicker"><span /> Független digitális műhely</div>
      <h1>Ötletekből<br /><em>élő dolgok.</em></h1>
      <div className="hero-bottom">
        <p>Digitális projektek, kísérletek és jegyzetek. Egyszerűen, kíváncsian, a saját ritmusomban.</p>
        <a className="scroll-link" href="#projektek" aria-label="Ugrás a projektekhez">
          <span>Felfedezés</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <span className="orbit-dot" />
        <span className="orbit-label">SZILV / ONLINE / 2026</span>
      </div>
    </section>
  )
}
