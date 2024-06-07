"use client";

import  { useState } from 'react';
import PlanCard from '../plancard';
import pricingData from '../services.json';

const PricingTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='row'>
      <div className="tabs col-lg-12 col-12">
        <div className="row">
          <div className='tab-container'>
          {pricingData.tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''} col-lg-4 `}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
          </div>
       
        </div>
        
      </div>
      <div className="pricing-table text-center ">
          {pricingData.tabs[activeTab].plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
