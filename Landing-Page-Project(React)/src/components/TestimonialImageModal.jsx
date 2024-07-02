import React from "react";
import { X } from "lucide-react";

const TestimonialImageModal = ({
  isOpen,
  onClose,
  image,
  text,
  user,
  company,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-neutral-400 hover:text-white"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={image}
            alt={user}
            className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-lg mb-4">{text}</p>
            <h3 className="text-xl font-semibold">{user}</h3>
            <p className="text-sm text-neutral-400">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialImageModal;
