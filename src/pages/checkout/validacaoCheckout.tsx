import { z } from "zod";
import { formataCep } from "../../utils/cep";

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
    .max(4, "Validade não pode conter mais de 4 caracteres"),
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
