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
          <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen text-center">
              <div className="fixed inset-0 transition-opacity">
                {/* BACKDROPS */}
                <div
                  onClick={closeModal}
                  className="absolute inset-0 bg-gray-500 opacity-75"
                />
              </div>
              {/* <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#06ff1333; */}
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

                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                      {/* IMAGE CONTENT */}
                      <div className="bg-slate-900 w-60 h-44" />
                      {/* LINK BUTTON */}
                      <div className="flex md:flex-col justify-evenly text-center md:justify-center gap-4">
                        <a
                          href={data?.link}
                          rel="noreferrer"
                          target="_blank"
                          className="modalButton"
                        >
                          Go to Website!
                        </a>
                        <a
                          href={data?.github}
                          rel="noreferrer"
                          target="_blank"
                          className="modalButton"
                        >
                          Go to Repo!
                        </a>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="font-semibold text-sm text-slate-800 mb-6 max-w-xs">
                      <p>Description</p>
                      <div className="text-gray-500 font-normal text-justify">
                        {data?.desc}
                      </div>
                    </div>

                    <button
                      onClick={closeModal}
                      type="button"
                      className="modalButton"
                    >
                      Close
                    </button>
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
