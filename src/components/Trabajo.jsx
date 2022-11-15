import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function Trabajo() {
  const [text,count] = useTypewriter({
    words: ['Nuestro trabajo',
            'Encontra tu inspiración',
          'Producción Musical'],
          loop:5,
          delaySpeed: 2000
  })
  return (
    <div  className="">
      <h1 className="text-center p-5 text-2xl text-orange-400 h-10  ">
        {text}
      </h1>
      <div  className="  grid_trabajo  mt-5  sm:p-5 grid grid-cols-3 gap-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
        <div className=" rounded-md  flex flex-col items-center p-5 sm:p-5  ">
          <img className="rounded-md " src="/images/mix.jpg" alt="" />
          {/* <p className="font-medium	 text-center text-[15px]">
            ESTUDIO DE GRABACION BEATMAKING & VOCAL COACHING MIX & MASTER
          </p> */}
        </div>
        <div className="flex flex-col items-center p-5 sm:p-5">
          <img className="rounded-md" src="/images/vocal.jpg" alt="" />
          <p className="font-medium	 text-center text-[15px]">
           
          </p>
        </div>
        <div className="flex flex-col items-center p-5 sm:p-5">
          <img className="rounded-md" src="/images/estudio.jpg" alt="" />
          <p className="font-medium	 text-center text-[15px]">
          
          </p>
        </div>
      </div>
    </div>
  );
}
