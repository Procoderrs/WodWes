import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const UpperNav = () => {
  return (
    <>
      <div className="lg:relative flex flex-wrap  items-center  justify-center gap-x-12 gap-y-2 bg-banner-image px-2 py-[8px] text-xl text-white sm:gap-y-3 sm:text-[13px] lg:z-[60] font-Inte">
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm">
            <span>
              <Link to="/contact" className="border-b-[1px] text-sm mr-2  ">
                Get a Quote
              </Link>
            </span>
            <span>today to claim $200 free credit.</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-sm" />
          <span className="text-sm">+ 92 306 1070 768</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          <span className="text-sm">sales@wodwes.com</span>
        </div>
      </div>
    </>
  )
}

export default UpperNav