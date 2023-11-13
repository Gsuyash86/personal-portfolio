import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/CloseOutlined'
import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  const handleToggle = () => {
    setExpandNavbar((prevExpandNavbar) => !prevExpandNavbar);
  };
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container container'>
        <div class="hamburger-lines" onClick={handleToggle}
         >
             {!expandNavbar ?  <ReorderIcon /> : <CloseIcon />}
          </div>
          <ul class={`menu-items ${expandNavbar ? 'toggle' : ''}` }>
              <li><Link to='/personal-portfolio' onClick={handleToggle}> Home </Link></li>
              <li><Link to='/personal-portfolio/projects' onClick={handleToggle}> Projects </Link></li>
              <li><Link to='/personal-portfolio/experience' onClick={handleToggle}> Experience </Link></li>    
              <li><Link to='/personal-portfolio/resume' onClick={handleToggle}> Resume </Link></li>  
          </ul>
          <Link to="/personal-portfolio"><h1 class="logo"><img src={Logo} alt='logo' /></h1></Link>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
