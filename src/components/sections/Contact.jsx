import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo, socialLinks } from '../../data/portfolio';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together?"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I'm always open to discussing new projects, opportunities, or
                just having a conversation about technology. Feel free to reach out.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
                >
                  <Mail size={18} className="text-accent" />
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone size={18} className="text-accent" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.15}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="user_name" className="mb-1.5 block text-sm text-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent/50 placeholder:text-text-muted"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block text-sm text-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent/50 placeholder:text-text-muted"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border-subtle bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent/50 placeholder:text-text-muted"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg-primary transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} />
                    Failed. Try Again.
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
