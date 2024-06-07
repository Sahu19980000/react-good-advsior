import React from 'react';
import FeaturesList from '../Featureslist';
import Link from 'next/link';

const PlanCard = ({ plan }) => {
  return (
    <div className="plan ">
      <h4 style={{color:"#264067"}} >{plan.title}</h4>
      <h1 className="price font-bold" style={{color:"#264067"}} >{plan.price}</h1>
      <div className="description">{plan.description}</div>
      <FeaturesList features={plan.features} />
      <Link href="/company-registration">{plan.link_text}</Link>
    </div>
  );
};

export default PlanCard;
