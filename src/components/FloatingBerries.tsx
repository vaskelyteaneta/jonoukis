"use client";

export default function FloatingBerries() {
  const berries = Array.from({ length: 15 }, (_, i) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    return {
      id: i,
      left: `${startX}%`,
      top: `${startY}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${20 + Math.random() * 15}s`,
      size: `${25 + Math.random() * 35}px`,
      startX,
      startY,
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {berries.map((berry) => (
        <div
          key={berry.id}
          className="floating-berry"
          style={{
            left: berry.left,
            top: berry.top,
            animation: `float ${berry.duration} ease-in-out infinite`,
            animationDelay: berry.delay,
            width: berry.size,
            height: berry.size,
          }}
        />
      ))}
    </div>
  );
}

