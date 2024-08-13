/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

interface IResultadoFrete {
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

const useFrete = () => {
  const [resultadoFrete, setResultadoFrete] = useLocalStorage<
    IResultadoFrete[] | null
  >("resultadoFrete", null);
  const [error, setError] = useState<boolean>(false);

  const calcularFrete = async (cepValues: { cepOrigem: string }) => {
    const { cepOrigem } = cepValues;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/frete/calcular`,
        {
          cepOrigem,
        },
      );

      setResultadoFrete(response.data);
      setError(false);
    } catch (err: any) {
      console.log(err);
      setError(true);
      setResultadoFrete(null);
    }
  };

  return { resultadoFrete, setResultadoFrete, error, calcularFrete };
};

export default useFrete;
