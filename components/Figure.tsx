import React from 'react';

interface FigureProps {
  src: string;
  alt: string;
  captionTitle: string;
  captionContent: React.ReactNode;
  className?: string;
}

interface MultiFigureProps {
  images: Array<{ src: string; alt: string }>;
  captionTitle: string;
  captionContent: React.ReactNode;
  className?: string;
  layout?: 'vertical' | 'horizontal';
}

export const Figure: React.FC<FigureProps> = ({ src, alt, captionTitle, captionContent, className = '' }) => {
  // Add BASE_URL prefix for GitHub Pages deployment
  const imageSrc = src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src}`;

  return (
    <div className={`flex flex-col items-center my-8 ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full rounded-lg shadow-md mb-4 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
      />
      <div className="text-center text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed">
        <span className="font-bold text-gray-900">{captionTitle}</span> {captionContent}
      </div>
    </div>
  );
};

export const MultiFigure: React.FC<MultiFigureProps> = ({
  images,
  captionTitle,
  captionContent,
  className = '',
  layout = 'vertical'
}) => {
  const containerClass = layout === 'vertical'
    ? 'flex flex-col gap-6'
    : 'flex flex-row flex-wrap gap-6';

  return (
    <div className={`flex flex-col items-center my-8 ${className}`}>
      <div className={`w-full ${containerClass}`}>
        {images.map((image, index) => {
          // Add BASE_URL prefix for GitHub Pages deployment
          const imageSrc = image.src.startsWith('http') ? image.src : `${import.meta.env.BASE_URL}${image.src}`;

          return (
            <div key={index} className="w-full">
              <img
                src={imageSrc}
                alt={image.alt}
                className="w-full rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              />
            </div>
          );
        })}
      </div>
      <div className="text-center text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed mt-6">
        <span className="font-bold text-gray-900">{captionTitle}</span> {captionContent}
      </div>
    </div>
  );
};
