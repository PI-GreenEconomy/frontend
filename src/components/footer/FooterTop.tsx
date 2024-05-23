import { Facebook, Figma, Github, Instagram, Mail, MapPin } from "lucide-react";

export const FooterTop = () => {
  return (
      <>
          <div className="w-screen flex justify-around">
              <div className="flex justify-evenly">
                
                  {/* Logo e descrição */}
                  <div className="w-3/12 mb-6">
                      <img
                          src="src/assets/Logo.svg"
                          alt="Green Economy Logo"
                          className="h-12 mb-4"
                      />
                      <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                      </p>
                  </div>

                  {/* Categorias */}
                  <div className="w-1/12 mb-6">
                      <p className="font-bold mb-2 text-base">Categorias</p>
                      <ul className="text-sm">
                          <li className="py-1">Vestuário</li>
                          <li className="py-1">Alimento</li>
                          <li className="py-1">Higiene</li>
                          <li className="py-1">Pets</li>
                          <li className="py-1">Casa</li>
                          <li className="py-1">Papelaria</li>
                          <li className="py-1">Utensílios</li>
                          <li className="py-1">Artesanal</li>
                          <li className="py-1">Ofertas</li>
                      </ul>
                  </div>

                  {/* Desenvolvedores */}
                  <div className="mb-6">
                      <p className="font-bold mb-2 text-base">
                          Desenvolvedores
                      </p>
                      <ul className="text-sm">
                          <li className="py-1">Caio Pereira</li>
                          <li className="py-1">Filipe Santiago</li>
                          <li className="py-1">Ingrid Alves</li>
                          <li className="py-1">Jorge Flávio</li>
                          <li className="py-1">Joyce Ramos</li>
                          <li className="py-1">Lucas Ramires</li>
                          <li className="py-1">Luiz Henrique</li>
                          <li className="py-1">Maria Eduarda</li>
                          <li className="py-1">Stephanie Steuernagel</li>
                      </ul>
                  </div>

                  {/* Institucional */}
                  <div className="mb-6">
                      <p className="font-bold mb-2 text-base">Institucional</p>
                      <ul className="text-sm">
                          <li className="py-1">Início</li>
                          <li className="py-1">Produtos</li>
                          <li className="py-1">Sobre</li>
                          <li className="py-1">Nossa Missão</li>
                          <li className="py-1">Entrar</li>
                          <li className="py-1">Cadastrar</li>
                      </ul>
                  </div>

                  {/* Contato */}
                  <div className="mb-6">
                      <p className="font-bold mb-2 text-base">Contato</p>
                      <div className="w-[250px] mb-8">
                          <div className="flex gap-3 mb-2 items-center justify-center w-11/12">
                              <MapPin />
                              <p className="text-sm">
                                  Rua nova Esperança, 700
                                  <br />
                                  Rio de Janeiro, Brasil 20815
                              </p>
                          </div>

                          <div className="flex gap-3 items-center justify-center">
                              <Mail />
                              <p className="text-sm">
                                  greenconomyofc@gmail.com
                              </p>
                          </div>
                      </div>
                      <div className="mt-4">
                          <p className="font-bold mb-2">Siga-nos</p>
                          <div className="flex gap-3">
                              <Github />
                              <Figma />
                              <Instagram />
                              <Facebook />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};
