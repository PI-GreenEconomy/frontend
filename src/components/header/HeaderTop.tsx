import { VALOR_FRETE_GRATIS } from "../../utils/frete";
import { formatarMoeda } from "../../utils/preco";

export const HeaderTop = () => {
  return (
    <div className="bg-primary py-2 text-center font-poppins text-white md:py-3">
      <p className="container flex flex-wrap items-center justify-center gap-x-1 text-xs font-medium md:text-sm">
        Aproveite o <span className="font-bold">FRETE GRÁTIS </span>
        em compras acima de {formatarMoeda(VALOR_FRETE_GRATIS)}!{" "}
        <span className="hidden md:block">
          Consulte as regiões participantes.
        </span>
      </p>
    </div>
  );
};
