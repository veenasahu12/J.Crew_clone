import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import LoginModal from "../LoginModal/LoginModal";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const {user, isauth} = useSelector((state) => state)
    // console.log(user,isauth)

    return (
        <div className='navbar'>
           <img className='nav1' src='https://images.squarespace-cdn.com/content/v1/5727957a2eeb8180abd23543/1533313214072-CZMGJBJPF695OKA1JWYJ/2da2ae9381bf39141bc6e416f41683b9.jpg' alt="J.Crew"/>
           
           <div className='nav2'>
                <Link to='/new'  className='link'>
                    New
                </Link>
                <Link to='/women'  className='link'>
                    Women
                </Link>
                <Link to='/men'  className='link'>
                    Men
                </Link>
                <Link to='/kids' className='link' >
                   Kids
                </Link>
                <Link to='/swim'  className='link'>
                    Swim
                </Link>
                <Link to='/cashmere'  className='link'>
                    Cashmere
                </Link>
                <Link to='/home'  className='link'>
                    Home
                </Link>
                <Link to='/stories' className='link' >
                    Stories
                </Link>
                <Link to='/sale' className='link' >
                    Sale
                </Link>
            </div>
            <div className='nav3'>
            <div className="input-icons">
                <i className="fa fa-search icon">
                </i>
                <input 
                className="input-field"
                type="search"
                placeholder="Search J.Crew" 
                />
            </div>
            {isauth ? <div className='useremail'>{user.useremail}</div> : 
            <div  className='links' onClick={() => setIsOpen(true)}>
                Sign In
            </div>
            }
            {isOpen && <LoginModal setIsOpen={setIsOpen} />}
            <div className='heart'>
                <i className="fa fa-heart icon"></i>
            </div>
            <Link className='breifcase' to="/cart">
                <i className="fa fa-briefcase icon"></i>
            </Link>
            </div>
        </div>
    
    )
}

export default Navbar
