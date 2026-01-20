import { useRef } from 'react'

export default function TechCard({ tech, index }) {
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
      className="card card-border tech-card rounded-xl p-8 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="glow"></div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
      
      <p className="text-white-50 leading-relaxed">{tech.description}</p>
    </div>
  );
}