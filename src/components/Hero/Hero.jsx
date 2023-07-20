import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
<div className="paddings innerWidth flexCenter hero-container">
<div className="flexColStart hero-left">
<div className="hero-title">
<div className="orange-circle"/>
<motion.h1 initial={{y: "2rem" , opacity: 0}}
animate={{y:0 , opacity:1}}
transition ={{
  duration:2,
  type: "spring"
}}>Discover
<br />
Most Suitable <br />
Property</motion.h1>
</div>
<div className="flexColStart hero-des">
<span>Find a variety of properties that suit you very easily</span>
<span>Forget all difficulties in finding resicence for yoy</span>

</div>
<div className="search-bar">
<HiLocationMarker color="var(--blue)" size={25}/> 
<input type="text" />
<button className="button">Search</button>
    </div>

<div className="flexCenter stats">
<div className="flexColStart stat">
<span className='secondaryText'>
<CountUp
          start={0}
          end={100000}
          duration={3}
        />    
<span>+</span>
</span>
<span className='secondaryText'>Premium Products</span>
</div>
<div className="flexColStart stat">
<span className='secondaryText'>
<CountUp
          start={0}
          end={100000}
          duration={3}
        />    
<span>+</span>
</span>
<span className='secondaryText'>Happy  Cusotmers</span>
</div>
<div className="flexColStart stat">
<span className='secondaryText'>
<CountUp
          start={0}
          end={100000}
          duration={3}
        />    
<span>+</span>
</span>
<span className='secondaryText'>Award Winning</span>
</div>
</div>

</div>

<div className="flexCenter hero-right">
<div className="image-container">
<img src="./hero-image.png" alt="" />
</div>
</div>
</div>

    </section>
      
  )
}

export default Hero
