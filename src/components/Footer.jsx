import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'
export default function Footer()  {


    return (
      <div>
        <h1 className=' p-5 text-bold text-lg sm:text-5xl text-amber-600 text-center'>Ubicación</h1>
        <a href="https://www.google.com.ar/maps/@-34.4515663,-58.5289805,21z" target="_blank" className='flex justify-center m-5 hover:shadow-stone-600'><img className=' shadow-lg shadow-stone-500/50' src="/images/ubicacion.png" alt="" /></a>
        <div className="footer__container  bg-slate-300 flex align-middle justify-center p-5">
           <SocialIcon className=' ' url="https://github.com/LuchoGiuliani" />
        </div>
      </div>

    )
  }

