import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconCartClose = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-12", props.className)}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_365_5487)">
        <path
          d="M12.5003 7.49984L7.50033 12.4998M7.50033 7.49984L12.5003 12.4998M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z"
          stroke="fill"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_365_5487">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
