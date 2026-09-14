import { GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { education } from '../../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Education" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border-subtle sm:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative hidden flex-shrink-0 sm:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-bg-card">
                      <GraduationCap size={18} className="text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border-subtle bg-bg-card p-5">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <h3 className="font-semibold text-text-primary">
                        {edu.degree}
                        {edu.branch && (
                          <span className="text-text-secondary font-normal">
                            {' '}
                            — {edu.branch}
                          </span>
                        )}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">
                      {edu.institution}
                    </p>
                    {edu.board && (
                      <p className="text-xs text-text-muted mt-1">{edu.board}</p>
                    )}
                    <p className="mt-2 font-mono text-sm text-text-primary">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
