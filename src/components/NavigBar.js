
'use client'

//import {FaEnvelopeOpenText,FaMobileScreenButton} from 'react-icons/fa6';
import {Dropdown,  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/nv3 PNG.png'
//import {IconContext} from "react-icons";
export default function NavbarWithCTAButton() {
  return (
<div>
 {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap grid grid-cols-2 sm:h-8 md:h-16  justify-between items-center  max-w-screen-2xl ">
            <div class=" md:flex bg-navcolour h-full items-center space-x-3 rtl:space-x-reverse  ">

                <IconContext.Provider value={{ color: 'white', size: '20px', padding:'2px 2px' }}>
                   <a href="mailto:admin@waterfieldshealthcare.com" class=" font-normal mx-auto text-white dark:text-white hover:underline">
                    <div class="flex  sm:items-center sm:justify-center text-xs md:text-base my-auto">
                    <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-auto  "/>Email: admin@waterfieldshealthcare.com
                    </div></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: 'white', size: '20px', padding:'3px 2px' }}>
                <a href="tel:5541251234" class=" font-normal mx-auto  text-white dark:text-white hover:underline">
                    <div class="flex  sm:items-center text-xs md:text-base sm:justify-center mr-2 my-auto">
                    <FaMobileScreenButton class="sm:items-center sm:justify-center  mr-2 "/>(+44) 7451 998 627
                    </div></a>
                </IconContext.Provider>
    
            </div>
            <div class="flex items-center h-full space-x-6 rtl:space-x-reverse bg-green-400">

                <h1 className="text-lg font-bold mx-auto  text-yellowtheme1 dark:text-white">Love and Care for all</h1>
                
            </div>
        </div>
    </nav> */}

    <Navbar
      fluid
      className="bg-navcolour"
    >
      <Navbar.Brand >
        <Link to="/"> <img alt="Flowbite React Logo" className="mr-3 h-12 sm:h-24" src={logo} /></Link>
        <span className="self-center whitespace-nowrap text-white text-xl font-bold dark:text-white">
          NV Health Care 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-white font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          About
        </Link>
        <div className='text-white font-bold md:text-lg'>
          <Dropdown
          inline
          label="Domiciliary"
          className='text-white font-bold md:text-lg bg-navcolour hover:bg-icyteal hover:text-crystalteal'

        >
        <Dropdown.Header className='bg-navcolour'>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
        <Link to="/social" className='text-white font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Social Inclusion
        </Link><br/>
        <Link to="/personal" className='text-white font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Personal Care
        </Link><br/>
        <Link to="/sitting" className='text-white font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Sitting Call
        </Link><br/>
                </ul>
          </Dropdown.Header>
          
        </Dropdown></div>
        <Link to="/services" className='text-white font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          Services
        </Link>
        
        <Link to="/contact" className='text-white font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
