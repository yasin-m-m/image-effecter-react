import React from 'react'
import Slider from 'rsuite/Slider';

const Sepia = ({sepia,setSepia}) => {
    const handleSliderChange = (value) => {
        setSepia(value);
      };
  return (
    <div className='slider'>
    <h6>Sepia</h6>
    <Slider
      progress
      defaultValue={sepia}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default Sepia