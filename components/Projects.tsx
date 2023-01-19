import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "./template/Layout";
import Modal, { Data } from "./template/Modal";

type Props = {};

const DUMMY_DATA = [
  {
    title: "project1",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "project2",
    image: "/img/gif-1.gif",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Qui, suscipit. Molestiae modi sint dolore cupiditate odioimpedit odit asperiores veniam facilis ut nam deleniti, eos totam fugiat omnis veritatis nemo.",
    link: "https://katakatain.vercel.app/quotes",
    github: "https://github.com/Jafarzar/kata-katain",
  },
  {
    title: "project3",
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
    <div className="flex flex-col relative gap-4 h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <div className="sectionTitle">Projects</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center">
        {DUMMY_DATA.map((data) => {
          return (
            <motion.div
              key={data.title}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex flex-col justify-center text-center items-center gap-4"
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
                  className="w-20 h-20 md:w-36 md:h-36 rounded-full border-4 border-slate-600 shadow-md shadow-gray-800/60 cursor-pointer object-cover"
                />
              </motion.div>
              <h3 className="text-sm md:text-xl font-semibold tracking-widest">
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
