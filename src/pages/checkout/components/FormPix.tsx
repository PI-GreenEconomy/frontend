import { useRef, useState } from "react";
import { Icon } from "../../../components/icons";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckIcon } from "lucide-react";
import { formatarMoeda } from "../../../utils/preco";
import { useTimer } from "../../../hooks/useTimer";
import { Timeout } from "react-number-format/types/types";

export const FormPix = ({ precoTotal }: { precoTotal: number }) => {
  const textToCopy =
    "654984984848.651.894.891.564894.BB.Gov.8hayyYYdua.BCentral";

  const [isCopied, setIsCopied] = useState(false);
  const timerRef = useRef<Timeout | null>(null);

  const onCopyText = () => {
    setIsCopied(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  const { timeLeft, formatTime } = useTimer();

  return (
    <div className="flex w-full flex-col gap-4 px-2 md:px-0 md:pl-8 md:pr-16">
      <header className="mb-2 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-base font-medium text-primary md:text-lg lg:text-xl">
          Use o QR Code para pagar o PIX
        </h2>
        <div>
          <p className="mb-2 text-sm text-gray-600 md:text-base">
            Valor da compra:
          </p>
          <span className="text-lg font-medium text-gray-800 md:text-xl lg:text-2xl">
            {formatarMoeda(precoTotal)}
          </span>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mx-auto h-52 w-52 rounded-lg border border-gray-400">
          <img
            src="https://ik.imagekit.io/GreenEconomy/Avatar/qrcode-three.svg?updatedAt=1718110091802"
            alt="QR Code"
            className="w-full rounded-lg"
          />
        </div>
        <p className="text-base">
          Expira em{" "}
          <span className="text-lg font-medium text-[#32BCAD]">
            {formatTime(timeLeft)}
          </span>{" "}
        </p>
        <p className="text-center">
          Escaneie o QR Code ou copie o código abaixo, cole em seu banco
        </p>
        <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
          <button
            type="button"
            className="group mb-2 flex w-full cursor-pointer justify-between gap-2 rounded-lg border border-[#32BCAD] py-4 pl-3 pr-4"
          >
            <span className="truncate font-medium">{textToCopy}</span>
            <Icon.Copy className="text-current transition-all group-hover:translate-y-1" />
          </button>
        </CopyToClipboard>
        {isCopied && (
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4 rounded-full bg-[#32BCAD] text-white" />
            <span className="text-sm font-medium text-[#32BCAD]">
              Código copiado com sucesso!
            </span>
          </div>
        )}
        <div className="flex flex-col gap-2 rounded-lg bg-[#FAF9E9] p-2 md:p-4">
          <strong>
            Antes de efetuar o pagamento, leia atentamente as regras:
          </strong>
          <p className="max-w-[90%]">
            Não aceitamos depósitos de terceiros, ou seja, o valor depositado
            deve vir de uma conta com o seu CPF/CNPJ.
          </p>
          <p>
            O valor do depositado não pode ultrapassar o seu limite disponível
          </p>
        </div>
      </div>
    </div>
  );
};
