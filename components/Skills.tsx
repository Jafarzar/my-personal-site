import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ava1 from "../img/ava-1.png";
import ava2 from "../img/ava-2.png";

type Props = {};

export default function Skills({}: Props) {
  const dragAreaRef = useRef(null);

  return (
    <div className="flex flex-col relative gap-4 h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="bg-slate-300 w-[400px] h-[400px]" ref={dragAreaRef}>
        <div className="flex">
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={dragAreaRef}
            className="iconBorder"
          >
            <Icon icon="vscode-icons:file-type-html" className="icons" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={dragAreaRef}
            className="iconBorder"
          >
            <Icon icon="vscode-icons:file-type-css" className="icons" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={dragAreaRef}
            className="iconBorder"
          >
            <Icon icon="logos:javascript" className="icons rounded-lg" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={dragAreaRef}
            className="iconBorder"
          >
            <Icon icon="logos:react" className="icons" />
          </motion.div>
        </div>
        <div></div>
      </div>

      <p className="items-center p-8 text-sm max-w-lg md:max-w-sm md:text-base xl:text-xl text-gray-500 text-justify">
        I just finished all my training for this field in january 2023 (you can
        consider me as a freshgrade😅). So i still have much more to learn and
        gain more experience.
      </p>
    </div>
  );
}
