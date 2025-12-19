import React, { useRef } from "react";

interface VideoPlayerProps {
  dataURL: string;
  isActive: boolean;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  dataURL,
  isActive,
  title = "Embedded video",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={dataURL}
      controls={isActive}
      playsInline
      title={title}
      className="excalidraw__embeddable__video"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        pointerEvents: isActive ? "auto" : "none",
      }}
    />
  );
};
