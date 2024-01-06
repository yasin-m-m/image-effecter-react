
import FileUploadIcon from '@rsuite/icons/FileUpload';
import { IconButton } from 'rsuite';

const ImageDisplay = ({fileInputRef,handleFileChange,handleFileUpload,image,brightness,contrast,saturation,grayScale,sepia,hue,blur,invert,opacity}) => {

  return (
    <div className='image-display' >
    {image ? 
      (<img src={image} alt="Uploaded" id='image' style={{ filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayScale}%) sepia(${sepia}%) hue-rotate(${hue}deg) blur(${blur}px) invert(${invert}%) opacity(${opacity}%)`, width:'auto'}} />
    ) : (
    <div>
    <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <IconButton
        icon={<FileUploadIcon />}
        circle
        size="lg"
        onClick={handleFileUpload}
      />
    </div>
    )}
    </div>
  )
}


export default ImageDisplay