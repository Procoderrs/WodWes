import { NavLink } from "react-router-dom";

const MenuItem=({label,href,children})=>{
  return(
    <li>
      <div className="nav-item-content">
        <NavLink to={href} className={({isActive}) =>
        (isActive ? 'active':'')}>
          {label}
        
        </NavLink>
      </div>
      {children && <div className="dropdown">dropdown content</div>}
    </li>
  );
};
export default MenuItem;