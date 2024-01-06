import React from 'react'
import Slider from 'rsuite/Slider';

const Brightness = ({brightness,setBrightness}) => {
    const handleSliderChange = (value) => {
        setBrightness(value);
        
      };
  return (
    <div className='slider'>
    <h6>Brightness</h6>
    <Slider
      progress
      defaultValue={brightness}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Brightness