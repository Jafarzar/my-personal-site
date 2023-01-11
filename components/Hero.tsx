import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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
      <div className="bg-slate-500 h-40 w-40 rounded-full" />
      <div className="text-3xl font-semibold h-[2ch]">{text}</div>
    </motion.div>
  );
}
