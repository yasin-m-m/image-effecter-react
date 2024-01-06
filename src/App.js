import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";
import 'rsuite/dist/rsuite.min.css';
import Header from "./Header";






function App() {

  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [grayScale, setGrayScale] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [hue, setHue] = useState(0);
  const [blur, setBlur] = useState(0);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(100);
 
  
  return (
    <div className="App">
    <Header/>
      <NavBar/>
      <Content brightness={brightness}
                setBrightness={setBrightness}
                contrast={contrast}
                setContrast={setContrast}
                saturation={saturation}
                setSaturation={setSaturation}
                grayScale={grayScale}
                setGrayScale={setGrayScale}
                sepia={sepia}
                setSepia={setSepia}
                hue={hue}
                setHue={setHue}
                blur={blur}
                setBlur={setBlur}
                invert={invert}
                setInvert={setInvert}
                opacity={opacity}
                setOpacity={setOpacity}/>
      <Footer />
      
    </div>
    
  );
}

export default App;
