import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:1/2 lg:w-1/3"
            id={`feature-${feature.text.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex mx-4 my-6">
              <div className="feature-box p-6 bg-neutral-900 rounded-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 p-2 bg-orange-700 text-orange-100 justify-center items-center rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <h5 className="text-xl font-semibold">{feature.text}</h5>
                </div>
                <p className="text-md text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
