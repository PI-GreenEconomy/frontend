export const FooterMedium = () => {
  return (
    <div className="flex w-full justify-around bg-gray-100 py-8 text-foreground">
      <div className="container flex w-full flex-wrap justify-between gap-x-4 gap-y-6">
        {/* Formas de Pagamento */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Formas de Pagamento</p>
          <ul className="flex gap-1">
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-visa.svg"
                alt="Visa"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-mastercard.svg"
                alt="Mastercard"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-elo.svg"
                alt="Elo"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-caixa.svg"
                alt="Caixa"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-banco-do-brasil.svg"
                alt="Banco do Brasil"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-bradesco.svg"
                alt="Bradesco"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-boleto-barcode.svg"
                alt="Boleto"
              />
            </li>
            <li>
              <img
                className="h-7"
                src="src/assets/formaspagamento/icon-pix.svg"
                alt="Pix"
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
                src="src/assets/formasentregas/correios.svg"
                alt="Correios"
              />
            </li>
            <li>
              <img src="src/assets/formasentregas/sedex.svg" alt="Sedex" />
            </li>
            <li>
              <img
                src="src/assets/formasentregas/Frame.svg"
                alt="Retire na loja"
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
                src="src/assets/selosseguranca/google-loja-segura.svg"
                alt="Loja Segura com Google"
              />
            </li>
            <li>
              <img
                src="src/assets/selosseguranca/ssl-secured.svg"
                alt="SSL Seguro"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
