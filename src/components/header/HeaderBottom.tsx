import { Car, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBottom = () => {
  return (
    <div className='py-6'>
        <div className=' container flex justify-between gap-2 items-center font-semibold'>
            <div className=' flex items-center gap-10'>
            <Link to={"/"}>Logo</Link>
            <ul className=' gap-4 flex'>
                <li>
                <Link to={"/produtos"}>Produtos</Link>
                </li>
                <li>
                <Link to={"/quem-somos"}>Quem Somos</Link>
                </li>
                <li>
                <Link to={"/nossa-missao"}>Nossa Missão</Link>
                </li>
                <li>
                <Link to={"/contato"}>Contato</Link> 
                </li>
            </ul>
            </div>
            <div className='flex relative border  border-gray-500'>
                <input className='py-2 px-6 placeholder:text-[#94A3B8]' type="text" placeholder='Buscar Produto' />
                <button className='flex py-2 px-3 text-[#94A3B8] '>
                <Search />
                </button>
                
            </div>    
            <div className='flex items-center justify-center gap-2 '>
                <User/>
                <span>Entre ou <br/> Cadastre-se</span>
            </div>
            <div className='flex items-center justify-center gap-2 '>
                <div className='relative'>
                <ShoppingCart className='z-10'/>
                <span className='absolute bottom-5 left-3 text-xs flex items-center justify-center bg-[#085339] text-white font-bold rounded-full size-4 right-0'>0</span>
                </div>
                <span>Carrinho</span>
            </div>   
        </div>
    </div>
  )
}
