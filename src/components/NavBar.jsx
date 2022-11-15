import React from 'react'
import 'animate.css';
export default function NavBar()  {


    return (
<div className="video__back">
  
 {/*<h1 className='animate__animated animate__fadeInLeftBig animate__repeat-3 text-zinc-200 vitoText text-7xl md:absolute top-[40%] left-[30%]'>VITO RECORDS</h1>*/}
  <img className=' object-cover md:h-screen w-full sepia-[.55]' src="/images/estudioMain.jpg" alt="" />
    <div className='p-4 flex navbar_container justify-between absolute top-[1%] w-[100%] '>
      <div className='img_vito z-10'>
      <img  className ="animate__animated animate__heartBeat  " src="/images/vitonavbar.png" alt="" />
      </div>
      <div className='nav_right flex justify-center z-10 gap-3 '>
      {/* <a href="#playlist" className="scroll-smooth"><i class="fa-solid fa-folder-music"></i> </a> */}
      <a href="https://www.instagram.com/vitorecordsarg/?hl=es" Target="_blank"><img className='links insta hover:scale-110' src="/images/insta.png" alt="" /></a>
      {/* <img className='links email hover:scale-110 ' src="/images/mail.png" alt="" /> */}
      {/*<a href="https://api.whatsapp.com/send?phone=5491134572747&text=" target="_blank" class="whatsapp"> <img className='links wsp hover:scale-110' src="/images/wasap.png" alt="" /></a>*/ }
      </div>
      </div>
      </div>
       )
  }

