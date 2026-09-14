import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((category, index) => (
            <AnimatedSection key={category.category} delay={index * 0.05}>
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
