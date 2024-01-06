import React from 'react'
import Slider from 'rsuite/Slider';

const Blur = ({blur,setBlur}) => {
    const handleSliderChange = (value) => {
        setBlur(value);
      };
  return (
    <div className='slider'>
    <h6>Blur</h6>
    <Slider
      progress
      defaultValue={blur}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Blur