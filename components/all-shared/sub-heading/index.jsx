import React from 'react'

const Subheading = (props) => {
  return (
    <h4 className='sub-heading pt-4 pb-4 mt-2' style={{textAlign:`${props.textalign}`}} >
       {props.title}
    </h4>
  )
}

export default Subheading