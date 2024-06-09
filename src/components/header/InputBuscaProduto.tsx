import { SearchIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBusca } from "../../hooks/useBusca";

export const InputBuscaProduto = () => {
  const { keyword, setKeyWord } = useBusca();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const localkey = pathname.replace("/busca/", "");

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword.trim().length === 0 || localkey === keyword) return;

    if (keyword.trim()) {
      navigate(`/busca/${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <form
      onSubmit={searchHandler}
      className="relative order-1 flex w-full rounded-xl lg:order-none lg:flex-1"
    >
      <input
        className="font-roboto w-full rounded-xl border border-solid border-border px-6 py-2 text-base font-medium outline-none placeholder:font-medium placeholder:text-muted-foreground focus:border-gray-500"
        type="text"
        placeholder="Buscar Produto"
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <button className="group absolute right-0 top-0 flex rounded-xl px-3 py-2 text-muted-foreground outline-none">
        <SearchIcon className="group-focus-visible:text-gray-500" />
      </button>
    </form>
  );
};
