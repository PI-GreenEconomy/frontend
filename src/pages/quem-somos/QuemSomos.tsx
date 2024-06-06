import { useEffect, useState } from "react";

interface Participante {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  foto: string;
}

const participantes: Participante[] = [
  {
    id: 1,
    nome: "Maria Eduarda",
    cargo: "Desenvolvedora Full Stack",
    descricao: "Descrição.",
    foto: "src/assets/team/1.jpg",
  },
  {
    id: 2,
    nome: "Joyce",
    cargo: "Desenvolvedora Full Stack",
    descricao: "Descrição",
    foto: "src/assets/team/2.jpg",
  },
  {
    id: 3,
    nome: "Stephanie",
    cargo: "Desenvolvedora Full Stack",
    descricao: "Descrição.",
    foto: "src/assets/team/3.jpg",
  },
  {
    id: 4,
    nome: "Ingrid",
    cargo: "Desenvolvedora Full Stack",
    descricao: "Descrição.",
    foto: "src/assets/team/4.jpg",
  },
  {
    id: 5,
    nome: "Jorge",
    cargo: "Full Stack Developer",
    descricao: "Descrição.",
    foto: "src/assets/team/5.jpg",
  },
  {
    id: 6,
    nome: "Henrique",
    cargo: "Full Stack Developer",
    descricao: "Descrição.",
    foto: "src/assets/team/6.jpg",
  },
  {
    id: 7,
    nome: "Caio",
    cargo: "Full Stack Developer",
    descricao: "Descrição.",
    foto: "src/assets/team/7.jpg",
  },
  {
    id: 8,
    nome: "Lucas",
    cargo: "Full Stack Developer",
    descricao: "Descrição.",
    foto: "src/assets/team/8.jpg",
  },
  {
    id: 9,
    nome: "Filipe",
    cargo: "Full Stack Developer",
    descricao: "Descrição.",
    foto: "src/assets/team/9.jpg",
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

  return (
    <div className="bg-green-700 py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-bold mb-8 text-center text-3xl text-white sm:text-5xl md:text-6xl">
          Quem Somos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                {/* Container de coluna flexível */}
                <div className="flex flex-col items-center">
                  {/* Imagem do participante em preto e branco com borda branca */}
                  <img
                    src={participante.foto}
                    alt={participante.nome}
                    className="h-auto w-3/4 rounded-lg object-cover grayscale transition-transform duration-300 hover:scale-105"
                    style={{
                      border: "4px solid white",
                      filter:
                        hoveredCard === index ? "none" : "grayscale(100%)",
                    }}
                  />
                  {/* Informações do participante */}
                  <div className="w-3/4 p-6 text-center">
                    <h3 className="mb-2 text-xl font-bold text-gray-800">
                      {participante.nome}
                    </h3>
                    <p className="mb-2 text-gray-600">{participante.cargo}</p>
                    <p className="text-gray-600">{participante.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
