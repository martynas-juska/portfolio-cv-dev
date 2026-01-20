import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ButtonProjects from '../components/Button-Projects'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ title, img, visitUrl, githubUrl, isLarge = false }) => {
    const handleCardClick = () => {
        if (window.innerWidth < 1024) {
            window.open(visitUrl, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div 
            className="flex flex-col gap-6 group/card cursor-pointer"
            onClick={handleCardClick}
        >
            <div className={`relative w-full ${isLarge ? 'aspect-[16/10]' : 'aspect-[3/2]'} bg-black-100 border border-black-50 rounded-2xl overflow-hidden transition-all duration-700 hover:border-white-50/50 shadow-2xl`}>
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                />
                
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                <div className="hidden lg:flex absolute bottom-0 left-0 w-full p-8 translate-y-10 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-out items-center justify-center gap-4">
                    <ButtonProjects text="Live Demo" href={visitUrl} />
                    <ButtonProjects text="GitHub Repo" href={githubUrl} />
                </div>

                <div className="lg:hidden absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="size-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-[9px] text-white uppercase tracking-[0.2em] font-bold">Tap to visit</p>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className={`text-white-50 transition-colors duration-300 group-hover/card:text-white ${isLarge ? "text-2xl md:text-3xl lg:text-4xl font-bold" : "text-lg md:text-xl lg:text-2xl font-semibold"}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default function ShowcaseSection() {
    const containerRef = useRef(null)
    const leftColumnRef = useRef(null)
    const rightColumnRef = useRef(null)

    useLayoutEffect(() => {
        const mm = gsap.matchMedia()
        
        mm.add("(min-width: 1280px)", () => {
            const ctx = gsap.context(() => {
                
                // LEFT SIDE: Moves slow but steady
                gsap.fromTo(leftColumnRef.current, 
                    { y: 0 }, 
                    {
                        y: 300, 
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1.5, // Heavier, delayed feel
                        }
                    }
                );

                // RIGHT SIDE: High Velocity
                // Travels 1600px total distance
                gsap.fromTo(rightColumnRef.current, 
                    { y: 300 }, 
                    {
                        y: -1000,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.2, // Very reactive and "fast" feel
                        }
                    }
                );

            }, containerRef)
            return () => ctx.revert()
        })
        return () => mm.revert()
    }, [])

    return (
        <section id="work" className="app-showcase overflow-visible py-60 pb-10" ref={containerRef}>
            <div className="showcaselayout w-full flex xl:flex-row flex-col gap-24 items-start">

                {/* Left Column (60%) */}
                <div ref={leftColumnRef} className="flex flex-col xl:w-[60%] w-full">
                    <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white-50 mb-24">
                        Selected <span className="text-white">Projects</span>
                    </h2>

                    <div className="flex flex-col gap-40">
                        <ProjectCard 
                            isLarge
                            title="Cocktails recipes landing page with GSAP animations experience"
                            img="/images/projects/cocktails-hero.png"
                            visitUrl="https://cocktails-lovat-six.vercel.app/"
                            githubUrl="https://github.com/martynas-juska/cocktails.git"
                        />
                        <ProjectCard 
                            isLarge
                            title="3D game with physically realistic collision mechanics build using React, Three.js & Rapier.js"
                            img="/images/projects/game-3d.png"
                            visitUrl="https://3dgeometrygame.vercel.app/"
                            githubUrl="https://github.com/martynas-juska/3dgeometrygame.git"
                        />
                    </div>
                </div>

                {/* Right Column (40%) */}
                <div ref={rightColumnRef} className="flex flex-col gap-40 xl:w-[40%] w-full">
                    <ProjectCard 
                        title="Stock tracking application with authentication and user database"
                        img="/images/projects/stocks-hero.png"
                        visitUrl="https://stock-tracking-app-mauve.vercel.app/"
                        githubUrl="https://github.com/martynas-juska/stock-tracking-app.git"
                    />
                    <ProjectCard 
                        title="Web dev portfolio focused on freelancing and 3D skills showcase"
                        img="/images/projects/portfolio-3d.png"
                        visitUrl="https://behind-axis.webflow.io/"
                        githubUrl="https://behind-axis.webflow.io/"
                    />
                    <ProjectCard 
                        title="3D abandoned house with a graveyard environment map"
                        img="/images/projects/house-3d.png"
                        visitUrl="https://house-at-night.vercel.app"
                        githubUrl="https://github.com/martynas-juska/house-at-night.git"
                    />
                    <ProjectCard 
                        title="3D liquid metal wobbling sphere build with WebGL Shader language"
                        img="/images/projects/wobble-3d.png"
                        visitUrl="https://wobbling-sphere-dark.vercel.app"
                        githubUrl="https://github.com/martynas-juska/wobbling-sphere-dark.git"
                    />
                </div>
            </div>
        </section>
    )
}