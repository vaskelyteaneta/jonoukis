"use client";

export default function FloatingBerries() {
  const berries = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${10 + Math.random() * 10}s`,
    size: `${30 + Math.random() * 30}px`,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {berries.map((berry) => (
        <div
          key={berry.id}
          className="floating-berry"
          style={{
            left: berry.left,
            top: berry.top,
            animationDelay: berry.delay,
            animationDuration: berry.duration,
            width: berry.size,
            height: berry.size,
          }}
        />
      ))}
    </div>
  );
}

