import portraitTheatre from '../assets/images/portrait-theatre.webp'
import portraitTrombone from '../assets/images/portrait-trombone.webp'

export default function Home() {
  return (
    <div className="cinematic-home">
      <header className="cinematic-header">
        <span className="cinematic-wordmark">szilv.online</span>
      </header>

      <main className="cinematic-stage">
        <section className="cinematic-intro" aria-labelledby="intro-title">
          <p className="cinematic-kicker">ZENE <span aria-hidden="true">•</span> SZÍNHÁZ</p>
          <h1 id="intro-title">Bornai<br />Szilveszter</h1>
          <div className="cinematic-subtitle">
            <p>Budapesten születtem, gyermekkorom óta a zene az életem meghatározó része. Szolfézs–zeneelmélet szakon végeztem, hangszereim a harsona, a zongora és a tangóharmonika.</p>
            <p>Számos magyarországi színházban dolgoztam, az előadásokban nemcsak hangszeres zenészként, hanem hangszerelőként is közreműködtem. 2021 és 2026 között Amszterdamban és Hágában éltem és dolgoztam színházi zenészként és zenetanárként.</p>
          </div>
        </section>

        <figure className="cinematic-photo cinematic-photo--trombone">
          <img src={portraitTrombone} alt="Bornai Szilveszter harsonával" />
        </figure>

        <figure className="cinematic-photo cinematic-photo--theatre">
          <img src={portraitTheatre} alt="Bornai Szilveszter egy színházban, hangszerek között" />
        </figure>
      </main>
    </div>
  )
}
