import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { IoTime } from "react-icons/io5";

const HeroBottom = () => {
  return (
    <section
        className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-12"
        aria-label="Banner benefits"
      >
        <div className="max-w-[1600px] mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 w-72" role="contentinfo">
            <IoTime className="text-xl text-black" aria-hidden="true" />
            <p className="text-black text-base" aria-label="Two years warranty">
              Two years warranty
            </p>
          </div>
          <div className="flex md:w-auto items-center gap-2 w-72" role="contentinfo">
            <MdLocalShipping className="text-xl text-black" aria-hidden="true" />
            <p className="text-black text-base" aria-label="Free shipping">
              Free shipping
            </p>
          </div>
          <div className="flex md:w-auto items-center gap-2 w-72" role="contentinfo">
            <CgRedo className="text-2xl text-black" aria-hidden="true" />
            <p className="text-black text-base" aria-label="Return policy in 30 days">
              Return policy in 30 days
            </p>
          </div>
        </div>
      </section>
  )
}

export default HeroBottom
