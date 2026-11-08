import React from 'react'

import ikii from "../../assets/iki.png";
const Detail = () => {
    return (
        <>
            <div className='leading-[30px] font-Arial justify-center items-start flex gap-[60px]'>
                <div>
                    <img className='w-[600px]' src={ikii} alt="" />
                </div>
                <div className="  w-[500px] min-h-[330px] px-1 pt-20 ">
                    <div className='leading-[30px relative top-[-80px] '>
                        <h1 className='font-bold  text-[35px]'>Nombre del producto</h1>
                        <p className="text-[20px] font-Arial text-[#8C8C8C] text-medium"> Subtítulo</p>
                        <p className=' text-[20px]'>10,99$</p>
                        <p className="mt-[6px] max-w-[500px]  text-[16px]  text-[#8C8C8C]"> Cuerpo del texto para describir qué es este productoy por qué es una compra imprescindible.</p>
                        <button className="rounded-[8px] bg-black px-[24px] py-[15px] text-[14px] w-full font-medium text-white">Añadir al carrito</button>
                    </div>
                </div>
                {/* <img src={ikii} alt="" /> */}
            </div>

        </>
    )
}

export default Detail