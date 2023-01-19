import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type Data = {
  title: string;
  image: string;
  desc: string;
  link: string;
  github: string;
};

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  data: Data | null;
};

export default function Modal({ closeModal, isOpen, data }: Props) {
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed z-50 inset-0 overflow-y-scroll">
            <div className="flex items-center justify-center min-h-screen text-center">
              <div className="fixed inset-0 transition-opacity">
                {/* BACKDROPS */}
                <div
                  onClick={closeModal}
                  className="absolute inset-0 bg-gray-500 opacity-75"
                />
              </div>

              {/* MODAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.2],
                }}
                className="bg-white rounded-lg text-center items-center overflow-hidden transform"
              >
                <div className="bg-white p-4 border-b border-gray-200 sm:px-6">
                  <div className="flex flex-col items-center justify-between gap-4">
                    <h3 className="my-2 text-lg font-semibold tracking-widest">
                      {data?.title}
                    </h3>

                    <div className="flex flex-col items-center gap-4 max-w-xs md:max-w-prose md:items-start">
                      {/* IMAGE CONTENT */}
                      {data!.image && (
                        <Image
                          src={data!.image}
                          alt="gif"
                          width="400"
                          height="400"
                          className="w-64 h-fit border md:w-96"
                        />
                      )}
                      {/* LINK BUTTON */}
                      <div className="flex justify-evenly text-center md:justify-end gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 1.2 }}
                          href={data?.link}
                          rel="noreferrer"
                          target="_blank"
                          className="modalButton"
                        >
                          Website
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 1.2 }}
                          href={data?.github}
                          rel="noreferrer"
                          target="_blank"
                          className="modalButton"
                        >
                          Repository
                        </motion.a>
                      </div>

                      {/* DESCRIPTION */}
                      <div className="font-semibold text-sm text-slate-800 mb-6 md:text-left">
                        <p>Description</p>
                        <div className="text-gray-500 font-normal">
                          {data?.desc}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        onClick={closeModal}
                        type="button"
                        className="text-xs text-white bg-zinc-600 hover:bg-zinc-700 py-1 px-2 rounded-md border-2 border-black"
                      >
                        Close
                      </motion.button>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
