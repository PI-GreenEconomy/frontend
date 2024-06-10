import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: Function,
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async (
  url: string,
  setDados: Function,
  header?: Object,
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object,
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object,
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};

export const avaliarProduto = async (
  url: string,
  novaAvaliacao: number,
  setDados: Function,
  header: Object,
) => {
  try {
    // Verifique se a nova avaliação está dentro do intervalo correto
    if (novaAvaliacao < 0 || novaAvaliacao > 5) {
      throw new Error("Avaliação inválida. A nota deve estar entre 0 e 5.");
    }

    const resposta = await api.put(url, { novaAvaliacao }, header);
    setDados(resposta.data);
  } catch (error) {
    // Trate os erros aqui, se necessário
    console.error("Erro ao avaliar o produto:", error);
    throw error;
  }
};
