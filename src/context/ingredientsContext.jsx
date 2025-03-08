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
  const [ingredientsArray, setIngredientsArray] = useState(["egg", "oil"]);
  const [foods, setFoods] = useState([]);
  const params = new URLSearchParams();
  const ingredientParam = ingredientsArray.join(",");

  //   ingredientsArray.forEach((ingredient) => params.append("query", ingredient));

  // useEffect(function () {
  //   async function fetchIngredients() {
  //     const res = await fetch(
  //       `https://api.spoonacular.com/food/ingredients/autocomplete?number=30&apiKey=${API_KEY}`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchIngredients();
  // }, []);

  useEffect(function () {
    async function fetchFood() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientParam}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);

  return (
    <ingredientsContext.Provider value={{}}>
      {children}
    </ingredientsContext.Provider>
  );
}

function useProvider() {
  const context = useContext();
  if (context === undefined) throw new Error("context used wrong");
  return context;
}

export { useProvider, IngredientProvider, ingredients };
