export interface EntryGroup {
    heading: string;
    bullets: string[];
}

export interface Entry {
    period: string;
    /** Small uppercase label under the date, e.g. a place or a category. */
    tag?: string;
    /** Shows a live indicator beside the date. */
    current?: boolean;
    title: string;
    org?: string;
    summary?: string;
    bullets?: string[];
    groups?: EntryGroup[];
}

export interface Publication {
    title: string;
    authors: string[];
    venue: string;
    year: string;
    note?: string;
    links: { label: string; href: string }[];
}

export interface Stat {
    value: string;
    label: string;
}
