import { useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useProduto } from "../../../hooks/useProduto";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useCategoria } from "../../../hooks/useCategoria";
import { Spinner } from "../../ui/Spinner";

function FormProduto() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const {
    atualizarEstado,
    produto,
    isLoading,
    setProduto,
    buscarProdutoPorId,
    gerarNovoProduto,
  } = useProduto();

  const { categorias, categoria, buscarCategoriaPorId, buscarCategorias } =
    useCategoria();

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  const categoriasOrdenadas = categorias.sort((categoriaA, categoriaB) => {
    return categoriaA.tipo.localeCompare(categoriaB.tipo);
  });

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  const carregandoCategoria = !categoria.tipo;

  // console.log(JSON.stringify(produto));

  return (
    <div className="container mx-auto flex flex-col items-center pb-16 pt-4">
      <h2 className="my-8 text-center text-4xl">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h2>

      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={gerarNovoProduto}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="text"
            placeholder="Insira aqui o nome do Produto"
            name="nome"
            maxLength={255}
            required
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="slug">Slug do produto</label>
          <input
            value={produto.slug}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="text"
            placeholder="Insira aqui o Slug"
            name="slug"
            maxLength={255}
            required
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Porcentagem Desconto</label>
          <input
            value={produto.porcentagemDesconto}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="number"
            placeholder="Insira aqui a porcentagem de desconto"
            name="porcentagemDesconto"
            required
            min={0}
            max={99}
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Preço do Produto</label>

          <input
            value={produto.basePreco}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="number"
            placeholder="Adicione aqui o preço do Produto"
            name="basePreco"
            required
            step="0.010"
            min={0}
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Descrição do Produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="text"
            placeholder="Insira aqui o descrição do Produto"
            name="descricao"
            maxLength={1000}
            required
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Foto do Produto</label>

          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e, categoria)
            }
            type="text"
            placeholder="Adicione aqui a foto do Produto"
            name="foto"
            maxLength={2000}
            required
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do Produto</p>
          <select
            name="categoria"
            id="categoria"
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categoriasOrdenadas.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.tipo}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={carregandoCategoria || isLoading}
          className=" flex cursor-pointer justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90 focus:bg-primary/90 disabled:cursor-default disabled:bg-primary/50"
        >
          {isLoading ? (
            <Spinner
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
