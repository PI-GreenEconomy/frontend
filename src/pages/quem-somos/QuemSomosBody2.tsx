export default function QuemSomosBody2() {
  return (
    // principal
    <div className="text-white">
      {/* container1 */}
      <div className="bg-bemvindoMobile bg-cover bg-no-repeat sm:bg-bemvindo md:py-12">
        {/* TESTE INICIO */}
        <div className="md:container">
          <div className="flex w-full flex-col gap-2 bg-primary/50 py-6 pl-10 pr-20 md:w-fit md:gap-4">
            <h1 className="font-poppins text-2xl font-semibold md:text-6xl">
              Green Economy
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-7 md:text-2xl">
              Economia verde para um futuro sustentável e de consumo
              responsável. Uma nova forma de ver o mundo, o mercado e a economia
            </p>
          </div>
        </div>
      </div>
      {/* TESTE FINAL */}

      {/* container2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <img
            src="https://ik.imagekit.io/GreenEconomy/Quem_Somos/plantando.jpg?updatedAt=1719671457115"
            alt="Duas pessoas num campo examinando uma planta jovem. Um segura um tablet e o outro usa luvas e manuseia a planta"
            className="h-auto w-full"
          />
        </div>
        <div className="mx-auto flex flex-col bg-[#b27538] text-center text-white">
          <div className="align-center py-8 font-poppins">
            <h1 className="text-new mb-3 font-poppins text-2xl font-semibold md:text-5xl">
              Visão
            </h1>
            <p className="mx-8 text-xl">
              Ser uma plataforma de e-commerce sustentável em promover práticas
              de consumo e impulsionar a economia verde
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://ik.imagekit.io/GreenEconomy/Quem_Somos/mulher.jpg?updatedAt=1719671456556"
            alt="Uma mulher usando chapéu de palha e macacão segurando um tablet enquanto está em uma estufa com várias plantas"
            className="h-auto w-full"
          />
        </div>
        {/* Fotos na parte inferior */}
        <div className="mx-auto flex flex-col bg-[#b27538] py-8 text-center text-white">
          <div className="align-center">
            <h1 className="mb-3 font-poppins text-2xl font-semibold md:text-5xl">
              Missão
            </h1>
            <p className="mx-8 text-xl">
              Oferecer aos consumidores acesso a produtos ecológicos e
              sustentáveis, educando e inspirando mudanças nos hábitos de
              consumo que contribuam para a preservação do meio ambiente e o
              bem-estar das futuras gerações.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://ik.imagekit.io/GreenEconomy/Quem_Somos/mao.jpg?updatedAt=1719671457034"
            alt="Mãos formando formato de coração no tronco de árvore coberto de musgo"
            className="h-auto w-full"
          />
        </div>
        <div className="mx-auto flex flex-col bg-[#b27538] py-8 text-center text-white">
          <div className="align-center">
            <h1 className="mb-3 font-poppins text-2xl font-semibold md:text-5xl">
              Valores
            </h1>
            <p className="mx-8 text-xl">
              Sustentabilidade, Transparência, Inovação, Educação,
              Responsabilidade Social, Qualidade, Integridade, Colaboração.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-bemvindo bg-cover bg-center bg-no-repeat text-white md:py-3">
        <div className="w-full md:px-[80px]">
          <div className="rounded-md bg-terraMobile bg-cover bg-center bg-no-repeat sm:bg-terra">
            <div className="h-auto rounded-lg font-poppins md:ml-10 md:py-[7rem]">
              <div className="w-full rounded-md bg-black/60 py-8  md:w-fit">
                <h1 className="container mb-10 max-w-2xl whitespace-nowrap font-poppins text-3xl font-medium md:text-5xl">
                  Sobre Nós
                </h1>

                <div className="container max-w-md text-left text-base  md:text-lg">
                  <p>
                    Na GreenEconomy, selecionamos rigorosamente produtos
                    ecológicos e responsáveis, garantindo sustentabilidade. Além
                    de vender produtos sustentáveis, educamos nossos clientes
                    sobre práticas de consumo consciente. Suas compras promovem
                    uma economia verde, reduzindo o impacto ambiental e
                    incentivando o uso de recursos renováveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
