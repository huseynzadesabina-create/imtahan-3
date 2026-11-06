import React from 'react'

import ikii from "../../assets/iki.png";
const Detail = () => {
    return (
        <>
            <div className=' justify-center items-start flex gap-[60px]'>
                <div>
                    <img src={ikii} alt="" />
                </div>

                <div className=" w-[500px] min-h-[330px] px-1 pt-20 ">
                    <h1 className='font-bold text-[40px]'>Nombre del producto</h1>
                    <p className="text-[24px] font-normal text-black">
                        Subtítulo
                    </p>
                    <p>10,99$</p>
                    <p className="mt-[6px] max-w-[500px] text-[20px] leading-[30px] text-black">
                        Cuerpo del texto para describir qué es este producto
                        y por qué es una compra imprescindible.
                    </p><br />


                    <button className="rounded-[8px] bg-black px-[24px] py-[15px] text-[16px] w-full font-medium text-white">Añadir al carrito</button>


                </div>

                {/* <img src={ikii} alt="" /> */}
            </div>

        </>
    )
}

export default Detail