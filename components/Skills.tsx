import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col relative gap-4 h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="flex">
        <div>
          <Icon
            icon="vscode-icons:file-type-html"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </div>
        <div>
          <Icon
            icon="vscode-icons:file-type-css"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </div>
        <div>
          <Icon icon="logos:javascript" className="w-10 h-10 md:w-20 md:h-20" />
        </div>
        <div>
          <Icon icon="logos:react" className="w-10 h-10 md:w-20 md:h-20" />
        </div>
      </div>

      <p className="items-center p-8 text-sm max-w-lg md:max-w-sm md:text-base xl:text-xl text-gray-500 text-justify">
        i just finished all my training for this field in january 2023 (you can
        consider me as a freshgrade😅). and still have much more to learn and
        gain more experience.
      </p>
    </div>
  );
}
