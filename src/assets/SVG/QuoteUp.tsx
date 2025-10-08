
type QuoteUp = {
    className?: string;
};

export default function QuoteUp({ className = "" }: QuoteUp) {
    return (
        <svg width="50" height="97" viewBox="0 0 50 97" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M33.4959 43.5276V34.5366C33.4959 25.3541 26.6321 17.9103 18.1652 17.9103H12.5015C8.16461 17.9103 4.64884 14.0974 4.64884 9.39399C4.64884 4.69057 8.16461 0.877663 12.5015 0.877663H18.163C35.305 0.877663 49.2014 15.9483 49.2014 34.539V43.5276V76.3078V87.7415C49.2014 92.4449 45.6856 96.2578 41.3486 96.2578H8.4326C4.09567 96.2578 0.579895 92.4449 0.579895 87.7415V52.0439C0.579895 47.3405 4.09567 43.5276 8.4326 43.5276H33.4959Z" fill="url(#paint0_linear_4888_9047)" />
            <defs>
                <linearGradient id="paint0_linear_4888_9047" x1="24.8906" y1="96.2578" x2="24.8906" y2="0.877663" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD171D" />
                    <stop offset="1" stop-color="#5B1517" />
                </linearGradient>
            </defs>
        </svg>
    )
}