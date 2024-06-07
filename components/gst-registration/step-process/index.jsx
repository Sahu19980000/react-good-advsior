import Subheading from '@/components/all-shared/sub-heading';
import Image from 'next/image';
import React from 'react'

const Step_process = () => {
  return (
    <div className='step_process_container'>
       <div className='container'>
        <Subheading title="Only 3 steps to go" textalign="center" />
        <Image src='/images/process.png' className='img-fluid' alt='process-image' width={1250} height={50}/>
        </div>
    </div>
  )
}

export default Step_process;