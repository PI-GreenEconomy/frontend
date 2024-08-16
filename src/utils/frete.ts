import { IResultadoFrete } from "../contexts/FreteContext";
import { formatarMoeda, verificaFreteGratuito } from "./preco";

export const VALOR_FRETE_GRATIS = 99;

export const selecionaFrete = (
  resultadoFrete: IResultadoFrete[] | null,
  indexFreteSelecionado: number | null,
): IResultadoFrete | null => {
  if (!resultadoFrete || indexFreteSelecionado === null) {
    return null;
  }
  const freteSelecionado = resultadoFrete.find(
    (frete) => Number(frete.id) === indexFreteSelecionado,
  );
  return freteSelecionado || null;
};

export const calculaValorTransportadora = (
  freteSelecionado: IResultadoFrete | undefined,
  total: number,
) => {
  const freteGratis = total >= 99.9;

  if (freteGratis) return 0;

  return freteSelecionado ? +freteSelecionado.price : 0;
};

export const formataValorTransportadora = (
  resultadoFrete: IResultadoFrete[] | null,
  freteSelecionado: IResultadoFrete | null,
  precoTotal: number,
) => {
  const valorTransportadora = freteSelecionado
    ? calculaValorTransportadora(freteSelecionado, precoTotal)
    : 0;

  return resultadoFrete ? formatarMoeda(valorTransportadora) : "---";
};

export const calculaTotalComFrete = (
  precoTotal: number,
  valorTransportadora: number,
) => {
  const freteGratuito = verificaFreteGratuito(precoTotal);

  return freteGratuito ? precoTotal : precoTotal + valorTransportadora;
};

export const exibeFrete = (
  precoTotal: number,
  valorTransportadoraFormatado: string,
) => {
  const freteGratuito = verificaFreteGratuito(precoTotal);

  return freteGratuito ? "Grátis" : valorTransportadoraFormatado;
};
