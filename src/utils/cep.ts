import axios from "axios";

export interface ICep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
}

export const formataCep = (cep: string): string => {
  return cep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

export const validaCep = async (cep: string): Promise<boolean> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) return false;
    return response.data.erro ? false : true;
  } catch (error) {
    console.error("Erro ao validar CEP:", error);
    return false;
  }
};

export const pegarDadosCep = async (
  cep: string,
  setCep: Function,
): Promise<ICep | null> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) return null;
    const data = response.data as ICep;

    setCep(data);
    return data;
  } catch (error) {
    setCep(null);
    return null;
  }
};
