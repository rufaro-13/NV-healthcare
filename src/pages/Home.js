/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { Link } from "react-router-dom";
import domic from "../images/male-social-worker-taking-care-old-woman.jpg"

import paliat from '../images/2151231518.jpg'
import respite from '../images/social-worker-taking-care-senior-woman.jpg'
import supported from '../images/2151231389.jpg'


// Create an array of Carousel Items



/* const items = Array(5)
	.fill('')
	images.map((_, index) => ({
	alt: 'A random photo',
	image: _.image1,
	content: (
		<div>
		<strong>Round Carousel</strong>
		<span>Slide number {index + 1}</span>
		</div>
	)
	})); */

function Home() {

   // const carouselRef = React.createRef();

  return (
    <div className=' mb-5 bg-navcolour'>
 {/* 'bluetheme':'rgb(245 208 254)', */}
        {/* <Helmet>
            <title>Home </title>
            <meta name="description" content=" Enroute Care Ltd, the home of love and care."/>
            <link rel="canonical" href="/" />
        </Helmet> */}
       <section className='bg-navcolour'>
        <section class="container bg-cover bg-center bg-no-repeat bg-hero_pattern md:justify-center bg-blend-multiply ">
            
          {/* <video class="video-fluid" controls autoPlay muted loop   >
            <source src={vide} type="video/mp4" />
             
          </video> */}
            {/* <Hero/> */}

       {/*    <div class=" overlay px-4 mx-auto max-w-screen-xl text-left sm:py-16  lg:py-40">
                <h1 class=" text-4xl font-extrabold  tracking-tight leading-none text-pink-800 md:text-5xl lg:text-6xl">WaterField HealthCare Ltd,</h1>
                <p class=" text-2xl font-bold text-pink-800  lg:text-4xl sm:px-16 lg:px-48">
                the home of quality care.
                    
                </p>
                <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row text-left pt-5 sm:space-y-0 sm:space-x-4">
                    
                   <p className='text-yellowtheme py-3 px-3 rounded-lg font-bold  border-navcolour text-1xl lg:text-3xl md:w-1/2'>
                   An affordable service which prioritises the comfort and wellbeing of clients.
                   </p>      
                </div> 

                
            </div> */}
           {/*  <center>
            <IconContext.Provider value={{ color: 'white', size: '20px', padding:'3px 2px' }}>
                
                    <div class="flex  sm:items-center text-xs md:text-base sm:justify-center mr-2 my-auto">
                    <Link
          
          to="/gallery"
        > <FaCircleChevronDown 
         class="sm:items-center sm:justify-center  mr-2 "/></Link>
                    </div>
                </IconContext.Provider>
            </center> */}
        </section>
        {/* <Carousel/> */}
        {/* <Carousel
			ref={carouselRef}
			items={items}
			slideOnClick
		/>
 */}

<div class="box-container">
	<div class="box-item shadow-2xl">
    <div class="flip-box">
      <div class="flip-box-front text-center bg-doctor bg-opacity-60 " /* style={{backgroundImage: doctor}} */>
        <div class="inner text-herodiv font-bold brightness-100  color-white">
          <h3 class="flip-box-header text-4xl text-herodiv">NV HealthCare Ltd,</h3>
          <p>the home of quality care.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center bg-doctor1" /* style={{backgroundImage: doctor}} */>
        <div class="inner text-white font-bold color-white">
          <h3 class="flip-box-header text-4xl text-white">NV HealthCare Ltd,</h3>
          <p>An affordable service which prioritises the comfort and wellbeing of clients.</p>
          <button class="flip-box-button border-white text-white">Learn More</button>
        </div>
      </div>
    </div>
	</div>
	<div class="box-item shadow-2xl">
    <div class="flip-box">
      <div class="flip-box-front text-center  bg-hands" /* style={{backgroundImage: hands}} */ >
        <div class="inner text-white font-bold color-white">
          <h3 class="flip-box-header text-4xl">NV HealthCare Ltd,</h3>
          <p>where everyone matters</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center  bg-hands1 bg-opacity-80" /* style={{backgroundImage: hands}} */>
        <div class="inner text-white font-bold color-white">
          <h3 class="flip-box-header text-4xl">NV HealthCare Ltd,</h3>
          <p>Your family becomes our family too.</p>
          <button class="flip-box-button">Learn More</button>
        </div>
      </div>
    </div>
	</div>
	<div class="box-item shadow-2xl">
    <div class="flip-box">
      <div class="flip-box-front text-center font-bold bg-close" /* style={{backgroundImage: closesupport}} */>
        <div class="inner text-white color-white">
          <h3 class="flip-box-header text-4xl">NV HealthCare Ltd,</h3>
          <p>monitors everyone's health.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center bg-close1" /* style={{backgroundImage: closesupport}} */>
        <div class="inner text-white font-bold color-white color-white">
          <h3 class="flip-box-header">NV HealthCare Ltd,</h3>
          <p>We make sure your loved ones and our care givers are in good health.</p>
          <button class="flip-box-button border-white text-white">Learn More</button>
        </div>
      </div>
    </div>
	</div>
</div>
 
    
        </section>
        {/* <div className=' text-center italic text-xs'><a  href=' https://www.pexels.com/video/a-woman-instructing-the-elderly-man-to-the-medicine-7517699/'>  Video by Kampus Production</a></div> */}
{/* 
        <section class="container bg-cover bg-center bg-no-repeat bg-hero_pattern bg-gray-400 bg-blend-multiply ">
            <Hero/>
        </section> */}
        <section className='bg-navcolour pb-8'>
            <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex ">
                    <h4 class="md:mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-3xl">
                        The services we offer include:
                    </h4>

                    {/* <div className="mb-4 rounded-lg overflow-hidden sm:w-16 lg:mt-0 mt-0 sm:mt-0">
                        <img src={serv} alt="Residential Care" className="w-full lg:h-full h-12 object-cover" />
                    </div> */}
                </div> 

                <div class=" lg:flex grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">

                    <div className=" shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme  md:w-1/2 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-lg" src={domic} alt="old man sitting on a wheelchair" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Domiciliary Care
                            </p>
                        </h5>
                        <p className=" text-sm md:text-lg text-darkbluetheme dark:text-blue-500 pt-4">
                            <p class='text-left'>
                                We help people maintain their quality of life and independence by providing a  
                                helping hand with household chores, personal care, medication or a companionship visit

                        
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                    Learn more
                                </Link>
                        </p>
                    </div>
                    

                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6  hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/2 mt-8 sm:items-center sm:justify-center">
                    
                        <img class="rounded-lg" src={paliat} alt="end of life care of a man with terminal illness" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            End-of-life Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We provide physical, emotional, social, and spiritual support for patients and their families 
                            during defining moments of life.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-10 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                    Learn more
                            </Link>
                        </p>
                        
                    </div>
                
                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 lg:w-1/2 rounded-lg bg-bluetheme md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={respite} alt="young-doctor-helping-one-guy-stand-up" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Respite Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                                We help family members get some relief in order to re-energise at peace by providing
                                temporary care services to their loved ones being looked after.
                           
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                    Learn more
                            </Link>
                        </p>
                    </div>

                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={supported} alt="male-social-worker-taking-care-old-woman" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p >
                            Supported Living
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                            designed around their needs and goals.
                            </p>

                            <Link to="services" 
                                 class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>

                </div>
            </div>

        </section>
 
    </div>
  )
}

export default Home