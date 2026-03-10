"use client"
import MailingListForm from "../components/MailingListForm";
import Image from "next/image";
import Link from "next/link";

export default function MailingListPage() {
  return (
    <main className="flex-center-center flex-column fade-in" style={{marginTop: '250px'}}>
        <div className="flex-center-center flex-column basic-padding">
            <Image src="/goat-mail.svg" alt="sketch of a goat holding an envelope" height="200" width="250"/>
          <h1 className="centered-text">Join Buck & Bloom's Mailing List!</h1>
          <h3 className="header-description">Enter your name and email to get occasional updates on Buck & Bloom's products, markets, and more. You may unsubscribe at any time.
            <strong> Consider adding <Link href="mailto:buckandbloomcheese@gmail.com" target="_blank">buckandbloomcheese@gmail.com</Link> to your mailing list, so our newsletters aren't filtered to your spam / promotions! <a href="/contact.vcf" download>Click here to add our contact.</a></strong>
          </h3>
        
            <MailingListForm></MailingListForm>
        </div>
    </main>
  );
}
