import React from 'react'
import logo from '../images/nv3 PNG.png'
import {Link} from 'react-router-dom'
import excellent from '../images/reliability.png'
import equal from '../images/expertise.png'
import amazing from '../images/public-service.png'

function Footer() {
  return (
    <div class='mt-5'>
        <section className='lg:pt-16'>

<div className='bg-sky-50'>
    <div className="sm:item-center  sm:justify-center text-center ">

        <h1 className='sm:tetx-2xl md:text-4xl text-navcolour font-extrabold'>Why Choose Us</h1>
    </div>

    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-4 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 pt-8 px-2 md:px-5 '>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={excellent} alt='excellence' style={{  width: "20%" ,height: "75%",}}  class=" sm:items-center sm:justify-center mx-1   
            my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p class="text-titleblue">
                We Are Reliable
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                
                We offer 24 hour services. Anytime you request our services, we show up before you know it. 
                Our team is prepared to work according to personal schedule. We also make at-home care easy for loved ones.<br/>

                </p>

                
            </p>
          </div>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={amazing} alt='excellence'  style={{  width: "20%" ,height: "75%",}}  class=" sm:items-center sm:justify-center mx-1   my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p class="text-titleblue">
                We Care
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                We have a team of dedicated, passionate and experienced caregivers who provide great care. We work with families to find the most suitable caregiver
                for everyone who uses our services.<br/><br/>
                </p>

                
            </p>
          </div>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={equal} alt='excellence' style={{  width: "20%" ,height: "75%",}}  class=" sm:items-center sm:justify-center mx-1   my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p class="text-titleblue">
                We are Professionals
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                    Our staff members are well trained and equipped to ensure we deliver the best services
                    that align with care standards.
                </p>

                
            </p>
          </div>

</div>
</div>



</section>
<footer class="bg-navcolour  shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto py-5 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="jjj" class="flex items-center mb-4 sm:mb-0">
                <img src={logo} class="h-8 md:h-28 ml-2" alt="Enroute Logo" />
                <span class="self-center text-white md:text-2xl text-1xl font-bold whitespace-nowrap dark:text-white">  NV HealthCare Ltd</span>
            </a>
            <ul class="flex flex-wrap text-lg text-sm  pt-6 text-base font-medium text-white sm:mb-0 dark:text-gray-400">
                <p className='text-white text-lg font-bold md:px-6 px-4'>
                    About<br/>
                    <ul class="list-disc ml-6 text-sm font-bold">
                             <li><Link to='/about'><u>Mission</u></Link></li>
                            <li><Link to='/about'><u>Vision</u></Link></li>
                            <li><Link to='/about'><u>Values</u></Link></li>
                             
                            
                    </ul>
                </p>
                <p  className='text-white text-lg font-bold md:px-8 px-4'>
                    Services<br/>
                    <ul class="list-disc ml-6 text-sm font-bold">
                             <li><Link to='/services'><u>Domiciliary Care</u></Link></li>
                            <li><Link to='/personal'><u>Supported living</u></Link></li>
                            <li><Link to='/services'><u>Respite Care</u></Link></li>
                             <li><Link to='/services'><u>Palliative Care</u></Link></li>
                            
                            </ul>
                </p>
                
                <Link to="/contact" className='text-white text-lg font-bold md:px-8 px-4'>
                    Contact
                </Link>
            </ul>
        </div>
        <hr class="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between ml-3">
        <span class="block text-sm text-white sm:text-center dark:text-gray-400 col-span-1">© 2024  
        <Link to="/" class="hover:underline text-white">
                 NV HealthCare™
        </Link>. 
            All Rights Reserved.
        </span>

        <span class="md:mr-3 block text-xs text-white sm:text-center dark:text-gray-400 col-span-1 "> 
            <a href="mailto:rufarochiuta@gmail.com" class="hover:underline">
                Developed by Amani First
            </a><br/>
            
        </span>

        </div>
    </div>
</footer>


            
            
    </div>
  )
}

export default Footer