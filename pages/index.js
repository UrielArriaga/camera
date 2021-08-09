
import React, {useRef} from "react";


export default function Home() {
  const mediaRecorderRef = useRef(null);
  const video = useRef(null);

  const verify = () => {
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(
      stream => {
        console.log("here");
      },
      err => {
        alert(
          "Se ha denegado los permisos para acceder a la camara, para poder postularte permite a cvjobs.com.mx acceder"
        );
        console.error(err);
      }
    );

    if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
      console.log("Let's get this party started");
    } else {
      console.log("Adasdas");
    }
  };
  return (
    <div>
      <h1>Verify Camera</h1>

      <video useRef={video} />
      <button onClick={() => verify()}> Check</button>
    </div>
  );
}
