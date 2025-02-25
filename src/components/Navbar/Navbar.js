import './Navbar.css';
import { cowGif, rainbowStars } from '../../assets/gifs/gifsindex';
import { CgMenuBoxed } from 'react-icons/cg';
import { IconContext } from "react-icons";
import { useState } from 'react';

function MenuIcon(){
  return(
    <IconContext.Provider value={{className: "iconStyle"}}>
        <CgMenuBoxed/>
    </IconContext.Provider>
  );
}

function NavSeparator(){
    return(<p className="navSeparator">-------------------------------</p>);
}

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
    <nav className={isNavExpanded ? "nav expanded" : "nav"}>
        <button className="menuIcon" onClick={() => {setIsNavExpanded(!isNavExpanded);}} >
            <MenuIcon/>
        </button>
        <div className={isNavExpanded ? "navHeader expanded" : "navHeader"}>
            <a href="/" style={{textDecoration: 'none', margin: '0px', padding: '0px'}}>
                <img src={cowGif} alt="black and white cow turning its head"/>
            </a>
            <div className="navHeaderText">
                <a href="/" style={{textDecoration: 'none'}}>
                    <h1 id="navTitle">graces-portal.net</h1>
                    <h2 id="navSubtitle">...where dreams come true!</h2>
                </a>
            </div>
        </div>
        <div className={isNavExpanded ? "navStars expanded" : "navStars"}><img src={rainbowStars} alt="line of rainbow stars"/></div>
        <ul className={isNavExpanded ? "navLinks expanded" : "navLinks"}>
            <p><b>personal</b></p>
            <li className="navLink">★
                <a href="/home">home</a>
            </li>
            <li className="navLink">★
                <a href="/about">about</a>
            </li>
            <li className="navLink">★
                <a href="/art-diy">art & DIYs</a>
            </li>
            <li className="navLink">★
                <a href="/photography">photography</a>
            </li>
            <li className="navLink">★
                <a href="https://blog.graces-portal.net" target="_blank" rel="noreferrer">blog</a>
            </li>
            <li className="navLink">★
                <a href="/videos">videos</a>
            </li>
            <li className="navLink">★
                <a href="/favorites">my favorites</a>
            </li>
            <NavSeparator/>
            <p><b>fun stuff</b></p>
            <li className="navLink">★
                <a href="/music">music</a>
            </li>
            <li className="navLink">★
                <a href="/fortune-teller">fortune teller</a>
            </li>
            <li className="navLink">★
                <a href="/internet-explorer">internet explorer</a>
            </li>
            <NavSeparator/>
            <p><b>software projects</b></p>
            <li className="navLink">★
                <a href="https://grace-manning.com/cowculator" target="_blank" rel="noreferrer">cowculator</a>
            </li>
            <li className="navLink">★
                <a href="https://grace-manning.com/undergrad-research" target="_blank" rel="noreferrer">research</a>
            </li>
        </ul>
        <div className={isNavExpanded ? "navStars expanded" : "navStars"}><img src={rainbowStars} alt="line of rainbow stars"/></div>
    </nav>
  );
}