"use client"
import MailingListForm from "../components/MailingListForm";
import Image from "next/image";

export default function Jobs() {
  return (
    <main className="flex-center-center flex-column fade-in" style={{marginTop: '250px'}}>
        <div className="flex-center-center flex-column basic-padding">
            
          <h1 className="centered-text" style={{marginTop: '50px'}}>Work with Us</h1>
          <p className="header-description">We are hiring! Join our enthusiastic team here at Buck & Bloom. Please click on a listing to learn about the job description and apply:</p>
          <div className="flex-center-center flex-wrap" style={{marginBottom: '50px'}}>
            <a className="event no-link-styling box-shadow basic-padding" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf-U_2trl1PpW6cQVJpoaUQHS8FeDw81A7FUreL6GIibPXDpA/viewform" style={{maxWidth: "400px", cursor: "pointer"}}>
                <h3 className="centered-text" style={{fontFamily: 'var(--native-record)'}}>Part-Time Cheesemaker</h3>
                
                <p className="centered-text" style={{opacity: '0.65'}}>Buck & Bloom is growing, and we’re looking for a part-time Cheesemaker to join our lively, hardworking, cheese-loving team. This role is hands-on, physical, and perfect for someone who enjoys craft food production, learning new skills, and being part of a collaborative crew.</p>
                
                <div className="flex-center-center">
                    <button style={{marginTop: '25px'}}>Details</button>
                </div>
            </a>

          </div>
        

        </div>
    </main>
  );
}
