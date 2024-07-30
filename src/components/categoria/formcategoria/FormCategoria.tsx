/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useCategoria } from "../../../hooks/useCategoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Spinner } from "../../ui/Spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../ui/Dialog";
import { iconsArray, iconsCategoria } from "../../../data/iconCategorias";

function FormCategoria() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const navigate = useNavigate();

  const [iconeSelecionado, setIconeSelecionado] = useState("default");

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
            id="tipo"
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
            id="slug"
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
            maxLength={255}
            required
            value={categoria.slug}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="cursor-default">Ícone Categoria</p>
          <Dialog>
            <DialogTrigger className="text-2x w-fit rounded-sm border border-border p-1">
              <span className="*:size-11">
                {iconsCategoria[categoria.icone || iconeSelecionado]}
              </span>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[480px]">
              <span className="font-medium text-foreground/70">
                Escolha um ícone
              </span>
              <ul className="grid grid-cols-4 justify-between gap-4 sm:grid-cols-8">
                {iconsArray.map(({ key, icon }) => (
                  <DialogClose
                    onClick={() => setIconeSelecionado(key)}
                    className="p-0"
                    key={key + icon}
                  >
                    <label htmlFor={key}>
                      <li className="group cursor-pointer transition-all hover:scale-[1.05]">
                        <input
                          type="radio"
                          name="icone"
                          value={key}
                          id={key}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                          }
                          className="hidden"
                        />
                        <span className="*:size-9 group-hover:*:stroke-primary">
                          {icon as any}
                        </span>
                      </li>
                    </label>
                  </DialogClose>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
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
