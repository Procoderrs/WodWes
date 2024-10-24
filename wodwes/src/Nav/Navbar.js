
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';  // Corrected import
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Corrected import
import MegaMenu from "./MegaMenu";

const Navbar=()=>{
  
  return(
    
    <>
    

<div className="flex justify-center items-center h-full w-full mx-auto  bg-black my-0 p-4">
  <ul className="flex justify-between items-center gap-8 text-center text-white px-1.5 w-max text-xl">
    <li>
      <span><a href="#" className="underline">  Get a Quote</a> </span>
      <span>today to claim $200 free credit.</span>
    </li>
    <li>
<span className='mr-2'> <FontAwesomeIcon icon={faPhone} /> {/* FontAwesome icon */}
</span>
    +923061070678
    </li>
    <li> <span className='mr-2'>
    <FontAwesomeIcon icon={faEnvelope} />
    </span>
    sales@wodwes.com</li>
  </ul>
</div>

<header className="nav__header">
<a href="#">
        <img src='/wodweslogo.png' alt="" className=" w-44" />
      </a> 
<div className="hidden md:block">
  <MegaMenu/>
</div>
</header>

</>
  )
};
export default Navbar;