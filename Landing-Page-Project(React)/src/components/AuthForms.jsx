import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { X } from "lucide-react";

const AuthForms = ({ isOpen, onClose, initialMode = "signin" }) => {
  const [isLogin, setIsLogin] = useState(initialMode === "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signup } = useAuth();

  // Function to reset fields and mode
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setIsLogin(true); // Reset to login mode
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login({ email });
    } else {
      signup({ email });
    }
    resetForm();
    onClose(); // Close the authentication form after submission
  };

  useEffect(() => {
    setIsLogin(initialMode === "signin");
  }, [initialMode]);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
          <div className="bg-neutral-800 py-8 px-6 shadow rounded-lg sm:px-10">
            <button
              className="absolute top-2 right-2 text-neutral-300 hover:text-white"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <form onSubmit={handleSubmit} className="mb-0 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-300"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-600 rounded-lg shadow-sm text-neutral-300 bg-neutral-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-300"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-600 rounded-lg shadow-sm text-neutral-300 bg-neutral-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  {isLogin ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  resetForm();
                }}
                className="text-sm text-orange-500 hover:text-orange-400"
              >
                {isLogin
                  ? "Need an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthForms;
