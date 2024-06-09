import { useEffect } from "react";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useCategoria } from "../../../hooks/useCategoria";
import { ThreeDots } from "react-loader-spinner";

function ListarCategorias() {
  const { buscarCategorias, categorias, isLoading } = useCategoria();

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {isLoading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      {!isLoading && categorias.length === 0 && (
        <div className="py-8">
          <h1 className="text-3xl">Nenhuma Categoria foi encontrada!</h1>
        </div>
      )}

      <div className="flex w-full justify-center py-8">
        <div className="container flex flex-col">
          <h2 className="flex justify-center text-3xl font-bold">Categorias</h2>
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
