import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Button} from '../Buttons/Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
import Logo from '../assets/logo.png'


const Navbar = () => {
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
             <img src={Logo} height="250px" alt="Eduprov logo" title="Eduprov logo"/>
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
                <li className="nav-item">
                   <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                       About
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to='/applicationform' className='nav-links' onClick={closeMobileMenu}>
                      Application Form
                   </Link>
                </li>
                
                
                <li className="nav-btn">
                    {button ? (
                        <a href="tel:919008006228"  className='btn-link' style={{textDecoration:'none'}}>
                            <Button buttonStyle='btn--outline'>Call US</Button>
                        </a>
                    ): (
                        <a href="tel:918025591146" className='btn-link'  style={{textDecoration:'none'}} onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline'
                             buttonSize='btn--mobile'>
                            Call US</Button>
                        </a>
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