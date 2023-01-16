import React, { useState } from "react";

type Props = {};

export default function Modal({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    // <div>
    //   {/* <button className="bg-slate-600">Modal</button> */}
    //   <div className="flex flex-col gap-2 rounded-lg text-center items-center p-2 bg-slate-400 w-80 h-[500px] md:w-[600px] xl:w-[800px] xl:h-[600px]">
    //     <h3 className="my-2 text-lg font-semibold tracking-widest">
    //       TITLE TITLE TITLE TITLE
    //     </h3>
    //     <div className="flex flex-col gap-2">
    //       <div className="bg-slate-900 w-60 h-44" />
    //       <div className="flex md:flex-col justify-evenly text-center">
    //         <a href="#" target="_blank" className="modalButton">
    //           Go to Website!
    //         </a>
    //         <a href="#" target="_blank" className="modalButton">
    //           Go to Repo!
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <button onClick={openModal} className="heroButton">
        Open Modal
      </button>
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
            <div className="bg-white rounded-lg text-center items-center overflow-hidden transform transition-all">
              <div className="bg-white p-4 border-b border-gray-200 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-4">
                  <h3 className="my-2 text-lg font-semibold tracking-widest">
                    Modal Title
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    {/* IMAGE CONTENT */}
                    <div className="bg-slate-900 w-60 h-44" />
                    {/* LINK BUTTON */}
                    <div className="flex md:flex-col justify-evenly text-center md:justify-center gap-4">
                      <a href="#" target="_blank" className="modalButton">
                        Go to Website!
                      </a>
                      <a href="#" target="_blank" className="modalButton">
                        Go to Repo!
                      </a>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="font-semibold text-sm text-slate-800 mb-6 max-w-xs">
                    <p>Description</p>
                    <div className="text-gray-500 font-normal text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Qui, suscipit. Molestiae modi sint dolore cupiditate odio
                      impedit odit asperiores veniam facilis ut nam deleniti,
                      eos totam fugiat omnis veritatis nemo.
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
