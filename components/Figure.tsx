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
  return (
    <div className={`flex flex-col items-center my-8 ${className}`}>
      <img
        src={src}
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
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
      <div className="text-center text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed mt-6">
        <span className="font-bold text-gray-900">{captionTitle}</span> {captionContent}
      </div>
    </div>
  );
};
