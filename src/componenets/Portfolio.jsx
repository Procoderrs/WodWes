import React from 'react'
import { useEffect } from 'react'

const Portfolio = () => {
  useEffect (()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio