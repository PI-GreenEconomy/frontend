import { z } from "zod";

export const formSchema = z.object({
  usuario: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Deve ser um e-mail válido")
    .max(100, "E-mail não pode conter mais de 100 caracteres"),
  senha: z
    .string()
    .min(1, "Senha é obrigatória")
    .min(8, "Senha deve possuir no mínimo 8 caracteres")
    .max(40, "Senha não pode conter mais de 40 caracteres"),
});
