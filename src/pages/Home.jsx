import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../styles.css";

function Home() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/stays")
      .then((response) => response.json())
      .then((data) => setStays(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="cards-container">

        {/* Existing cards */}
        <Card
          title="Mountain Stay"
          desc="Beautiful eco homestay"
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        />

        <Card
          title="Village Stay"
          desc="Experience village life"
          image="https://images.unsplash.com/photo-1512917774080-999f1c4c750"
        />

        {/* Data coming from backend */}
        {stays.map((stay) => (
          <Card
            key={stay.id}
            title={stay.name}
            desc={stay.location}
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />
        ))}

      </div>

      <Footer />
    </>
  );
}

export default Home;