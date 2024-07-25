import React, { useContext, useState } from "react";
import { ThemeContext } from "..";

const Formone = ({title,quizitems_data}) => {
  const { formdata, setformdata } = useContext(ThemeContext);
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  // console.log('quiz',props);
  
  // console.log(setformdata);

  const get_value = (ele) => {
    setformdata((prevstate) => ({
      ...prevstate,
      entity: ele.target.value,
    }));
    console.log(formdata);
  };

  return (
    <div className="formone">
      <h4 className="heading pt-4">Few Step go</h4>
      <p className="pt-4">
        Please provide some of the information and we will get your work done.
      </p>
      <form action="" className="p-2">
        <p>{title}</p>
        <select onChange={handleChange} value={selectedItem}>
          <option value="">Select an item</option>
          {quizitems_data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {selectedItem && (
          <div>
            <h3>Selected Item Details</h3>
            <p>
              ID: {selectedItem} <br />
              Name:{" "}
              {
                quizitems_data.find((item) => item.id === parseInt(selectedItem))
                  .name
              }
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Formone;
