import { useContext } from "react";
import { FreteContext } from "../contexts/FreteContext";

const useFrete = () => {
  const context = useContext(FreteContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do FreteProvider");
  }
  return context;
};

export default useFrete;
