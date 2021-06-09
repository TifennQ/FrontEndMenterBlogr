import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import useWindowDimensions from './getWindowDimensions'
import React, { useState, useEffect} from 'react'
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  const {width, height} = useWindowDimensions()
  const [isDesktop, setIsDesktop] = useState(null)

  useEffect(() => {
    if(width < 960) {
      setIsDesktop(false)
    }
    else {
      setIsDesktop(true)
    }
}, [width])
  return (
    <>
      <Header></Header>
      <Hero isDesktop={isDesktop}></Hero>
      <Section1 isDesktop={isDesktop}></Section1>
      <Section2 isDesktop={isDesktop}></Section2>
    </>
  );
}

export default App;
