import { useRef, useState } from "react";
import { Icon } from "../../../components/icons";
import { IMAGES } from "../../../data/imageIcons";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckIcon } from "lucide-react";

export const FormPix = () => {
  const textToCopy =
    "654984984848.651.894.891.564894.BB.Gov.8hayyYYdua.BCentral";

  const [isCopied, setIsCopied] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onCopyText = () => {
    setIsCopied(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 pl-8 pr-16">
      <header className="mb-2 flex gap-2">
        <img src={IMAGES.Pix} alt="Pix" />
        <p className="text-gray-400">Pague com Pix</p>
      </header>
      <div className="flex flex-col gap-2">
        <div className="mx-auto h-44 w-44 rounded-lg border border-gray-400">
          <img
            src="https://ik.imagekit.io/GreenEconomy/Avatar/qrcode-three.svg?updatedAt=1718110091802"
            alt="QR Code"
            className="w-full rounded-lg"
          />
        </div>
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

        <div className="flex flex-col gap-2 rounded-lg bg-[#FAF9E9] p-4">
          <strong>
            Antes de efetuar o pagamento, leia atentamente as regras:
          </strong>
          <p>
            Não aceitamos depósitos de terceiros, ou seja, o valor depositado
            deve vir de uma conta com o seu CPF/CN PJ.
          </p>
          <p>
            O valor do depositado não pode ultrapassar o seu limite disponível
          </p>
        </div>
      </div>
    </div>
  );
};
