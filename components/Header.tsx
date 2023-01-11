import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex justify-end gap-5 p-5"
      >
        <SocialIcon
          url="https://twitter.com/Jafarzar"
          fgColor="white"
          bgColor="grey"
          style={{ height: 30, width: 30 }}
          target="_blank"
        />
        <SocialIcon
          network="email"
          fgColor="white"
          style={{ height: 30, width: 30 }}
        />
      </motion.div>
    </header>
  );
}
