import React from 'react'
import personal from '../images/2151231524.jpg'
/* import { Helmet } from 'react-helmet-async' */
function Personal() {
  return (
    <div>

        {/* <Helmet>
            <title>Personal Care</title>
            <meta name="description" content="See our detailed personal care services"/>
            <link rel="canonical" href="/personal" />
        </Helmet> */}
         <section>
        <section class=" bg-cover bg-center bg-no-repeat bg-sky-50 pb-4 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-2 text-4xl font-extrabold  tracking-tight leading-none text-darkbluetheme md:text-5xl lg:text-6xl">
                Personal Care</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-2 ">
                                <div class="md:w-1/2 col-span-1 px-2 shadow-2xl rounded-lg ">
                                    <img class="rounded-lg md:h-92" src={personal}  alt="" />
                                </div>
                                <div class="md:w-1/2 shadow-2xl  bg-gray-200 sm:82 rounded-lg  border-2 border-bluetheme  text-darkbluetheme sm:items-center sm:justify-center  mx-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                                        <p>
                                        Personal Care
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                    
                                        <ul class="list-disc ml-6">
                                            <li>Personal care: Assisting with tasks such as bathing, dressing, grooming, and toileting.</li>
                                            <li>Medication management: Prompting medication from blister pack, monitoring supply.</li>
                                            <li>Mobility assistance: Helping clients move around safely, using mobility aids if necessary.</li>
                                            <li>Meal preparation: Preparing nutritious meals according to dietary, religious or cultural requirements and preferences. Offering hot and cold drinks</li>
                                            
                                        </ul>
                                        </p>

                                        
                                    </p>
                                </div>
                               
                            </div>
        </section>
        
        

        </section>

        


        </section>
    </div>
  )
}

export default Personal