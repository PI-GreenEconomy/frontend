import { Skeleton } from "../../../components/ui/Skeleton";

export const ProdutoMock = () => {
  return (
    <div className="container py-12">
      <div className="mb-12 flex flex-wrap gap-y-1 rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
        <div className="flex">
          <Skeleton className="h-[40px] w-full rounded-xl" />{" "}
          <Skeleton className="h-[40px] w-full rounded-xl" />{" "}
        </div>
        <div className="flex">
          <Skeleton className="h-[40px] w-full rounded-xl" />{" "}
          <Skeleton className="h-[40px] w-full rounded-xl" />{" "}
        </div>
        <div className="flex">
          <Skeleton className="h-[40px] w-full rounded-xl" />
          <Skeleton className="h-[40px] w-full rounded-xl" />{" "}
        </div>
        <Skeleton className="h-[40px] w-full rounded-xl" />
      </div>

      <article className="grid grid-cols-1 items-center justify-between gap-14 md:grid-cols-2">
        <div className="h-full rounded-md border border-border">
          <Skeleton className="h-[600px] w-[600px]" />
        </div>
        <div className="flex max-w-[520px] flex-col gap-8">
          <div>
            <Skeleton className="h-[40px] w-full rounded-xl" />

            <Skeleton className="h-[40px] w-full rounded-xl" />
          </div>

          <div>
            <Skeleton className="h-[40px] w-full rounded-xl" />
            <Skeleton className="h-[40px] w-full rounded-xl" />
          </div>
          <div className="flex items-center gap-8">
            <Skeleton className="h-[40px] w-full rounded-xl" />

            <Skeleton className="h-[40px] w-full rounded-xl" />
          </div>
          <div className="flex items-center gap-[10px]">
            <Skeleton className="h-[40px] w-full rounded-xl px-10 py-4" />
            <Skeleton className="h-[20px] w-full rounded-xl px-10 py-4" />
            <Skeleton className="h-[40px] w-full rounded-xl" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="my-3 mt-6 flex font-poppins">
              <Skeleton className="h-[40px] w-full rounded-xl" />
              <Skeleton className="h-[40px] w-full rounded-xl" />
              <Skeleton className="h-[40px] w-full rounded-xl" />
              <Skeleton className="h-[40px] w-full rounded-xl" />
            </div>
            <ul className="flex gap-2">
              {Array.from({ length: 9 }).map((_, id) => (
                <li key={id}>
                  <Skeleton className="h-[40px] w-full rounded-xl" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <section className="flex flex-wrap items-center gap-3 md:gap-8">
        <div className="max-w-[800px] text-[#00100D]">
          <Skeleton className="h-[40px] w-full rounded-xl" />
          <Skeleton className="h-[40px] w-full rounded-xl" />
          <Skeleton className="h-[360px] w-[360px] rounded-xl" />
        </div>
        <div>
          <Skeleton className="h-[360px] w-[360px] rounded-xl" />
        </div>
      </section>

      <section>
        <Skeleton className="h-[40px] w-full rounded-xl" />

        {Array.from({ length: 9 }).map((_, index) => (
          <Skeleton key={index} className="h-[446px] w-[291px] rounded-xl" />
        ))}
      </section>
    </div>
  );
};
