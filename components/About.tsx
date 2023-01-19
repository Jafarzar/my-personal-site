import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 300, transition: { duration: 0.6 } },
// };

export default function About({}: Props) {
  // const [isOpen, setIsOpen] = useState(false);

  // const buttonHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="flex flex-col relative gap-4 h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="sectionTitle">About</h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Image
          priority
          src="/img/jafar-3.jpg"
          alt="my photo 2"
          width="400"
          height="500"
          className="h-80 w-64 md:w-[400px] md:h-[500px] m-0 flex-shrink-0 object-cover rounded-xl md:rounded-full border-4 border-black"
        />
      </motion.div>

      {/* <motion.div initial={false}> */}
      {/* {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
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
            {isOpen && ( */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="menu flex flex-col p-4 max-w-2xl md:w-[512px]"
      >
        <p className="pb-2 md:text-left">
          The name is{" "}
          <span className="text-purple-800 font-bold">Jafar Azhar</span>
        </p>
        <p className="text-center md:text-left max-w-sm xl:max-w-lg">
          An Introvert who seek Experience, Growth, and Purpose in his career
          journey. Overloaded brain with innovative ideas. Love collaborative
          project works which produces big impact and results. Self trained with
          huge passion for many things.
        </p>
      </motion.div>
      {/* )}
          </motion.div>
        </motion.div> */}
      {/* </motion.div> */}
    </div>
  );
}
