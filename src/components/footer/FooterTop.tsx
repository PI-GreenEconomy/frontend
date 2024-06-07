import { Facebook, Figma, Github, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { links } from "../../data/linksMenu";
import { IMAGES } from "../../data/imageIcons";
import { useCategoria } from "../../hooks/useCategoria";

export const FooterTop = () => {
  const { categorias } = useCategoria();

  return (
    <div className="flex w-full justify-around gap-2 bg-white py-16">
      <div className="container flex flex-wrap justify-start gap-x-6 gap-y-12 sm:justify-between sm:gap-y-8">
        {/* Logo e descrição */}
        <div className="flex flex-col items-start gap-3">
          <img
            src={IMAGES.Logo}
            alt="Green Economy Logo"
            className="mb-3 h-16"
          />
          <p className="text-white-600 w-full max-w-[90%] text-base leading-6 sm:max-w-72">
            Economia <span className="font-semibold text-[#126447]">verde</span>{" "}
            para um futuro sustentável e de consumo responsável. Uma nova forma
            de ver o mundo, o mercado e a economia
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Categorias</p>
          <ul className="flex flex-col gap-2">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link
                  to={`/produtos/categoria/${categoria.slug}`}
                  className="py-2 text-sm hover:text-primary focus-visible:text-primary"
                >
                  {categoria.tipo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
                <Link to={"https://linktr.ee/Greenconomy"} className="group">
                  <Figma className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
                <Link to={"https://linktr.ee/Greenconomy"} className="group">
                  <Instagram className="group-hover:text-primary group-focus-visible:text-primary" />
                </Link>
                <Link to={"https://linktr.ee/Greenconomy"} className="group">
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
