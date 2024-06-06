export const NewsLetter = () => {
  return (
    <article className="w-full bg-[#0A6847] py-12 text-white">
      <div className="container flex items-center  justify-between">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-semibold">
            Inscreva-se na nossa Newsletter 💚
          </h4>
          <p className="max-w-[60ch] text-base text-[#E7F0ED]">
            Receba dicas de sustentabilidade, lançamentos eco-friendly e ofertas
            especiais. Seja parte da mudança!
          </p>
        </div>

        <div className="relative order-1 flex w-full max-w-[580px] rounded-xl bg-white text-foreground lg:order-none lg:flex-1">
          <input
            className="font-roboto w-full rounded-xl border border-solid border-border p-6 text-base font-medium outline-none placeholder:font-medium placeholder:text-[#4B5563]"
            type="text"
            placeholder="Digite seu e-mail"
          />
          <button className="group absolute right-1 top-1 flex rounded-xl bg-primary px-6 py-5 uppercase text-white outline-none hover:bg-primary/90">
            Inscrever
          </button>
        </div>
      </div>
    </article>
  );
};
