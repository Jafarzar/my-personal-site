import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Modal, { Data } from "./template/Modal";
import { JafarzarQuery } from "../graphql/generated";

type Props = { allProjects: JafarzarQuery["allProjectLists"] };

export default function Projects({ allProjects }: Props) {
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
        {allProjects.map((data) => {
          return (
            <motion.div
              key={data.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="projDiv"
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.8 }}
                onClick={() =>
                  openModal({
                    title: data.projectName,
                    image: data.preview?.url,
                    github: data.repository,
                    link: data.website,
                    desc: data.description,
                  })
                }
              >
                <Image
                  priority
                  src={data.preview?.url || ""}
                  alt="gif"
                  width="120"
                  height="120"
                  className="projImg"
                />
              </motion.div>
              <h3 className="text-base md:text-xl font-semibold">
                {data.projectName}
              </h3>
            </motion.div>
          );
        })}
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} data={openedData} />
    </div>
  );
}
