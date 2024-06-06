import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    nome: "Maria Eduarda",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/maria.jpg?updatedAt=1717638773138",
    github: "https://github.com/MariaBenitesJones",
    linkedin: "https://www.linkedin.com/in/maria-eduarda-jones/",
  },
  {
    id: 2,
    nome: "Joyce Ramos",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/joyce.jpg?updatedAt=1717638773697",
    github: "https://github.com/joycervs",
    linkedin: "https://www.linkedin.com/in/joycervs/",
  },
  {
    id: 3,
    nome: "Stephanie Steuernagel",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/stephanie.jpg?updatedAt=1717638774816",
    github: "https://github.com/StephanieSST",
    linkedin: "https://www.linkedin.com/in/stephanie-steuernagel-tavares/",
  },
  {
    id: 4,
    nome: "Ingrid Alves",
    cargo: "Desenvolvedora Full Stack",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/ingrid.jpg?updatedAt=1717638772984",
    github: "https://github.com/Ind-ALL",
    linkedin: "https://www.linkedin.com/in/ingrid-alves-ads96/",
  },
  {
    id: 5,
    nome: "Jorge Guedes",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/jorge.jpg?updatedAt=1717638772875",
    github: "https://github.com/jorgeguedess",
    linkedin: "https://www.linkedin.com/in/jorgeguedess/",
  },
  {
    id: 6,
    nome: "Henrique Vieira",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/henrique.jpg?updatedAt=1717638773093",
    github: "https://github.com/hrvieira",
    linkedin: "https://www.linkedin.com/in/luizhrvieira/",
  },
  {
    id: 7,
    nome: "Caio Pereira dos Santos",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/caio.jpg?updatedAt=1717638773798",
    github: "https://github.com/SenhorKaioh",
    linkedin: "https://www.linkedin.com/in/caio-pereira-dos-santos-dev/",
  },
  {
    id: 8,
    nome: "Lucas Ramires",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/Lucas.jpg?updatedAt=1717676952299",
    github: "https://github.com/Lucas-Ramires",
    linkedin: "https://www.linkedin.com/in/lucasrdev/",
  },
  {
    id: 9,
    nome: "San",
    cargo: "Full Stack Developer",
    foto: "https://ik.imagekit.io/GreenEconomy/Foto_SobreNos/san.jpg?updatedAt=1717638773324",
    github: "https://github.com/DEVnaoCry",
    linkedin: "https://www.linkedin.com/in/falecomsanti/",
  },
];

function QuemSomos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 3) % participantes.length);
    }, 5000);

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

  const generateSocialLinks = (participante: Participante) => (
    <div className="mb-2 flex items-center justify-center">
      {participante.github && (
        <a
          href={participante.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 text-gray-900 hover:text-gray-900"
        >
          <FaGithub />
        </a>
      )}
      {participante.linkedin && (
        <a
          href={participante.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
  );

  return (
    <div className="bg-green-800 py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-bold mb-8 text-center text-3xl text-white sm:text-5xl md:text-6xl">
          Quem Somos
        </h2>
        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
          {participantes
            .slice(currentSlide, currentSlide + 3)
            .map((participante, index) => (
              <div
                key={participante.id}
                className={`overflow-hidden rounded-lg border border-gray-300 bg-white ${
                  hoveredCard === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  boxShadow:
                    hoveredCard === index
                      ? "0 10px 20px rgba(0,0,0,0.2)"
                      : "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={participante.foto}
                    alt={`${participante.nome} Foto`}
                    className="h-auto w-3/4 rounded-lg object-cover grayscale transition-transform duration-300 hover:scale-105"
                    style={{
                      border: "4px solid white",
                      filter:
                        hoveredCard === index ? "none" : "grayscale(100%)",
                    }}
                  />
                  <div className="w-3/4 p-6 text-center">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {participante.nome}
                    </h3>
                    <p className="mb-2 text-gray-900">{participante.cargo}</p>
                    {generateSocialLinks(participante)}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handlePrevSlide}
            className="bg-dark-green mr-4 rounded px-4 py-2 text-white hover:bg-green-900"
          >
            Anterior
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-dark-green rounded px-4 py-2 text-white hover:bg-green-900"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
