import { Link } from "react-router-dom";
import ScrollToTop from "../../../components/ScrollToTop";

export const PaginaBoleto = () => {
  const currentDate = new Date();
  const boletoDueDate = addDays(currentDate, 2);

  return (
    <>
      <ScrollToTop />
      <div className="container flex flex-col items-center justify-center gap-4 py-10">
        <h1 className="text-lg font-medium text-primary sm:text-xl md:text-2xl lg:text-4xl">
          Recebemos seu Pedido
        </h1>
        <div>
          Nº do pedido:{" "}
          <span className="text-base font-medium text-primary sm:text-lg md:text-xl lg:text-3xl">
            {numeroPedido}
          </span>
        </div>
        <p>
          Você receberá uma cópia do seu pedido com detalhes por e-mail e um
          link para acompanhamento.
        </p>
        <p>
          Esse boleto vence em <strong>{formatDateTime(boletoDueDate)}</strong>.
          Após o vencimento o pedido será cancelado.
        </p>
        <Link
          to={"/produtos"}
          className="mx-auto mb-px flex w-full max-w-3xl justify-center bg-primary py-4 font-medium uppercase text-white hover:bg-[#157554]"
        >
          Continuar Comprando
        </Link>
      </div>
    </>
  );
};

const numeroPedido = Math.floor(Math.random() * (770 - 1 + 1)) + 1;

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatDateTime = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
