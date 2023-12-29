import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <p>{strMeal}</p>
        <p>${idMeal}</p>
      </section>
    );
  });
  return <div className="items-conatiner">{itemsList}</div>;
}

export default App;
