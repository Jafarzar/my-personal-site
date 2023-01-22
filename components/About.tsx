import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="badan">
      <h3 className="sectionTitle">About</h3>

      <div className="konten">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="aboutImg"
        >
          <Image
            priority
            src="/img/jafar-3.jpg"
            alt="my photo 2"
            width="400"
            height="500"
            className="aboutImgScale"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex flex-col p-4 max-w-2xl md:w-[512px]"
        >
          <p className="pb-2 md:text-left">
            The name is{" "}
            <span className="text-purple-800 font-bold">Jafar Azhar</span>
          </p>
          <p className="md:text-left max-w-sm xl:max-w-lg">
            An Introvert who seek Experience, Growth, and Purpose in his career
            journey. Overloaded brain with innovative ideas. Love collaborative
            project works which produces big impact and results. Self trained
            with huge passion for many things.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
