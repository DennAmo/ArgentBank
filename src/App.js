import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/signin";

const App = () => {

  return (
    <>

    <BrowserRouter>
    <main>
    <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
      </main>
    </BrowserRouter>

    </>
  );
};

export default App;