import React from "react";

type Props = {};

export default function Test({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] h-[600px] bg-[url('/img/blobanimation.svg')] flex justify-center items-center">
        <div className="h-32 w-32 bg-green-500" />
      </div>
    </div>
  );
}
