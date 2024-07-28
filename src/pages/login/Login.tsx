import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import UsuarioLogin from "../../models/UsuarioLogin";

import { formSchema } from "./validacaoLogin";
import { useLogin } from "../../hooks/useLogin";
import InputField from "../../components/ui/InputField";
import { Spinner } from "../../components/ui/Spinner";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UsuarioLogin>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usuario: "",
      senha: "",
    },
  });

  const { login, isLoading } = useLogin();

  return (
    <div className="w-full bg-[#F9F9F9] px-4 py-8 text-foreground">
      <div className="container max-w-[420px] rounded-lg border border-border bg-white p-8 shadow-md">
        <div className="mb-8 flex flex-col gap-1">
          <h2 className="text-2xl font-medium text-foreground sm:text-[2rem]">
            Entre na sua conta
          </h2>
          <p className="text-sm text-[#575757] sm:text-base">
            Por favor, Insira seu e-mail e senha:
          </p>
        </div>

        <form
          className="mb-5 flex flex-col justify-center gap-5"
          onSubmit={handleSubmit(login)}
        >
          <InputField
            id="usuario"
            type="text"
            placeholder="email@email.com"
            label="E-mail"
            register={register}
            errors={errors}
          />
          <InputField
            id="senha"
            type="password"
            placeholder="********"
            label="Senha"
            register={register}
            errors={errors}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="flex justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90 focus:bg-primary/90 disabled:cursor-default disabled:bg-primary/50"
          >
            {isLoading ? (
              <Spinner
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
              />
            ) : (
              <span className="font-medium capitalize">Entrar</span>
            )}
          </button>
        </form>
        <p className="text-sm">
          Cliente novo?{" "}
          <Link
            to="/cadastro"
            className="font-medium text-primary hover:underline focus:underline"
          >
            Crie uma conta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
