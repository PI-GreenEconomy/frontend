import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastAlerta } from "../../utils/ToastAlerta";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || telefone === "") {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      telefone: telefone,
    };
    emailjs
      .send(
        "service_ms1j9pl",
        "template_09srw5v",
        templateParams,
        "HwaK5MDbbVE3Us_gm",
      )
      .then(() => {
        ToastAlerta("Mensagem enviado com sucesso!", "sucesso");
        setName("");
        setEmail("");
        setMessage("");
        setTelefone("");
      });
  }

  return (
    <div className="container mx-auto px-4 py-8  md:py-16">
      <div className="mx-auto flex flex-col overflow-hidden rounded-xl bg-white md:flex-row">
        <div className="w-full bg-[#085439] p-8 text-white md:w-1/3 md:p-12">
          <h1 className="-mb-2 text-start text-2xl font-bold md:text-3xl">
            GREEN
          </h1>
          <p className="mt-0 md:text-sm">economy</p>
          <div className="mt-10 text-start">
            <p>Rua nova Esperança, 700</p>
            <p>Rio de Janeiro - RJ</p>
            <p> Brasil - Terra - Vita Láctea</p>
            <p className="mt-10 md:text-xl">greenconomyofc@gmail.com</p>
            <p className="mt-10">+55 21 9999-9999</p>
          </div>
        </div>

        <div className="w-full px-4 py-8 md:w-1/2 md:px-12 md:py-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Contate-nos</h2>
          <form className="form" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nome"
                className="rounded-md border border-gray-400 px-3 py-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="number"
                placeholder="Telefone"
                className="rounded-md border border-gray-400 px-3 py-2"
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full rounded-md border border-gray-400 px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full rounded-md border border-gray-400 px-3 py-2"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className="mt-5">
              <button className="w-full rounded-md bg-[#085439] py-3 text-center text-white">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
