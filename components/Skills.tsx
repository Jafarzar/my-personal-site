import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type Props = {};

export default function Skills({}: Props) {
  const dragAreaRef = useRef(null);

  return (
    <div className="badan md:gap-5">
      <h3 className="sectionTitle">Skills</h3>

      <div className="konten flex-col md:gap-4">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[url('/img/blobs-2.svg')] w-[335px] h-[350px] md:w-[500px] md:h-[500px] flex justify-center items-center bg-no-repeat"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="w-auto grid grid-cols-3 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-1 row-start-1"
            >
              <Icon icon="vscode-icons:file-type-html" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-3 row-start-1"
            >
              <Icon icon="vscode-icons:file-type-css" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-1 row-start-2"
            >
              <Icon icon="logos:javascript" className="icons rounded-lg" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-2 row-start-2"
            >
              <Icon icon="logos:react" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-3 row-start-2"
            >
              <Icon icon="logos:nextjs-icon" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-1 row-start-3"
            >
              <Icon icon="logos:typescript-icon" className="icons" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              drag
              dragTransition={{
                bounceStiffness: 50,
                bounceDamping: 5,
              }}
              dragSnapToOrigin
              className="iconBorder col-start-3 row-start-3"
            >
              <Icon icon="logos:tailwindcss-icon" className="icons" />
            </motion.div>
          </motion.div>
          <div></div>
        </motion.div>

        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 2 }}
          className="items-center p-4 max-w-lg text-center"
        >
          I just finished all my training for this field in january 2023 (you
          can consider me as a freshgrade😅). So i still have much more to learn
          and gain more experience.
        </motion.p>
      </div>
    </div>
  );
}
