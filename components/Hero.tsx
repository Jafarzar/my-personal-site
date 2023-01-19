import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
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
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
      >
        <motion.div
          whileHover={{
            rotate: [0, 0, 360, 360, 0],
            y: [0, -50, 0, -50, 0],
          }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <Image
            priority
            src="/img/jafar-2.jpg"
            alt="my photo"
            width="144"
            height="144"
            className="relative rounded-full mx-auto object-cover border-4 border-black"
          />
        </motion.div>
      </motion.div>
      <div className="z-20">
        <h1 className="text-5xl font-semibold h-[2ch]">{text}</h1>
        <h1 className="text-md text-gray-500 py-2 tracking-widest font-semibold">
          Front-End Web Developer
        </h1>
        <AnimatePresence>
          <div className="flex gap-5 pt-5">
            <Link href="#about">
              <motion.button whileTap={{ scale: 1.1 }} className="heroButton">
                About
              </motion.button>
            </Link>
            <Link href="#skills">
              <motion.button whileTap={{ scale: 1.1 }} className="heroButton">
                Skills
              </motion.button>
            </Link>
            <Link href="#projects">
              <motion.button whileTap={{ scale: 1.1 }} className="heroButton">
                Projects
              </motion.button>
            </Link>
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
