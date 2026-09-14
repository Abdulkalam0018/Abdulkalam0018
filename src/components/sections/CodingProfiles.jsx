import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { codingProfiles, totalProblemsSolved } from '../../data/portfolio';

const StatCard = ({ profile }) => {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-xl border border-border-subtle bg-bg-card p-6 transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-accent/20"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">
          {profile.platform}
        </h3>
        <ExternalLink
          size={16}
          className="text-text-muted transition-colors group-hover:text-accent"
        />
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span
          className="font-mono text-3xl font-bold"
          style={{ color: profile.color }}
        >
          {profile.problemsSolved}
        </span>
        <span className="text-sm text-text-muted">problems</span>
      </div>

      {profile.rating && (
        <div className="mt-2 flex items-center gap-2">
          <span className="font-mono text-sm text-text-secondary">
            Rating: {profile.rating}
          </span>
          {profile.badge && (
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${profile.color}15`,
                color: profile.color,
              }}
            >
              {profile.badge}
            </span>
          )}
        </div>
      )}

      <p className="mt-2 font-mono text-xs text-text-muted">
        @{profile.handle}
      </p>
    </motion.a>
  );
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Coding Profiles"
          subtitle="Problem-solving across competitive programming platforms"
        />

        {/* Total Counter */}
        <AnimatedSection>
          <div className="mb-10 flex items-center justify-center gap-3 rounded-xl border border-accent/20 bg-accent-soft p-6">
            <Code2 size={24} className="text-accent" />
            <div className="text-center">
              <span className="font-mono text-4xl font-bold text-accent">
                {totalProblemsSolved.toLocaleString()}+
              </span>
              <p className="text-sm text-text-secondary mt-1">
                Total Problems Solved
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Platform Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <AnimatedSection key={profile.platform} delay={index * 0.1}>
              <StatCard profile={profile} />
            </AnimatedSection>
          ))}
        </div>

        {/* Notable Achievements */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 rounded-xl border border-border-subtle bg-bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Notable Contest Performances
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-sm text-text-secondary">
                  <span className="font-mono text-text-primary">Global Rank 365</span>{' '}
                  out of 41,000+ participants — LeetCode Weekly Contest 489
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-sm text-text-secondary">
                  <span className="font-mono text-text-primary">All India Rank 553</span>{' '}
                  — Codeforces Round 1103
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CodingProfiles;
