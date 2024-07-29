import { useContext, useEffect, ChangeEvent, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useProduto } from "../../../hooks/useProduto";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useCategoria } from "../../../hooks/useCategoria";
import { Spinner } from "../../ui/Spinner";
import useUploadImagem from "../../../hooks/useUploadImage";
import { transformarFotoProduto } from "../../../utils/fotoProduto";
import { CameraIcon } from "lucide-react";

function FormProduto() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const fileInputRef = useRef(null);

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

  const { progresso, erroUpload, enviarImagem } = useUploadImagem();
  const [imagem, setImagem] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

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

  const categoriasOrdenadas = categorias.sort((categoriaA, categoriaB) => {
    return categoriaA.tipo.localeCompare(categoriaB.tipo);
  });

  const isFileTypeAccepted = (fileType: string) => {
    const acceptedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];
    return acceptedTypes.includes(fileType);
  };

  const handleImagemChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFile = e.target.files[0];

      if (!isFileTypeAccepted(imageFile.type)) {
        alert(
          "Por favor, selecione apenas arquivos do tipo .jpg, .jpeg, .png ou .webp.",
        );
        return;
      }

      setImagem(imageFile);
      setPreviewImage(URL.createObjectURL(imageFile));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let urlImagem = "";

      if (imagem) {
        urlImagem = await enviarImagem("/images/upload", imagem, "produtos");
      }

      const produtoAtualizado = {
        ...produto,
        foto: transformarFotoProduto(urlImagem || produto.foto || ""),
      };

      setProduto(produtoAtualizado);

      await gerarNovoProduto(e, produtoAtualizado);
    } catch (error) {
      console.error("Ocorreu um erro ao enviar a imagem:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center pb-16 pt-4">
      <h2 className="my-8 text-center text-4xl">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h2>

      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={handleSubmit}
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
          <p>Foto do Produto</p>
          <label
            htmlFor="fileInput"
            className="w-fit cursor-pointer"
            aria-label="Mudar Foto"
          >
            <input
              type="file"
              ref={fileInputRef}
              id="fileInput"
              onChange={handleImagemChange}
              className="hidden"
              accept=".jpg, .jpeg, .png, .webp"
              multiple={false}
            />
            <div className="relative h-64">
              <img
                src={transformarFotoProduto(
                  previewImage || produto.foto || previewImage || "",
                )}
                className="h-full rounded object-contain"
                width={263}
                height={256}
              />
              <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black/60 transition-colors hover:bg-black/20">
                <CameraIcon className="text-white" />
              </div>
            </div>
          </label>

          {erroUpload && <p className="text-red-500">{erroUpload}</p>}
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
          disabled={carregandoCategoria || isLoading || progresso !== 0}
          className=" flex cursor-pointer justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90 focus:bg-primary/90 disabled:cursor-default disabled:bg-primary/50"
        >
          {isLoading || progresso ? (
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
