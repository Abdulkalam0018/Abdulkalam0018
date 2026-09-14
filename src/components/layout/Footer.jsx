import { Mail, FileDown } from 'lucide-react';
import { SiGithub, SiLinkedin } from '../ui/BrandIcons';
import { personalInfo, socialLinks, resumeUrl } from '../../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name & Tagline */}
          <div>
            <h3 className="text-lg font-bold text-text-primary">
              {personalInfo.name}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {personalInfo.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <SiGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <SiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <Mail size={18} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FileDown size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
