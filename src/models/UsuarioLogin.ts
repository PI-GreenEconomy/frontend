import { FuncaoUsuario } from "./Usuario";

export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  funcao: FuncaoUsuario;
  token: string;
}
