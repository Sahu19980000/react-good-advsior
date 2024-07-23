"use client";

import { useEffect, useState } from 'react';
import PlanCard from '../plancard';
import Placeholder from 'react-bootstrap/Placeholder';
// import pricingData from '../services.json'; // Remove this if you want to use API data only

const PricingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pricingData, setPricingData] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dish.najmainternational.com/api/home');
        const data = await response.json();
        setPricingData(data);
        // console.log('pricing data',data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (pricingData.length === 0) {
    return <div> <Placeholder xs={6} bg="light" animation="glow"/>
      <Placeholder className="w-75 " /> <Placeholder style={{ width: '50%' }} /></div>;
  }

  return (
    <div className='row'>
      <div className="tabs col-lg-12 col-12">
        <div className="row">
          <div className='tab-container'>
            {pricingData.map((tab, index) => (
              <button
                key={index}
                className={`tab ${index === activeTab ? 'active' : ''} col-lg-4`}
                onClick={() => handleTabClick(index)}
              >
                {tab.categoryname}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing-table text-center">
        {pricingData[activeTab].getplans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
