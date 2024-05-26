function BemVindo() {
  return (
    <div className="">
      <div className="border-box flex w-full items-center justify-center bg-folhas bg-[center_top_-28rem] bg-no-repeat pb-[14rem] pt-[7rem]">
        <div className="grid w-[80%] grid-cols-7 rounded-[24px] border-2 border-white text-white">
          <div className="bg-bemvind col-span-1 rounded-l-[20px] bg-white bg-cover"></div>
          <div className="col-span-6 rounded-r-[21px] bg-[#4C6840] py-16 text-center font-newsreader lg:pr-32">
            <h1 className="font-normal leading-[6rem] sm:text-[3.7rem] lg:text-[4rem] xl:text-[5rem]">
              Green Economy
            </h1>
            <p className="self-center font-light leading-[4rem] sm:text-[3rem] lg:text-[3rem] lg:leading-[4.5rem] xl:text-[4rem]">
              Consuma com <i>Conciência</i>,<br /> Viva com <i>Propósito</i>
            </p>
            <button className="mt-8 w-[50%] max-w-[280px] self-center rounded border-[1px] border-white bg-[#263D12] py-4 font-poppins text-[12px] sm:w-[40%] md:w-[40%] md:text-[14px]">
              Veja nossos Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
