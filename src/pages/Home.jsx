import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../styles.css"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="cards-container">
        <Card
         title="Mountain Stay"
         desc="Beautiful eco homestay"
         image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        />

        <Card
         title="Village Stay"
         desc="Experience village life"
         image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;