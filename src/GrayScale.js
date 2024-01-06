import React from 'react'
import Slider from 'rsuite/Slider';

const GrayScale = ({grayScale,setGrayScale}) => {
    const handleSliderChange = (value) => {
        setGrayScale(value);
      };
  return (
    <div className='slider'>
    <h6>GrayScale</h6>
    <Slider
      progress
      defaultValue={grayScale}
      min={0}
      max={200}
      onChange={handleSliderChange}
    />
    </div>
  )
}

export default GrayScale