import React from 'react'
import Slider from 'rsuite/Slider';

const Invert = ({invert,setInvert}) => {
    const handleSliderChange = (value) => {
        setInvert(value);
      };
  return (
    <div className='slider'>
    <h6>Invert</h6>
    <Slider
      progress
      defaultValue={invert}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Invert