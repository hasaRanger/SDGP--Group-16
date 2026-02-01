import React from 'react'
import Header from '../../components/common/Header'
import Title from '../../components/landing/Title'
import Footer from '../../components/common/Footer'

function Landing() {

  return (
    <div className='min-h-screen flex flex-col bg-[#050505]'>
      <Header variant="landing" />
      <div className='mt-20 sm:mt-24 flex-1'>
        <Title />
      </div>
      <Footer variant='landing'/>
    </div>
  )
}

export default Landing
