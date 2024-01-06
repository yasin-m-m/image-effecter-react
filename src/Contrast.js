import React from 'react'
import Slider from 'rsuite/Slider';

const Contrast = ({contrast,setContrast}) => {
    const handleSliderChange = (value) => {
        setContrast(value);
      };
  return (
    <div className='slider'>
    <h6>Contrast</h6>
    <Slider
      progress
      defaultValue={contrast}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Contrast