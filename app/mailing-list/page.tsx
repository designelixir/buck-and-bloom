"use client"
import MailingListForm from "../components/MailingListForm";
import Image from "next/image";

export default function MailingListPage() {
  return (
    <main className="flex-center-center flex-column fade-in" style={{marginTop: '250px'}}>
        <div className="flex-center-center flex-column">
            <Image src="/goat-mail.svg" alt="sketch of a goat holding an envelope" height="200" width="250"/>
          <h1 className="centered-text">Join Buck & Bloom's Mailing List!</h1>
          <p className="header-description">Enter your name and email to get occasional updates on Buck & Bloom's products, markets, and more. You may unsubscribe at any time.</p>
        
            <MailingListForm></MailingListForm>
        </div>
    </main>
  );
}
