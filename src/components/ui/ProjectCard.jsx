import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from './BrandIcons';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-border-subtle bg-bg-card p-1.5 transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-accent/20"
    >
      <div className={`flex flex-col gap-6 p-5 md:p-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}>
        {/* Screenshot */}
        <div className="flex-shrink-0 lg:w-[45%]">
          <div className="overflow-hidden rounded-xl border border-border-subtle">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="text-2xl font-bold text-text-primary">
            {project.name}
          </h3>
          <p className="mt-2 text-text-secondary leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="mt-5 space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-6 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
            >
              <SiGithub size={16} />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg-primary transition-opacity hover:opacity-90"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
