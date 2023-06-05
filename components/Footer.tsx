import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col relative items-center text-center 2xl: px-5 pb-4 mx-auto">
      <h3 className="tracking-widest text-white font-semibold text-sm bg-purple-800 py-1 px-4 border-2 border-black">
        jafarzar.com
      </h3>
      <h1 className="text-xs text-gray-600 py-2 tracking-widest font-semibold">
        Development by Jafar Azhar
      </h1>
    </div>
  );
};

export default Footer;
