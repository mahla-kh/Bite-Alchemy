// import { CitiesProvider } from "./contexts/CitiesContext";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
////// ABOUT THIS PAGE ! + CONTACT US
// import ContactUs from "./pages/ContactUs";
// import AboutThisPage from "./pages/AboutThisPage";
import Homepage from "./pages/Homepage";
import PageNotFount from "./pages/PageNotFount";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import AboutThisPage from "./pages/AboutThisPage";
import { IngredientProvider } from "./context/ingredientsContext";
// import CityList from "./components/CityList";
// import CountryList from "./components/CountryList";
// import City from "./components/City";
// import Form from "./components/Form";

function App() {
  return (
    <IngredientProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="AboutMe" element={<h3>About Me!</h3>} />
          <Route path="AboutPage" element={<AboutThisPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="cook" element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="cities" />} /> */}
            {/* <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} /> */}
          </Route>
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </IngredientProvider>
  );
}

export default App;
