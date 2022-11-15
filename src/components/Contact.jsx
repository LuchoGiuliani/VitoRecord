import React from 'react'

export default function Contact()  {


    return (
      <div>
        <h1 className=' text-neutral-400 p-5 text-2xl  text-end'>. Redes</h1>

        <div className="redes_container grid  grid-cols-3 place-content-around  p-7 grid-rows-2 gap-3 items-center">
          <a href="https://api.whatsapp.com/send?phone=5491134572747&text=" target="_blank" class="whatsapp"><img className='hover:animate-bounce' src="/images/wsp2.png" alt="" /></a>
          <a href="https://www.tiktok.com/@vitorecordsarg" target="_blank"><img className='hover:animate-bounce' src="/images/tiktok.png" alt="" /></a>
          <a href="https://www.youtube.com/c/VitoRecordsARG" target="_blank"><img className='hover:animate-bounce' src="/images/youtube.png" alt="" /></a>
          <a href="https://open.spotify.com/artist/0IgDPqcyCU0MDADyLjF41E?si=NYMiZhVPSHCLui2YAAj_gQ" target="_blank"><img className='hover:animate-bounce' src="/images/spotify.png" alt="" /></a>
          <a href="https://www.instagram.com/vitorecordsarg/?hl=es" Target="_blank"><img className='hover:animate-bounce' src="/images/insta2.png" alt="" /></a>
          </div>
      </div>
    )
  }

