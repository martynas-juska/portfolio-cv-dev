import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../../constants"; 
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Animate the timeline line
    gsap.to(".timeline", {
      transformOrigin: "top top",
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        
        <div className="mt-32 relative">
          {/* Timeline Line Container - Wider */}
          <div className="absolute left-1/2 xl:left-[33.33%] -translate-x-1/2 top-0 h-full hidden xl:flex justify-center pointer-events-none">
            <div className="timeline w-28 bg-black z-30 absolute h-full" />
            <div className="gradient-line w-2 h-full relative z-20" />
          </div>

          <div className="relative z-50 space-y-32">
            {expCards.map((card, index) => (
              <div key={card.title} className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
                
                {/* Left - Company Card */}
                <div className="xl:col-span-4">
                  <GlowCard card={card} index={index} />
                </div>

                {/* Right - Experience Details */}
                <div className="xl:col-span-8 expText">
                  <div className="relative">
                    <h3 className="font-semibold text-2xl md:text-3xl text-white mb-3">{card.title}</h3>
                    <p className="text-white-50 mb-4">🗓️ {card.date}</p>
                    
                    <p className="text-blue-50 italic mb-4">Key Responsibilities:</p>
                    
                    <ul className="list-disc ml-5 space-y-3 text-white-50">
                      {card.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-base leading-relaxed">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}