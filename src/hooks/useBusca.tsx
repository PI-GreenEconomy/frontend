import { useState } from "react";
export const useBusca = () => {
  const [keyword, setKeyWord] = useState("");

  return {
    keyword,
    setKeyWord,
  };
};
