import React from 'react'
/* import { Helmet } from 'react-helmet-async'; */
import {TbTargetArrow,TbStarFilled} from 'react-icons/tb'
import {HiLightBulb} from 'react-icons/hi'
import { IconContext } from "react-icons";

function About() {
  return (
    <div class="bg-sky-50">

    {/*  <Helmet>
            <title>About WaterFields HealthCare Ltd</title>
            <meta name="description" content="Providing person centred care and support to all our service users with a range of care and support needs.
                        "/>
            <link rel="canonical" href="/about" />
        </Helmet> */}
      <section>
            <div class="bg-sky-50 px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-5xl">
                       About US
                    </h1>

                    
                </div>

                <div class="md:flex pt-4 pb-4 bg-sky-50">

                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Mission <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <TbTargetArrow class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="pl-4 font-normal text-darkbluetheme text-sm md:text-lg">
                        
                        To provide a high standard of care and support to all our service users promoting their wellbeing.
                        Providing person centered care and support to all our service users with a range of care and support needs.
                         Our team of healthcare professionals is there to provide care and support 24/7. At NV Health Care, we are dedicated to 
                         providing compassionate, high-quality care tailored to the unique needs of each individual. Our team of experienced 
                         professionals offers a wide range of services including home care, assisted living supported and specialized care for 
                         those with chronic conditions or disabilities. We prioritise dignity, respect and independence, ensuring that all our 
                         clients receive personalised care and support in a more nurturing environment. 


                        <br/><br/>

                        </p>

                    </div>

                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Vision <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <HiLightBulb class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="pl-4 font-normal text-darkbluetheme text-sm md:text-lg">
                        
                        NV Health Care Ltd will be a recognised leader in improving the quality of Health Care in the communities we serve.
                        Our vision is to become providers of choice. We envision a future where every individual receives personalised and 
                        empathetic care, fostering trust and well-being in our community. Our dedication to excellence ensures that each client 
                        experiences good quality care, holistic support and empowering them to lead a healthier life. At NV Health Care we strive 
                        to build a healthcare system where quality and self-centered care are paramount, reinforcing our commitment to a healthier 
                        and happier future for all. 


                        <br/><br/>

                        </p>

                    </div>

                </div>

                <div class="md:flex pt-4 pb-1">

                     

                    <div class="md:w-full  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-2 ">
                        <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
                           Our Values <br/><br/>
                        </h5>
                        <div class="  grid pb-4 lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
                       
                            <div class='flex col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'2px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b class="text-titleblue">Independence -</b> We prioritize our service users' independence.

                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b class="text-titleblue">Individuality -</b> Each person is supported and taken care of according to their care needs, following their care and support plan.

                                <br/><br/>

                                </p>


                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b class="text-titleblue">Person Centred Care -</b>NV Health Care is flexible and we value service user’s unique needs. We work with each individual according to 
                                their care and support plan.
                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4  text-darkbluetheme font-medium text-sm md:text-lg">
                                
                                <b class="text-titleblue">Choice -</b> At NV Health Care we value everyone's happiness and comfort. Service users are free to choose the services they want with help of 
                                their family and how they want to be supported.
                                <br/><br/>

                                </p>

                            </div>
                        </div>
                        
                    </div> 

                </div>

            </div>
      </section> 
    </div>
  )
}

export default About