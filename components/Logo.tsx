export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (<svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="8" fill="#0c0808"/>
    <text x="50" y="42" fill="#ff2d2d" fontFamily="system-ui" fontWeight="900" fontSize="16" textAnchor="middle">(╯°□°)</text>
    <text x="50" y="62" fill="#ff2d2d" fontFamily="system-ui" fontWeight="900" fontSize="16" textAnchor="middle">╯︵ ┻━┻</text>
    <rect x="10" y="75" width="80" height="2" fill="#ff2d2d" opacity="0.15"/>
  </svg>);
}
