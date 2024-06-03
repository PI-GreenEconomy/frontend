import Produto from "./Produto";

export default interface Categoria {
  id: number;
  tipo: string;
  slug: string;
  produtos: Produto | null;
}
