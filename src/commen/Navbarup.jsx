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
                    padding: 10px 20px; /* Adjusted padding */
                    height: var(--navbar-height);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    top: 0;
                    position: relative; /* Added relative for absolute positioning of menu */
                    white-space: nowrap; /* Prevents wrapping in flex container */
                }

                /* --- Logo Styling --- */
                .navbar-logo {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    flex-shrink: 0; /* Prevents logo from shrinking */
                    list-style: none; 
                    z-index: 1002; /* Ensures logo stays above mobile menu if needed */
                }

                .navbar-logo a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .logo-image {
                    height: 55px; 
                    width: auto;
                    transition: transform 0.3s ease;
                    list-style: none; 
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
                    margin: 0;
                    align-items: center;
                    transition: all 0.3s ease-out;
                    flex-grow: 1;
                    justify-content: flex-end;
                    gap: 15px; /* Used gap instead of margin for better control */
                }

                .navbar-links li {
                    flex-shrink: 0;
                    list-style: none;
                }

                .navbar-links li a {
                    text-decoration: none;
                    color: var(--text-dark);
                    font-size: 0.9rem; /* Slightly reduced base size */
                    font-weight: 600;
                    padding: 10px 5px; 
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
                    bottom: 0px; /* Adjusted bottom */
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
                    padding: 10px 20px;
                    border-radius: 50px;
                    font-size: 0.9rem;
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

                /* IMPORTANT CHANGE:
                   Increased the breakpoint to 1280px.
                   Since you have many links + a long button, standard laptops 
                   cannot fit them all horizontally without overlapping the logo.
                */
                @media (max-width: 1280px) {
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
                        overflow: hidden; /* Hides content when closed */
                        background-color: var(--text-light);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                        z-index: 999;
                        transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
                        padding: 0;
                        margin: 0;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 0; /* Reset gap for mobile stack */
                    }

                    .navbar-links.open {
                        max-height: 80vh; /* Allow enough height for scroll if needed */
                        padding: 20px 0;
                        overflow-y: auto; /* Allow scroll inside menu if height is small */
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
                        width: 80%; /* Make button wider on mobile menu */
                    }
                }
                
                /* Small Mobile Styling */
                @media (max-width: 480px) {
                    .navbar {
                        height: 60px;
                        padding: 10px;
                    }
                    .logo-image {
                        height: 40px; 
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
                <NavLink href="/technology">Technology & Platforms</NavLink>
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
                        Join our translation team
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbarup;