import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Full-stack applications I've built from the ground up"
        />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
