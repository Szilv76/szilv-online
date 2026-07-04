import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <section className="projects-section" id="projektek">
          <div className="container section-heading">
            <p>Kiemelt munkák</p>
            <h2>Amit most<br />építek.</h2>
            <span>03 projekt</span>
          </div>
          <div className="container project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>
        <section className="about-section container" id="rolam">
          <p className="about-label">/ A műhelyről</p>
          <div className="about-copy">
            <h2>Hiszek a hasznos, szép és emberi digitális terekben.</h2>
            <p>A szilv.online személyes műhely: hely azoknak a projekteknek, amelyek kíváncsiságból indulnak, és valami kézzelfoghatóvá nőnek.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
