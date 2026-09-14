const GradientMesh = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Cyan orb - top right */}
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Blue orb - bottom left */}
      <div
        className="absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Subtle purple orb - center */}
      <div
        className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
};

export default GradientMesh;
