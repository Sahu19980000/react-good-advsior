import React, { useContext } from 'react'
import { ThemeContext } from '..';

const Formone = () => {

  const {formdata,setformdata} = useContext(ThemeContext);

    console.log(formdata);
    console.log(setformdata);

  const get_value = (ele)=>{
    setformdata(prevstate =>({
      ...prevstate,
      entity:ele.target.value
    }))
    console.log(formdata);
  }

  return (
    <div className="formone">
       <h4 className='heading pt-4'>Few Step go</h4>
       <p className='pt-4'>Please provide some of the information and we will get your work done.</p>
       <form action="" className='p-2'> 
       <p>what type of your entity</p>
       <select onChange={get_value}>
         <option value="solar" >{formdata.entity}</option>
         <option value="solar data" >{formdata.entity}</option>
       </select>
       </form>
       
    </div>
  )
}

export default Formone