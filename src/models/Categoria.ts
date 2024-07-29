import Produto from "./Produto";

export default interface Categoria {
  id: number;
  tipo: string;
  slug: string;
  icone: string;
  produtos: Produto | null;
}
