import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/menu/Nav";
import { Content } from "./components/main/Content";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </>
  );
}

export default App;
