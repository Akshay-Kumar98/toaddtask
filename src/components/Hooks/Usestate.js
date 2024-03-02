import React, { useState } from 'react'
import './style.css'

const Usestate = () => {

    const[mynumber, setmynumber] = useState(10)

  return (
    <>
        <div className='centerdiv'>
            <p>{mynumber}</p>


              <div className="button2" onClick={()=>{
                // setmynumber(mynumber + 5)

                mynumber < 15 ? setmynumber(mynumber + 1) : setmynumber(-5)
              }}>
              <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
              </div>

              <div className="button2" onClick={()=>{
                // setmynumber(mynumber-1)

mynumber > 0 ? setmynumber(mynumber-1) : setmynumber(0)

              }}>
              <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
              </div>


        </div>
    </>
  )
}

export default Usestate
