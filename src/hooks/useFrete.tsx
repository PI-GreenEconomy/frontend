/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";

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
  const [resultadoFrete, setResultadoFrete] = useState<
    IResultadoFrete[] | null
  >(null);
  const [error, setError] = useState<boolean>(false);

  const calcularFrete = async (cepValues: { cepOrigem: string }) => {
    const { cepOrigem } = cepValues;

    const data = {
      from: {
        postal_code: cepOrigem,
      },
      to: {
        postal_code: "90570020",
      },
      package: {
        height: 4,
        width: 12,
        length: 17,
        weight: 0.3,
      },
      services: "1,3",
    };

    try {
      const response = await axios.post("/apiFrete", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_API_FRETE_KEY,
        },
      });

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
