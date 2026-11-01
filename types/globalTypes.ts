import { ReactNode } from "react";

export interface MarketEvent {
    title: string;
    show?: boolean; // false hides it; leaving it out shows it
    showDate: boolean;
    startDate?: string; // ISO 8601 timestamp, e.g. "2026-06-06T00:00:00-06:00"
    endDate?: string;
    eventType: string | ReactNode;
    time: string | ReactNode;
    detailsUrl: string;
    eventImage: string;
    location: string;
    locationLink: string;
}

export interface MarketGridProps {
    events?: MarketEvent[];
    heading?: string;
    hideWhenEmpty?: boolean; // render nothing (heading included) when no events are active
}