import React, { useContext } from 'react';
import { ThemeContext } from '..';

const FormTwo = ({title}) => {

  const {formdata,setformdata} = useContext(ThemeContext);
  
    console.log(formdata);
    console.log(setformdata);

  const get_value = (ele)=>{
    setformdata(prevstate =>({
      ...prevstate,
      employees_details:ele.target.value
    }))
    console.log(formdata);
  }

  return (
    <div>
      <h4 className='heading pt-4'>Few Steps to Go</h4>
      <p className='pt-4'>Please provide some information, and we will get your work done.</p>
      <form action="" className='p-2'>
        <p>{title}</p>
        <div>
          <input type="radio" id="age1" name="age" value={formdata.employees_details.first} onChange={get_value} />&nbsp;
          <label htmlFor="age1">0 - 30</label><br />
          <input type="radio" id="age2" name="age" value={formdata.employees_details.second} onChange={get_value} />&nbsp;
          <label htmlFor="age2">31 - 60</label><br />
          <input type="radio" id="age3" name="age" value={formdata.employees_details.third} onChange={get_value} />&nbsp;
          <label htmlFor="age3">61 - 100</label><br /><br />
        </div>
      </form>
    </div>
  );
}

export default FormTwo;
