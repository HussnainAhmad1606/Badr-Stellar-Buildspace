import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "@/css/navbar.css";
function Navbar() {
  return (
    <div id='navbar'>
        <Image src={"/logo.png"} width={80} height={80}/>

        <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About Game</Link></li>
            
            <li id='btn'><button className="pushable">
  <span className="front">
    <Link href={"/join"}>Join Wishlist</Link>
  </span>
</button></li>
        </ul>
    </div>
  )
}

export default Navbar