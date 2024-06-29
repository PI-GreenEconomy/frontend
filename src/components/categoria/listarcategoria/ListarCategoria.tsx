import { useEffect, useState } from "react";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useCategoria } from "../../../hooks/useCategoria";
import { Loading } from "../../ui/Loading";

function ListarCategorias() {
  const { buscarCategorias, categorias } = useCategoria();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleBuscarCategorias = async () => {
      setIsLoading(true);
      try {
        await buscarCategorias();
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    handleBuscarCategorias();
  }, [categorias.length]);

  if (isLoading && categorias.length === 0)
    return <Loading height="80" width="80" color="#4fa94d" />;

  return (
    <>
      <div className="flex w-full justify-center py-8">
        <div className="container flex flex-col">
          <h2 className="flex justify-center text-3xl font-bold">Categorias</h2>

          {!isLoading && categorias.length === 0 && (
            <h1 className="py-8 text-center text-3xl">
              Nenhuma Categoria foi encontrada!
            </h1>
          )}

          <div className="grid w-[80%] grid-cols-1 gap-8 self-center py-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;
