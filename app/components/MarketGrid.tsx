import Image from "next/image";
import Link from "next/link";
import { MarketEvent } from "@/types/globalTypes";
import { MarketGridProps } from "@/types/globalTypes";

export default function MarketGrid({ events = [] }: MarketGridProps) {
    
    if (events.length === 0) {
        return (
            <div className="flex-center-center">
                <p className="centered-text">No upcoming events at this time. Check back soon!</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex-start-center flex-wrap market-grid">
                {events.map((event, index) => (
                    <div key={index} className="event box-shadow flex-center-center basic-bg flex-column" style={{maxWidth: event.showDate ? '25%' : '35%'}}>
                        <div className="date-tag-wrapper flex-start-start no-flex-grow" style={{ backgroundImage: event.eventImage}}>
                             <span className="date-tag" style={{ backgroundColor: event.showDate ? "var(--redorange)" : "var(--orange)" }}>{event.eventType}</span>
                        </div>
                        <div className="event-content flex-center-center flex-column align-stretch">
                            <h3 className="centered-text no-text-spacing event-title">{event.title}</h3>
                            <div className="flex-center-center flex-column no-flex-grow" style={{marginTop: '15px'}}>
                                <Link className="no-link-styling no-text-spacing flex-start-start" target="_blank" href={event.locationLink}>
                                    
                                    <p className="no-text-spacing centered-text" style={{whiteSpace: 'wrap', opacity: '0.5', fontSize: '14px'}}>{event.location}</p>
                                </Link>
                                <p className="centered-text no-text-spacing">{event.time}</p>
                            </div>
                            
                            <Link className="flex-center-center" href={event.detailsUrl} target="_blank">
                                <button className="black-button small-button">Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}