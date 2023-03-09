import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useTransform} from "framer-motion";
export default function Trabajo() {
  const { scrollYProgress } = useScroll();
  
const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


  const [text, count] = useTypewriter({
    words: ["Nuestra playlist oficial ", "Prod. by VitoRecords"],
    loop: 5,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen">
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className=" flex text-fuchsia-800 ">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-center"
        >
        {/* <h1 style={{ opacity }} className="tracking-tight  max-w-lg h-auto text-bold text-left p-5 mb-6 sm:text-3xl text-orange-400  ">
          Ya seas un músico experimentado <hr className="border-none"></hr> o un
          principiante que está empezando a explorar el mundo de la{" "}
          <em className=" text-orange-500">Música</em> ,{" "}
          <hr className="border-none"></hr> estamos aquí para apoyarte y
          brindarte la información más actualizada y valiosa para que puedas
          crear música increíble.
        </h1> */}
         
        </motion.div>
        <div className="text-end h-10 p-5">
          {" "}
          <img className="" src="/images/" alt="" />
        </div>
      </div>
      <div className="  grid_trabajo  mt-5  sm:p-5 grid grid-cols-3 gap-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
        <div className=" rounded-lg  flex flex-col items-center p-5 sm:p-5  ">
          <img className="rounded-md " src="/images/estudio.jpg" alt="" />
          {/* <p className="font-medium	 text-center text-[15px]">
            ESTUDIO DE GRABACION BEATMAKING & VOCAL COACHING MIX & MASTER
          </p> */}
        </div>
        <div className="flex flex-col items-center p-5 sm:p-5">
          <img className="rounded-md" src="/images/vocal.jpg" alt="" />
          <p className="font-medium	 text-center text-[15px]"></p>
        </div>
        <div className="flex flex-col items-center p-5 sm:p-5">
          <img className="rounded-md" src="/images/mix.jpg" alt="" />
          <p className="font-medium	 text-center text-[15px]"></p>
        </div>
      </div>
    </div>
  );
}
