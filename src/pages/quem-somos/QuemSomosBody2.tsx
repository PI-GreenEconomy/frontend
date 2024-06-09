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
            src="https://s3-alpha-sig.figma.com/img/6944/aabd/efee0823a7432c9f61adcd019f14e196?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nyrB3ACnZb0bPyDQF6xWnUHq5lKNL--q926DoMlSzYpJSL4GzCeyrPFaZuvrPaP~Kc3fgDCSeL3qg1w1N9E3bFY1N8yTzBM1X6y52fTGtRzekyFT32-d1AUygLUw~hHwi9LyawRzEfvGUiTR8W~vhiaeF890gN6JKn750lGSjcicIZJf~lXorPgrHVr2Du0~3KkRhjT5aD-S14Xvo4MXaEzIlTb5R-eEjjxR4pY7HTEFKyShn44oq8H1J77i78AT2IIp-5M86aW0~DkUr4B1XWKiau3UVZ8uDdhldzIjPUfWRScDDaFaSyW8duSttWqldoXmYsUEC7K8Y~qEpUCvQA__"
            alt="Foto 1"
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
            src="https://ik.imagekit.io/fxpct4486/ImgLinks/mulher%20(1).png?updatedAt=1717636806793"
            alt="Foto 3"
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
            src="https://ik.imagekit.io/fxpct4486/ImgLinks/mao%20(1).png?updatedAt=1717638558779"
            alt="Foto 5"
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
