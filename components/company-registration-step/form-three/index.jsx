import React from 'react'

const Formthree = () => {
  return (
    <div className='form-three'>
      <h4 className='heading pt-1'>Few Step go</h4>
       <p className='pt-1'>Please provide some of the information and we will get your work done.</p>
       <form action="" className='p-1'>
       <div className=''>
       <p>Your Name</p>
       <select >
         <option value="solar"> solar </option>
       </select>
       </div>
       <div className='mt-2'>
       <p>Your email</p>
       <select >
         <option value="solar"> solar </option>
       </select>
       </div> 
       <div className='mt-2'>
       <p>Your city/Pincode</p>
       <select >
         <option value="solar"> solar </option>
       </select>
       </div>
       
       </form>
    </div>
  )
}

export default Formthree