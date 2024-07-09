"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

function page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  const subscribe = async () => {
    const data = {
        name: name,
        email: email
    }
    const req = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    if (res.type == "success") {
    toast.success(res.message);

    }
    else {
    toast.error(res.message);


    }

  };
  return (
    <div>
      <div
        id="whoobe-t7qyk"
        className="justify-center items-center w-full py-10 shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto"
      >
        <h2 className="text-4xl font-bold my-4 text-[#023264]">Join the Wait List</h2>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} className="input" placeholder="Your Name" />
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="input" placeholder="Your Email" />

        <button className="pushable">
          <span className="front">
            <button onClick={subscribe}>Join Wishlist</button>
          </span>
        </button>
      </div>
    </div>
  );
}

export default page;
