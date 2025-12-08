import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-gray-600 mb-4">
          This website is licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" className="text-blue-600 hover:underline" rel="noreferrer" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        </p>
        <p className="text-gray-500 text-sm">
          Template adapted from <a href="https://github.com/nerfies/nerfies.github.io" className="text-blue-600 hover:underline" rel="noreferrer" target="_blank">Nerfies</a>.
        </p>
      </div>
    </footer>
  );
};
