import React, { useState } from "react";
import { testimonials } from "../constants";
import TestimonialImageModal from "./TestimonialImageModal";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 tracking-wide">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            id={`testimonial-${index + 1}`}
          >
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div className="relative w-12 h-12 mr-6 rounded-full border border-neutral-300 overflow-hidden group">
                  <img
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center"
                    onClick={() => openModal(testimonial)}
                  >
                    <span className="text-white text-xs">View</span>
                  </div>
                </div>
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TestimonialImageModal
        isOpen={!!selectedTestimonial}
        onClose={closeModal}
        image={selectedTestimonial?.image}
        text={selectedTestimonial?.text}
        user={selectedTestimonial?.user}
        company={selectedTestimonial?.company}
      />
      <div id="testimonials-stories"></div>
      <div id="testimonials-case-studies"></div>
      <div id="testimonials-videos"></div>
    </div>
  );
};

export default Testimonials;
