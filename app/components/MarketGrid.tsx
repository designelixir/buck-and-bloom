import Image from "next/image";
import Link from "next/link";
import { MarketEvent } from "@/types/globalTypes";
import { MarketGridProps } from "@/types/globalTypes";

export default function MarketGrid({ events = [] }: MarketGridProps) {
    

    return (
        <>
            <div className="flex-start-center flex-wrap market-grid">
                {events.map((event, index) => (
                    <div key={index} className="event flex-center-center basic-bg flex-column" style={{maxWidth: event.showDate ? '25%' : '35%'}}>
                        <div className="date-tag-wrapper flex-start-start no-flex-grow" style={{ backgroundImage: event.eventImage, padding: event.showDate ? '2px 5px' : '10px -2px' }}>
                            {event.showDate ? <span className="date-tag">{event.eventType}</span> : <></>}
                        </div>
                        <div className="event-content flex-center-center flex-column">
                            <h3 className="centered-text no-text-spacing event-title">{event.title}</h3>
                            <div className="flex-center-center flex-column no-flex-grow" style={{marginTop: '25px'}}>
                                <Link className="no-link-styling no-text-spacing flex-center-start" target="_blank" href={event.locationLink}>
                                    <Image src="/location.svg" alt="location pin icon" width={15} height={15} style={{marginRight: '5px'}}></Image>
                                    <p className="no-text-spacing" style={{whiteSpace: 'nowrap'}}>{event.location}</p>
                                </Link>
                                <p className="centered-text no-text-spacing">{event.time}</p>
                            </div>
                            
                            <Link href={event.detailsUrl} target="_blank">
                                <button className="red-button small-button">Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}