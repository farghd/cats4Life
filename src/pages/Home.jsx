import Hero from "../components/Hero";
import Tile from "../components/Tile";
import heroImg from "../images/heroimg.png";

const Home = ({ catData, catImages, addToBasket }) => {
  return (
    <div className="home">
      <Hero
        image={heroImg}
        title="You Need A Cat!"
        subtitle="Our cats are cute and cuddly! Adopt one today!"
        to="/AboutUs"
        button="About Us"
      />
      <div className="gallery">
        {catData.length === 0 ? (
          <div className="loading"></div>
        ) : (
          catImages.map((cat, i) => (
            <Tile
              name={catData[i]?.name}
              price={catData[i]?.price}
              age={catData[i]?.age}
              gender={catData[i]?.gender}
              breed={catData[i]?.breed}
              image={cat.url}
              key={cat.id}
              id={cat.id}
              addToBasket={addToBasket}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
