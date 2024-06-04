import { Facebook, Figma, Github, Instagram, Mail, MapPin } from "lucide-react";
import { categorias } from "../../data/categorias";
import { Link } from "react-router-dom";
import { links } from "../../data/linksMenu";

export const FooterTop = () => {
  return (
    <div className="flex w-full justify-around gap-2 py-16">
      <div className="container flex flex-wrap justify-start gap-x-6 gap-y-12 sm:justify-between sm:gap-y-8">
        {/* Logo e descrição */}
        <div className="flex flex-col items-start gap-3">
          <img
            src="src/assets/Logo.svg"
            alt="Green Economy Logo"
            className="mb-3 h-16"
          />
          <p className="max-w-[90%] text-sm leading-6 text-gray-600 sm:max-w-72">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Categorias</p>
          <ul className="flex flex-col gap-2">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link
                  to={`categorias/${categoria.slug}`}
                  className="py-2 text-sm hover:text-primary focus-visible:text-primary"
                >
                  {categoria.tipo}
                </Link>
              </li>
            ))}
            {/* <div className="">
              <li className="py-1">Vestuário</li>
              <li className="py-1">Alimento</li>
              <li className="py-1">Higiene</li>
              <li className="py-1">Pets</li>
              <li className="py-1">Casa</li>
            </div>
            <div>
              <li className="py-1">Papelaria</li>
              <li className="py-1">Utensílios</li>
              <li className="py-1">Artesanal</li>
              <li className="py-1">Ofertas</li>
            </div> */}
          </ul>
        </div>

        {/* Desenvolvedores 
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
                  </div>*/}

        {/* Institucional */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Institucional</p>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="py-2 text-sm hover:text-primary focus-visible:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={"/login"}
                className="py-2 text-sm hover:text-primary focus-visible:text-primary"
              >
                Entrar
              </Link>
            </li>
            <li>
              <Link
                to={"/cadastro"}
                className="py-2 text-sm hover:text-primary focus-visible:text-primary"
              >
                Cadastrar
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Contato</p>
          <div className="flex flex-col gap-8">
            <address className="flex w-full flex-col gap-4 not-italic">
              <div className="flex items-center gap-3">
                <MapPin />
                <p className="w-full max-w-44 text-sm">
                  Rua nova Esperança, 700 Rio de Janeiro, Brasil 20815
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Mail className="ml-[2px]" />
                <Link
                  to="mailto:greenconomyofc@gmail.com"
                  className="w-full text-sm hover:underline focus-visible:underline"
                >
                  greenconomyofc@gmail.com
                </Link>
              </div>
            </address>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-bold">Siga-nos</p>
              <div className="flex gap-3">
                <Link
                  to={"https://github.com/PI-GreenEconomy"}
                  className="group"
                  target="_blank"
                >
                  <Github className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
                <Link to={""} className="group">
                  <Figma className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
                <Link to={""} className="group">
                  <Instagram className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
                <Link to={""} className="group">
                  <Facebook className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
