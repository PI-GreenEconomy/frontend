import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export const BotaoQuantidade = () => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade((quantidade) => (quantidade += 1));
  };

  const diminuirQuantidade = () => {
    if (quantidade === 1) return;
    setQuantidade((quantidade) => (quantidade -= 1));
  };

  return (
    <div className="flex items-center rounded border border-border bg-white">
      <button
        className="border-r border-r-border p-2"
        onClick={diminuirQuantidade}
      >
        <MinusIcon
          className="size-4 text-foreground"
          aria-label="diminuir quantidade"
        />
      </button>
      <div className="inline-block w-8 text-center text-base">{quantidade}</div>
      <button
        className="border-l border-l-border p-2"
        onClick={aumentarQuantidade}
      >
        <PlusIcon
          className="size-4 text-foreground"
          aria-label="adicionar quantidade"
        />
      </button>
    </div>
  );
};
