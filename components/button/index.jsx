import React from 'react'

export const Buttoncomponent = (props) => {
  return (
        <button className='good_advsior-btn' style={{borderStyle:"none",boxShadow:"none",color:`${props.color}`}}>
            {props.title_data}
        </button>
  )
}