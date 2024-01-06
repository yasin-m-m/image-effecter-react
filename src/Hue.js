import React from 'react'
import Slider from 'rsuite/Slider';

const Hue = ({hue,setHue}) => {
    const handleSliderChange = (value) => {
        setHue(value);
      };
  return (
    <div className='slider'>
    <h6>Hue</h6>
    <Slider
      progress
      defaultValue={hue}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Hue