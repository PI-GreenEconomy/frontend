import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../cardcategoria/CardCategoria";
import { AuthContext } from "../../../contexts/AuthContext";

function ListarCategorias() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        alert("O token expirou!");
        handleLogout();
      }
    }
  }

  /*useEffect(() => {
      if (token === '') {
      alert("Você precisa estar logado.");
      navigate('/login');
      }
  },
      [token]); */

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
      <div
        className="
                flex 
                justify-center 
                bg-gray-200
                "
      >
        <div className="container my-4 flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
