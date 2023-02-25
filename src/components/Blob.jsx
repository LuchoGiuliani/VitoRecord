import React, { useRef, useEffect } from "react";
import "./blob.css";

function Blob() {
  const blobRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const blob = blobRef.current;
      if (blob) {
        blob.style.left = `${event.clientX}px`;
        blob.style.top = `${event.clientY}px`;
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id="blob" ref={blobRef} />
     
    </div>
  );
}

export default Blob;
