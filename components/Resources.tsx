import React from 'react';
import { Presentation, Github, BookOpen, Download, Sparkles } from 'lucide-react';
import { Section } from './Section';

const BASE = import.meta.env.BASE_URL;

type Resource = {
  label: string;
  note: string;
  icon: React.ElementType;
  href: string;
  gradient: string;
  download?: boolean;
  /** Flip to true once the file exists; unavailable items are not rendered. */
  available: boolean;
};

// ECCV 2026 deliverables. Local files live in `public/` — drop the file in,
// then set `available: true`.
const resources: Resource[] = [
  {
    label: '5-Min Slides',
    note: 'Short presentation (PPTX)',
    icon: Presentation,
    href: `${BASE}CLARITY_5min.pptx`,
    gradient: 'from-teal-500 to-emerald-600',
    download: true,
    available: false,
  },
  {
    label: '15-Min Slides',
    note: 'Detailed presentation (PPTX)',
    icon: Presentation,
    href: `${BASE}CLARITY_15min.pptx`,
    gradient: 'from-emerald-600 to-teal-700',
    download: true,
    available: false,
  },
  {
    label: 'Code',
    note: 'Official implementation',
    icon: Github,
    href: 'https://github.com/DingTianxingjian/CLARITY',
    gradient: 'from-gray-700 to-gray-900',
    available: true,
  },
  {
    label: 'arXiv',
    note: 'arXiv:2512.08029',
    icon: BookOpen,
    href: 'https://arxiv.org/abs/2512.08029',
    gradient: 'from-rose-500 to-red-600',
    available: true,
  },
  {
    label: 'Hugging Face',
    note: 'Daily Papers page',
    icon: Sparkles,
    href: 'https://huggingface.co/papers/2512.08029',
    gradient: 'from-amber-500 to-yellow-500',
    available: true,
  },
];

const videos = [
  { title: '5-Minute Presentation', id: 'NEzfsoOLp3I' },
  { title: '15-Minute Detailed Presentation', id: 'b0Nn-lGAqQg' },
];

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const { label, note, icon: Icon, href, gradient, download } = resource;

  const content = (
    <>
      <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md`}>
        <Icon size={22} />
      </div>
      <div className="min-w-0 text-left">
        <div className="font-semibold text-gray-900 truncate">{label}</div>
        <div className="text-sm text-gray-500 truncate">{note}</div>
      </div>
      <Download size={18} className="ml-auto flex-shrink-0 text-gray-400 group-hover:text-purple-600 transition-colors" />
    </>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(download ? { download: '' } : {})}
      className="group flex items-center gap-4 p-4 rounded-2xl border bg-white border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 hover:-translate-y-0.5 transition-all duration-300"
    >
      {content}
    </a>
  );
};

export const Resources: React.FC = () => {
  return (
    <Section id="resources">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
        <span className="relative inline-block">
          Resources
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
        </span>
      </h2>
      <p className="text-center text-gray-600 mb-10 mt-6">
        Paper, poster, presentations, videos, and code for ECCV 2026.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {videos.map((video) => (
          <div key={video.id}>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{video.title}</h3>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`CLARITY — ${video.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              <a
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch on YouTube
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.filter((resource) => resource.available).map((resource) => (
          <ResourceCard key={resource.label} resource={resource} />
        ))}
      </div>
    </Section>
  );
};
