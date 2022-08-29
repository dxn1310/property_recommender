import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../Images/logo.jpg'

export default function Navbar() {
    return (
        // <div>Navbar</div>
        <navbar className='navbar'>
            {/* <div><img src='' alt='Logo'/></div> */}
            {/* <img src='' alt='Logo'/> */}
            <Image
                borderRadius='full'
                boxSize='70px'
                src={logo}
                alt='Dan Abramov'
                borderColor="black"
                className='logo-img'
            />
            {/* <div className='nav-list'> */}
            <div>
                <ul ul className='nav-list'>
                    <li><a className='nav-button' href=''>Home</a></li>
                    <li><a className='nav-button' href=''>About Us</a></li>
                    <li><a className='nav-button' href=''>Contact Info</a></li>
                    {/* </div> */}
                </ul>
            </div>

        </navbar>
    )
}
