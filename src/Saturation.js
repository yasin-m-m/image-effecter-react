import React from 'react'
import Slider from 'rsuite/Slider';

const Saturation = ({saturation,setSaturation}) => {
    const handleSliderChange = (value) => {
        setSaturation(value);
      };
  return (
    <div className='slider'>
    <h6>Saturation</h6>
    <Slider
      progress
      defaultValue={saturation}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Saturation