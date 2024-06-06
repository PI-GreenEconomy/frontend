import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { Footer } from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { DeletarCategoria } from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";
import { ToastContainer } from "react-toastify";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";
import FormProduto from "./components/produto/formproduto/FormProduto";
import ProtectedRouterAdmin from "./helper/ProtectedRouterAdmin";
import ProtectedRouterUser from "./helper/ProtectedRouterUser";

import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import QuemSomos from "./pages/quem-somos/QuemSomos";
import Produtos from "./pages/produtos/Produtos";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/carrinho/cart/Cart";
import { Avaliacao } from "./pages/avaliacao/Avaliacao";
import { Produto } from "./pages/produto/Produto";
import { NewsLetter } from "./components/newsletter/NewsLetter";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <AuthProvider>
        <CartProvider>
          <ToastContainer />

          <BrowserRouter>
            <ScrollToTop />

            <div className="font-roboto flex min-h-screen flex-col">
              <Header />
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quem-somos" element={<QuemSomos />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route
                    path="/cadastrarcategoria"
                    element={
                      <ProtectedRouterAdmin>
                        <FormCategoria />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/categorias"
                    element={
                      <ProtectedRouterAdmin>
                        <ListarCategoria />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/editarcategoria/:id"
                    element={
                      <ProtectedRouterAdmin>
                        <FormCategoria />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/deletarcategoria/:id"
                    element={
                      <ProtectedRouterAdmin>
                        <DeletarCategoria />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/cadastrarproduto"
                    element={
                      <ProtectedRouterAdmin>
                        <FormProduto />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route path="/produtos" element={<Produtos />} />
                  <Route path="/produtos/:id" element={<Produtos />} />
                  <Route
                    path="/produto/:categoria/:id/:slug"
                    element={<Produto />}
                  />
                  <Route
                    path="/produtos/categoria/:tipo"
                    element={<Produtos />}
                  />

                  <Route
                    path="/produto/:categoria/:id/:slug/avaliar"
                    element={
                      <ProtectedRouterUser>
                        <Avaliacao />
                      </ProtectedRouterUser>
                    }
                  />
                  <Route
                    path="/editarproduto/:id"
                    element={
                      <ProtectedRouterAdmin>
                        <FormProduto />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/deletarproduto/:id"
                    element={
                      <ProtectedRouterAdmin>
                        <DeletarProduto />
                      </ProtectedRouterAdmin>
                    }
                  />
                  <Route
                    path="/perfil"
                    element={
                      <ProtectedRouterUser>
                        <Perfil />
                      </ProtectedRouterUser>
                    }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <NewsLetter />
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
