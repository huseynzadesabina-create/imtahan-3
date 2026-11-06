import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-white">
      <nav className="flex h-[90px] items-center justify-between px-[80px]">
        
        <div className="text-[18px] font-medium text-black">
          Nombre del sitio
        </div>

        <div className="flex items-center gap-[48px]">
          <a
            href="#"
            className="text-medium font-medium text-black"
          >
            Página
          </a>

          <a
            href="#"
            className="text-medium font-medium text-black"
          >
            Página
          </a>

          <a
            href="#"
            className="text-medium font-medium text-black"
          >
            Página
          </a>

          <button className="rounded-[8px] bg-black px-[24px] py-[15px] text-[16px] font-medium text-white">Botón</button>
        </div>

      </nav>
    </header>
  );
};



export default Header