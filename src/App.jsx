import {
  Designer,
  Home,
  Product_Details,
  Profile,
  Account,
  Payment,
} from "./Modules";
import { Routes, Route } from "react-router-dom";
import Login from "./Modules/LoginPage/login";
import Signup from "./Modules/SignUp/signup";
import Unsplash from "./api/Unsplash";
import { Layout } from "./Modules/components";
import { useEffect, useState } from "react";
import NotFound from "./Modules/NotFound/NotFound";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return Unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let pinPromises = [];
    let pinData = [];

    let pins = [
      "cars",
      "blue",
      "Buildings",
      "waterfalls",
      "dresses",
      "dogs",
      "red",
      "yellow",
      "sneakers",
      "jerseys",
      "sunset",
      "phones",
      "laptops",
      "cats",
      "bags",
      "snow",
    ];

    pins.forEach((pinTerm) => {
      pinPromises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });

    Promise.all(pinPromises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  // onSearchSubmit("cars");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onSearchSubmit={onSearchSubmit} />}>
          <Route index element={<Home pins={pins} />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Designer" element={<Designer />} />
          <Route path="Product" element={<Product_Details />} />
          <Route path="Account" element={<Account />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
