import { ReactNode } from "react";

export interface MarketEvent {
    title: string;
    showDate: boolean;
    eventType: string | ReactNode;
    time: string | ReactNode;
    detailsUrl: string;
    eventImage: string;
    location: string;
    locationLink: string;
}

export interface MarketGridProps {
    events?: MarketEvent[];
}