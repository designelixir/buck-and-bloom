"use client"
import ImageSlideshow from "../components/ImageSlideshow";

export default function Tour() {
  return (
    <main className="flex-center-center flex-column fade-in" id="tour">
      <div className="flex-center-center flex-column basic-padding" style={{marginTop: '250px'}}>
        <h1>Tour The Farm</h1>
        <div className="flex-start-start full-width" style={{maxWidth: '98vw'}}>
          <ImageSlideshow images={['/tours/goat-hug.jpg', '/tours/pups.jpg', '/tours/cheese-cave.jpg', '/tours/cheese-cave-greg.jpg', '/tours/chook-house.jpg', '/tours/bv.jpg', '/tours/cheese-machines.jpg', '/tours/goats-table.jpg', '/tours/milking.jpg', '/tours/chickens.jpg' ]} title={"Tour Photos"} />
        </div>
        <h3 className="centered-text" style={{marginBottom: '25px'}}>
          Learn about artisan cheesemaking in the Colorado Rockies! Together we will visit the milking parlor, 
          peek inside the creamery, learn how cheese is made, go deep underground into the cheese cave, play with 
          the young goats, greet the hens, and taste some cheese made right here on the farm. A wonderful way to 
          learn and explore for the whole family!
        </h3>

        <a 
  className="button no-link-styling" 
  href="https://form.jotform.com/260805425436052"
>
  Sign up for a tour
</a>
      </div>
    </main>
  );
}