import React from 'react'
import supported from '../images/2150829771.jpg'
/* import { Helmet } from 'react-helmet-async' */
function Sitting() {
  return (
    <div>

{/* <Helmet>
            <title>Sitting Calls</title>
            <meta name="description" content="See our detailed sitting call services"/>
            <link rel="canonical" href="/sitting" />
        </Helmet> */}
        <section>
        <section class="  bg-cover bg-center bg-no-repeat  bg-sky-50  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-darkbluetheme md:text-5xl lg:text-6xl">
                Sitting Calls:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 ">
                                <div class="md:w-1/2 col-span-1 px-2 ">
                                    <img class="rounded-lg md:h-92" src={supported}  alt="" />
                                </div>
                                <div class="md:w-1/2  sm:82 rounded-lg  border-2 border-bluetheme bg-bluetheme text-darkbluetheme sm:items-center sm:justify-center  mx-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                                        <p>
                                        Sitting Calls
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                        <span className=' font-bold'>For those care givers:</span> <br/><br/>
                                        <ul class="list-disc ml-6">
                                            <li>needing a break from palliative care during the night hours.</li>
                                            <li>taking a well-deserved break to catch up on some much needed sleep.</li>
                                            <li>needing a short respite service for their loved ones.</li>
                                            <li>needing to have some quality time.</li>
                                            <li>needing reassurance that the cared for are provided with good quality 
                                                care and individual support and company in their short absence.</li>
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

export default Sitting