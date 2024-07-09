import React from 'react';
import "@/css/hero.css";
import Link from 'next/link';
function HeroSection() {
  return (
    <div id='hero'>
        
        <h1 className="text-center text-5xl text-white font-bold">Discover the Wonders of the Universe</h1>

        <p className='my-10 text-2xl'>Your Space Odyssey Begins Here</p>  
    <div id='btns'>
    <button className="pushable">
  <span className="front">
    <Link href={"/about"}>About Game</Link>
  </span>
</button>

<button className="pushable">
  <span className="front">
    <Link href={"/join"}>Join Wishlist</Link>
  </span>
</button>
    </div>
    </div>
  )
}

export default HeroSection