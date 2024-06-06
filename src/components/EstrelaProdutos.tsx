import { Icon } from "./icons";

interface EstrelaProdutosProps {
  notaMedia: number;
  numeroDeAvaliacoes: number;
}

export const EstrelaProdutos = ({
  notaMedia,
  numeroDeAvaliacoes,
}: EstrelaProdutosProps) => {
  const totalStars = 5;
  const fullStars = Math.floor(notaMedia);
  const hasHalfStar = notaMedia - fullStars >= 0.05;

  const novaNotaMedia = notaMedia ? notaMedia.toFixed(1) : "0.0";

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Icon.Star
              key={index}
              className="fill-yellow-500 stroke-yellow-500"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <Icon.StarHalf
              key={index}
              className="fill-yellow-500 stroke-yellow-500"
            />
          );
        } else {
          return (
            <Icon.Star key={index} className="fill-gray-500 stroke-gray-500" />
          );
        }
      })}
      <div className="ml-1 text-sm text-muted-foreground">
        <span className="mx-1">{novaNotaMedia}</span>
        <span>({numeroDeAvaliacoes} avaliações)</span>
      </div>
    </div>
  );
};
