import React from 'react'

const Card_box = (props) => {
  return (
    <div className='border-2'>
        <img src={props.image} />
        <h4 style={{color:"#082864"}}>{props.title}</h4>
        <p>{props.para}</p>
    </div>
  )
}

export default Card_box;
