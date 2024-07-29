/* import React from "react";
import ReactDOM from "react-dom";
import paliat from '../images/high-angle-man-sleeping-with-mask.jpg'
import respite from '../images/young-doctor-helping-one-guy-stand-up.jpg'
import supported from '../images/male-social-worker-taking-care-old-woman.jpg'
import { Carousel } from 'flowbite-react';
function Hero(){
    return(
class Hero1 extends React.Component {
  /* return (


    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slideInterval={5000} pauseOnHover>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel>
  </div>
  ) */

  
  /*   constructor(props) {
      super(props);
      this.state = {
        images: [
          "https://picsum.photos/200/300/?image=523",
          "https://picsum.photos/200/300/?image=524",
          "https://picsum.photos/200/300/?image=525",
          "https://picsum.photos/200/300/?image=526"
        ],
        selectedImage: "https://picsum.photos/200/300/?image=523",
        in: 0
      };
    }
  
    componentDidMount() {
      setInterval(() => {
        this.setState(prevState => {
          if (prevState.in === 3) {
            return {
              in: 0,
              selectedImage: this.state.images[0]
            };
          } else {
            return {
              in: prevState.in + 1,
              selectedImage: this.state.images[prevState.in + 1]
            };
          }
        });
      }, 3000);
    }
  
    render() {
      const backgroundStyle = {
        background: `url('${this.state.selectedImage}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      };
  

      return (
        <div className="Hero1">
          <div key={this.state.selectedImage}>
            <div style={backgroundStyle} className="wave wave5" />
            <div style={backgroundStyle} className="wave wave4" />
            <div style={backgroundStyle} className="wave wave3" />
            <div style={backgroundStyle} className="wave wave2" />
            <div style={backgroundStyle} className="wave wave1" />
            <div style={backgroundStyle} className="wave wave0" />
          </div>
        </div>
      );
    }
  }
    )
}

export default Hero */ 

import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import doctor from "../images/social-worker-taking-care-senior-woman.jpg"
import hands from "../images/hands-holding-each-other-support.jpg"
import closesupport from "../images/closeup-support-hands.jpg"
//import Carousel from './Carousel';

const Hero = () => {
    const images = [
        {image: hands,
         colour: "#37B7C3",
         text1 :"the home of quality care.",
         text2: " An affordable service which prioritises the comfort and wellbeing of clients."
        },
        {image: doctor,
          colour: "#0802A3",
          text1 :"where everyone matters",
          text2: " Your family becomes our family too."
         },
         {image: closesupport,
          colour: "#37B7C3",
          text1 :"monitors everyone's health",
          text2: " We make sure your loved ones and our care givers are in good health."
         },]

    return (
      <Zoom scale={1.4} indicators={false} autoplay={true} arrows={false} pauseOnHover={true} canSwipe={true}>
       
      {images.map((each, index) => (
           <section className='mt-3'>
            <div className=" rounded-lg  border-1 shadow-2xl mx-auto" key={index} style={{ width: "80%" }}>
              <img className="brightness-70 opacity-80 object-scale-down rounded-lg"/* style={{ objectFit: "cover", width: "100%" ,height: "30%",}} */ alt="Slide " src={each.image} />
            </div>
              <div className=" overlay md:w-1/2 mx-auto max-w-screen-xl  sm:py-16  lg:py-40">
                <h1 class=" text-4xl font-extrabold  tracking-tight leading-none text-tealtext md:text-5xl lg:text-6xl"style={{color: each.colour}}>NV HealthCare Ltd,</h1>
                <p class=" text-2xl font-bold text-tealtext  lg:text-4xl sm:px-16 lg:px-48" style={{color: each.colour}}>
                {each.text1}.
                    
                </p>
                <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row text-left pt-5 sm:space-y-0 sm:space-x-4">
                    
                  <p className=' py-3 px-3 rounded-lg font-bold  border-navcolour text-1xl lg:text-3xl md:w-1/2' style={{color: each.colour}}>
                  {each.text2}
                  </p>      
                </div> 
            

            </div>
 </section>


          
      ))}


     
  </Zoom>
    );
};

export default Hero;