export const FooterMedium = () => {
  return (
      <div className="bg-gray-100 text-gray-700 w-full flex justify-around py-8">
          <div className="flex justify-around w-[95%]">
              {/* Formas de Pagamento */}
              <div className="mb-6 sm:mb-0">
                  <p className="font-bold mb-5 text-lg">Formas de Pagamento</p>
                  <div className="flex">
                      <ul className="flex gap-1">
                          <li>
                              <img className="h-9" 
                                  src="src/assets/formaspagamento/icon-visa.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-mastercard.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-elo.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-caixa.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-banco-do-brasil.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-bradesco.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-boleto-barcode.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img className="h-9"
                                  src="src/assets/formaspagamento/icon-pix.svg"
                                  alt=""
                              />
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Formas de Entrega */}
              <div className="">
                  <p className="font-bold mb-4 text-lg">Formas de Entrega</p>
                  <div className="flex space-x-2">
                      <ul className="flex gap-2 items-center">
                          <li>
                              <img
                                  className="h-7"
                                  src="src/assets/formasentregas/correios.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img
                                  className="h-7"
                                  src="src/assets/formasentregas/sedex.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img
                                  className="h-12"
                                  src="src/assets/formasentregas/Frame.svg"
                                  alt=""
                              />
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Selos de Segurança */}
              <div className="text-right">
                  <p className="font-bold mb-4 text-lg">Selos de Segurança</p>
                  <div className="flex ">
                      <ul>
                          <li>
                              <img
                                  src="src/assets/selosseguranca/google-loja-segura.svg"
                                  alt=""
                              />
                          </li>
                          <li>
                              <img
                                  src="src/assets/selosseguranca/ssl-secured.svg"
                                  alt=""
                              />
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}