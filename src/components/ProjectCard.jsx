export default function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-top">
        <span className="project-number">/{project.number}</span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <a href={project.href} className="card-link" aria-label={`${project.title} projekt megnyitása`} />
    </article>
  )
}
