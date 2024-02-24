import React, { useRef, useEffect } from 'react';

function WebcamComponent() {
    const videoRef = useRef(null);

    useEffect(() => {
        const getVideo = async () => {
            try {
                // access webcam
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                // if the videoRef is current and the stream is available, set the source object
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                // if there is no webcam
                console.error("Error accessing the webcam: ", err);
            }
        };

        getVideo();
    }, [videoRef]); 

    return (
        <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{
                width: '100%',
                height: '100%', 
                transform: 'scaleX(-1)'
              }}
            />
        </div>
    );
}

export default WebcamComponent;