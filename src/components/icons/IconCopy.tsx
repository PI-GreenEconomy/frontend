import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconCopy = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4.5V4C14 2.34315 12.6569 1 11 1H5C3.34315 1 2 2.34315 2 4V12C2 13.6569 3.34315 15 5 15H5.42857"
        stroke="#32BCAD"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <rect
        x={10}
        y={9}
        width={12}
        height={14}
        rx={3}
        stroke="#32BCAD"
        strokeWidth={2}
      />
    </svg>
  );
};
