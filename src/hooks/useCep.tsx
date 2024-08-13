import { ICep } from "../utils/cep";
import useLocalStorage from "./useLocalStorage";

export const useCep = () => {
  const [cep, setCep] = useLocalStorage<ICep | null>("cep", null);

  return { cep, setCep };
};
