import Produto from "../models/Produto";

export function calcularValorTotalProduto(produto: Produto): number {
  if (produto.porcentagemDesconto === 0) {
    return Number(produto.basePreco);
  }

  const desconto =
    Number(produto.basePreco) * (produto.porcentagemDesconto / 100);
  const preco = Number(produto.basePreco);

  return preco - desconto;
}

export function formatarMoeda(value: number) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

export const verificaDesconto = (porcentagemDesconto: number): boolean => {
  return porcentagemDesconto > 0;
};

export const verificaFreteGratuito = (precoAtual: number): boolean => {
  return precoAtual >= 100;
};

export const verificaParcela = (precoAtual: number): boolean => {
  return precoAtual >= 50;
};
