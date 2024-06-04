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
import { ToastContainer } from "react-toastify";
import ProtectedRouter from "./helper/ProtectedRouter";
import { FormProduto } from "./components/produto/formproduto/FormProduto";
import { ListarProduto } from "./components/produto/listarproduto/ListarProduto";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <AuthProvider>
        <ToastContainer />

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
                <Route
                  path="/cadcategoria"
                  element={
                    <ProtectedRouter>
                      <FormCategoria />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/categoria"
                  element={
                    <ProtectedRouter>
                      <ListarCategoria />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/editarcategoria/:id"
                  element={
                    <ProtectedRouter>
                      <FormCategoria />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/deletarcategoria/:id"
                  element={
                    <ProtectedRouter>
                      <DeletarCategoria />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/cadproduto"
                  element={
                    <ProtectedRouter>
                      <FormProduto />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/produto"
                  element={
                    <ProtectedRouter>
                      <ListarProduto />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/editarproduto/:id"
                  element={
                    <ProtectedRouter>
                      <FormProduto />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/deletarproduto/:id"
                  element={
                    <ProtectedRouter>
                      <DeletarProduto />
                    </ProtectedRouter>
                  }
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
