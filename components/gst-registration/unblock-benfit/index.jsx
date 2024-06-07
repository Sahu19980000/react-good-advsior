import Subheading from '@/components/all-shared/sub-heading'
import { Buttoncomponent } from '@/components/button'
import React from 'react'
import services_Data from "./services.json";
import Image from 'next/image';

const Unblock_benfit = () => {
    
    console.log(services_Data);
  return (
    <div className="unblock-benfit-container">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <Subheading title="Get Assistance In Filing GST Return & Unlock Significant Benefits!" textalign="start"/>
                </div>
                <div className="col-lg-4 pt-4 pb-4 mt-2">
                    <Buttoncomponent title_data="Consult an expert" color="#ffffff"/>
                </div>
            </div>
            <div className="row">
                {
                  services_Data.all_services.map((ele,index)=>{
                    return(
                        <div className="flex col-lg-3 col-md-6 bg-light rounded services-card-box" key={index}>
                            <Image src={ele.icon} width={35} height={35}/>
                           <span className='fs-6 mx-2 text'>{ele.title}</span>
                        </div>
                    )
                  })
                }
               
            </div>
        </div>
    </div>
  )
}

export default Unblock_benfit