import Hero from "../components/Hero";
import Tile from "../components/Tile";
import heroImg from "../images/hero.jpg";
import {IoMdPaw} from 'react-icons/io';

const Home = ({ catData, catImages, addToBasket }) => {
  return (
    <div className="home">
      <div className="backgroundhero">
      <Hero image={heroImg}
 
      /> 
      <h1 className="HeroText">Take A Cat <br></br>Home Today!</h1> 
      <IoMdPaw className="Paw"/>
      </div>
    
      <div className="gallery">
    
        {catData.length === 0 ? (
          <div className="loading"></div>
        ) : (
          catImages.map((cat, i) => (
            <Tile
              name={catData[i]?.name}
              price={catData[i]?.price}
              age={catData[i]?.age}
              city={catData[i]?.city}
              gender={catData[i]?.gender}
              breed={catData[i]?.breed}
              image={cat.url}
              key={cat.id}
              id={cat.id}
              pedigree={catData[i]?.pedigree}
              addToBasket={addToBasket}
            />
          ))
        )}
      </div>
      <div className="bottombackground"></div>
    </div>
  );
};

export default Home;
