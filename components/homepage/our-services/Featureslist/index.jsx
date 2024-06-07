import React from 'react';

const FeaturesList = ({ features }) => {
  return (
    <ul className='feature-list'>
      {features.map((feature, idx) => (
        <li key={idx}>
          <img src='../../images/arrow-icon.png' className='p-3'/>
          {feature}</li>
      ))}
    </ul>
  );
};

export default FeaturesList;
