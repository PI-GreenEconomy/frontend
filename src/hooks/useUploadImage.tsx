import { useContext, useState } from "react";
import { uploadImage } from "../services/Service";
import { AuthContext } from "../contexts/AuthContext";

const useUploadImagem = () => {
  const [progresso, setProgresso] = useState<number>(0);
  const [urlImagem, setUrlImagem] = useState<string>("");
  const [erroUpload, setErroUpload] = useState<string>("");

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const enviarImagem = async (
    url: string,
    imagem: File,
    folder: string,
  ): Promise<string> => {
    try {
      const resposta = await uploadImage(
        url,
        imagem,
        folder,
        setProgresso,
        token,
      );

      if (!resposta.url) {
        throw new Error("URL da imagem não encontrada na resposta");
      }

      setUrlImagem(resposta.url);
      setErroUpload("");

      return resposta.url; // Retorna a URL da imagem
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      setErroUpload("Erro ao enviar imagem. Por favor, tente novamente.");
      throw error;
    }
  };

  return { progresso, urlImagem, erroUpload, enviarImagem };
};

export default useUploadImagem;
