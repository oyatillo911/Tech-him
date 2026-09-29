import React from 'react'
import HomeOneSection from './Homesections/HomeOneSection/HomeOneSection'
import HomeTwoSection from './Homesections/HomeTwoSection/HomeTwoSection'

function Home({data}) {
  return (
    <>
    <HomeOneSection/>
    <HomeTwoSection data={data} />
    
    </>
  )
}

export default Home