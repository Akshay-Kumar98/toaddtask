import React, { useEffect, useState } from 'react'
import './style.css'

const Useeffect = () => {

    useEffect(()=>{
        // console.log('hii')
        document.title = `chats (${mynumber})`
    })

    const[mynumber, setmynumber] = useState("Radhe shayam Lal")

  return (
    <>
        <div className='centerdiv'>
            <p>{mynumber}</p>


              <div className="button2" onClick={()=>{
                // setmynumber(mynumber + 5)
                setmynumber("Radha ji")

                // mynumber < 15 ? setmynumber(mynumber + 1) : setmynumber(-5)
              }}>
              <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
              </div>



        </div>
    </>
  )
}

export default Useeffect
