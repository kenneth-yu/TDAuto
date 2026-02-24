import React from "react";
import { mapConfig } from "~/content";

export interface MapProps {
  embedUrl?: string;
  title?: string;
}

export const Map: React.FC<MapProps> = ({
  embedUrl = mapConfig.embedUrl,
  title = mapConfig.title,
}) => (
  <div className="w-full h-[280px] sm:h-[380px] md:h-[600px]">
    <iframe
      id="map-iframe"
      className="w-full h-full"
      src={embedUrl}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  </div>
);
