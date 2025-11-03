import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 uppercase tracking-wider border-b-2 border-emerald-500 pb-2">{title}</h2>
            <div className="space-y-8">
                {children}
            </div>
        </section>
    );
};