import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: ["Hi, I'm Jafar", "Jafar Azhar"],
    loop: false,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <Image
        priority
        src="/img/jafar-2.jpg"
        alt="my photo"
        width="144"
        height="144"
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h1 className="text-5xl font-semibold h-[2ch]">{text}</h1>
        <h1 className="text-sm text-gray-500 py-2 tracking-widest">
          Front-End Web Developer
        </h1>
        <div className="flex gap-5 pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
