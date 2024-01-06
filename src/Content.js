import React, { useRef, useState } from 'react'
import ImageDisplay from './ImageDisplay'
import Slide from './Slide'
import { Button } from 'rsuite'
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import CloseIcon from '@rsuite/icons/Close';
import * as htmlToImage from 'html-to-image';
import * as download from "downloadjs"


const Content = ({brightness,setBrightness,contrast,setContrast,saturation,setSaturation,grayScale,setGrayScale,sepia,setSepia,hue,setHue,blur,setBlur,invert,setInvert,opacity,setOpacity}) => {
  const fileInputRef = useRef(null);

    const [image,setImage] =useState(null)
    
  
    const handleFileUpload = () => {
      
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleFileChange = (event) => {
      
      setTimeout(async() => {
        try {
          const file = await event.target.files[0];
        
        setImage(URL.createObjectURL(file));
        } catch (error) {
          alert(error)
        }
      }, 500);
      
    };
    const handleReset = () => {
    setImage(null);
    window.location.reload();
   
  };

  const handleDownload= async()=>{
    try {
      await htmlToImage.toPng(document.getElementById('image')).then((dataUrl)=>{
        download(dataUrl,`${Date.now()}.png`)
    })
    } catch (error) {
      alert("Please upload an image first")
    } 
    
  }
  return (
    <div className='content'>
    <Slide brightness={brightness}
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
            setOpacity={setOpacity}
           />
    <ImageDisplay fileInputRef = {fileInputRef}
                  handleFileChange={handleFileChange}
                  handleFileUpload={handleFileUpload}
                  image={image}
                  brightness={brightness}
                  contrast={contrast}
                  saturation={saturation}
                  grayScale={grayScale}
                  sepia={sepia}
                  hue={hue}
                  blur={blur}
                  invert={invert}
                  opacity={opacity}/>
    <div className='btn-two'>
    <Button appearance="primary" onClick={handleDownload}> <FileDownloadIcon /> Download </Button>
    <Button appearance="primary" onClick={()=>handleReset()}> <CloseIcon /> remove image </Button>
    </div>
    
    </div>
  )
}

export default Content