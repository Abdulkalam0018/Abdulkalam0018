import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="About Me" />
        <AnimatedSection>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              I'm a final year Computer Science student at Motilal Nehru National
              Institute of Technology (MNNIT), Allahabad — one of India's premier
              engineering institutions. My core focus is building{' '}
              <span className="text-text-primary font-medium">
                full-stack applications
              </span>{' '}
              that are engineered for reliability and scale.
            </p>
            <p>
              I gravitate toward systems that demand{' '}
              <span className="text-text-primary font-medium">real-time communication</span>,{' '}
              <span className="text-text-primary font-medium">event-driven architectures</span>,
              and{' '}
              <span className="text-text-primary font-medium">AI integration</span>.
              From connecting stranded drivers with nearby mechanics via geospatial
              search to building multiplayer canvas games with synchronized state,
              I enjoy solving problems where latency and correctness matter.
            </p>
            <p>
              Beyond building products, I'm deeply invested in competitive
              programming — with{' '}
              <span className="text-accent font-medium">1,059+ problems</span>{' '}
              solved and a{' '}
              <span className="text-accent font-medium">Knight rating on LeetCode</span>,
              I bring strong algorithmic thinking to every engineering decision.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
