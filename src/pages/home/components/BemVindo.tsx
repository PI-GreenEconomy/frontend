import { Slider } from "../../../components/slider/Slider";

function BemVindo() {
  return (
    <div className="w-full bg-folhas bg-cover bg-center bg-no-repeat md:py-5">
      <div className="border-1 mx-auto w-full border-primary/50 text-primary/50 shadow-lg md:w-[80%] md:px-0">
        <div className="h-full max-w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
