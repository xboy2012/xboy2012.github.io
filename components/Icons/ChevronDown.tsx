export const ChevronDown = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`w-4 h-4 ${className || ''}`}
      stroke="currentcolor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 184l144 144 144-144"
        fill="none"
      ></path>
    </svg>
  );
};
