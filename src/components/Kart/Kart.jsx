import React from 'react'

import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import { Link } from 'react-router-dom';

const Kart = () => {
  const cards = [
    {
      image:  image1 ,
      p: "Subtítulo",
      text: "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo.",
    },
    {
      image:  image2 ,
      p: "Subtítulo",
      text: " Cuerpo del texto para lo que desees ampliar sobre el tema principal.",
    },
    {
      image:  image3 ,
      p:"Subtítulo",
      text: "Cuerpo del texto para lo que desees compartir adicionalmente.",
    },
  ];

  return (
    <section className=" p-7 w-full bg-white px-0 py-0">
      <div className=" p-7 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <Link to="/details">
          
          <div key={index} className="w-full">

            <div className="h-[400px] w-full overflow-hidden rounded-t-[4px]">
              <img src={card.image} alt="" className=" w-[90%] object-cover" /> </div>


            <div className="pt-[38px]">
                <p className="max-w-[300px] text-[18px] font-Arial leading-[1.45] font-bold "> {card.p} </p>
              <p className="max-w-[300px] text-[18px] font-Arial leading-[1.45] text-[#8C8C8C]"> {card.text} </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Kart