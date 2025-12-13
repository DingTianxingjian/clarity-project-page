import React from 'react';
import { Section } from './Section';

export const BibTeX: React.FC = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-6">BibTeX</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto">
          <pre className="font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
{`@article{ding2025clarity,
  title={CLARITY: Medical World Model for Guiding Treatment Decisions by Modeling Context-Aware Disease Trajectories in Latent Space},
  author={Ding, Tianxingjian and Zou, Yuanhao and Chen, Chen and Shah, Mubarak and Tian, Yu},
  journal={arXiv preprint arXiv:2512.08029},
  year={2025},
  url={https://arxiv.org/abs/2512.08029},
  doi={10.48550/arXiv.2512.08029}
}`}
          </pre>
        </div>
      </div>
    </Section>
  );
};
