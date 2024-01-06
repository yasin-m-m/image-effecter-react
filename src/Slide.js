import React from 'react'
import Brightness from './Brightness';
import Contrast from './Contrast';
import Saturation from './Saturation';
import GrayScale from './GrayScale';
import Sepia from './Sepia';
import Hue from './Hue';
import Blur from './Blur';
import Invert from './Invert';
import Opacity from './Opacity';
import { Route, Routes } from 'react-router-dom';

const Slide = ({brightness,contrast,setBrightness,setContrast,saturation,setSaturation,grayScale,setGrayScale,sepia,setSepia,hue,setHue,blur,setBlur,invert,setInvert,opacity,setOpacity,setEditedImage}) => {

  

  return (
    <div>
    <Routes>
    <Route path="/" element={<Brightness brightness={brightness} setBrightness={setBrightness} />} />
    <Route path='/brightness' element={<Brightness brightness={brightness}
    setBrightness={setBrightness} />}/>
    <Route path='/contrast' element={<Contrast contrast={contrast}
    setContrast={setContrast} />}/>
    <Route path='/saturation' element={<Saturation saturation={saturation}
    setSaturation={setSaturation} /> }/>
    <Route path='/grayscale' element={<GrayScale grayScale={grayScale}
    setGrayScale={setGrayScale}/>} />
    <Route path='/sepia' element={<Sepia sepia={sepia}
    setSepia={setSepia}/>} />
    <Route path='/hue' element={<Hue hue={hue}
    setHue={setHue}/>} />
    <Route path='/blur' element={<Blur blur={blur}
    setBlur={setBlur}/>} />
    <Route path='/invert' element={<Invert invert={invert}
    setInvert={setInvert}  />}/>   
    <Route path='/opacity' element={<Opacity opacity={opacity}
    setOpacity={setOpacity} />}/>      
    </Routes>
  
    </div>
  )
}

export default Slide