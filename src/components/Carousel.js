
import React from 'react'
import paliat from '../images/happy-nurse-serving-elderly-senior-man-breakfast-bed-bedroom-nursing-home-thumb-up.jpg'
import respite from '../images/side-view-nurse-pushing-disabled-patient-wheel-chair.jpg'
import supported from '../images/social-worker-taking-care-senior-woman.jpg'
import './carousel.css'

function Carousel() {


  window.addEventListener('load', () => {
    var
    carousels = document.querySelectorAll('.carousel');
  
  
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  function carousel(root) {
    var
    figure = root.querySelector('figure'),
    nav = root.querySelector('nav'),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = ('bfc' in root.dataset),
  
    theta = 2 * Math.PI / n,
    currImage = 0;
  
  
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var
      apothem = s / (2 * Math.tan(Math.PI / n));
  
  
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++)
      images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
      for (i = 0; i < n; i++)
      images[i].style.backfaceVisibility = 'hidden';
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener('click', onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() !== 'BUTTON')
        return;
  
        if (t.classList.contains('next')) {
          currImage++;
        } else
        {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
  
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  
  }
  return (
    <div className='body1'>
     <h1>3D Rotating Carousel Examples</h1>

<h2>Three images</h2>
<div class="carousel">
	<figure>
		<img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Four images</h2>
<div class="carousel">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Eight images</h2>
<div class="carousel">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Eight images, with 20px gap</h2>
<div class="carousel" data-gap="20">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Eight images, with 80px gap</h2>
<div class="carousel" data-gap="80">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Hidden backfaces</h2>
<div class="carousel" data-gap="20" data-bfc>
	<figure>
   <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>
    </div>
  )
}

export default Carousel