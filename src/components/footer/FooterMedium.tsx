import { IMAGES } from "../../data/imageIcons";

export const FooterMedium = () => {
  return (
    <div className="flex w-full justify-around bg-white py-8 text-foreground">
      <div className="container flex w-full flex-wrap justify-between gap-x-4 gap-y-6">
        {/* Formas de Pagamento */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Formas de Pagamento</p>
          <ul className="flex gap-1">
            <li>
              <img className="h-7" src={IMAGES.Visa} alt="Visa" />
            </li>
            <li>
              <img className="h-7" src={IMAGES.MasterCard} alt="Mastercard" />
            </li>
            <li>
              <img className="h-7" src={IMAGES.Elo} alt="Elo" />
            </li>
            <li>
              <img className="h-7" src={IMAGES.Caixa} alt="Caixa" />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.BancoDoBrasil}
                alt="Banco do Brasil"
              />
            </li>
            <li>
              <img className="h-7" src={IMAGES.Bradesco} alt="Bradesco" />
            </li>
            <li>
              <img className="h-7" src={IMAGES.Boleto} alt="Boleto" />
            </li>
            <li>
              <img className="h-7" src={IMAGES.Pix} alt="Pix" />
            </li>
          </ul>
        </div>

        {/* Formas de Entrega */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Formas de Entrega</p>
          <ul className="flex items-center gap-3">
            <li>
              <img src={IMAGES.Correios} alt="Correios" />
            </li>
            <li>
              <img src={IMAGES.Sedex} alt="Sedex" />
            </li>
            <li>
              <img src={IMAGES.RetireLoja} alt="Retire na loja" />
            </li>
          </ul>
        </div>

        {/* Selos de Segurança */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Selos de Segurança</p>
          <ul className="flex flex-col gap-3">
            <li>
              <img src={IMAGES.GoogleSeguro} alt="Loja Segura com Google" />
            </li>
            <li>
              <img src={IMAGES.SSLSecurity} alt="SSL Seguro" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
