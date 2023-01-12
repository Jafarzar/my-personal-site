import React from "react";
import Image from "next/image";
import profilePic from "../img/jafar-3.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          bounce: 1,
          delay: 0.2,
        }}
      >
        <Image src={profilePic} alt="my photo 2" className="md:scale-50" />
      </motion.div>
    </div>
  );
}
