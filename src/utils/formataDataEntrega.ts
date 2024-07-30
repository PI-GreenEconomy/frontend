function formataDataComDiaEAno(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("pt-BR", options);
}

export function calcularIntervaloEntrega(maxDeliveryDays: number): string {
  const diaAtual = new Date();
  const dataEntrega = new Date(diaAtual);

  dataEntrega.setDate(diaAtual.getDate() + maxDeliveryDays);
  const dataEntregaFormatado = formataDataComDiaEAno(dataEntrega);

  return dataEntregaFormatado;
}
