import React from 'react';
import { FileText, Github, BookOpen } from 'lucide-react';

const authors = [
  { name: "Tianxingjian Ding", url: "#" },
  { name: "Yuanhao Zou", url: "#" },
  { name: "Chen Chen", url: "#" },
  { name: "Mubarak Shah", url: "#" },
  { name: "Yu Tian", url: "#" },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>

      {/* Animated circles in background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            CLARITY
          </span>
          <span className="block text-gray-800 text-3xl md:text-4xl mt-2">
            Medical World Model for Guiding Treatment Decisions
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in delay-200 max-w-3xl mx-auto">
          Modeling Context-Aware Disease Trajectories in Latent Space
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg mb-6 animate-fade-in delay-300">
          {authors.map((author, index) => (
            <span key={index} className="inline-block">
              <a
                href={author.url}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 underline-animation font-medium"
              >
                {author.name}
              </a>
            </span>
          ))}
        </div>

        <div className="text-lg mb-10 font-light text-gray-600 animate-fade-in delay-400">
          Institute of Artificial Intelligence, University of Central Florida
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-500">
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            <FileText size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Paper</span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
            <span>arXiv</span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Code (Coming Soon)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
