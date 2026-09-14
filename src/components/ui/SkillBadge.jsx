import { motion } from 'framer-motion';

const SkillBadge = ({ name }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-block rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 font-mono text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
    >
      {name}
    </motion.span>
  );
};

export default SkillBadge;
