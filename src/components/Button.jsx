export default function Button({ text, className, id, href = "#" }) {
    return (
        <a 
            href={href}
            className={`${className || ''} relative block group cursor-pointer`} 
            id={id}
        >
            <div className="cta-button">
                {/* The background expansion effect */}
                <div className="bg-circle" />
                
                {/* Button Text */}
                <p className="text">
                    {text}
                </p>

                {/* Arrow Wrapper - Centered perfectly */}
                <div className="arrow-wrapper">
                    <img 
                        src="/images/arrow-down.svg" 
                        alt="arrow" 
                        className="size-4" // Removed any rotations or offsets
                    />
                </div>
            </div>
        </a>
    )
}