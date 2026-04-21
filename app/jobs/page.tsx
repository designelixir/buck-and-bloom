"use client"
import ShowMore from "../components/ShowMore";

export default function Jobs() {
  return (
    <main className="flex-center-center flex-column fade-in" style={{marginTop: '250px'}}>
        <div className="flex-center-center flex-column basic-padding">
          
          <h1 className="centered-text" style={{marginTop: '50px'}}>Work with Us</h1>
          <p className="header-description">We are hiring! Join our enthusiastic team here at Buck & Bloom. Please review the job requirements carefully, and click Details to apply!</p>
          <div className="flex-center-center flex-wrap" style={{marginBottom: '50px'}}>
            {/* Part time cheesemaker */}
            <div className="event box-shadow basic-padding" style={{maxWidth: 'unset'}}>
                <h2 style={{fontFamily: 'var(--native-record)', fontSize: '32px'}}>Part-Time Cheesemaker</h2>
                <p><strong>Schedule: </strong>Friday - Tuesday, 9:00AM - 4:00PM (30-minute unpaid lunch)</p>
                <p><strong>Starting Pay: </strong>$18.50 / hour</p>
                <p><strong>Location: </strong>Buena Vista, CO</p>
                
                <p style={{opacity: '0.65'}}><strong>Buck & Bloom is growing, and we&apos;re looking for a part-time Cheesemaker to join our lively, hardworking, cheese-loving team. This role is hands-on, physical, and perfect for someone who enjoys craft food production, learning new skills, and being part of a collaborative crew.</strong></p>

                <ShowMore title="Click for more job details">
                  <h3><strong>What You&apos;ll Do</strong></h3>
                  <ul>
                    <li>Package fresh and aged cheeses with accuracy and care</li>
                    <li>Clean and sanitize equipment and creamery spaces</li>
                    <li>Work underground in the cheese cave to care for aging wheels</li>
                    <li>Assist with the cheesemaking process </li>
                    <li>Follow recipes, written instructions, and verbal guidance</li>
                    <li>Communicate clearly with team members to keep production running smoothly</li>
                    <li>Contribute to a fun, supportive, get-it-done work environment</li>
                  </ul>

                  <h3><strong>What We&apos;re Looking For</strong></h3>
                  <ul>
                    <li>Ability to stand and move for most of the day</li>
                    <li>Ability to lift up to 50 lbs</li>
                    <li>Comfortable working in warm, humid environments</li>
                    <li>Strong attention to detail</li>
                    <li>Ability to follow recipes and procedures</li>
                    <li>Basic math skills</li>
                    <li>Good communication and teamwork</li>
                    <li>Interest in learning and growing within the craft of cheesemaking</li>
                    <li>Bonus: Experience in food production, fermentation, or similar hands-on work</li>
                  </ul>

                  <h3><strong>What We Provide</strong></h3>
                  <ul>
                    <li>Work shoes and PPE </li>
                    <li>A supportive team that loves what we do</li>
                    <li>Opportunities to learn cheesemaking and grow your skills</li>
                    <li>Free cheese (yes, really)</li>
                  </ul>        
                </ShowMore>        
                
                <br></br>
                <p><strong>If you&apos;re excited about cheese, enjoy physical work, and want to be part of a fun and passionate team, we&apos;d love to hear from you.</strong></p>
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf-U_2trl1PpW6cQVJpoaUQHS8FeDw81A7FUreL6GIibPXDpA/viewform" style={{maxWidth: "400px", cursor: "pointer"}}>
                    <button style={{marginTop: '25px'}}>Details</button>
                  </a>
                
            </div>

            

          </div>
        

        </div>
    </main>
  );
}
