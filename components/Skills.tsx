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
    <div className="badan">
      <h3 className="sectionTitle">Skills</h3>

      <div className="konten">
        <div
          className="bg-[url('/img/blobs-2.svg')] w-[400px] h-[400px]"
          ref={dragAreaRef}
        >
          <div className="grid grid-cols-4">
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={dragAreaRef}
              className="iconBorder"
            >
              <Icon icon="logos:nextjs-icon" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={dragAreaRef}
              className="iconBorder"
            >
              <Icon icon="logos:typescript-icon" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={dragAreaRef}
              className="iconBorder"
            >
              <Icon icon="logos:tailwindcss-icon" className="icons" />
            </motion.div>
          </div>
          <div></div>
        </div>

        <p className="items-center p-8 max-w-lg md:max-w-sm text-center md:text-left">
          I just finished all my training for this field in january 2023 (you
          can consider me as a freshgrade😅). So i still have much more to learn
          and gain more experience.
        </p>
      </div>
    </div>
  );
}
