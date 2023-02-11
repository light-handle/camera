import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
 
const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [facingMode, setFacingMode] = useState('user');
 
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  const toggleCamera = () => {
    setFacingMode(facingMode === 'user' ? 'environment' : 'user');
  };
 
  return (
    <div>
      <Webcam
        audio={false}
        facingMode={facingMode}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
      />
      <button onClick={capture}>Capture photo</button>
      <button onClick={toggleCamera}>Toggle camera</button>
      {imageSrc && <img src={imageSrc} alt="captured" />}
    </div>
  );
};
 
export default Camera;
