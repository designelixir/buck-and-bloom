"use client"

export default function Home() {
  return (
    <main className="flex-center-center flex-column fade-in" id="tour">
      <div className="flex-center-center flex-column basic-padding" style={{marginTop: '250px'}}>
        <h2>Tour The Farm</h2>
        <h3 className="centered-text" style={{marginBottom: '25px'}}>
          Learn about artisan cheesemaking in the Colorado Rockies! Together we will visit the milking parlor, 
          peek inside the creamery, learn how cheese is made, go deep underground into the cheese cave, play with 
          the young goats, greet the hens, and taste some cheese made right here on the farm. A wonderful way to 
          learn and explore for the whole family!
        </h3>

        <iframe
          id="JotFormIFrame-253631095381154"
          title="Buck & Bloom - Tours"
          src="https://form.jotform.com/253631095381154"
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            height: '80vh',
            border: 0
          }}
          
        />
      </div>
    </main>
  );
}