import { twMerge } from "tailwind-merge";

export type LoadingType = {
  height?: string | number;
  radius?: string | number;
  width?: string | number;
  color?: string;
  outerCircleColor?: string;
  innerCircleColor?: string;
  middleCircleColor?: string;
  ariaLabel?: string;
  className?: string;
};

export const Loading = ({
  ariaLabel = "Carregando...",
  color = "#4fa84d",
  height = 80,
  radius = 9,
  width = 80,
  className,
}: LoadingType) => {
  return (
    <div
      data-testid={ariaLabel}
      aria-label={ariaLabel}
      aria-busy="true"
      role="progressbar"
      className={`${twMerge("flex items-center justify-center", className)}`}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        data-testid="three-dots-svg"
      >
        <circle cx={15} cy={15} r={15}>
          <animate
            attributeName="r"
            from={15}
            to={15}
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from={1}
            to={1}
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={60}
          cy={15}
          r={radius}
          attributeName="fill-opacity"
          from={1}
          to="0.3"
        >
          <animate
            attributeName="r"
            from={radius}
            to={radius}
            begin="0s"
            dur="0.8s"
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur="0.8s"
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={105} cy={15} r={15}>
          <animate
            attributeName="r"
            from={15}
            to={15}
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from={1}
            to={1}
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
