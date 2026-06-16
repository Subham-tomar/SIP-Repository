function Card({ title, desc, image }) {
  return (
    <div className="card">
        <image src={image} alt={title} 
        className="card-image" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="btn">Book Now</button>
    </div>
  );
}

export default Card;