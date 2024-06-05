import { ChevronDown } from "lucide-react";
import { useState } from "react";

const NavTabs = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
          href="#"
        >
          <ChevronDown className="ml-1 inline h-4 w-4" />
        </a>
        {isDropdownOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseLeave={closeDropdown}
          >
            <a
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              Perfil
            </a>
            <a
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              Seus Produtos
            </a>
            <a
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              Cadastrar Produtos
            </a>
            <div className="border-t border-gray-100"></div>
            <a
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="#"
            >
              Sair - implementar
            </a>
          </div>
        )}
      </li>
      <li className="mr-1"></li>
      <li className="mr-1"></li>
    </ul>
  );
};

export default NavTabs;
