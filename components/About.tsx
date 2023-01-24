import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { JafarzarQuery } from "../graphql/generated";

type Props = { about: JafarzarQuery["about"] };

export default function About({ about }: Props) {
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
            src={about?.aboutImg?.url || ""}
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
          className="flex flex-col p-4 max-w-2xl"
        >
          <p className="pb-2 md:text-left">
            The name is{" "}
            <span className="text-purple-800 font-bold">Jafar Azhar</span>
          </p>
          <p className="md:text-left max-w-sm xl:max-w-lg">
            {about?.aboutText}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
