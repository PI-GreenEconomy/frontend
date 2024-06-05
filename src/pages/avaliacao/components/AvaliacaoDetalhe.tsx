import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvaliacaoStar } from "./AvaliacaoStar";
import { avaliarProduto } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface AvaliacaoDetalheProps {
  produto: Produto;
  setProduto: React.Dispatch<React.SetStateAction<Produto>>;
}

export const AvaliacaoDetalhe = ({
  produto,
  setProduto,
}: AvaliacaoDetalheProps) => {
  const [novaAvaliacao, setNovaAvaliacao] = useState<number>(0);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const navigate = useNavigate();

  async function enviarAvaliacao(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (novaAvaliacao === 0) return;

    try {
      await avaliarProduto(
        `/produtos/${produto.id}/avaliar`,
        novaAvaliacao,
        setProduto,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      ToastAlerta("Avaliação enviada!", "sucesso");
    } catch (error) {
      ToastAlerta("Erro ao enviar a avaliação!", "erro");
    }
    setNovaAvaliacao(0);
    navigate("/");
  }

  return (
    <section className="mx-auto flex w-full max-w-96 flex-col gap-4 py-12">
      <h1 className="fornt-bold text-2xl">Deixe sua avaliação</h1>
      <div className="flex items-center gap-2">
        <img
          className="h-16 w-16 rounded-sm object-cover object-center"
          src={produto.foto}
          alt={produto.nome}
        />
        <p>{produto.nome}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Classificação geral</h2>
        <AvaliacaoStar
          size={24}
          novaAvaliacao={novaAvaliacao}
          setNovaAvaliacao={setNovaAvaliacao}
        />
      </div>
      <form className="flex w-full flex-col gap-2" onSubmit={enviarAvaliacao}>
        <div>
          <h2 className="text-xl font-bold">Faça um comentário</h2>
          <textarea
            placeholder="Do que você gostou ou não gostou? Como você usa esse produto?"
            className="my-5 min-h-[100px] w-full rounded border border-[#a9a9a9] p-2"
          />
        </div>

        <button
          disabled={novaAvaliacao === 0}
          className="w-full rounded border border-[#005514] bg-[#005514] px-4 py-2 font-bold text-white transition-colors hover:bg-[#013a0e] focus:bg-[#013a0e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
