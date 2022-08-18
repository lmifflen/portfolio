import React from 'react'
import Introduction from '../components/Introduction'


const Landing = () => {
  return (
    <div>
        <div className='left'>
        <div className="imageContainer">
            <img src="Luke.jpg" alt="" />
          </div>
        </div>
        <div className='right'>
        <Introduction></Introduction>
        </div>
    </div>
  )
}

export default Landing