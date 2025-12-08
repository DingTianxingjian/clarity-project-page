import React from 'react';
import { Section } from './Section';

export const Abstract: React.FC = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 animate-fade-in">
          <span className="relative inline-block">
            Abstract
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
          </span>
        </h2>
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-lg p-8 border border-blue-100/50 animate-scale-in delay-200">
          <div className="text-lg leading-relaxed text-justify text-gray-700 space-y-4 font-serif">
            <p className="animate-fade-in delay-300">
              Clinical decision-making in oncology requires predicting dynamic disease evolution, a task current static AI predictors cannot perform. While world models (WMs) offer a paradigm for generative prediction, existing medical applications remain limited. Existing methods often rely on stochastic diffusion models, focusing on visual reconstruction rather than causal, physiological transitions. Furthermore, in the medical domain, models like MeWM typically ignore patient-specific temporal and clinical contexts and lack a feedback mechanism to link predictions to treatment decisions.
            </p>
            <p className="animate-fade-in delay-400">
              To address these gaps, we introduce <strong className="text-purple-700 font-bold">CLARITY</strong>, a medical world model that forecasts disease evolution directly within a structured latent space. It explicitly integrates time intervals (temporal context) and patient-specific data (clinical context) to model treatment-conditioned progression as a smooth, interpretable trajectory, and thus generate physiologically faithful, individualized treatment plans.
            </p>
            <p className="animate-fade-in delay-500">
              Finally, CLARITY introduces a novel prediction-to-decision framework, translating latent rollouts into transparent, actionable recommendations. CLARITY demonstrates state-of-the-art performance in treatment planning. On the <strong className="text-blue-700">MU-Glioma-Post dataset</strong>, our approach outperforms recent MeWM by <strong className="text-green-600 text-xl">12%</strong>, and significantly surpasses all other medical-specific large language models.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};