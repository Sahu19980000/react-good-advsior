import React from 'react'
import Good_advisor_registration from './hero-section'
import Step_process from "./step-process"
import Unblock_benfit from './unblock-benfit'
import Gst_knowledge_info from './gst-acknowledge'
import HeaderFile from '../shared/header'
import Footerfile from '../shared/footer'

const Gst_registration = () => {
  return (
    <>
      <HeaderFile /> 
        <Good_advisor_registration />
        <Step_process />
        <Unblock_benfit />
        <Gst_knowledge_info />
      <Footerfile />
    </>
  )
}

export default Gst_registration