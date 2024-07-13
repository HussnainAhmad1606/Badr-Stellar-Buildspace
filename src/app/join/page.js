"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

function page() {

    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState("");
    const subscribe = async () => {
      const data = {
        name: name,
        email: email
      };
    
      // Function to make the API call and return a promise
      const subscribeRequest = () => {
        return fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(async (response) => {
          const res = await response.json();
          if (res.type === "success") {
            setMsg(res.message)
            return res.message; // Resolve with success message
          } else {
            setMsg(res.message)
            throw new Error(res.message); // Reject with error message
          }
        });
      };
    
      // Use toast.promise to show the toast notifications
      toast.promise(
        subscribeRequest(),
        {
          loading: 'Subscribing...',
          success: `You have been added to the wishlist`,
          error: `${msg}`,
        }
      );
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
            <button onClick={subscribe}>Join Waitlist</button>
          </span>
        </button>
      </div>
    </div>
  );
}

export default page;
