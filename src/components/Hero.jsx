const Hero = ({
  image,
  title,
  subtitle,
  price,
  breed,
  age,
  city,
  gender,
}) => {
  return (
    <div className="hero">
      <img src={image} alt="" />

      <div className="hero-side">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <h4>{breed}</h4>
        <h4>{age}</h4>
        <h4>{city}</h4>
        <h4>{gender}</h4>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Hero;
