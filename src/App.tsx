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
import { Avaliacao } from "./pages/avaliacao/Avaliacao";
import { Produto } from "./pages/produto/Produto";
import { NewsLetter } from "./components/newsletter/NewsLetter";
import ListarSeusProdutos from "./components/produto/listarseusprodutos/ListarSeusProdutos";
import CartPage from "./pages/cart/Cart";
import CheckoutPage from "./pages/checkout/Checkout";
import { FreteProvider } from "./contexts/FreteContext";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <AuthProvider>
        <FreteProvider>
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
                      path="/produto/:id/:categoria/:slug"
                      element={<Produto />}
                    />
                    <Route path="/categoria/:tipo" element={<Produtos />} />

                    <Route path="/busca/:query" element={<Produtos />} />

                    <Route
                      path="/seusprodutos"
                      element={
                        <ProtectedRouterAdmin>
                          <ListarSeusProdutos />
                        </ProtectedRouterAdmin>
                      }
                    />

                    <Route
                      path="/produto/:id/:slug/avaliar"
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
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                      path="/checkout"
                      element={
                        <ProtectedRouterUser>
                          <CheckoutPage />
                        </ProtectedRouterUser>
                      }
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <NewsLetter />
                <Footer />
              </div>
            </BrowserRouter>
          </CartProvider>
        </FreteProvider>
      </AuthProvider>
    </div>
  );
}
