import { ChevronRightIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../data/imageIcons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getFormCheckoutSchema, FormCheckoutValues } from "./validacaoCheckout";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../components/ui/InputField";
import { PatternFormat } from "react-number-format";
import { useEffect, useRef, useState } from "react";
import { FormCartao } from "./components/FormCartao";
import { EstadoSelect } from "./components/EstadoSelect";
import { CidadeSelect } from "./components/CidadeSelect";
import { CardPedido } from "./components/CardPedido";
import { PaginaPix } from "./components/PaginaPix";
import { useCart } from "../../hooks/useCart";
import { PaginaBoleto } from "./components/PaginaBoleto";
import { ToastAlerta } from "../../utils/ToastAlerta";
import useFrete from "../../hooks/useFrete";
import { ResultadoFrete } from "../../components/cep/ResultadoFrete";
import { verificaFreteGratuito } from "../../utils/preco";
import {
  calculaTotalComFrete,
  calculaValorTransportadora,
  selecionaFrete,
} from "../../utils/frete";
import { formataCep, pegarDadosCep } from "../../utils/cep";
import { CartProduto } from "../../contexts/CartContext";
import { IResultadoFrete } from "../../contexts/FreteContext";

export type Checkout = {
  data: FormCheckoutValues;
  tipoPagamento: tiposPagamento;
  paginaPagamento?: boolean;
  subtotal: number;
  frete: number;
  total: number;
  cart: CartProduto[];
  precoTotal: number;
  freteSelecionado: IResultadoFrete | null;
};

export type tiposPagamento = "boleto" | "pix" | "cartao";

export default function CheckoutPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { limparCarrinho, quantidadeItems, precoTotal, produtos } = useCart();
  const { cep, setCep, resultadoFrete, calcularFrete, indexFreteSelecionado } =
    useFrete();

  const initialValues = {
    endereco: "",
    cidade: "",
    estado: "",
    cep: cep?.cep || "",
    nomeCartao: "",
    numeroCartao: "",
    validadeCartao: "",
    cvvCartao: "",
    informacao: "",
  };

  const [atualEstadoId, setAtualEstadoId] = useState("");
  const [cidades, setCidades] = useState([]);
  const [cidadeAtual, setCidadeAtual] = useState("");
  const [selecaoDesabilitada, setSelecaoDesabilitada] = useState(false);

  const checkCEP = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cepAtual = e.target.value.replace(/\D/g, "");

    if (cepAtual.length === 0) {
      setCidadeAtual("");
      setSelecaoDesabilitada(false);
    }
    if (cepAtual.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepAtual}/json/`,
        );
        const data = await response.json();
        if (data.erro) {
          throw new Error("CEP não encontrado");
        }

        const cepAnterior = formataCep(cep?.cep || "");

        if (!resultadoFrete || cepAnterior !== formataCep(cepAtual)) {
          await pegarDadosCep(cepAtual, setCep);
          await calcularFrete({ cepOrigem: cepAtual });
        }

        setValue("endereco", data.logradouro);
        setValue("cidade", data.localidade);

        setCidadeAtual(data.localidade);

        const estadoSigla = data.uf;
        setValue("estado", estadoSigla);

        setAtualEstadoId(estadoSigla);
        setSelecaoDesabilitada(true);
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setSelecaoDesabilitada(false);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [pagamentoSelecionado, setPagamentoSelecionado] =
    useState<tiposPagamento>("boleto");

  useEffect(() => {
    if (atualEstadoId !== "") {
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${atualEstadoId}/municipios`,
      )
        .then((response) => response.json())
        .then((data) => setCidades(data))
        .catch((error) => console.log(error));
    } else {
      setCidades([]);
    }
  }, [atualEstadoId]);

  const handleChangeState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selecionaEstadoId = event.target.value;
    setAtualEstadoId(selecionaEstadoId);
  };

  const formCheckoutSchema = getFormCheckoutSchema(pagamentoSelecionado);

  const [infoCheckout, setInfoCheckout] = useState<Checkout>({
    data: initialValues,
    tipoPagamento: "boleto",
    paginaPagamento: false,
    subtotal: 0,
    frete: 0,
    total: 0,
    cart: [],
    freteSelecionado: null,
    precoTotal: 0,
  });

  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormCheckoutValues>({
    resolver: zodResolver(formCheckoutSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormCheckoutValues> = async (data) => {
    if (
      !resultadoFrete ||
      resultadoFrete.length === 0 ||
      !indexFreteSelecionado
    ) {
      ToastAlerta(
        "Por favor, selecione uma opção de frete antes de continuar",
        "erro",
      );
      return;
    }

    setInfoCheckout({
      data,
      tipoPagamento: pagamentoSelecionado,
      paginaPagamento: true,
      subtotal: oldSubtotal,
      frete: oldFrete,
      total: oldTotal,
      cart: oldCart,
      freteSelecionado: oldFreteSelecionado,
      precoTotal: oldPrecoTotal,
    });
    limparCarrinho();
  };

  const freteGratuito = verificaFreteGratuito(precoTotal);

  const freteSelecionado = selecionaFrete(
    resultadoFrete,
    indexFreteSelecionado,
  );

  const valorTransportadora = freteSelecionado
    ? calculaValorTransportadora(freteSelecionado, precoTotal)
    : 0;

  const precoTotalComFrete = calculaTotalComFrete(
    precoTotal,
    valorTransportadora,
  );

  const [oldPrecoTotal] = useState(precoTotalComFrete);
  const [oldCart] = useState(produtos);
  const [oldFreteSelecionado] = useState(freteSelecionado);
  const [oldSubtotal] = useState(precoTotal);
  const [oldFrete] = useState(valorTransportadora);
  const [oldTotal] = useState(precoTotalComFrete);

  useEffect(() => {
    if (
      infoCheckout.tipoPagamento === "boleto" ||
      infoCheckout.tipoPagamento === "pix" ||
      infoCheckout.tipoPagamento === "cartao"
    )
      return;

    if (quantidadeItems === 0) navigate("/");
  }, [quantidadeItems]);

  if (infoCheckout.paginaPagamento && infoCheckout.tipoPagamento === "pix") {
    return <PaginaPix infoCheckout={infoCheckout} />;
  }

  if (infoCheckout.paginaPagamento && infoCheckout.tipoPagamento === "boleto") {
    return <PaginaBoleto />;
  }

  if (infoCheckout.paginaPagamento && infoCheckout.tipoPagamento === "cartao") {
    navigate("/");
    ToastAlerta("compra finalizada com sucesso!", "sucesso");
    return;
  }

  return (
    <div className="container relative py-12 text-foreground">
      <div className="mb-12 flex flex-wrap gap-y-1 rounded bg-[#E7F0ED] p-3 text-[#314840]">
        <div className="flex">
          <Link to={"/"}>Início</Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <div className="flex">
          <Link to={"/cart"}>Carrinho</Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <span className="inline-block font-medium text-primary">Checkout</span>
      </div>

      <section>
        <h1 className="mb-6 font-poppins text-lg font-medium">
          Efetuar Compra
        </h1>
        <form
          className="flex flex-wrap-reverse items-baseline justify-between gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full lg:max-w-[900px] lg:flex-[65]">
            <div className="mb-10 flex w-full flex-col gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <div className="w-full md:max-w-[220px]">
                  <Controller
                    name="cep"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div className="flex flex-col gap-1">
                          <label className="font-sans text-sm font-normal">
                            Cep
                          </label>
                          <PatternFormat
                            getInputRef={inputRef}
                            format="#####-###"
                            mask="_"
                            placeholder="Digite o CEP"
                            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                            onValueChange={(values) =>
                              field.onChange(values.value)
                            }
                            value={field.value}
                            onBlur={checkCEP}
                          />
                          {errors["cep"] && (
                            <span className="text-xs text-destructive">
                              {errors["cep"].message}
                            </span>
                          )}
                        </div>
                      );
                    }}
                  />
                </div>

                <div className="w-full md:max-w-[220px]">
                  <EstadoSelect
                    errors={errors}
                    register={register}
                    onChange={handleChangeState}
                    selecaoDesabilitada={selecaoDesabilitada}
                  />
                </div>
                <div className="w-full md:max-w-[220px]">
                  <CidadeSelect
                    cidades={cidades}
                    register={register}
                    errors={errors}
                    selecaoDesabilitada={selecaoDesabilitada}
                    cidadeAtual={cidadeAtual}
                  />
                </div>
              </div>

              <InputField
                id="endereco"
                type="text"
                label="Endereço"
                register={register}
                errors={errors}
                className="font-sans text-sm font-normal"
                disabled={selecaoDesabilitada}
              />
            </div>
            <div className="mb-10 w-full rounded border border-border pb-8 pt-5">
              <h2 className="mb-6 px-8 font-poppins text-lg font-medium">
                Opções de Pagamento
              </h2>
              <div className="mb-7 border-y border-y-border px-8 py-4">
                <ul className="flex flex-wrap items-center justify-evenly gap-2">
                  <li>
                    <label
                      htmlFor="boleto"
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <img
                        className="h-8"
                        src={IMAGES.Boleto}
                        alt="Boleto"
                        width={48}
                        height={32}
                        loading="lazy"
                      />
                      <span className="block font-sans text-sm font-medium">
                        Boleto
                      </span>
                      <input
                        type="radio"
                        name="pagamento"
                        id="boleto"
                        className="size-4"
                        checked={pagamentoSelecionado === "boleto"}
                        onChange={() => setPagamentoSelecionado("boleto")}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="pix"
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <img
                        className="h-8"
                        src={IMAGES.Pix}
                        alt="Pix"
                        width={48}
                        height={32}
                        loading="lazy"
                      />
                      <span className="block font-sans text-sm font-medium">
                        Pix
                      </span>
                      <input
                        type="radio"
                        name="pagamento"
                        id="pix"
                        className="size-4"
                        checked={pagamentoSelecionado === "pix"}
                        onChange={() => setPagamentoSelecionado("pix")}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="cartao"
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <img
                        className="h-8"
                        src={IMAGES.Cartao}
                        alt="Boleto"
                        width={48}
                        height={32}
                        loading="lazy"
                      />
                      <span className="block font-sans text-sm font-medium">
                        Débito / Crédito
                      </span>
                      <input
                        type="radio"
                        name="pagamento"
                        id="cartao"
                        className="size-4"
                        checked={pagamentoSelecionado === "cartao"}
                        onChange={() => setPagamentoSelecionado("cartao")}
                      />
                    </label>
                  </li>
                </ul>
              </div>
              {pagamentoSelecionado === "boleto" && (
                <p className="px-8">
                  Seu boleto será gerado ao efetuar o pagamento.
                </p>
              )}
              {pagamentoSelecionado === "pix" && (
                <p className="px-8">O pix será gerado no final do pagamento.</p>
              )}
              {pagamentoSelecionado === "cartao" && (
                <FormCartao
                  register={register}
                  errors={errors}
                  control={control}
                />
              )}
            </div>
            <div className="w-full">
              <h3 className="mb-6 font-poppins text-lg font-medium">
                Informação adicional
              </h3>
              <label className="flex flex-col gap-4">
                <div className="text-sm">
                  Notas de pedido{" "}
                  <span className="text-gray-500">(Opcional)</span>
                </div>
                <textarea
                  className="min-h-[150px] rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                  name="nota"
                  id="nota"
                  placeholder="Notas sobre o seu pedido, por exemplo: notas especiais para entrega"
                />
              </label>
            </div>
          </div>
          <div className="w-full lg:sticky lg:top-10 lg:w-fit">
            <CardPedido
              freteGratuito={freteGratuito}
              precoTotal={precoTotal}
              valorTransportadora={valorTransportadora}
            />
            <ResultadoFrete precoProduto={precoTotal} selecaoAtivada={true} />
          </div>
        </form>
      </section>
    </div>
  );
}
