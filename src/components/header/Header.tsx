import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <Navbar />
    </header>
  );
};
