export default function Logo({ size = 40, className = '' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width={size}
            height={size}
            className={className}
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A2463" />
                    <stop offset="100%" stopColor="#3E92CC" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#logoGrad)" />
            <text
                x="32" y="30"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="900"
                fontSize="22"
                fill="white"
                letterSpacing="-1"
            >
                OP
            </text>
            <text
                x="32" y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="400"
                fontSize="10"
                fill="#C9D6EA"
                letterSpacing="3"
            >
                MW
            </text>
        </svg>
    );
}
