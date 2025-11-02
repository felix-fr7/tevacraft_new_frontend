import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbarup = () => {
    const navigate = useNavigate(); 
    
    const [isOpen, setIsOpen] = useState(false); 
    const currentPath = window.location.pathname;

    const NavLink = ({ href, children }) => {
        const isActive = href === '/' 
            ? currentPath === '/' 
            : currentPath.startsWith(href); 

        const handleNavLinkClick = (e) => {
            e.preventDefault();
            setIsOpen(false);
            navigate(href);
        };

        return (
            <li>
                <a 
                    href={href}
                    className={isActive ? 'active' : ''}
                    onClick={handleNavLinkClick}
                >
                    {children}
                </a>
            </li>
        );
    };

    const handleRegisterClick = () => {
        setIsOpen(false);
        navigate('/register');
    };

    return (
        <nav className="navbar">
            <style>{`
                /* --- Global Variables and Base Setup --- */
                :root {
                    --primary-color: #4CAF50;
                    --secondary-color: #004c99;
                    --text-dark: #1f2937;
                    --text-light: #ffffff;
                    --navbar-height: 80px;
                    --padding-inline: 4%;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                /* --- Navbar Structure --- */
                .navbar {
                    background-color: var(--text-light);
                    color: var(--text-dark);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding:10px;
                    height: var(--navbar-height);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    top: 0;
                    flex-wrap: nowrap; 
                }

                /* --- Logo Styling --- */
                .navbar-logo {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    flex-shrink: 0;
                    list-style: none; 
                }

                .navbar-logo a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .logo-image {
                    height: 55px; /* Increased size */
                    width: auto;
                    transition: transform 0.3s ease;
                    list-style: none; 
                     /* Added border-radius */
                    border-radius: 100%;

                }

                .logo-image:hover {
                    transform: scale(1.05);
                }


                /* --- Navigation Links (Desktop) --- */
                .navbar-links {
                    list-style: none;
                    display: flex;
                    padding: 0;
                    margin: 10px;
                    align-items: center;
                    transition: all 0.3s ease-out;
                    flex-grow: 1;
                    justify-content: flex-end;
                    margin-left: 5px;
                    width: 100%;
                    gap:0px
                }

                .navbar-links li {
                    margin: 0 12px; 
                    flex-shrink: 0;
                    list-style: none;
                }

                .navbar-links li a {
                    text-decoration: none;
                    color: var(--text-dark);
                    font-size: 0.95rem;
                    font-weight: 600;
                    padding: 25px 0px; 
                    position: relative;
                    transition: color 0.3s;
                    white-space: nowrap; 
                }
                
                /* Hover and Active states for links */
                .navbar-links li a:hover {
                    color: var(--primary-color);
                }

                .navbar-links li a.active {
                    color: var(--primary-color);
                }

                /* Underline animation for active/hover */
                .navbar-links li a::after {
                    content: '';
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%) scaleX(0);
                    width: 100%;
                    height: 3px;
                    background-color: var(--primary-color);
                    transition: transform 0.3s ease;
                    border-radius: 2px;
                }

                .navbar-links li a:hover::after,
                .navbar-links li a.active::after {
                    transform: translateX(-50%) scaleX(1);
                }

                /* --- Register Button --- */
                .navbar-register-button {
                    background-color: var(--primary-color);
                    color: var(--text-light);
                    border: none;
                    padding: 10px 25px;
                    border-radius: 50px;
                    font-size: 0.95rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    flex-shrink: 0;
                }

                .navbar-register-button:hover {
                    background-color: var(--secondary-color);
                    transform: translateY(-2px);
                }


                /* --- Mobile Menu Toggle (Hamburger) --- */
                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.8rem;
                    cursor: pointer;
                    color: var(--text-dark);
                    padding: 5px;
                    z-index: 1001;
                }

                /* ======================================================= */
                /* --- Media Queries for Robust Alignment --- */
                /* ======================================================= */

                /* 1. Large Desktop/Smaller 4K (Up to 1440px) */
                @media (max-width: 1440px) and (min-width: 1201px) {
                    .navbar-links li {
                        margin: 0 10px;
                    }
                    .navbar-links li a {
                        font-size: 0.9rem;
                    }
                }

                /* 2. Standard Desktop/Laptop (Up to 1200px) - FINE-TUNED ALIGNMENT */
                @media (max-width: 1200px) {
                    .navbar-links li a {
                        font-size: 0.85rem;
                    }
                    .navbar-links li {
                        margin: 0 8px;
                    }
                    .navbar-register-button {
                        padding: 8px 20px;
                        font-size: 0.9rem;
                    }
                }

                /* 3. Tablet/Small Laptop (Switch to Mobile Menu) */
                @media (max-width: 992px) {
                    .menu-toggle {
                        display: block;
                    }

                    .navbar-links {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: var(--navbar-height);
                        left: 0;
                        width: 100%;
                        max-height: 0; 
                        overflow: hidden;
                        background-color: var(--text-light);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                        z-index: 999;
                        transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
                        padding: 0;
                        margin: 0;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    .navbar-links.open {
                        max-height: 600px;
                        padding: 20px 0;
                    }

                    .navbar-links li {
                        width: 100%;
                        margin: 0;
                        text-align: center;
                    }

                    .navbar-links li a {
                        padding: 15px 0;
                        width: 100%;
                        display: block;
                        font-size: 1.1rem;
                        white-space: normal;
                    }
                    
                    .navbar-links li a::after {
                        content: none;
                    }
                    
                    .navbar-links li a:hover {
                        background-color: #f0f0f0;
                    }

                    .navbar-register-button {
                        margin: 20px auto 10px; 
                        display: block;
                    }
                }
                
                /* 4. Small Mobile (Up to 480px) */
                @media (max-width: 480px) {
                    .navbar {
                        height: 60px;
                    }
                    .logo-image {
                        height: 35px; /* Adjust for smaller screens if needed */
                    }
                    .menu-toggle {
                        font-size: 1.5rem;
                    }
                    .navbar-links {
                        top: 60px;
                    }
                    .navbar-links li a {
                        font-size: 1rem;
                        padding: 12px 0;
                    }
                }

                /* 5. Very Small Mobile (Up to 390px) */
                @media (max-width: 390px) {
                    .navbar-links.open {
                        padding: 10px 0;
                    }
                }
            `}</style>

            <div className="navbar-logo">
                <a href="/"> 
                    <img src='/asset/logo.png' alt='TevaCraft Logo' className="logo-image" />
                </a>
            </div>
            
            <button 
                className="menu-toggle" 
                onClick={() => setIsOpen(!isOpen)} 
                aria-expanded={isOpen}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <NavLink href="/service">Service</NavLink>
                <NavLink href="/industries">Industries</NavLink>
                <NavLink href="/technology">TECHNOLOGY & PLATFORMS</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/case-studies">Case-Studies</NavLink>
                <NavLink href="/knowledge-center">Knowledge-Center</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/faq">Faq</NavLink>
                <NavLink href="/localization-services">Localization-Services</NavLink>
                
                <li>
                    <button 
                        className="navbar-register-button" 
                        onClick={handleRegisterClick} 
                    >
                        Enrolment form
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbarup;