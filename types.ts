
import type { ReactNode } from 'react';

export interface TimelineItemProps {
    title: string;
    subtitle: string;
    duration: string;
    // Allow React nodes so we can include links or formatted content in list items
    description: ReactNode[];
}
