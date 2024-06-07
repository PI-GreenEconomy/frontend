import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import QuemSomosBody2 from "./QuemSomosBody2";

interface Participante {
  id: number;
  nome: string;
  cargo: string;
  foto: string;
  github?: string;
  linkedin?: string;
}

const participantes: Participante[] = [
  {
    id: 1,
    nome: "Caio Pereira dos Santos",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/gifs/7.gif?updatedAt=1717726863327",
    github: "https://github.com/SenhorKaioh",
    linkedin: "https://www.linkedin.com/in/caio-pereira-dos-santos-dev/",
  },
  {
    id: 2,
    nome: "Filipe",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/gifs/9.gif?updatedAt=1717726863321",
    github: "https://github.com/DEVnaoCry",
    linkedin: "https://www.linkedin.com/in/falecomsanti/",
  },
  {
    id: 3,
    nome: "Henrique Vieira",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/gifs/6.gif?updatedAt=1717726863916",
    github: "https://github.com/hrvieira",
    linkedin: "https://www.linkedin.com/in/luizhrvieira/",
  },
  {
    id: 4,
    nome: "Ingrid Alves",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/hh6spzw2rv/4.gif?updatedAt=1717727318927",
    github: "https://github.com/Ind-ALL",
    linkedin: "https://www.linkedin.com/in/ingrid-alves-ads96/",
  },
  {
    id: 5,
    nome: "Jorge Guedes",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/hh6spzw2rv/5.gif?updatedAt=1717727318579",
    github: "https://github.com/jorgeguedess",
    linkedin: "https://www.linkedin.com/in/jorgeguedess/",
  },
  {
    id: 6,
    nome: "Joyce Ramos",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/hh6spzw2rv/6.gif?updatedAt=1717727329402",
    github: "https://github.com/joycervs",
    linkedin: "https://www.linkedin.com/in/joycervs/",
  },
  {
    id: 7,
    nome: "Maria Eduarda",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/GreenEconomy/gifs/1.gif?updatedAt=1717727256722",
    github: "https://github.com/MariaBenitesJones",
    linkedin: "https://www.linkedin.com/in/maria-eduarda-jones/",
  },
  {
    id: 8,
    nome: "Lucas Ramires",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/hh6spzw2rv/8.gif?updatedAt=1717727318777",
    github: "https://github.com/Lucas-Ramires",
    linkedin: "https://www.linkedin.com/in/lucasrdev/",
  },
  {
    id: 9,
    nome: "Stephanie Steuernagel",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/hh6spzw2rv/9.gif?updatedAt=1717727318516",
    github: "https://github.com/StephanieSST",
    linkedin: "https://www.linkedin.com/in/stephanie-steuernagel-tavares/",
  },
];

// Componente QuemSomos
function QuemSomos() {
  // Estados para o slide atual e o card que está sendo hoverado
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Efeito para trocar o slide automaticamente a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 3) % participantes.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 3) % participantes.length);
  };
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 3 + participantes.length) % participantes.length,
    );
  };

  // Função para gerar os links de participante
  const generateSocialLinks = (participante: Participante) => (
    <div className="mb-1 flex items-center justify-center">
      {participante.github && (
        <a
          href={participante.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-7 text-green-900 hover:text-gray-900"
        >
          <FaGithub size={50} />
        </a>
      )}
      {participante.linkedin && (
        <a
          href={participante.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-900 hover:text-gray-900"
        >
          <FaLinkedin size={50} />
        </a>
      )}
    </div>
  );

  // Renderização do componente
  return (
    <>
      <QuemSomosBody2 />
      <div className="bg-green-800 py-12 md:py-8">
        <div className="container mx-auto">
          {/* Título */}
          <h2 className="text-bold text-shadow mb-8 text-center font-poppins text-3xl text-white sm:text-5xl md:text-6xl">
            Quem Somos
          </h2>

          {/* Grid de participantes */}
          <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
            {participantes
              .slice(currentSlide, currentSlide + 3)
              .map((participante, index) => (
                <div
                  key={participante.id}
                  className={`overflow-hidden rounded-lg border border-gray-700 bg-green-600 ${
                    hoveredCard === index ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform:
                      hoveredCard === index
                        ? "scale(1.05) rotate(2deg)"
                        : "scale(1)",
                    transition: "transform 0.3s ease",
                    boxShadow:
                      hoveredCard === index
                        ? "0 10px 20px rgba(0,0,0,0.4)"
                        : "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    {/* Imagem do participante */}
                    <img
                      src={participante.foto}
                      alt={`${participante.nome} Foto`}
                      className="mt-7 h-auto w-3/4 rounded-lg object-cover grayscale transition-transform duration-300 hover:scale-105"
                      style={{
                        border: "4px solid #239e1a",
                        filter:
                          hoveredCard === index ? "none" : "grayscale(100%)",
                        boxShadow:
                          hoveredCard === index
                            ? "0 15px 30px rgba(0,0,0,0.5)"
                            : "none", // Adicionando sombra para dar profundidade quando o mouse está sobre a imagem
                      }}
                    />

                    {/* Informações do participante */}
                    <div className="w-3/4 p-6 text-center">
                      <h3 className="mb-3 font-newsreader text-xl font-bold text-white">
                        {participante.nome}
                      </h3>
                      <p className="mb-5 text-white">{participante.cargo}</p>
                      {generateSocialLinks(participante)}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Botões de navegação */}
          <div
            className="mt-6 flex justify-center"
            style={{ backgroundColor: "#01c88c" }}
          >
            <button
              onClick={handlePrevSlide}
              className="bg-yellow mr-4 rounded px-4 py-2 text-white hover:bg-green-900"
            >
              Anterior
            </button>
            <button
              onClick={handleNextSlide}
              className="bg-yellow rounded px-4 py-2 text-white hover:bg-green-900"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
/*       ___________________
        /                   \
        |_Sem_tempo_irmão...|
_ ___  o_.
 ___  /| !
___ ,/ |
__ ### |\  
__ ###/  \,   _aqui deixo minha contriubuição: https://devncry.com
     `
*/

export default QuemSomos;
