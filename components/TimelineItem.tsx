import React from 'react';
import type { TimelineItemProps } from '../types';

export const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, duration, description }) => {
    return (
        <div className="relative pl-8 sm:pl-10 group">
            <div className="absolute left-0 top-1.5 h-full w-px bg-stone-300"></div>
            <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-stone-400 group-hover:bg-emerald-500 transition-colors"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="font-bold text-lg text-stone-900">{title}</h3>
                <p className="text-sm text-stone-500 mt-1 sm:mt-0">{duration}</p>
            </div>
            <p className="text-md text-emerald-600 mb-2">{subtitle}</p>
            
            <ul className="list-disc list-outside ml-5 space-y-2 text-stone-600">
                {description.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                ))}
            </ul>
        </div>
    );
};