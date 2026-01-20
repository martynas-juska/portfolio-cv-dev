import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import TechCard from "../components/TechCard";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    name: "Next.js",
    description: "Building production-ready React applications with server-side rendering, static generation, and optimal performance. Experienced in App Router, API routes, and modern Next.js features for scalable web solutions."
  },
  {
    name: "React",
    description: "Crafting dynamic, component-based user interfaces with hooks, state management, and modern React patterns. Proficient in building reusable components and implementing complex UI logic efficiently."
  },
  {
    name: "Tailwind CSS",
    description: "Designing beautiful, responsive interfaces with utility-first CSS. Expert in custom configurations, responsive design patterns, and creating consistent design systems that scale across projects."
  },
  {
    name: "Three.js",
    description: "Creating immersive 3D web experiences with WebGL. Skilled in 3D modeling, animations, physics simulations, and interactive 3D environments that bring web applications to life."
  },
  {
    name: "GSAP",
    description: "Implementing smooth, professional-grade animations and scroll effects. Experienced with ScrollTrigger, timelines, and creating engaging user experiences through motion design."
  },
  {
    name: "UI/UX",
    description: "Designing intuitive user interfaces with focus on accessibility, usability, and visual appeal. Strong understanding of design principles, user flows, and creating delightful user experiences."
  }
];

export default function TechStack() {
  useGSAP(() => {
    gsap.utils.toArray(".tech-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section id="tech-stack" className="flex-center section-padding xl:px-0 !mt-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Tech Stack & Skills"
          sub="🛠️ Tools I Work With"
        />
        
        <div className="mt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}