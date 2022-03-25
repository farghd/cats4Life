import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetData from "./utils/Getdata";
import GetImage from "./utils/GetImage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [catImages, setCatImages] = useState([]);
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    (async () => {
      const imgs = await GetImage();
      const data = GetData();
      setCatImages(imgs);
      setCatData(data);
    })();
  }, []);


  const addToBasket = (item) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setBasketItems([...basketItems, item]);
  };

  const removeItemFromBasket = (item) => {
    const remainingBasketItems = basketItems.filter(
      (cat) => cat.id !== item.id
    );
    setBasketItems(remainingBasketItems);
  };
  return (
    <Router>
      <div className="app">
        <Navbar
          basketItems={basketItems}
          removeItemFromBasket={removeItemFromBasket}
        />
        <Switch>
          <Route exact path="/">
            <Home
              catData={catData}
              catImages={catImages}
              addToBasket={addToBasket}
            />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
