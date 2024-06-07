import Image from 'next/image';
import React from 'react';

const FeaturesList = ({ features }) => {
  return (
    <ul className='feature-list'>
      {features.map((feature, idx) => (
        <li key={idx}>
          <Image src='/images/arrow-icon.png' className='p-3' alt="arrow-icon" width={55} height={25}/>
          {feature}</li>
      ))}
    </ul>
  );
};

export default FeaturesList;
