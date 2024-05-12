import { memo } from 'react';

export const ChevronDown = memo(({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="16"
      height="16"
      className={className}
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
});
