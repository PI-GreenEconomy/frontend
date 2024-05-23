import { Figma, Github, Instagram, Mail, MapPin } from "lucide-react";

export const FooterTop = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-between">
        {/* Logo e descrição */}
        <div className="w-full sm:w-1/3 mb-6">
          <img src="" alt="Green Economy Logo" className="h-12 mb-4" />
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Categorias */}
        <div className="w-full sm:w-1/6 mb-6">
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
        <div className="w-full sm:w-1/6 mb-6">
          <p className="font-bold mb-2 text-base">Desenvolvedores</p>
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

        {/* Contato */}
        <div className="w-full sm:w-1/6 mb-6">
          <p className="font-bold mb-2 text-base">Contato</p>

          <div className="flex gap-2 items-center justify-center">
            <MapPin />
            <p className="text-sm">
              Rua nova Esperança, 700
              <br />
              Rio de Janeiro, Brasil 20815
            </p>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <Mail />
            <p className="text-sm">greenconomyofc@gmail.com</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">Siga-nos</p>
            <div className="flex gap-3">
              <Github />
              <Figma />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
