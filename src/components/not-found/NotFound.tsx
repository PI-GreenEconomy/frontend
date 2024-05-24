import { Link } from "react-router-dom";
import NotFound404 from "../../assets/404.svg";

export const NotFound = () => {
  return (
    <section className="flex w-full items-center bg-gray-50 py-16">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="w-full max-w-md text-center">
          <div>
            <img src={NotFound404} alt="Erro 404" />
          </div>
          <p className="text-2xl font-semibold md:text-3xl">
            Desculpe, não conseguimos encontrar esta página.
          </p>
          <p className="mb-8 mt-4 text-gray-600">
            Mas não se preocupe, você pode encontrar muitas outras coisas em
            nossa página inicial.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="inline-block rounded border-2 border-solid border-primary px-4 py-2  font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white"
          >
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </section>
  );
};
