import React from 'react';
import { Section } from './Section';
import { Figure, MultiFigure } from './Figure';

export const Teaser: React.FC = () => {
  return (
    <Section className="pt-0">
      <Figure
        src="figure1_overview.png"
        alt="CLARITY Conceptual Overview"
        captionTitle="Figure 1: Conceptual Overview of CLARITY."
        captionContent={
          <>
            Moving beyond static prediction, CLARITY’s latent-based Actor simulates multiple “what-if” disease trajectories (Future Latent Prediction) conditioned on rich Clinical and Temporal Contexts. This is not a one-way process: Inverse feedback (orange arrow) enables the iterative refinement of Action Proposals, translating predictions into a concrete, optimized treatment plan for the clinician.
          </>
        }
      />
    </Section>
  );
};

export const Methodology: React.FC = () => {
  return (
    <Section>
      <h2 className="text-3xl font-display font-bold text-center mb-10">Methodology</h2>
      <div className="space-y-12">
        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CLARITY is a framework composed of multiple modules: an MRI Encoder, Therapy Policies (implemented as an MLLM Agent, e.g., GPT-4o), and an Actor (Diseases Evolution Model). These modules interact within an efficient world model architecture to link prediction directly to decision-making.
            </p>
        </div>

        <div>
            <h3 className="text-2xl font-display font-semibold text-center md:text-left text-gray-800 mb-4">1. Inference Pipeline & Inverse Survival Evaluation</h3>
            <Figure
            src="figure2_pipeline.png"
            alt="Inference Pipeline"
            captionTitle="Figure 2: CLARITY’s Inference Pipeline."
            captionContent={
                <span className="text-left block mt-2">
                <b>(a) Direct Survival Evaluation:</b> A frozen MRI Encoder extracts a pre-treatment latent representation. In parallel, the Therapy Policies Agent (e.g., GPT-4o) takes the patient's clinical context to propose multiple candidate drug combos. The Actor module (Diseases Evolution Model) then sequentially evaluates each combo one-by-one, integrating the pre-treatment latent, clinical context, temporal context, and the specific drug combo to predict a final risk score.
                <br />
                <b>(b) CLARITY's Inverse Survival Evaluation:</b> This diagram illustrates the iterative prediction-to-decision feedback loop. Initial risk scores from Direct Survival Evaluation (Fig. 2 (a)) are fed into the Therapy Policies Agent. The Agent then proposes updated drug combos, which the Actor Scores to generate new risk estimates as the accumulated survival feedback. This process repeats, refining the therapy proposals, and after <i>K</i> iterations, the policy with the Lowest Risk Score is selected as the Final Action.
                </span>
            }
            />
        </div>
      </div>
    </Section>
  );
};

const ResultsTable = () => (
  <div className="overflow-x-auto w-full mb-4">
    <table className="min-w-full text-sm text-left text-gray-700 border-collapse border border-gray-200">
      <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-600">
        <tr>
          <th className="px-4 py-3 border-b border-r border-gray-200" rowSpan={2}>Method</th>
          <th className="px-4 py-3 border-b border-gray-200 text-center" colSpan={3}>MU-Glioma-Post (%)</th>
          <th className="px-4 py-3 border-b border-gray-200 text-center" colSpan={3}>UCSF-ALPTDG (%)</th>
        </tr>
        <tr>
          <th className="px-2 py-2 border-b border-gray-200 text-center">Precision</th>
          <th className="px-2 py-2 border-b border-gray-200 text-center">Recall</th>
          <th className="px-2 py-2 border-b border-r border-gray-200 text-center">F1 Score</th>
          <th className="px-2 py-2 border-b border-gray-200 text-center">Precision</th>
          <th className="px-2 py-2 border-b border-gray-200 text-center">Recall</th>
          <th className="px-2 py-2 border-b border-gray-200 text-center">F1 Score</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {/* General LLMs */}
        <tr className="bg-gray-50/50">
          <td className="px-4 py-2 font-semibold text-gray-500 italic border-r" colSpan={7}>General Large Language Models</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">GPT-4o</td>
          <td className="px-2 py-2 text-center">40.3</td>
          <td className="px-2 py-2 text-center">44.0</td>
          <td className="px-2 py-2 text-center border-r">42.1</td>
          <td className="px-2 py-2 text-center">36.9</td>
          <td className="px-2 py-2 text-center">44.9</td>
          <td className="px-2 py-2 text-center">40.5</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">Claude-4.5-Sonnet</td>
          <td className="px-2 py-2 text-center">48.6</td>
          <td className="px-2 py-2 text-center">38.0</td>
          <td className="px-2 py-2 text-center border-r">41.6</td>
          <td className="px-2 py-2 text-center">45.3</td>
          <td className="px-2 py-2 text-center">38.6</td>
          <td className="px-2 py-2 text-center">41.7</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">Qwen3-VL</td>
          <td className="px-2 py-2 text-center">36.7</td>
          <td className="px-2 py-2 text-center">39.4</td>
          <td className="px-2 py-2 text-center border-r">38.0</td>
          <td className="px-2 py-2 text-center">33.7</td>
          <td className="px-2 py-2 text-center">42.9</td>
          <td className="px-2 py-2 text-center">35.8</td>
        </tr>
        
        {/* Medical Models */}
        <tr className="bg-gray-50/50">
          <td className="px-4 py-2 font-semibold text-gray-500 italic border-r" colSpan={7}>Medical Knowledge-based Models</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">MedGPT</td>
          <td className="px-2 py-2 text-center">41.6</td>
          <td className="px-2 py-2 text-center">42.1</td>
          <td className="px-2 py-2 text-center border-r">41.9</td>
          <td className="px-2 py-2 text-center">36.7</td>
          <td className="px-2 py-2 text-center">46.3</td>
          <td className="px-2 py-2 text-center">40.9</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">Huatuo-Vision</td>
          <td className="px-2 py-2 text-center border-b-2 border-gray-300 underline decoration-gray-400 decoration-1 underline-offset-2">52.3</td>
          <td className="px-2 py-2 text-center border-b-2 border-gray-300">46.8</td>
          <td className="px-2 py-2 text-center border-r border-b-2 border-gray-300 underline decoration-gray-400 decoration-1 underline-offset-2">46.4</td>
          <td className="px-2 py-2 text-center border-b-2 border-gray-300">42.1</td>
          <td className="px-2 py-2 text-center border-b-2 border-gray-300 font-bold">51.5</td>
          <td className="px-2 py-2 text-center border-b-2 border-gray-300 underline decoration-gray-400 decoration-1 underline-offset-2">44.1</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-r">MeWM*</td>
          <td className="px-2 py-2 text-center">45.2</td>
          <td className="px-2 py-2 text-center">42.1</td>
          <td className="px-2 py-2 text-center border-r">43.6</td>
          <td className="px-2 py-2 text-center">39.3</td>
          <td className="px-2 py-2 text-center">48.2</td>
          <td className="px-2 py-2 text-center">43.3</td>
        </tr>
        
        {/* Our Approach */}
        <tr className="bg-blue-50 font-bold border-t-2 border-gray-300">
          <td className="px-4 py-2 border-r text-gray-900">Our Approach</td>
          <td className="px-2 py-2 text-center text-gray-900">59.7</td>
          <td className="px-2 py-2 text-center text-gray-900">52.0</td>
          <td className="px-2 py-2 text-center text-gray-900 border-r">55.6</td>
          <td className="px-2 py-2 text-center text-gray-900">50.5</td>
          <td className="px-2 py-2 text-center text-gray-900">47.5</td>
          <td className="px-2 py-2 text-center text-gray-900">48.9</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const Results: React.FC = () => {
  return (
    <Section grayBackground>
      <h2 className="text-3xl font-display font-bold text-center mb-12">Experimental Results</h2>
      
      {/* Top Row: Table and Survival Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl font-bold mb-4">Performance Comparison</h3>
          
          <ResultsTable />

          <p className="text-justify text-gray-700 text-sm mt-2 w-full">
            <b>Table 1. Quantitative comparison on MU-Glioma-Post and UCSF-ALPTDG datasets.</b> Our approach achieves consistently higher Precision, Recall, and F1-score across both benchmarks. The best and second-best results are marked as <b>bold</b> and <u>underline</u>, respectively. * denotes we re-implement their method.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Survival Analysis</h3>
          <MultiFigure
            images={[
              { src: "figure_4.1.png", alt: "Survival Curves - MeWM" },
              { src: "figure_4.2.png", alt: "Survival Curves - Our Method" }
            ]}
            captionTitle="Figure 4. Kaplan–Meier survival curves predicted by MeWM (left) and our method (right) on MU-Glioma-Post."
            captionContent={
              <>
                Our approach produces a much clearer separation across risk strata, reflected by a lower log-rank <i>p</i>-value of <b>0.0017</b> and a substantially higher C-index of <b>0.7856</b>. Shaded regions denote 95% confidence intervals.
              </>
            }
            layout="vertical"
          />
        </div>
      </div>

      {/* Bottom Row: Trajectory Visualization */}
      <div className="max-w-5xl mx-auto mt-16 border-t pt-12 border-gray-200">
         <h3 className="text-2xl font-bold mb-6 text-center">Visualizing Disease Trajectories</h3>
         <Figure
          src="figure_5.png"
          alt="Trajectory Visualization"
          captionTitle="Figure 5: Multi-stage decision trajectories generated by our model."
          captionContent="Each stage (e.g., S0) corresponds to an MRI observation. Dashed lines denote candidate rollouts under different therapy actions, while the solid line with an arrow indicates the selected treatment sequence achieving the lowest predicted risk."
        />
      </div>
    </Section>
  );
};