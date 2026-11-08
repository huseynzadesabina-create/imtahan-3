import React from 'react'
import image5 from "../../assets/Foto.png";
const Foto = () => {
  return (
        <div className='p-10'>
          <h1 className=' w-[100%] font-bold text-[30px] '>Título de la página de inicio</h1>
          <p className='text-[#000000BF]'>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p><br />
           <button className=" p-7 rounded-[8px] bg-black px-[24px] py-[15px] text-[16px] font-medium text-white">Botón</button><br /><br />
           <img  className='  flex items-center  justify-center size-full h-[80%] justify-center' src={image5} alt="foto" /><br />
           <h1 className='font-bold text-[30px]'>Encabezado de sección</h1>
        </div> 
      );
}

export default Foto