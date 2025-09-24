type ArrowUpProps = {
  className?: string;
};

export default function ArrowUp({ className = "" }: ArrowUpProps) {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.5511 20.0305L5.20917 8.1574L6.94486 19.1161L3.50139 19.6615L0.834604 2.82406L17.672 0.15728L18.2174 3.60074L7.25873 5.33643L23.6006 17.2095L21.5511 20.0305Z"
        fill="currentColor"
      />
    </svg>
  );
}
