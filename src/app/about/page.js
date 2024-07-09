import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <div
        id="whoobe-t7qyk"
        className="justify-center items-center w-full py-10 shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/2 m-auto"
      >
        <h2 className="text-4xl font-bold my-4 text-[#023264]">Badr Stellar</h2>

        <p className='text-center text-black'>
        Dive into the boundless expanse of space with Badr Stellar, an exhilarating journey through distant galaxies and uncharted star systems. In this captivating game, players assume the role of intrepid space explorers, charting their course through the cosmos and unraveling the mysteries of the universe.
        </p>
       
        <button className="my-5 pushable">
          <span className="front">
            <Link href={"/join"}>Join Waitlist</Link>
          </span>
        </button>
      </div>
    </div>
  )
}

export default page