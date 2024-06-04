/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useCategoria } from "../../../hooks/useCategoria";

function ListarCategorias() {
  const { buscarCategorias, categorias } = useCategoria();

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex w-full justify-center py-8">
        <div className="container flex flex-col">
          <h2 className="flex justify-center text-3xl font-bold">Categorias</h2>
          <div className="grid grid-cols-1 gap-8 py-8 ps-10 md:grid-cols-2 lg:grid-cols-3">
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
