import Webcam from "react-webcam";
import { useState } from "react";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const  WebcamCapture  =  ( )  =>  {

    const [cameraSRC,SetImage]=useState("");

    return (
        <>
    <Webcam
      audio = { false }  
      height = { 720 } 
      screenshotFormat = "image/jpeg" 
      width = { 1280 } 
      videoConstraints = { videoConstraints } 
    > 
      { ( { getScreenshot } )  =>  ( 
        <button 
          onClick = { ( )  =>  { 
            SetImage(getScreenshot());
          } } 
        >
          Capturar foto
        </button> 
      )}  
    </Webcam> 
    <img alt="imagen" src={cameraSRC}/>
    </>
  );
 };
 
  export default WebcamCapture;