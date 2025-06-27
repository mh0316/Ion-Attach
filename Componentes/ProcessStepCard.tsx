import React from 'react';

interface Detail {
  label: string;
  value: string;
}

interface StepCardProps {
  stepNumber: number;
  title: string;
  icons: React.ReactNode[];
  description: string;
  details: Detail[];
  inlineImageSrc?: string;
  inlineImageAlt?: string;
}

export const ProcessStepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  icons,
  description,
  details,
  inlineImageSrc,
  inlineImageAlt
}) => {
  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
      <div className="flex items-center mb-4 space-x-4">
        <div className="flex space-x-2">{icons}</div>
        <h3 className="text-xl font-semibold text-sky-300">{title}</h3>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <ul className="space-y-1 text-sm text-slate-400">
        {details.map((d, idx) => (
          <li key={idx}><span className="font-semibold text-slate-200">{d.label}:</span> {d.value}</li>
        ))}
      </ul>
      {inlineImageSrc && (
        <div className="mt-4">
          <img
            src={inlineImageSrc}
            alt={inlineImageAlt}
            className="w-full rounded-md border border-slate-600 shadow-md"
          />
        </div>
      )}
    </div>
  );
};