import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { JafarzarQuery } from "../graphql/generated";

type Props = { allHeaders: JafarzarQuery["allHeaders"] };

export default function Header({ allHeaders }: Props) {
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

  const warna: Record<string, string> = {
    git: "hover:bg-[#161b22]",
    linkedin: "hover:bg-[#0a66c2]",
    twitter: "hover:bg-[#1d9bf0]",
  };

  return (
    <>
      <header className="fixed top-0 p-5 w-screen max-w-5xl mx-auto z-50 left-[50%] -translate-x-[50%] xl:items-center">
        <div className="flex justify-between">
          <motion.div
            initial={{
              x: -500,
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
          >
            <Link href="#hero">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="headerButton flex w-[34px] h-[34px]  justify-center items-center hover:bg-purple-900"
              >
                <Icon icon="tabler:home" className="text-white" />
              </motion.div>
            </Link>
          </motion.div>
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
            className="flex gap-5"
          >
            {allHeaders.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.2 }}
                className={`headerButton ${warna[item.styleTw || ""]}`}
              >
                <SocialIcon
                  url={item.url || undefined}
                  fgColor="white"
                  bgColor="transparent"
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="headerButton hover:bg-[#c6362c]"
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
        </div>
      </header>
      <AnimatePresence>
        {showTemporaryDiv && (
          <div className="fixed bottom-8 w-full flex justify-center">
            <motion.span
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
              exit={{ y: 100 }}
              className="text-xs md:text-sm bg-purple-800 text-white font-medium py-2 px-4 rounded-lg border-2 border-black"
            >
              The email has been copied to the clipboard!
            </motion.span>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
