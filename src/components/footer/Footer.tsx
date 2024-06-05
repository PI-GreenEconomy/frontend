import { FooterTop } from "./FooterTop";
import { FooterMedium } from "./FooterMedium";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <footer className="border-t border-t-border">
      <FooterTop />
      <FooterMedium />
      <FooterBottom />
    </footer>
  );
};
