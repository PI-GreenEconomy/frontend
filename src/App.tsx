import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./pages/not-found/NotFound";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import { DeletarCategoria } from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />

          <div className="font-roboto flex min-h-screen flex-col">
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadcategoria" element={<FormCategoria />} />
                <Route path="/categoria" element={<ListarCategoria />} />
                <Route
                  path="/editarcategoria/:id"
                  element={<FormCategoria />}
                />
                <Route
                  path="/deletarcategoria/:id"
                  element={<DeletarCategoria />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
