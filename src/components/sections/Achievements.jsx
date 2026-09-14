import { Trophy, Globe, Award, Medal } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { achievements } from '../../data/portfolio';

const iconMap = {
  Trophy,
  Globe,
  Award,
  Medal,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Achievements" />
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-4 rounded-xl border border-border-subtle bg-bg-card p-5 transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-accent/20">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                    <IconComponent size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
