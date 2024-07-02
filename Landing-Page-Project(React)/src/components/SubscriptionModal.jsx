import React from "react";
import { X } from "lucide-react";

const SubscriptionModal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Subscribe to {plan.title}</h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-neutral-400 hover:text-white"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <p className="mb-4">
          You've selected the {plan.title} plan at {plan.price}/month.
        </p>
        <ul className="mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2 text-green-500">✓</span> {feature}
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-neutral-700 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="card" className="block mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="card"
              className="w-full px-3 py-2 bg-neutral-700 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;
