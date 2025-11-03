import React from 'react';

interface SkillBadgeProps {
    skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    return (
        <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
            {skill}
        </span>
    );
};