import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const [showTemporaryDiv, setShowTemporaryDiv] = useState(false);

  useEffect(() => {
    if (showTemporaryDiv) {
      setTimeout(() => {
        setShowTemporaryDiv(false);
      }, 2000);
    }
  }, [showTemporaryDiv]);

  const copiedHandler = () => {
    navigator.clipboard.writeText("jafar.azhar17@gmail.com");
    setShowTemporaryDiv(true);
  };

  return (
    <>
      <header className="sticky top-0 p-5 max-w-7xl mx-auto z-20 xl:items-center">
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
          className="flex justify-end gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-500 rounded-full hover:bg-[#1d9bf0]"
          >
            <SocialIcon
              url="https://twitter.com/Jafarzar"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
              target="_blank"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-500 rounded-full hover:bg-[#0a66c2]"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/jafarzar/"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
              target="_blank"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-500 rounded-full hover:bg-[#161b22]"
          >
            <SocialIcon
              url="https://github.com/Jafarzar"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
              target="_blank"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer bg-gray-500 rounded-full hover:bg-[#c6362c]"
          >
            <SocialIcon
              network="email"
              fgColor="white"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
              onClick={copiedHandler}
            />
          </motion.div>
        </motion.div>
      </header>
      <AnimatePresence>
        {showTemporaryDiv && (
          <div className="fixed bottom-8 w-full flex justify-center">
            <motion.span
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
              exit={{ y: 100 }}
              className="text-xs md:text-sm bg-purple-800 text-white font-medium py-2 px-4 rounded-lg"
            >
              The email has been copied to the clipboard
            </motion.span>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
