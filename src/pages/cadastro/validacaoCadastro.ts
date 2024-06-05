import { z } from "zod";

export const formSchema = z
  .object({
    nome: z
      .string()
      .min(1, "O nome é obrigatório")
      .max(50, "Nome não pode conter mais de 50 caracteres"),
    usuario: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Deve ser um e-mail válido")
      .max(100, "E-mail não pode conter mais de 100 caracteres"),
    foto: z.string().max(5000, "URL da foto inválida"),
    funcao: z.enum(["USUARIO", "VENDEDOR"], {
      errorMap: () => ({ message: "Tipo de usuário inválido" }),
    }),
    senha: z
      .string()
      .min(1, "Senha é obrigatória")
      .min(8, "Senha deve possuir no mínimo 8 caracteres")
      .max(40, "Senha não pode conter mais de 40 caracteres"),
    confirmarSenha: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não coincidem",
  });
