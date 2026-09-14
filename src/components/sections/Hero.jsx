import { motion, useReducedMotion } from 'framer-motion';
import { Mail, FileDown } from 'lucide-react';
import { SiGithub, SiLinkedin } from '../ui/BrandIcons';
import GradientMesh from '../ui/GradientMesh';
import { personalInfo, socialLinks, resumeUrl } from '../../data/portfolio';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <GradientMesh />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-wider text-accent"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl md:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg text-text-secondary sm:text-xl"
        >
          <span className="text-accent font-medium">Full-Stack Developer</span>
          {' | CS Undergrad at MNNIT'}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-text-secondary leading-relaxed"
        >
          {personalInfo.intro}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg-primary transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-6 py-3 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
          >
            <FileDown size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <SiGithub size={20} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <SiLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
