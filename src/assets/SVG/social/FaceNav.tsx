export default function FaceNav({
  color = "#1A1A1A",
  hoverColor = "#FF0000",
  className=""
}: {
  color?: string;
  hoverColor?: string;
  className?: string;

}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer transition-colors duration-300 ${className}`}

    >
      <path
        d="M9.56995 16H5.50732V10.3439H3.78125V6.59375H5.50732V4.078C5.50732 1.82935 7.33667 0 9.58521 0H12.2336V4.06274H10.2234C9.86316 4.06274 9.56995 4.35583 9.56995 4.71606V6.59363H11.296V10.3439H9.56995V16ZM6.44482 15.0625H8.63245V9.40637H10.3585V7.53125H8.63245V4.71619C8.63245 3.83887 9.34619 3.12524 10.2234 3.12524H11.2961V0.9375H9.58521C7.85364 0.9375 6.44482 2.34631 6.44482 4.07788V7.53113H4.71875V9.40637H6.44482V15.0625Z"
        fill={color}
      />
      <style jsx>{`
        svg:hover path {
          fill: ${hoverColor};
        }
      `}</style>
    </svg>
  );
}
