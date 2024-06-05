export type FuncaoUsuario = "USUARIO" | "VENDEDOR" | "ADMIN";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  funcao: FuncaoUsuario;
  confirmarSenha?: string;
}
