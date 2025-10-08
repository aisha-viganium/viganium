
type QuoteDown = {
    className?: string;
};

export default function QuoteDown({ className = "" }: QuoteDown) {
    return (
        <svg width="49" height="96" viewBox="0 0 49 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M15.7052 53.0232V62.0142C15.7052 71.1966 22.569 78.6405 31.0359 78.6405H36.6996C41.0365 78.6405 44.5523 82.4534 44.5523 87.1568C44.5523 91.8602 41.0365 95.6731 36.6996 95.6731H31.0381C13.8961 95.6731 -0.000240326 80.6024 -0.000240326 62.0118V53.0232V20.243V8.80928C-0.000240326 4.10585 3.51553 0.292969 7.85246 0.292969H40.7685C45.1054 0.292969 48.6212 4.10585 48.6212 8.80928V44.5069C48.6212 49.2103 45.1054 53.0232 40.7685 53.0232H15.7052Z" fill="url(#paint0_linear_4888_9049)" />
            <defs>
                <linearGradient id="paint0_linear_4888_9049" x1="24.3105" y1="0.292969" x2="24.3105" y2="95.6731" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BD171D" />
                    <stop offset="1" stopColor="#5B1517" />
                </linearGradient>
            </defs>
        </svg>

    )
}