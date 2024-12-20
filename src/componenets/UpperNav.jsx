import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const UpperNav = () => {
  return (
    <>

      <div className='w-full bg-banner-image '>

      

      <div className="relative flex max-w-[1440px] w-[90%] mx-auto  py-[11px] px-[8px] text-[13px] leading-4   flex-wrap  items-center  justify-center gap-x-12 gap-y-2   text-xl text-white sm:gap-y-3 sm:text-[13px] lg:z-[60] ">
        <div className="flex     items-center justify-center gap-4 leading-4">
          <p className="text-[15px] leading-4">
            <span>
              <Link to="/contact" className="border-b-[1px] text-[15px] mr-2 leading-4  ">
                Get a Quote
              </Link>
            </span>
            today to claim $200 free credit.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <FontAwesomeIcon icon={faPhone} className="h-[20px] w-[20px] leading-4 " />
          <span className="text-[15px] leading-4">+ 92 306 1070 768</span>
        </div>
        <div className="flex items-center justify-center gap-2  ">
          <FontAwesomeIcon icon={faEnvelope} className="h-[20px] w-[20px] leading-4" />
          <span className="text-[15px] leading-4">sales@wodwes.com</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default UpperNav