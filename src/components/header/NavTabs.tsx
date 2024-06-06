import { ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { ToastAlerta } from "../../utils/ToastAlerta";

const NavTabs = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const usuarioAdministrador =
    usuario.funcao === "VENDEDOR" || usuario.funcao === "ADMIN";

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <ul className="inline">
      <li className="mr-1"></li>
      <li className="relative mr-1">
        <a
          className="right-10 inline-block cursor-pointer  bg-white px-4 py-2 text-black hover:text-blue-700"
          onClick={toggleDropdown}
        >
          <ChevronDown className="ml-1 inline h-4 w-4" />
        </a>
        {isDropdownOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseLeave={closeDropdown}
          >
            <Link
              to={"/perfil"}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Perfil
            </Link>
            {usuarioAdministrador && (
              <>
                <Link
                  to={"/seusprodutos"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Seus Produtos
                </Link>
                <Link
                  to={"/cadastrarproduto"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Cadastrar Produto
                </Link>
                <Link
                  to={"/categorias"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Categorias
                </Link>
                <Link
                  to={"/cadastrarcategoria"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Cadastrar Categoria
                </Link>
              </>
            )}
            <div className="border-t border-gray-100"></div>
            <Link
              to={"/login"}
              onClick={logout}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sair
            </Link>
          </div>
        )}
      </li>
      <li className="mr-1"></li>
      <li className="mr-1"></li>
    </ul>
  );
};

export default NavTabs;
