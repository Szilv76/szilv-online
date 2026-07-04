export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <p className="footer-eyebrow">Van egy jó ötleted?</p>
        <a href="mailto:hello@szilv.online">Beszéljünk róla. <span>↗</span></a>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} szilv.online</p>
        <p>Budapest · Magyarország</p>
        <a href="#top">Vissza az elejére ↑</a>
      </div>
    </footer>
  )
}
