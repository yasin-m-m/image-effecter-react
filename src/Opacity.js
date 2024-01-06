import React from 'react'
import Slider from 'rsuite/Slider';

const Opacity = ({opacity,setOpacity}) => {
    const handleSliderChange = (value) => {
        setOpacity(value);
      };
  return (
    <div className='slider'>
    <h6>Opacity</h6>
    <Slider
      progress
      defaultValue={opacity}
      min={0}
      max={100}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Opacity