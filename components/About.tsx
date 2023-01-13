import React, { useState } from "react";
import Image from "next/image";
import profilePic from "../img/jafar-3.jpg";
import { motion, Variants } from "framer-motion";

type Props = {};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 300, transition: { duration: 0.6 } },
};

export default function About({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col relative gap-4 h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Image
          priority
          src={profilePic}
          alt="my photo 2"
          className="m-0 flex-shrink-0 object-cover rounded-2xl h-64 w-52 md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[500px]"
        />
      </motion.div>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu flex flex-col items-center p-8 text-center text-sm max-w-2xl md:w-[512px] md:text-base xl:text-xl text-gray-500"
      >
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={buttonHandler}
            variants={{
              closed: { opacity: 0 },
            }}
            className=" py-2 px-4 text-violet-900 bg-violet-300 hover:bg-violet-400 rounded-full"
          >
            Want to know a litttle about me?
          </motion.button>
        )}

        <motion.div
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: { type: "spring", bounce: 0, duration: 0.3 },
            },
          }}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <motion.div variants={itemVariants}>
            {isOpen && (
              <div>
                <p className="pb-2 md:text-left">
                  The name is{" "}
                  <span className="text-sky-900 font-semibold">
                    Jafar Azhar
                  </span>
                </p>
                <p className="text-justify">
                  An Introvert who seek Experience, Growth, and Purpose in his
                  career journey. Overloaded brain with innovative ideas. Love
                  collaborative project works which produces big impact and
                  results. Self trained with huge passion for many things.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
