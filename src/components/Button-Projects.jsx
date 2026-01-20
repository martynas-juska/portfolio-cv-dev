export default function ButtonProjects({ text, className, href = "#" }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // Important: prevents the mobile card click logic from firing when button is clicked
            onClick={(e) => e.stopPropagation()} 
            className={`${className || ''} group/btn relative flex-1`}
        >
            <div className="relative overflow-hidden px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 transition-all duration-500 hover:bg-white hover:scale-[1.02] active:scale-95 shadow-2xl">
                {/* Text color transition */}
                <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-white transition-colors duration-500 group-hover/btn:text-black whitespace-nowrap">
                    {text}
                </span>
                
                {/* Minimalist Arrow */}
                <svg 
                    className="w-4 h-4 text-white transition-all duration-500 group-hover/btn:text-black group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </a>
    )
}