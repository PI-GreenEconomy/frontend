import { createContext, ReactNode, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ICep } from "../utils/cep";
import axios from "axios";

export interface IResultadoFrete {
  id: string;
  name: string;
  price: string;
  delivery_time: number;
  delivery_range: {
    min: number;
    max: number;
  };
  company: {
    name: string;
    picture: string;
  };
}

interface FreteContextProps {
  cep: ICep | null;
  setCep: React.Dispatch<React.SetStateAction<ICep | null>>;
  resultadoFrete: IResultadoFrete[] | null;
  setResultadoFrete: React.Dispatch<
    React.SetStateAction<IResultadoFrete[] | null>
  >;
  error: boolean;
  calcularFrete: (cepValues: { cepOrigem: string }) => Promise<void>;
  indexFreteSelecionado: number | null;
  setIndexFreteSelecionado: React.Dispatch<React.SetStateAction<number | null>>;
}

interface FreteProviderProps {
  children: ReactNode;
}

export const FreteContext = createContext({} as FreteContextProps);

export function FreteProvider({ children }: FreteProviderProps) {
  const [cep, setCep] = useLocalStorage<ICep | null>("cep", null);
  const [resultadoFrete, setResultadoFrete] = useState<
    IResultadoFrete[] | null
  >(null);
  const [error, setError] = useState<boolean>(false);
  const [indexFreteSelecionado, setIndexFreteSelecionado] = useState<
    number | null
  >(null);

  const calcularFrete = async (cepValues: { cepOrigem: string }) => {
    const { cepOrigem } = cepValues;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/frete/calcular`,
        {
          cepOrigem,
        },
      );

      setIndexFreteSelecionado(null);
      setResultadoFrete(response.data);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setIndexFreteSelecionado(null);
      setResultadoFrete(null);
    }
  };

  return (
    <FreteContext.Provider
      value={{
        cep,
        setCep,
        error,
        calcularFrete,
        resultadoFrete,
        setResultadoFrete,
        indexFreteSelecionado,
        setIndexFreteSelecionado,
      }}
    >
      {children}
    </FreteContext.Provider>
  );
}
