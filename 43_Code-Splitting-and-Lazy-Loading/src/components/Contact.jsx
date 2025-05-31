import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-200 p-4">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
      <p className="text-lg text-green-700 text-center max-w-xl">
        Have questions or feedback? Feel free to reach out to us anytime.
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition"
      >
        open contact popup
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl text-red-400 font-bold">contact us</p>}
        footer={
          <div className="flex justify-end"> 
            <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
          >
            close
          </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam
          quis quas aliquam, optio possimus nihil earum velit nesciunt
          blanditiis perferendis deleniti laboriosam repudiandae labore omnis
          quos dolores quisquam reprehenderit?
        </p>
      </Modal>
    </div>
  );
}
