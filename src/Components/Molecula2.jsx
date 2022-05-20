import React from 'react'
import '../Styles/Molecula2.css'
import { Date} from './Date'
function Molecula2() {
    const Description='Description of what is done here'
  return (
    <div className='Molecula2'>
        <div className='description'>
            <p>{Description}</p> 
            <Date/> 
        </div>
    </div>
  )
}

export{Molecula2}