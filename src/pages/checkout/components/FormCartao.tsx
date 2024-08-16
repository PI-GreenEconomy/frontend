import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import InputField from "../../../components/ui/InputField";
import { PatternFormat } from "react-number-format";
import { FormCheckoutValues } from "../validacaoCheckout";
import { getCardIcon, getCardType } from "../../../utils/getCard";

type FormCartaoProps = {
  register: UseFormRegister<FormCheckoutValues>;
  errors: FieldErrors<FormCheckoutValues>;
  control: Control<FormCheckoutValues>;
};

export const FormCartao = ({ register, errors, control }: FormCartaoProps) => {
  return (
    <div className="flex w-full flex-col gap-4 pl-8 pr-16">
      <InputField
        id="nomeCartao"
        type="text"
        label="Nome impresso no Cartão"
        register={register}
        errors={errors}
        className="font-sans text-sm font-normal"
      />
      <Controller
        name="numeroCartao"
        control={control}
        render={({ field }) => {
          const cardType = getCardType(field.value || "");

          return (
            <div className="relative flex flex-col gap-1">
              <label className="font-sans text-sm font-normal">
                Número do Cartão
              </label>
              <PatternFormat
                format="#### #### #### ####"
                mask="_"
                placeholder=""
                className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                onValueChange={(values) => field.onChange(values.value)}
                value={field.value}
              />
              {errors["numeroCartao"] && (
                <span className="text-xs text-destructive">
                  {errors["numeroCartao"].message}
                </span>
              )}
              <div className="absolute right-7 top-7 size-8">
                <img
                  src={getCardIcon(cardType)}
                  alt="Card Type"
                  className="size-full"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          );
        }}
      />

      <div className="flex w-full flex-wrap items-center gap-4 ">
        <Controller
          name="validadeCartao"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="font-sans text-sm font-normal">Validade</label>
              <PatternFormat
                format="##/##"
                mask="_"
                placeholder="DD/YY"
                className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                onValueChange={(values) => field.onChange(values.value)}
                value={field.value}
              />
              {errors["validadeCartao"] && (
                <span className="text-xs text-destructive">
                  {errors["validadeCartao"].message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="cvvCartao"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="font-sans text-sm font-normal">CVV</label>
              <PatternFormat
                format="###"
                mask="_"
                placeholder="123"
                className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                onValueChange={(values) => field.onChange(values.value)}
                value={field.value}
              />
              {errors["cvvCartao"] && (
                <span className="text-xs text-destructive">
                  {errors["cvvCartao"].message}
                </span>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};
