
import React from 'react';
import { Section } from './components/Section';
import { TimelineItem } from './components/TimelineItem';
import { SkillBadge } from './components/SkillBadge';
import { Icon } from './components/Icon';
import { 
    CONTACT_INFO, 
    PROFESSIONAL_SUMMARY,
    EDUCATION,
    RESEARCH_EXPERIENCE,
    PROJECTS_EXPERIENCE,
    LEADERSHIP_ACTIVITIES,
    SKILLS,
    HOBBIES
} from './constants';
import type { TimelineItemProps } from './types';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-stone-100 font-sans text-stone-700">
            <main className="container mx-auto max-w-4xl px-6 py-12 md:py-20">
                <header className="mb-16 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">{CONTACT_INFO.name}</h1>
                    <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-stone-500">
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-emerald-600 transition-colors">
                            <Icon name="phone" />
                            <span>{CONTACT_INFO.phone}</span>
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-emerald-600 transition-colors">
                            <Icon name="email" />
                            <span>{CONTACT_INFO.email}</span>
                        </a>
                        <a href={CONTACT_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-600 transition-colors">
                           <Icon name="github" />
                            <span>GitHub</span>
                        </a>
                         <a href={CONTACT_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-600 transition-colors">
                           <Icon name="website" />
                            <span>Website</span>
                        </a>
                    </div>
                </header>

                <Section title="Professional Summary">
                    <p className="text-stone-600 leading-relaxed">{PROFESSIONAL_SUMMARY}</p>
                </Section>
                
                <Section title="Education">
                    {/* FIX: Use `title`, `subtitle`, and `description` props to match TimelineItemProps */}
                    {EDUCATION.map((edu, index) => (
                         <TimelineItem
                            key={index}
                            title={edu.title}
                            subtitle={edu.subtitle}
                            duration={edu.duration}
                            description={edu.description}
                        />
                    ))}
                </Section>

                <Section title="Research Experience">
                    {/* FIX: Use `title` and `subtitle` props to match TimelineItemProps */}
                    {RESEARCH_EXPERIENCE.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            title={exp.title}
                            subtitle={exp.subtitle}
                            duration={exp.duration}
                            description={exp.description}
                        />
                    ))}
                </Section>

                <Section title="Selected Projects & Industry Experience">
                    {/* FIX: Use `title` and `subtitle` props to match TimelineItemProps */}
                    {PROJECTS_EXPERIENCE.map((proj, index) => (
                        <TimelineItem
                            key={index}
                            title={proj.title}
                            subtitle={proj.subtitle}
                            duration={proj.duration}
                            description={proj.description}
                        />
                    ))}
                </Section>

                <Section title="Leadership & Co-Curricular Activities">
                    {/* FIX: Use `title` and `subtitle` props to match TimelineItemProps */}
                    {LEADERSHIP_ACTIVITIES.map((activity, index) => (
                         <TimelineItem
                            key={index}
                            title={activity.title}
                            subtitle={activity.subtitle}
                            duration={activity.duration}
                            description={activity.description}
                        />
                    ))}
                </Section>

                <Section title="Skills">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category} className="mb-4">
                            <h3 className="font-semibold text-stone-800 mb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </Section>

                <Section title="Hobbies & Interests">
                    <div className="flex flex-wrap gap-2">
                         {HOBBIES.map((hobby, index) => (
                             <SkillBadge key={index} skill={hobby} />
                        ))}
                    </div>
                </Section>

                <footer className="text-center mt-20 text-stone-500 text-sm">
                    <p>Built with React, TypeScript, and Tailwind CSS.</p>
                    <p>&copy; {new Date().getFullYear()} Colin Hong. All Rights Reserved.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;