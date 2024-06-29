import React, { FunctionComponent } from "react";
import "./Spinner.css"; // Importa o arquivo CSS com os estilos

type Props = {
  width?: string;
  visible?: boolean;
  strokeWidth?: string;
  strokeColor?: string;
  animationDuration?: string;
  ariaLabel?: string;
};

const POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export const Spinner: FunctionComponent<Props> = ({
  strokeColor = "#4fa94d",
  strokeWidth = "5",
  animationDuration = "0.75",
  width = "96",
  visible = true,
  ariaLabel = "rotating-lines-loading",
}): React.ReactElement | null => {
  const opacityClasses = [
    "opacity-8",
    "opacity-17",
    "opacity-25",
    "opacity-33",
    "opacity-42",
    "opacity-50",
    "opacity-58",
    "opacity-66",
    "opacity-75",
    "opacity-83",
    "opacity-92",
  ];

  return !visible ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      className="animate-spin"
      stroke={strokeColor}
      aria-label={ariaLabel}
      aria-busy={true}
      role="progressbar"
      style={{
        animationDuration: `${animationDuration}s`,
        animationTimingFunction: "steps(12, end)",
      }}
    >
      {POINTS.map((point, index) => (
        <polyline
          key={point}
          points="24,12 24,4"
          strokeWidth={strokeWidth}
          transform={`rotate(${point}, 24, 24)`}
          className={`stroke-linecap-round stroke-current ${opacityClasses[index % 12]}`}
        />
      ))}
    </svg>
  );
};
