type ArrowUpBlackProps = {
    className?: string;
};

export default function ArrowUpBlack({ className = "" }: ArrowUpBlackProps) {
    return (
        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0.356198 20.7532L19.8838 6.56551L6.78883 4.49146L7.44054 0.376713L27.5603 3.56337L24.3736 23.6831L20.2589 23.0314L22.3329 9.93641L2.8053 24.1241L0.356198 20.7532Z"/>
        </svg>
    )
}