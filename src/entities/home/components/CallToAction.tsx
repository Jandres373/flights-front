"use client";

import { titles } from "@/ui/fonts";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const words = ["easy", "affordable", "reliable"];

const CallToAction = (props: Props) => {
  return (
    <div
      className={`mt-36 ${titles.className} text-9xl text-center text-white`}
    >
      <div className="relative">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["-55vw", "0vw", "-55vw"] }}
          exit={{ x: 0 }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
        ></motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["55vw", "0vw", "55vw"] }}
          exit={{ x: 0 }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="relative bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-gradient-to-l from-yellow-500 to-red-500"
          style={{ mixBlendMode: "multiply" }}
        ></motion.div>
        <div className="absolute bottom-0 z-10">
          <h2 className="">Finding the right</h2>
          <h1>
            <span className="text-neon">Hotel</span> or{" "}
            <span className="text-neon">Flight</span>
          </h1>
          <h3>is this complicated?</h3>
        </div>
      </div>
      <h2 className="text-black">
        {" "}
        we make it <span className="text-blue-500 underline">{words[0]}</span>
      </h2>
    </div>
  );
};

export default CallToAction;
