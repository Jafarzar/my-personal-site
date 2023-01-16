import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { useFollowPointer } from "../hooks/use-follow-pointer";
import Modal from "./Modal";

type Props = {};

export default function Projects({}: Props) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="flex flex-col relative gap-4 h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <div className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        Projects
      </div>

      <Modal />

      {/* <motion.div
        ref={ref}
        animate={{ x, y }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        <img
          src="/img/blobanimation.svg"
          alt="blob2"
          width="600"
          height="600"
        />
      </motion.div> */}

      {/* <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-300 w-32 h-32"></div>
        <div className="bg-slate-300 w-32 h-32"></div>
        <div className="bg-slate-300 w-32 h-32"></div>
        <div className="bg-slate-300 w-32 h-32"></div>
      </div> */}
    </div>
  );
}
