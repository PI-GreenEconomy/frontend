export const NewsLetter = () => {
  return (
    <div className="flex gap-8 bg-primary py-12 text-white opacity-95">
      <div className="flex flex-col gap-4">
        <h1 className="ps-20 text-4xl font-bold">
          Inscreva-se na nossa Newsletter 💚
        </h1>
        <p className="font-roboto ps-8 text-lg opacity-95">
          Receba dicas de sustentabilidade, lançamentos eco-friendly e ofertas
          especiais.{" "}
          <span className="font-semibold text-green-100">
            Seja parte da mudança!
          </span>
        </p>
      </div>

      <div className="my-3 flex gap-24 rounded-lg bg-white text-slate-900 opacity-95">
        <input
          className="rounded-lg px-32 ps-4 outline-none placeholder:text-lg placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu e-mail"
        />
        <button className="my-2 rounded-lg bg-primary px-5 font-semibold text-slate-100 opacity-95">
          INSCREVER
        </button>
      </div>
    </div>
  );
};
