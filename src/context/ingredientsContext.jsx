import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

const API_KEY = "fa37079e6c0a40409fd8d173cd9d1e42";

const ingredients = [
  "butter",
  "egg",
  "garlic",
  "milk",
  "onion",
  "sugar",
  "flour",
  "olive oil",
  "garlic powder",
  "white rice",
  "cinnamon",
  "ketchup",
  "soy sauce",
  "mayonnaise",
  "vegetable oil",
  "bread",
  "baking powder",
  "brown sugar",
  "oregano",
  "potato",
  "honey",
  "paprika",
  "baking soda",
  "vanilla",
  "spaghetti",
  "peanut butter",
  "chili powder",
  "cumin",
  "mustard",
  "chicken breast",
  "cheddar",
  "onion powder",
  "carrot",
  "tomato",
  "basil",
  "parsley",
  "parmesan",
  "italian seasoning",
  "thyme",
  "bell pepper",
];

const ingredientsContext = createContext();

function IngredientProvider({ children }) {
  const [activeIDs, setActiveIDs] = useState([]);

  const [ingredientsArray, setIngredientsArray] = useState(["egg", "oil"]);
  const [queryArray, setQueryArray] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    console.log(activeIDs);
    const newIngredients = activeIDs.map((index) => ingredients[index]);
    setIngredientsArray((prev) => [...prev, ...newIngredients]);
  }, [activeIDs]);

  //   ingredientsArray.forEach((ingredient) => params.append("query", ingredient));

  useEffect(
    function () {
      async function fetchIngredients(ingredient) {
        const res = await fetch(
          `https://api.spoonacular.com/food/ingredients/autocomplete?query=${ingredient}&number=10&apiKey=${API_KEY}`
        );
        const data = await res.json();
        return data;
      }
      async function getAllIngre() {
        const result = await Promise.all(
          ingredientsArray.map((ingre) => fetchIngredients(ingre))
        );
        const finalIngreArray = result.reduce((pre, cur) => pre.concat(cur));
        setQueryArray(finalIngreArray);
      }
      getAllIngre();
    },
    [ingredientsArray]
  );

  useEffect(
    function () {
      console.log(queryArray);
      const ingredientParam = queryArray.map((ingre) => ingre.name).join(",");
      async function fetchFood() {
        console.log("param", ingredientParam);
        const res = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientParam}&number=10&apiKey=${API_KEY}`
          // `https://api.spoonacular.com/recipes/findByIngredients?ingredients='egg,oil'&apiKey=${API_KEY}`
        );
        const data = await res.json();
        setFoods(data);
      }
      fetchFood();
    },
    [queryArray]
  );

  useEffect(
    function () {
      console.log("food", foods);
    },
    [foods]
  );

  return (
    <ingredientsContext.Provider value={{ setActiveIDs, activeIDs }}>
      {children}
    </ingredientsContext.Provider>
  );
}

function useProvider() {
  const context = useContext(ingredientsContext);
  if (context === undefined) throw new Error("context used wrong");
  return context;
}

export { useProvider, IngredientProvider, ingredients };
