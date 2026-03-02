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
            <a className="event no-link-styling box-shadow basic-padding" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd55QfFK7vckYvpd-UnJKqg54fBxvA7GOO_YhHUzf6DOEhZSw/viewform?usp=dialog" style={{maxWidth: "400px", cursor: "pointer"}}>
                <h3>Weekend Cheese Monger</h3>
                
                <p>Our "cheese mongers" will be selling our artisan cheeses at farmers markets in the Front Range and Central Mountain Region. Each Cheese Monger will be a regularly scheduled vendor at a given market. </p>
                
                <div className="flex-center-center">
                    <button style={{marginTop: '25px'}}>Details</button>
                </div>
            </a>

          </div>
        

        </div>
    </main>
  );
}
