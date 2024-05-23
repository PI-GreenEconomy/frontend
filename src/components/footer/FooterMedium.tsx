export const FooterMedium = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-8">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      {/* Formas de Pagamento */}
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
        <p className="font-bold mb-2 text-lg">Formas de Pagamento</p>
        <div className="flex space-x-2">
        </div>
      </div>
      
      {/* Formas de Entrega */}
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
        <p className="font-bold mb-2 text-lg">Formas de Entrega</p>
        <div className="flex justify-center space-x-2">
      
        </div>
      </div>

      {/* Selos de Segurança */}
      <div className="w-full sm:w-1/3 text-right">
        <p className="font-bold mb-2 text-lg">Selos de Segurança</p>
        <div className="flex justify-end space-x-2">
        </div>
      </div>
    </div>
  </div>
  )
}