import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do CartProvider");
  }
  return context;
};
