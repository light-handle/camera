import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
 
const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
 
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };
 
  return (
    <div>
      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
      />
      <button onClick={capture}>Capture photo</button>
      {imageSrc && <img src={imageSrc} alt="captured" />}
    </div>
  );
};
 
export default Camera;
