import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Modal, { Data } from "./template/Modal";

type Props = {};

const DUMMY_DATA = [
  {
    title: "Kata-katain",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "JajoMeals",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "Guess My Number",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "project4",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "project5",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "project6",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
];

export default function Projects({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openedData, setOpenedData] = useState<Data | null>(null);

  const openModal = (data: Data) => {
    setIsOpen(true);
    setOpenedData(data);
  };

  const closeModal = () => {
    setIsOpen(false);
    setOpenedData(null);
  };

  return (
    <div className="badan">
      <div className="sectionTitle">Projects</div>

      <div className="projKonten">
        {DUMMY_DATA.map((data) => {
          return (
            <motion.div
              key={data.title}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="projDiv"
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.8 }}
                onClick={() => openModal(data)}
              >
                <Image
                  priority
                  src={data.image}
                  alt="gif"
                  width="120"
                  height="120"
                  className="projImg"
                />
              </motion.div>
              <h3 className="text-base md:text-xl font-semibold">
                {data.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} data={openedData} />
    </div>
  );
}
