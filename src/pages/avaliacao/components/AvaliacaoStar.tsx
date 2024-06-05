import { StarIcon } from "lucide-react";
import { Dispatch, useEffect, useState } from "react";

interface AvaliacaoStarProps {
  size?: number;
  novaAvaliacao: number;
  setNovaAvaliacao: Dispatch<React.SetStateAction<number>>;
}

const tooltips = ["Insatisfatório", "Regular", "Bom", "Muito Bom", "Excelente"];

export const AvaliacaoStar = ({
  size = 24,
  novaAvaliacao,
  setNovaAvaliacao,
}: AvaliacaoStarProps) => {
  const [hoverAvaliacao, setHoverAvaliacao] = useState<number | undefined>(
    undefined,
  );

  const stars = Array(5).fill(0);

  const handleClick = (value: number) => {
    setNovaAvaliacao(value);
  };

  const handleMouseOver = (newhoverAvaliacao: number) => {
    setHoverAvaliacao(newhoverAvaliacao);
  };

  const handleMouseLeave = () => {
    setHoverAvaliacao(undefined);
  };

  useEffect(() => {
    setNovaAvaliacao(0);
    setHoverAvaliacao(undefined);
  }, []);

  return (
    <div className="flex">
      {stars.map((_, index) => {
        return (
          <StarIcon
            key={index}
            size={size}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`${
              (hoverAvaliacao || novaAvaliacao) > index
                ? "fill-yellow-500 stroke-yellow-500"
                : "stroke-[#c6a361]"
            }`}
            style={{
              marginRight: 10,
              cursor: "pointer",
            }}
          />
        );
      })}
      <span className="ml-2 w-32">
        {novaAvaliacao > 0 && tooltips[novaAvaliacao - 1]}
      </span>
    </div>
  );
};
