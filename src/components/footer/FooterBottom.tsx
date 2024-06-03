const date = new Date().getFullYear();

export const FooterBottom = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto text-center text-xs">
        © {date} Green Economy | Projeto Integrador - ODS 12
      </div>
    </div>
  );
};
