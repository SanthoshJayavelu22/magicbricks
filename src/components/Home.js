import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Cards from "./Cards";
import Guide from "./Guide";
import Footer from "./Footer";



function Home() {
  return (
   <>
   <Header/>
   <SearchBar/>
   <Banner/>
   <Cards/>
   <Guide/>
   <Footer/>
   </>
  );
}

export default Home;
