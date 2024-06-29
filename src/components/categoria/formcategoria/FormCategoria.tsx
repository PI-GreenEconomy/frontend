import { useContext, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useCategoria } from "../../../hooks/useCategoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Spinner } from "../../ui/Spinner";

function FormCategoria() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const {
    atualizarEstado,
    categoria,
    isLoading,
    buscarCategoriaPorId,
    gerarNovaCategoria,
  } = useCategoria();

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center pb-16 pt-4">
      <h1 className="my-8 text-center text-4xl">
        {id === undefined ? "Cadastrar categoria" : "Editar categoria"}
      </h1>

      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo">Tipo da categoria</label>
          <input
            type="text"
            placeholder="Exemplo: Vestuário"
            name="tipo"
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
            maxLength={255}
            required
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="slug">Slug da categoria</label>
          <input
            type="text"
            placeholder="Exemplo: nome-categoria"
            name="slug"
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
            maxLength={255}
            required
            value={categoria.slug}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          disabled={isLoading}
          className=" flex justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90 focus:bg-primary/90 disabled:cursor-default disabled:bg-primary/50"
          type="submit"
        >
          {isLoading ? (
            <Spinner
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
