import { IMAGES } from "../data/imageIcons";

export const getCardType = (number: string) => {
  const cardNumber = number.replace(/\s+/g, "");
  const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCardRegEx = /^5[1-5][0-9]{14}$/;
  const eloRegEx =
    /^(4011|4312|4389|4514|4576|5041|5067|5090|6277|6362|6363|6500|6504|6505|6506|6516|6550|6552)[0-9]{12}$/;
  const bradescoRegEx = /^(6370)[0-9]{12}$/;
  const bancoBrasilRegEx = /^(6361|6035|6363|6040)[0-9]{12}$/;

  // Primeiro verifica-se Visa, MasterCard e Elo, pois essas são mais comuns
  if (visaRegEx.test(cardNumber)) {
    return "visa";
  } else if (masterCardRegEx.test(cardNumber)) {
    return "mastercard";
  } else if (eloRegEx.test(cardNumber)) {
    return "elo";
  } else if (bradescoRegEx.test(cardNumber)) {
    return "bradesco";
  } else if (bancoBrasilRegEx.test(cardNumber)) {
    return "bancoBrasil";
  } else {
    return "unknown";
  }
};

export const getCardIcon = (type: string) => {
  switch (type) {
    case "visa":
      return IMAGES.Visa;
    case "mastercard":
      return IMAGES.MasterCard;
    case "elo":
      return IMAGES.Elo;
    case "bradesco":
      return IMAGES.Bradesco;
    case "bancoBrasil":
      return IMAGES.BancoDoBrasil;
    default:
      return IMAGES.Cartao;
  }
};
