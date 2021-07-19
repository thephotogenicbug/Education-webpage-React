import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes, FaUniversity,} from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import {IconContext, icons} from 'react-icons/lib';


function Navbar() {
    const [click, setClick]=useState(false);
    const [button , setButton]=useState(true);

    const handClick=()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className='navbar'>
           <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             <FaUniversity className='navbar-icon'/>   
             EDUPROV    
            </Link> 
            <div className='menu-icon' onClick={handClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                   <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
                </li>
              
              
                <li className="nav-btn">
                    {button ? (
                        <a href="tel:919008006228"  className='btn-link' style={{textDecoration:'none'}}>
                            <Button buttonStyle='btn--outline'>Call US</Button>
                        </a>
                    ): (
                        <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline'
                             buttonSize='btn--mobile'>
                            SIGNUP</Button>
                        </Link>
                    )}
                </li>
            </ul>
            </div>    
           </div> 
           </IconContext.Provider>
        </>
    )
}

export default Navbar