import { z } from "zod";
import { formataCep, validaCep } from "../../utils/cep";

const isValidExpirationDate = (dateStr: string): boolean => {
  const cleanDateStr = dateStr.replace("/", "");

  const monthStr = cleanDateStr.substring(0, 2);
  const yearStr = cleanDateStr.substring(2);

  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  if (
    isNaN(month) ||
    isNaN(year) ||
    month < 1 ||
    month > 12 ||
    year < 0 ||
    year > 99
  ) {
    return false;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const maxValidYear = currentYear + 5;
  const maxValidYearLastTwoDigits = maxValidYear % 100;

  if (
    year < currentYear % 100 ||
    (year === currentYear % 100 && month < currentMonth) ||
    year > maxValidYearLastTwoDigits
  ) {
    return false;
  }

  return true;
};

const baseSchema = {
  endereco: z
    .string()
    .min(1, "Campo obrigatório")
    .max(100, "Endereço não pode conter mais de 100 caracteres"),
  cidade: z
    .string()
    .min(1, "Campo obrigatório")
    .max(100, "Cidade não pode conter mais de 100 caracteres"),
  estado: z
    .string()
    .min(1, "Campo obrigatório")
    .max(100, "Estado não pode conter mais de 100 caracteres"),
  cep: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(/^\d{5}-\d{3}$|^\d{8}$/, { message: "CEP inválido" })
    .refine(async (cep) => await validaCep(cep), {
      message: "CEP não encontrado",
    })
    .transform(formataCep),
  informacao: z
    .string()
    .max(500, "Informação adicional não pode conter mais de 500 caracteres")
    .optional(),
};

const creditCardSchema = {
  nomeCartao: z
    .string()
    .min(1, "Campo obrigatório")
    .max(100, "Nome não pode conter mais de 100 caracteres"),
  numeroCartao: z
    .string()
    .min(16, "Número do Cartão deve conter 16 dígitos")
    .max(19, "Número do Cartão não pode conter mais de 19 dígitos"),
  validadeCartao: z
    .string()
    .min(4, "Validade deve conter 4 caracteres")
    .max(4, "Validade não pode conter mais de 4 caracteres")
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$|^\d{4}$/,
      "Validade deve estar no formato MM/AA ou MMYY",
    )
    .refine((dateStr) => isValidExpirationDate(dateStr), {
      message: "Data de validade inválida ou já expirada",
    }),
  cvvCartao: z
    .string()
    .min(3, "CVV deve conter 3 dígitos")
    .max(3, "CVV deve conter 3 dígitos"),
};

export const getFormCheckoutSchema = (pagamentoSelecionado: string) => {
  if (pagamentoSelecionado === "cartao") {
    return z.object({ ...baseSchema, ...creditCardSchema });
  } else {
    return z.object({
      ...baseSchema,
      nomeCartao: z
        .string()
        .max(100, "Nome não pode conter mais de 100 caracteres")
        .optional(),
      numeroCartao: z
        .string()
        .max(19, "Número do Cartão não pode conter mais de 19 dígitos")
        .optional(),
      validadeCartao: z
        .string()
        .max(5, "Validade não pode conter mais de 5 caracteres")
        .optional(),
      cvvCartao: z.string().max(3, "CVV deve conter 3 dígitos").optional(),
    });
  }
};

export type FormCheckoutValues = z.infer<
  ReturnType<typeof getFormCheckoutSchema>
>;
