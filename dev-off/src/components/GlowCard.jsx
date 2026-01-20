import { useRef } from 'react'

export default function GlowCard({ card, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="glow"></div>
      
      <h2 className="text-2xl font-bold text-white mb-2">{card.company}</h2>
      <p className="text-white-50 text-sm">{card.location}</p>
    </div>
  );
}