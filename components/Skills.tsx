import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { JafarzarQuery } from "../graphql/generated";

type Props = { allSkills: JafarzarQuery["allSkillIcons"] };

export default function Skills({ allSkills }: Props) {
  const urut: Record<string, string> = {
    html: "col-start-1 row-start-1",
    css: "col-start-3 row-start-1",
    js: "col-start-1 row-start-2",
    react: "col-start-2 row-start-2",
    next: "col-start-3 row-start-2",
    ts: "col-start-1 row-start-3",
    tw: "col-start-3 row-start-3",
  };

  return (
    <div className="badan">
      <h3 className="sectionTitle">Skills</h3>

      <div className="konten flex-col gap-10">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center"
        >
          <div className="absolute bg-transparent border-4 border-purple-800 rounded-3xl md:rounded-[50px] w-full h-full animate-shake2" />
          <div className="absolute bg-transparent border-4 border-black rounded-3xl md:rounded-[50px] w-full h-full animate-shake" />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="w-auto grid grid-cols-3 gap-4"
          >
            {allSkills.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                drag
                dragTransition={{
                  bounceStiffness: 50,
                  bounceDamping: 5,
                }}
                dragSnapToOrigin
                className={`iconBorder ${urut[item.styleTw || ""]}`}
              >
                <Icon icon={item.icon || ""} className="icons" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 2 }}
          className="items-center p-4 max-w-lg text-center"
        >
          I just finished all my training for this field in January 2023 (you
          can consider me as a freshgrade😅). So i still have much more to learn
          and gain more experience.
        </motion.p>
      </div>
    </div>
  );
}
