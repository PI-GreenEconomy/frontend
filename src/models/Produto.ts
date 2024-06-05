import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  slug: string;
  basePreco: number;
  porcentagemDesconto: number;
  descricao: string;
  foto: string;
  notaMedia: number;
  numeroDeAvaliacoes: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
