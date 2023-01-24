import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { JafarzarQuery } from "../graphql/generated";

type Props = { hero: JafarzarQuery["hero"] };

export default function Hero({ hero }: Props) {
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
      className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden "
    >
      <div className="absolute top-[15vh] bg-[url('/img/blobanimation.svg')] bg-center bg-no-repeat w-[600px] h-[600px] z-0" />

      <div className="w-[144px] h-[144px] group z-20">
        <div className="group-hover:animate-bounce">
          <Image
            priority
            src={hero?.heroImg?.url || ""}
            alt="my photo"
            width="144"
            height="144"
            className="relative rounded-full object-cover border-4 border-black"
          />
        </div>
      </div>

      <div className="z-20">
        <h1 className="text-5xl font-semibold h-[2ch]">{text}</h1>
        <h1 className="text-md text-gray-600 py-2 tracking-widest font-semibold">
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
