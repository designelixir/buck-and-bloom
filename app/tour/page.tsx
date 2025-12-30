"use client"

export default function Tour() {
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

        <a 
  className="button no-link-styling" 
  href="https://form.jotform.com/253631095381154"
>
  Sign up for a tour
</a>
      </div>
    </main>
  );
}