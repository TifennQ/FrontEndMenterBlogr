import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import useWindowDimensions from './getWindowDimensions'
import React, { useState, useEffect} from 'react'

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
      <Hero isDesktop={isDesktop} ></Hero>
    </>
  );
}

export default App;
