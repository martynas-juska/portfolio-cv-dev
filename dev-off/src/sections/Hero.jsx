import Button from "../components/Button";

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden min-h-screen">
            <div className="absolute top-0 left-0 z-0">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="relative z-10 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
                    
                    {/* Left Side - Your Original Content */}
                    <header className="flex flex-col justify-center lg:w-3/5 md:w-full w-screen md:px-20 px-5">
                        <div className="flex flex-col gap-7">
                            <div className="hero-text">
                                <h1 className="whitespace-nowrap">Martynas Juška</h1>
                                <h1 className="whitespace-nowrap">React & Next.js Developer</h1>
                            </div>

                            <p className="max-w-150">
                                I'm a developer based in Lithuania and I specialize in Front-End development. I work not only with visually stunning websites, but can also create smooth GSAP and 3D experiences!
                            </p>

                            <Button
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                                text="See my work"
                                href="#work"
                            />
                        </div>
                    </header>

                    {/* Right Side - Profile Image */}
                    <div className="lg:w-2/5 flex justify-center lg:justify-end px-5 md:px-20 lg:pr-20">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-p1/30 via-p2/30 to-p3/30 rounded-2xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                            
                            {/* Image */}
                            <div className="relative">
                                <img 
                                    src="/images/laptop-profile.png" 
                                    alt="Martynas Juška profile"
                                    className="relative rounded-2xl shadow-2xl max-w-sm lg:max-w-md w-full h-auto hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}