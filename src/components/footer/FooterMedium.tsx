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
              <img
                className="h-7"
                src={IMAGES.Visa}
                alt="Visa"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.MasterCard}
                alt="Mastercard"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.Elo}
                alt="Elo"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.Caixa}
                alt="Caixa"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.BancoDoBrasil}
                alt="Banco do Brasil"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.Bradesco}
                alt="Bradesco"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.Boleto}
                alt="Boleto"
                width={36}
                height={24}
                loading="lazy"
              />
            </li>
            <li>
              <img
                className="h-7"
                src={IMAGES.Pix}
                alt="Pix"
                width={24}
                height={24}
                loading="lazy"
              />
            </li>
          </ul>
        </div>

        {/* Formas de Entrega */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Formas de Entrega</p>
          <ul className="flex items-center gap-3">
            <li>
              <img
                src={IMAGES.Correios}
                alt="Correios"
                width={111}
                height={33}
                loading="lazy"
              />
            </li>
            <li>
              <img
                src={IMAGES.Jadlog}
                alt="Jadlog"
                width={109}
                height={27}
                loading="lazy"
              />
            </li>
            <li>
              <img
                src={IMAGES.RetireLoja}
                alt="Retire na loja"
                width={72}
                height={50}
                loading="lazy"
              />
            </li>
          </ul>
        </div>

        {/* Selos de Segurança */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Selos de Segurança</p>
          <ul className="flex flex-col gap-3">
            <li>
              <img
                src={IMAGES.GoogleSeguro}
                alt="Loja Segura com Google"
                width={118}
                height={42}
                loading="lazy"
              />
            </li>
            <li>
              <img
                src={IMAGES.SSLSecurity}
                alt="SSL Seguro"
                width={80}
                height={42}
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
