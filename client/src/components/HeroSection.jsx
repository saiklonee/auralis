import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {" "}
      {/* Hero Section */}
      <div className="absolute inset-0 size-full z-10">
        {" "}
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Background Blur Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-linear-to-r from-purple-600 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-linear-to-r from-emerald-500 to-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-500 to-rose-400 rounded-full filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          {/* Glass Morphism Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                Auralis
              </h1>
              <div className="inline-block">
                <span className="text-xl max-md:hidden md:text-md text-gray-300 font-light bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                  Your Gateway to Curated Knowledge
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
              Discover beautifully organized notes, resources, and insights.
              <span className="block mt-2 text-cyan-400 font-medium">
                Learn smarter, not harder.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/category/frontend">
                <button className="group relative bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 cursor-pointer rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">Explore Resources</span>
                </button>
              </Link>

              {/* <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-2 px-4 cursor-pointer rounded-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30 shadow-xl">
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Learn More
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
